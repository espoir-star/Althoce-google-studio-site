import { metierStories, metierHubFaq, type MetierStory } from '@/lib/metiers-content';
import { professionalMetierNavigation } from '@/lib/solutions-navigation';
export default function MetierSchema({story}:{story?:MetierStory}) {
 const url=story?`https://althoce.com/agent-ia/${story.slug}/`:'https://althoce.com/agent-ia/';
 const name=story?.name||'Agents IA sur mesure par métier';
 const schema={'@context':'https://schema.org','@graph':[
 {'@type':'Service','@id':url+'#service',name,url,description:story?.intro||'Conception d’agents IA et d’automatisations sur mesure, à partir des usages de vos équipes.',provider:{'@type':'Organization','@id':'https://althoce.com/#organization',name:'Althoce'},areaServed:{'@type':'Country',name:'France'}},
 {'@type':'BreadcrumbList',itemListElement:[{name:'Accueil',item:'https://althoce.com/'},{name:'Usages IA par métier',item:'https://althoce.com/agent-ia/'},...(story?[{name,item:url}]:[])].map((x,i)=>({'@type':'ListItem',position:i+1,...x}))},
 {'@type':'FAQPage',mainEntity:(story?.faq||metierHubFaq).map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}}))},
 ...(!story?[{'@type':'ItemList',name:'Exemples d’usages IA par métier',itemListElement:[...professionalMetierNavigation.map(x=>({name:x.label,url:`https://althoce.com${x.href}`})),...metierStories.map(x=>({name:x.name,url:`https://althoce.com/agent-ia/${x.slug}/`}))].map((x,i)=>({'@type':'ListItem',position:i+1,...x}))}]:[])
 ]};
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>;
}
