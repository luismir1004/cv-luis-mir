import { Hero } from '../components/Hero';
import { TechHologram } from '../components/TechHologram';
import { ProjectList } from '../components/ProjectList';
import { EngineeringImpact } from '../components/EngineeringImpact';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { EducationCredentials } from '../components/EducationCredentials';

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-32">
            <Hero />
            <TechHologram />
            <ExperienceTimeline />
            <EngineeringImpact />
            <ProjectList />
            <EducationCredentials />
        </div>
    );
}
