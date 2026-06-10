import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/data/cv-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luismir.com';
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: formattedDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: formattedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Add individual project pages with lower priority
  const projectRoutes = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: formattedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}