import { PERSONAL_INFO, PROFILE, EXPERIENCE, TECH_STACK, PROJECTS_DATA } from '../data/cv-data';
import { EDUCATION } from '../data/cv-data';

export function generateStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    givenName: 'Luis Alejandro',
    familyName: 'Mir Jimenez',
    jobTitle: PERSONAL_INFO.titles[0],
    description: PROFILE.text,
    email: PERSONAL_INFO.email,
    url: 'https://luismir.com',
    sameAs: [
      'https://www.linkedin.com/in/luis-mir-68b5293aa/',
      'https://github.com/luismir1004'
    ],
    knowsAbout: TECH_STACK.flatMap(category => 
      category.skills.map(skill => skill.name)
    ),
    worksFor: EXPERIENCE.map(exp => ({
      '@type': 'Organization',
      name: exp.company,
      description: exp.description,
    })),
    alumniOf: EDUCATION.map(edu => ({
      '@type': 'EducationalOrganization',
      name: edu.school,
    })),
    hasCredential: [],
  };

  return JSON.stringify(schema);
}

export function generateOrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Luis Mir - Software Engineering',
    description: PROFILE.text,
    url: 'https://luismir.com',
    email: PERSONAL_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    priceRange: '$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return JSON.stringify(schema);
}

export function generateWebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Luis Mir Portfolio',
    url: 'https://luismir.com',
    description: PROFILE.text,
    publisher: {
      '@type': 'Organization',
      name: 'Luis Mir',
      url: 'https://luismir.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://luismir.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return JSON.stringify(schema);
}

export function generateBreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://luismir.com',
      },
    ],
  };

  return JSON.stringify(schema);
}

export function generateProjectSchema(projectId: string) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return '';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: project.url,
    author: {
      '@type': 'Person',
      name: PERSONAL_INFO.name,
    },
    keywords: project.tags.join(', '),
  };

  return JSON.stringify(schema);
}