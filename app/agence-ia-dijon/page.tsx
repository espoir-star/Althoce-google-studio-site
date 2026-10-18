import CityPage, { CitySchema, cityMetadata } from '@/components/cities/CityPage';
import { cityStories } from '@/lib/cities-content';
import Footer from '@/components/Footer';
const story=cityStories.find(x=>x.slug==='dijon')!;
export const metadata=cityMetadata(story);
export default function Page(){return <><CitySchema story={story}/><CityPage story={story}/><Footer showCta={false}/></>}
