import { Hero } from '../components/Hero';
import { TechHologram } from '../components/TechHologram';
import { ProjectList } from '../components/ProjectList';
import { EngineeringImpact } from '../components/EngineeringImpact';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { EducationCredentials } from '../components/EducationCredentials';

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
