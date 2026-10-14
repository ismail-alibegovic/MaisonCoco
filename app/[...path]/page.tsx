import {notFound} from 'next/navigation';
import {Home,InteriorPage} from '../../components/Pages';
const routes=['prica','proizvodi','catering','lokacije','kontakt'];
export function generateStaticParams(){return [{path:['en']},...routes.map(p=>({path:[p]})),...routes.map(p=>({path:['en',p]}))]}
export async function generateMetadata({params}:{params:Promise<{path:string[]}>}){const {path}=await params;const en=path[0]==='en';const p=en?path[1]:path[0];const names:Record<string,string[]>= {prica:['Naša priča','Our story'],proizvodi:['Proizvodi','Our creations'],catering:['Catering','Catering'],lokacije:['Lokacije','Locations'],kontakt:['Kontakt','Contact']};return {title:p?names[p]?.[en?1:0]:'Maison Coco — Savoir Vivre',alternates:{languages:{bs:'/'+(p?p+'/':''),en:'/en/'+(p?p+'/':'')}}}}
export default async function Page({params}:{params:Promise<{path:string[]}>}){const {path}=await params;const lang=path[0]==='en'?'en':'bs';const page=lang==='en'?path[1]:path[0];if(lang==='en'&&!page)return <Home lang="en"/>;if(!routes.includes(page))notFound();return <InteriorPage lang={lang} page={page}/>}
