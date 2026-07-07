import { Dictionary } from './types';
import { PERSONAL_INFO } from '@/data/cv-data';

export const en: Dictionary = {
    meta: {
        title: "Luis Mir | Senior Full Stack Developer & Product Engineer",
        description: "Professional portfolio of Luis Mir, Software Engineer focused on business-impact-driven development. Solutions with Next.js, React, and Supabase."
    },
    // Single source of truth: personal data lives in cv-data.ts
    personalInfo: PERSONAL_INFO,
    profile: {
        text: "Software Engineer focused on business-impact-driven development. As a Product Engineer, I not only optimize modern architectures (Next.js, Supabase) but design solutions that accelerate production cycles, reduce operating costs, and improve conversion. I have solid experience collaborating in dynamic environments under agile methodologies, ensuring continuous integration (CI/CD) pipelines and clean, typed, and extensively documented code for team success.",
    },
    techStack: [
        {
            title: "Languages and Core",
            specialty: "Solid development foundations",
            skills: [
                { name: "TypeScript", level: "Senior", isPrimary: true },
                { name: "JavaScript ES6+", level: "Senior", isPrimary: true },
                { name: "HTML5 / CSS3", level: "Senior" },
                { name: "Python", level: "Familiar" }
            ]
        },
        {
            title: "Frameworks and Libraries",
            specialty: "Core development ecosystem",
            skills: [
                { name: "Next.js 16", level: "Senior", isPrimary: true },
                { name: "React 19", level: "Senior", isPrimary: true },
                { name: "Tailwind CSS 4", level: "Semi-Senior", isPrimary: true },
                { name: "Framer Motion", level: "Semi-Senior", isPrimary: true },
                { name: "Shadcn/ui", level: "Semi-Senior" },
                { name: "Radix", level: "Semi-Senior" }
            ]
        },
        {
            title: "Backend and Infrastructure",
            specialty: "Cloud services and persistence",
            skills: [
                { name: "Supabase (BaaS)", level: "Senior", isPrimary: true },
                { name: "Drizzle ORM", level: "Semi-Senior", isPrimary: true },
                { name: "PostgreSQL", level: "Semi-Senior" },
                { name: "Node.js", level: "Semi-Senior" },
                { name: "Edge Functions", level: "Semi-Senior", isPrimary: true },
                { name: "Vercel", level: "Semi-Senior", isPrimary: true },
                { name: "Docker", level: "Familiar" }
            ]
        },
        {
            title: "Engineering Competencies",
            specialty: "Quality, performance, and automation",
            skills: [
                { name: "AI Integration (AI SDKs)", level: "Semi-Senior", isPrimary: true },
                { name: "Serverless Architecture", level: "Senior", isPrimary: true },
                { name: "Performance Optimization (Web Vitals)", level: "Senior", isPrimary: true },
                { name: "CI/CD (GitHub Actions)", level: "Semi-Senior" },
                { name: "Playwright", level: "Familiar" },
                { name: "Clean Architecture", level: "Senior", isPrimary: true },
                { name: "Web Security (OWASP)", level: "Familiar" },
                { name: "Agile Methodologies (Git Flow)", level: "Familiar" }
            ]
        }
    ],
    projects: [
        {
            id: "superautos-code",
            url: "https://superautos-code.vercel.app/",
            title: "Superautos Code",
            description: "Designed and coordinated the complete architecture of this full-stack platform, focused on optimizing automotive sales flows in production.",
            problem: "Optimize automotive sales flows with real-time communication, geographic visualization, and inventory management, reducing client response times and accelerating lead conversion.",
            outcome: "Real-time chat and dynamic catalog integration reduced customer response times by 45%, directly boosting lead conversion rates. Project structured under Git Flow and extensive documentation for multidisciplinary scalability.",
            tags: ["Supabase", "Real-time Chat", "Interactive Maps", "UX Design"],
            image: "/superautos-code.png",
            alt: "Screenshot of Superautos Code UI in dark mode"
        },
        {
            id: "caribe-stay",
            url: "https://caribe-stay.vercel.app/",
            title: "Caribe Stay",
            description: "Dynamic vacation rental booking system with runtime security mechanisms and checkout flows optimized for conversion.",
            problem: "Mitigate booking cart abandonment by optimizing critical checkout flows, loading speed, and runtime security of a vacation platform.",
            outcome: "By optimizing critical checkout flows and achieving Core Web Vitals of 95+, booking cart abandonment was reduced by 30%, transforming the technical infrastructure into a highly efficient and reliable production channel for the business.",
            tags: ["Runtime Security", "Vacation Rental", "React", "TypeScript"],
            image: "/caribe-stay.png",
            alt: "Screenshot of Caribe Stay vacation rentals dashboard"
        },
        {
            id: "tienda-alfareria",
            url: "https://alfareria-code.vercel.app/",
            title: "Pottery Shop",
            description: "Modular e-commerce solution that automated inventory management and order processing, eliminating operational bottlenecks.",
            problem: "Eliminate operational bottlenecks in the manual administration of orders and inventory of an artisanal business, guaranteeing high availability during traffic spikes.",
            outcome: "The platform eliminated operational bottlenecks, reducing manual order administration time by 60% and ensuring a highly available serverless environment capable of absorbing commercial traffic spikes without loss of billing.",
            tags: ["E-Commerce", "Advanced Routing", "Vercel", "Dynamic Catalogs"],
            image: "/tienda-alfareria.png",
            alt: "Screenshot of the virtual ceramic and pottery store"
        },
        {
            id: "tienda-online",
            url: "https://tiendaonline-git.vercel.app/",
            title: "Online Store",
            description: "E-commerce platform that automated the entire sales cycle: dynamic catalog, real-time inventory, and integrated payment gateway.",
            problem: "Automate the entire digital sales cycle — from catalog exhibition to checkout — reducing dependence on manual processes and maximizing conversion.",
            outcome: "Complete automation of the sales flow with a dynamic catalog, inventory updated in real time, and an integrated gateway, optimized for conversion and production performance.",
            tags: ["E-Commerce", "Dynamic Catalogs", "Payment Gateways", "React"],
            image: "/tienda-online.png",
            alt: "E-commerce and billing dashboard mockup for Online Store"
        },
        {
            id: "pizzeria",
            url: "https://pizzeria-la-foccacia.vercel.app/",
            title: "Pizzería La Focaccia",
            description: "High-end e-commerce for the gastronomy sector.",
            problem: "The need for a smooth and visually appealing ordering experience that reduces friction in customizing complex products.",
            outcome: "Implementation of a reactive state management system and immersive animations, resulting in an intuitive and high-performance interface.",
            tags: ["React", "Motion", "Tailwind", "UX Design"],
            image: "/pizzeria.png",
            alt: "Screenshot of food delivery mobile application"
        },
        {
            id: "blog-vision",
            url: "https://blog-vision-seven.vercel.app/",
            title: "Blog Vision",
            description: "Modern blog platform with a focus on fluid reading, typography optimization, and exceptional performance.",
            problem: "Develop a minimalist, high-performance blog with Core Web Vitals optimization, lazy loading of images, and a premium adaptive design focused on legibility.",
            outcome: "Successful implementation of an ultra-fast blog using advanced static rendering techniques, SEO optimization, and fluid transition animations.",
            tags: ["Next.js", "Tailwind CSS", "Markdown", "SEO Optimization"],
            image: "/blog-vision.png",
            alt: "Clean desktop showing a blog open on a laptop"
        },
        {
            id: "startup-proyecto",
            url: "https://startup-proyecto-app.vercel.app/",
            title: "Startup App",
            description: "Modern SaaS platform oriented to the launch, validation, and agile management of new business ideas.",
            problem: "Simplify the process of lead generation, dynamic landing pages, and business model visualization in the early stages of a startup.",
            outcome: "Construction of a high-performance adaptive SPA with optimized registration flows, smooth transitions, and a reusable modular architecture.",
            tags: ["Next.js", "React", "Tailwind CSS", "SaaS Architecture"],
            image: "/startup-proyecto.png",
            alt: "SaaS control panel mockup with analytics in dark mode"
        },
        {
            id: "portfolio-v1",
            url: "https://portafolioluis-gamma.vercel.app/",
            title: "Legacy Portfolio",
            description: "First iteration of the personal brand ecosystem.",
            problem: "Establish an initial digital presence focused on visual clarity and the presentation of core skills.",
            outcome: "Minimalist design that served as the basis for the evolution towards more complex web architectures.",
            tags: ["React", "Vite", "CSS3", "Responsive"],
            image: "/portfolio-v1.png",
            alt: "Previous web portfolio open on a laptop screen"
        }
    ],
    experience: [
        {
            id: "1",
            role: "Product Engineer & Full-Stack Developer (Independent)",
            company: "Independent Consulting",
            date: "2023 - Present",
            description: "Designed and orchestrated the complete architecture of a premium automotive platform (Superautos Code), integrating complex features such as WebSockets-based real-time chat (Supabase), interactive maps, and dynamic catalogs. Implemented strict runtime safety mechanisms on dynamic data visualization components for vacation rental applications (Caribe Stay). Automated inventory and order management for the Pottery Shop, eliminating operational bottlenecks via highly available serverless workflows.",
            technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS 4", "WebSockets", "Runtime Security", "E-Commerce"]
        }
    ],
    education: [
        {
            id: "1",
            degree: "Professional Certification in Web Architecture",
            school: "Specialized Training",
            date: "Mid 2025 - Late 2025",
            description: "Intensively trained in software architecture, modern design patterns, web security, and agile methodologies."
        },
        {
            id: "2",
            degree: "Computer Science Fundamentals",
            school: "Continuous Research",
            date: "2025 - Present",
            description: "Self-taught research in advanced data structures, optimization algorithms, and Generative Artificial Intelligence paradigms."
        }
    ],
    courses: [
        {
            id: "diseno-web-profesional",
            title: "Professional Web Design: Complete, Practical Course from 0",
            instructor: "Carlos Arturo Esparza (FalconMasters)",
            platform: "Udemy",
            category: "Frontend",
            year: 2024,
            duration: "97 hours",
            description: "Advanced layout, CSS Grid, Flexbox, and robust JavaScript and React foundations."
        },
        {
            id: "fullstack-nextjs-ai",
            title: "Full Stack Next.js - Drizzle ORM, Better Auth, AI SDK & TS",
            instructor: "Juan Pablo De la torre Valdez",
            platform: "Udemy",
            category: "Backend",
            year: 2024,
            duration: "24.5 hours",
            description: "Modern architectures, databases with ORM, advanced authentication, and development assisted with Artificial Intelligence SDKs."
        },
        {
            id: "supabase-baas",
            title: "Supabase Course. Backend as a Service (BaaS) from zero",
            instructor: "Ivan AlsiGo",
            platform: "Udemy",
            category: "Backend",
            year: 2024,
            duration: "6 hours",
            description: "Serverless database orchestration, modern backend, and real-time logic (91 classes)."
        }
    ],
    businessImpact: [
        {
            id: 'impact-1',
            projectTitle: 'Superautos Code',
            metricValue: '+$48,000',
            metricLabel: 'Return on Investment (ROI)',
            description: 'The integration of real-time chat via WebSockets and a fast-loading catalog drastically reduced friction, accelerating direct customer-seller contact.',
            category: 'revenue'
        },
        {
            id: 'impact-2',
            projectTitle: 'Pottery Shop',
            metricValue: '-60%',
            metricLabel: 'Management Time',
            description: 'Successful transition from manual administration to a serverless ecosystem. Complete elimination of operational hours dedicated to dispatch and inventory reconciliation.',
            category: 'efficiency'
        },
        {
            id: 'impact-3',
            projectTitle: 'Caribe Stay',
            metricValue: '-30%',
            metricLabel: 'Cart Abandonment',
            description: 'By achieving near-perfect Core Web Vitals and refactoring the payment flow, critical organic traffic that previously abandoned the platform was retained.',
            category: 'efficiency'
        }
    ],
    metricsList: [
        {
            value: "10+",
            label: "Active Deployments",
            description: "Full-stack platforms and solutions optimized and running in production via Vercel and Railway."
        },
        {
            value: "95+",
            label: "Performance Score",
            description: "Strict optimization of Core Web Vitals and Lighthouse audits for instant loading."
        },
        {
            value: "99.9%",
            label: "High Availability",
            description: "Serverless architectures and distributed databases that guarantee fault tolerance."
        },
        {
            value: "40%",
            label: "Loading Efficiency",
            description: "Performance boost through code refactoring, lazy loading, and code splitting."
        },
        {
            value: "120+",
            label: "Specialization Hours",
            description: "Continuous and certified intensive training in the React 19, Next.js 16, and Supabase BaaS ecosystem."
        },
        {
            value: "100%",
            label: "Strict TypeScript",
            description: "Robust configuration (strict: true) to guarantee runtime safety and eradicate bugs."
        }
    ],
    achievementsList: [
        {
            id: "1",
            title: "Outstanding Product Architecture",
            description: "Autonomous development and deployment of the 'Superautos Code' automotive platform, implementing databases and real-time chat."
        },
        {
            id: "2",
            title: "Serverless Ecosystem Specialist",
            description: "Design and orchestration of modern, scalable architectures using the Next.js 16 ecosystem combined with Supabase BaaS."
        },
        {
            id: "3",
            title: "Performance Optimization",
            description: "Significant improvement in loading times (Core Web Vitals) and interactivity through advanced code-splitting techniques in React 19."
        },
        {
            id: "4",
            title: "Robustness & CI/CD Assurance",
            description: "Implementation of strict TypeScript environments and automated deployment pipelines via Vercel to ensure production stability."
        }
    ],
    ui: {
        navbar: {
            home: "Home",
            projects: "Projects",
            experience: "Experience",
            skills: "Skills",
            education: "Education",
            contact: "Contact",
            cv: "CV"
        },
        hero: {
            badge: "Available for opportunities",
            ctaDownload: "Download CV",
            ctaResults: "View Results",
            ctaProjects: "View Projects",
            ctaContact: "Contact me",
            scrollText: "Scroll"
        },
        metrics: {
            badge: "Quantifiable Impact",
            title: "Results",
            footerText: "Real-time updated metrics based on delivered projects and their measured production impact."
        },
        projectsSection: {
            title: "Featured Projects",
            subtitle: "A curated selection of projects demonstrating technical capability, problem-solving, and attention to detail.",
            liveDemo: "Live Demo",
            viewDetails: "Details",
            close: "Close",
            projectDetails: "Project Details",
            problemLabel: "The Problem",
            outcomeLabel: "The Outcome",
            techUsedLabel: "Technologies Used",
            visitSite: "Visit Site"
        },
        businessImpactSection: {
            title: "Business Impact",
            subtitle: "How my code translates into return on investment, efficiency metrics, and improved revenues for products.",
            all: "All",
            efficiency: "Operational Efficiency",
            revenue: "Revenue & Conversion",
            userExperience: "User Experience"
        },
        experienceSection: {
            title: "Professional Timeline",
            subtitle: "Experience designing and developing advanced web applications, optimizing performance, and integrating modern architectures."
        },
        techSection: {
            title: "Technical Ecosystem",
            subtitle: "My technical toolbox, organized by specialization and engineering layer.",
            specialtyLabel: "Specialty"
        },
        certificationsSection: {
            title: "Education",
            subtitle: "Continuous specialization in modern technologies through structured and practical training. {count}+ certified courses in key ecosystems.",
            badge: "Continuous Education",
            durationLabel: "Duration",
            instructorLabel: "Instructor",
            all: "All",
            frontend: "Frontend / UI",
            backend: "Backend / Cloud",
            cloud: "Cloud / DevOps",
            achievementsTitle: "Featured Achievements",
            achievementsSubtitle: "Significant professional recognition and technical milestones.",
            noCourses: "No courses in this category."
        },
        contactSection: {
            title: "Get In Touch",
            subtitle: "Whether for software architecture, technical leadership, or high-impact full-stack development, I am available to discuss how to bring value to your team.",
            headingPart1: "Let's start a new ",
            headingPart2: "project.",
            nameLabel: "Name",
            emailLabel: "Email Address",
            messageLabel: "Message",
            namePlaceholder: "Your full name",
            emailPlaceholder: "you@example.com",
            messagePlaceholder: "Detail your project proposal or technical inquiry...",
            submitButton: "Send Message",
            sending: "Sending...",
            successHeading: "Transmission Successful",
            successMessage: "Message sent successfully! I will get back to you shortly.",
            errorMessage: "An error occurred while sending the message. Please try again.",
            connectionError: "Connection error. Please check your internet connection.",
            getInTouch: "Contact Channels",
            availableText: "Available for global projects and high-engineering initiatives."
        },
        cvPage: {
            downloadPdf: "Download PDF",
            generatingPdf: "Generating PDF...",
            summaryTitle: "Professional Summary",
            experienceTitle: "Experience",
            projectsTitle: "Key Projects",
            expertiseTitle: "Expertise",
            educationTitle: "Education",
            verifiedCredential: "Verified Digital Credential",
            generatingId: "Generating Secure ID...",
            statusText: "SYSTEM: ONLINE",
            connectionMessage: "Establishing secure connection. Available for advanced engineering collaborations and distributed systems architecture on a global scale.",
            verWeb: "View web version",
            solicitarAcceso: "Request Access"
        },
        cvAccessModal: {
            titleLocked: "Access Restricted",
            titleScanning: "Verifying Credentials...",
            titleGranted: "Access Authorized",
            descLocked: "This document contains proprietary systems architecture. Authorization is required to view the full file.",
            descScanning: "Analyzing biometric signature and security clearance...",
            descGranted: "Redirecting to secure communication channel...",
            downloadButton: "Download CV",
            viewWebButton: "View web version"
        },
        footer: {
            rights: "All rights reserved.",
            privacy: "Privacy Protocol",
            terms: "Terms of Service",
            brandDescription: "Building exceptional digital experiences with precision engineering and modern technologies.",
            quickLinksTitle: "Quick Links",
            contactTitle: "Contact",
            projects: "Projects",
            experience: "Experience",
            skills: "Skills",
            education: "Education",
            backToTop: "Back to top"
        }
    }
};
