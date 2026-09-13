import { serviceStories, hubFaq, type ServiceStory } from '@/lib/services-content';
import { homeMethod } from '@/lib/home-content';
export default function ServiceSchema({ service }: { service?: ServiceStory }) {
 const url = `https://althoce.com/services/${service ? `${service.slug}/` : ''}`;
 const faq = service?.faq ?? hubFaq;
 const description = service?.description ?? 'Diagnostic, formations IA, agents IA, automatisation et accompagnement des PME, du cadrage au suivi des usages.';
 const graph = [
  service ? {'@type':'Service','@id':`${url}#service`,name:service.name,serviceType:service.name,description,provider:{'@type':'Organization','@id':'https://althoce.com/#organization',name:'Althoce',url:'https://althoce.com/'},areaServed:{'@type':'Country',name:'France'},offers:{'@type':'Offer',url}} : {'@type':'CollectionPage','@id':`${url}#collection`,name:'Services IA Althoce',description,url},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Accueil',item:'https://althoce.com/'},{'@type':'ListItem',position:2,name:'Services',item:'https://althoce.com/services/'},...(service?[{'@type':'ListItem',position:3,name:service.name,item:url}]:[])]},
  {'@type':'FAQPage',mainEntity:faq.map(item=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))},
  ...(service && ['agents-ia','employe-ia','automatisation-ia'].includes(service.slug) ? [{'@type':'HowTo',name:`Comment Althoce accompagne votre projet ${service.name}`,step:homeMethod.map((step,i)=>({'@type':'HowToStep',position:i+1,name:step.title,text:step.purpose}))}] : []),
  ...(!service?[{'@type':'ItemList',name:'Services Althoce',itemListElement:[...serviceStories.map(x=>({name:x.name,url:`https://althoce.com/services/${x.slug}/`})),{name:'Formation IA',url:'https://althoce.com/services/formation-ia/'}].map((item,i)=>({'@type':'ListItem',position:i+1,...item}))}]:[])
 ];
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}} />;
}
