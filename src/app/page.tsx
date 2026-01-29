import dynamic from 'next/dynamic';
import { MOCK_PROJECTS, MOCK_EXPERIENCE } from '../data/mockData';

const Home = dynamic(() => import('../components/Home').then(mod => mod.Home), { ssr: false });

export default function Page() {
    return <Home projects={MOCK_PROJECTS} experiences={MOCK_EXPERIENCE} />;
}
