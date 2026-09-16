"""Verify the generated sector/training/resource pages after npm run build."""
from pathlib import Path
from html.parser import HTMLParser
import json
import re
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET

root=Path('.next/server/app')
class Page(HTMLParser):
    def __init__(self,text):
        super().__init__(); self.h1=0;self.canonical=[];self.links=[];self.images=[];self.ids=[];self.json=[];self.collect=False;self.buf='';self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='h1':self.h1+=1
        if 'id' in a:self.ids.append(a['id'])
        if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
        if tag=='a':self.links.append(a)
        if tag=='img':self.images.append(a)
        if tag=='script' and a.get('type')=='application/ld+json':self.collect=True;self.buf=''
    def handle_data(self,data):
        if self.collect:self.buf+=data
    def handle_endtag(self,tag):
        if tag=='script' and self.collect:self.json.append(json.loads(self.buf));self.collect=False

all_pages={('/' if p.stem=='index' else '/'+p.relative_to(root).as_posix()[:-5]+'/'):p for p in root.rglob('*.html')}
selected={url:p for url,p in all_pages.items() if url.startswith(('/secteurs/','/formation-ia-','/guides/'))}
errors=[];capture=set()
for url,path in selected.items():
    p=Page(path.read_text())
    if p.h1!=1:errors.append((url,'H1',p.h1))
    if p.canonical!=['https://althoce.com'+url]:errors.append((url,'canonical',p.canonical))
    if len(p.ids)!=len(set(p.ids)):errors.append((url,'duplicate IDs'))
    for a in p.links:
        href=a.get('href','');target=urlsplit(href)
        if href.startswith('/') and not target.netloc and target.path.endswith('/') and target.path not in all_pages:errors.append((url,'missing route',href))
        if 'guide-gratuit-pi.vercel.app' in href:
            capture.add(href)
            if a.get('target')!='_blank' or not {'noopener','noreferrer'}.issubset(set(a.get('rel','').split())):errors.append((url,'capture attributes',href))
    for img in p.images:
        if 'alt' not in img:errors.append((url,'missing alt'))
        src=unquote(img.get('src',''));match=re.search(r'[?&]url=([^&]+)',src)
        if match:src=match.group(1)
        if src.startswith('/') and not src.startswith('/_next') and not Path('public'+urlsplit(src).path).exists():errors.append((url,'missing image',src))
xml=ET.fromstring((root/'sitemap.xml.body').read_text());urls=[e.text for e in xml.findall('.//{*}loc')]
if len(urls)!=len(set(urls)):errors.append(('sitemap','duplicates'))
for url in selected:
    if 'https://althoce.com'+url not in urls:errors.append((url,'absent sitemap'))
assert len([u for u in selected if u.startswith('/formation-ia-')])==19
assert len([u for u in selected if u.startswith('/secteurs/')])==8
assert len(capture)==9
print(json.dumps({'pages_checked':len(selected),'training_cities':19,'sector_pages_including_hub':8,'unique_capture_links':len(capture),'sitemap_urls':len(urls),'errors':errors},ensure_ascii=False,indent=2))
raise SystemExit(bool(errors))
