import dynamic from 'next/dynamic';
import { sanityFetch } from '../sanity/lib/fetch';
import { PROJECTS_QUERY, EXPERIENCE_QUERY } from '../sanity/lib/queries';
import { Project, Experience } from '../types';

const Home = dynamic(() => import('../components/Home').then(mod => mod.Home), { ssr: false });

export default async function Page() {
    const projects = await sanityFetch<Project[]>({ query: PROJECTS_QUERY });
    const experiences = await sanityFetch<Experience[]>({ query: EXPERIENCE_QUERY });

    return <Home projects={projects} experiences={experiences} />;
}
