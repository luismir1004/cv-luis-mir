import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luismir.com';
  const formattedDate = new Date().toISOString().split('T')[0];

  const languages = {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
  };

  return [
    {
      url: `${baseUrl}/es`,
      lastModified: formattedDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: formattedDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: formattedDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
