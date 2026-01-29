import dynamic from 'next/dynamic';
import { PROJECTS_DATA, EXPERIENCE_DATA } from '../data';

const Home = dynamic(() => import('../components/Home').then(mod => mod.Home), { ssr: false });

export default function Page() {
    return <Home projects={PROJECTS_DATA} experiences={EXPERIENCE_DATA} />;
}
