import { Hero } from '../components/Hero';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { ProjectList } from '../components/ProjectList';
import dynamic from 'next/dynamic';

// Lazy load heavy components for better initial bundle size
const TechHologram = dynamic(() => import('../components/TechHologram').then(mod => ({ default: mod.TechHologram })), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const EngineeringImpact = dynamic(() => import('../components/EngineeringImpact').then(mod => ({ default: mod.EngineeringImpact })), {
    loading: () => <div className="h-[300px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const EducationCredentials = dynamic(() => import('../components/EducationCredentials').then(mod => ({ default: mod.EducationCredentials })), {
    loading: () => <div className="h-[300px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

export default function Home() {
    return (
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-12 md:py-24 flex flex-col section-gap">
            <Hero />
            <TechHologram />
            <ExperienceTimeline />
            <EngineeringImpact />
            <ProjectList />
            <EducationCredentials />
        </div>
    );
}
