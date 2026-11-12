"""Check rendered SEO, links and FAQ consistency after npm run build."""
import json
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, parse_qs, unquote

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / '.next/server/app'
SECTORS = ['comptabilite','droit','medical','assurance-patrimoine','immobilier','industrie','commerce-distribution','marketing-communication','associations','finance','hotellerie','retail-luxe']
METIERS = ['commercial','marketing','finance','operations','juridique','achats','rh','service-client','telephonique']
ROUTES = ['/', '/secteurs/', '/agent-ia/', '/guides/', '/formation-ia-paris/', '/formation-ia-nantes/', '/formation-ia-montpellier/', '/formation-ia-dijon/'] + ['/secteurs/'+s+'/' for s in SECTORS] + ['/agent-ia/'+s+'/' for s in METIERS]

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.h1 = 0
        self.title = ''
        self.title_active = False
        self.meta = {}
        self.canonical = ''
        self.ids = set()
        self.links = []
        self.images = []
        self.schemas = []
        self.script = None
        self.in_script = False
        self.text = []
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            assert a['id'] not in self.ids, 'Duplicate id: '+a['id']
            self.ids.add(a['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'title': self.title_active = True
        if tag == 'meta': self.meta[a.get('name', a.get('property', ''))] = a.get('content','')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href','')
        if tag == 'a': self.links.append(a)
        if tag == 'img': self.images.append(a)
        if tag == 'script': self.in_script = True
        if tag == 'script' and a.get('type') == 'application/ld+json': self.script = ''
    def handle_data(self, text):
        if not self.in_script: self.text.append(text)
        if self.title_active: self.title += text
        if self.script is not None: self.script += text
    def handle_endtag(self, tag):
        if tag == 'title': self.title_active = False
        if tag == 'script': self.in_script = False
        if tag == 'script' and self.script is not None:
            self.schemas.append(json.loads(self.script))
            self.script = None

def file_for(route):
    return BUILD / (route.strip('/')+'.html' if route != '/' else 'index.html')

def plain(text):
    return ' '.join(text.split())

def schema_nodes(node):
    if isinstance(node, list):
        for x in node: yield from schema_nodes(x)
    if isinstance(node, dict):
        yield node
        if '@graph' in node: yield from schema_nodes(node['@graph'])

manifest = json.loads((ROOT/'.next/prerender-manifest.json').read_text())
known = {x.rstrip('/')+'/' for x in manifest['routes']}
cache = {}
def page_for(route):
    if route not in cache: cache[route] = Page(file_for(route).read_text())
    return cache[route]

sitemap = (BUILD/'sitemap.xml.body').read_text()
titles, descriptions = set(), set()
link_count = 0
faq_count = 0
for route in ROUTES:
    p = page_for(route)
    assert p.h1 == 1, (route,'H1 count',p.h1)
    assert p.canonical == 'https://althoce.com'+route, (route,'canonical',p.canonical)
    assert p.title and p.title not in titles, (route,'duplicate/missing title')
    titles.add(p.title)
    description = p.meta.get('description','')
    assert len(description) >= 50 and description not in descriptions, (route,'description')
    descriptions.add(description)
    assert p.meta.get('og:title') and p.meta.get('og:image'), (route,'social metadata')
    assert 'noindex' not in p.meta.get('robots',''), (route,'noindex')
    assert sitemap.count('<loc>https://althoce.com'+route+'</loc>') == 1, (route,'sitemap')
    for a in p.links:
        href = a.get('href','')
        if href.startswith('/') or href.startswith('#'):
            u = urlsplit(href)
            target = (u.path or route).rstrip('/')+'/'
            assert target in known or target in ['/mentions-legales/','/confidentialite/','/connecteurs/cgv/'], (route,'broken route',href)
            if u.fragment and file_for(target).exists():
                assert unquote(u.fragment) in page_for(target).ids, (route,'missing anchor',href)
            link_count += 1
        if 'guide-gratuit-pi.vercel.app/r/' in href:
            assert a.get('target') == '_blank' and 'noopener' in a.get('rel',''), (route,'guide target')
    for img in p.images:
        assert 'alt' in img, (route,'missing alt')
        src = img.get('src','')
        if src.startswith('/_next/image'):
            src = parse_qs(urlsplit(src).query)['url'][0]
        if src.startswith('/'):
            asset = ROOT/'.next'/src.removeprefix('/_next/') if src.startswith('/_next/') else ROOT/'public'/unquote(src).lstrip('/')
            assert asset.is_file(), (route,'missing image',src)
    text = plain(' '.join(p.text))
    for n in schema_nodes(p.schemas):
        if n.get('@type') == 'FAQPage':
            for q in n['mainEntity']:
                assert plain(q['name']) in text, (route,'invisible FAQ question')
                assert plain(q['acceptedAnswer']['text']) in text, (route,'invisible FAQ answer')
                faq_count += 1
    if '/agent-ia/' in route and route != '/agent-ia/':
        assert 'scenarios-'+route.strip('/').split('/')[-1]+'-0' in p.ids, (route,'missing scenarios')
medical = page_for('/secteurs/medical/')
assert {'usages-cabinets','usages-etablissements'} <= medical.ids
print(json.dumps({'pages':len(ROUTES),'internal_links':link_count,'faq_answers':faq_count,'status':'PASS'},indent=2))
