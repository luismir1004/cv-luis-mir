import dynamic from 'next/dynamic';

// Critical components loaded immediately for SEO
import { Hero } from '../components/Hero';

// Lazy load non-critical components for better performance
const MetricsSection = dynamic(() => import('../components/MetricsSection').then(mod => ({ default: mod.MetricsSection })), {
    loading: () => <div className="h-[200px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const ProjectList = dynamic(() => import('../components/ProjectList').then(mod => ({ default: mod.ProjectList })), {
    loading: () => <div className="h-[600px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const BusinessImpact = dynamic(() => import('../components/BusinessImpact').then(mod => ({ default: mod.BusinessImpact })), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const ExperienceTimeline = dynamic(() => import('../components/ExperienceTimeline').then(mod => ({ default: mod.ExperienceTimeline })), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const TechHologram = dynamic(() => import('../components/TechHologram').then(mod => ({ default: mod.TechHologram })), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const CertificationsSection = dynamic(() => import('../components/CertificationsSection').then(mod => ({ default: mod.CertificationsSection })), {
    loading: () => <div className="h-[600px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

const ContactForm = dynamic(() => import('../components/ContactForm').then(mod => ({ default: mod.ContactForm })), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted/20 rounded-2xl" />,
    ssr: true
});

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Hero />
            <MetricsSection />
            <ProjectList />
            <BusinessImpact />
            <ExperienceTimeline />
            <TechHologram />
            <ContactForm />
            <CertificationsSection />
        </div>
    );
}
