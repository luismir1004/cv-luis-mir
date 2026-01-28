/**
 * 🔍 JsonLd Component
 * 
 * Structured data para SEO usando JSON-LD.
 * Mejora la visibilidad en motores de búsqueda.
 */

interface PersonJsonLdProps {
    name: string;
    jobTitle: string[];
    url: string;
    image?: string;
    email?: string;
    sameAs?: string[];
    knowsAbout?: string[];
    description?: string;
}

/**
 * JSON-LD para tipo Person (desarrollador/profesional)
 */
export const PersonJsonLd = ({
    name,
    jobTitle,
    url,
    image,
    email,
    sameAs = [],
    knowsAbout = [],
    description,
}: PersonJsonLdProps) => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name,
        jobTitle: jobTitle.length === 1 ? jobTitle[0] : jobTitle,
        url,
        ...(image && { image }),
        ...(email && { email: `mailto:${email}` }),
        ...(sameAs.length > 0 && { sameAs }),
        ...(knowsAbout.length > 0 && { knowsAbout }),
        ...(description && { description }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData, null, 0),
            }}
        />
    );
};

interface WebsiteJsonLdProps {
    name: string;
    url: string;
    description: string;
    author: {
        name: string;
        url?: string;
    };
}

/**
 * JSON-LD para tipo WebSite
 */
export const WebsiteJsonLd = ({
    name,
    url,
    description,
    author,
}: WebsiteJsonLdProps) => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name,
        url,
        description,
        author: {
            '@type': 'Person',
            name: author.name,
            ...(author.url && { url: author.url }),
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData, null, 0),
            }}
        />
    );
};

interface CreativeWorkJsonLdProps {
    name: string;
    description: string;
    url: string;
    image?: string;
    author: string;
    dateCreated?: string;
    keywords?: string[];
}

/**
 * JSON-LD para proyectos/trabajos creativos
 */
export const ProjectJsonLd = ({
    name,
    description,
    url,
    image,
    author,
    dateCreated,
    keywords = [],
}: CreativeWorkJsonLdProps) => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name,
        description,
        url,
        ...(image && { image }),
        author: {
            '@type': 'Person',
            name: author,
        },
        ...(dateCreated && { dateCreated }),
        ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData, null, 0),
            }}
        />
    );
};

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbJsonLdProps {
    items: BreadcrumbItem[];
}

/**
 * JSON-LD para breadcrumbs
 */
export const BreadcrumbJsonLd = ({ items }: BreadcrumbJsonLdProps) => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData, null, 0),
            }}
        />
    );
};

/**
 * Componente combinado para el CV/Portfolio
 */
export const CVJsonLd = () => (
    <>
        <PersonJsonLd
            name="Luis Mir"
            jobTitle={['AI Engineer', 'Full Stack Developer', 'Frontend Developer']}
            url="https://luismir.dev"
            email="contact@luismir.dev"
            sameAs={[
                'https://github.com/luismir1004',
                'https://linkedin.com/in/luismir',
            ]}
            knowsAbout={[
                'React',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Artificial Intelligence',
                'Machine Learning',
                'Python',
                'Web Development',
            ]}
            description="AI Engineer and Full Stack Developer specializing in building intelligent web applications with React, Next.js, and modern AI technologies."
        />
        <WebsiteJsonLd
            name="Luis Mir - Portfolio"
            url="https://luismir.dev"
            description="Professional portfolio showcasing AI Engineering and Full Stack Development projects"
            author={{
                name: 'Luis Mir',
                url: 'https://luismir.dev',
            }}
        />
    </>
);

export default CVJsonLd;
