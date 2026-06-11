import { PersonalInfo, ExperienceItem, EducationItem, TechStack, Project, Course, ImpactMetric } from '@/types';

export interface Dictionary {
    meta: {
        title: string;
        description: string;
    };
    personalInfo: PersonalInfo;
    profile: {
        text: string;
    };
    techStack: TechStack;
    projects: Project[];
    experience: ExperienceItem[];
    education: EducationItem[];
    courses: Course[];
    businessImpact: ImpactMetric[];
    metricsList: Array<{
        value: string;
        label: string;
        description: string;
    }>;
    achievementsList: Array<{
        id: string;
        title: string;
        description: string;
    }>;
    
    // UI Fixed Texts
    ui: {
        navbar: {
            home: string;
            projects: string;
            experience: string;
            skills: string;
            education: string;
            contact: string;
            cv: string;
        };
        hero: {
            badge: string;
            ctaDownload: string;
            ctaResults: string;
            ctaProjects: string;
            ctaContact: string;
            scrollText: string;
        };
        metrics: {
            badge: string;
            title: string;
            footerText: string;
        };
        projectsSection: {
            title: string;
            subtitle: string;
            liveDemo: string;
            viewDetails: string;
            close: string;
            projectDetails: string;
            problemLabel: string;
            outcomeLabel: string;
            techUsedLabel: string;
            visitSite: string;
        };
        businessImpactSection: {
            title: string;
            subtitle: string;
            all: string;
            efficiency: string;
            revenue: string;
            userExperience: string;
        };
        experienceSection: {
            title: string;
            subtitle: string;
        };
        techSection: {
            title: string;
            subtitle: string;
            specialtyLabel: string;
        };
        certificationsSection: {
            title: string;
            subtitle: string;
            badge: string;
            durationLabel: string;
            instructorLabel: string;
            all: string;
            frontend: string;
            backend: string;
            cloud: string;
            achievementsTitle: string;
            achievementsSubtitle: string;
            noCourses: string;
        };
        contactSection: {
            title: string;
            subtitle: string;
            headingPart1: string;
            headingPart2: string;
            nameLabel: string;
            emailLabel: string;
            messageLabel: string;
            namePlaceholder: string;
            emailPlaceholder: string;
            messagePlaceholder: string;
            submitButton: string;
            sending: string;
            successHeading: string;
            successMessage: string;
            errorMessage: string;
            connectionError: string;
            getInTouch: string;
            availableText: string;
        };
        cvPage: {
            downloadPdf: string;
            generatingPdf: string;
            summaryTitle: string;
            experienceTitle: string;
            projectsTitle: string;
            expertiseTitle: string;
            educationTitle: string;
            verifiedCredential: string;
            generatingId: string;
            statusText: string;
            connectionMessage: string;
            verWeb: string;
            solicitarAcceso: string;
        };
        cvAccessModal: {
            titleLocked: string;
            titleScanning: string;
            titleGranted: string;
            descLocked: string;
            descScanning: string;
            descGranted: string;
            downloadButton: string;
            viewWebButton: string;
        };
        footer: {
            rights: string;
            privacy: string;
            terms: string;
            brandDescription: string;
            quickLinksTitle: string;
            contactTitle: string;
            projects: string;
            experience: string;
            skills: string;
            education: string;
            backToTop: string;
        };
    };
}
