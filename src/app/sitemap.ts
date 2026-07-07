import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luismir.com';
  const formattedDate = new Date().toISOString().split('T')[0];

  const homeLanguages = {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
  };

  const cvLanguages = {
    es: `${baseUrl}/cv/es`,
    en: `${baseUrl}/cv/en`,
  };

  return [
    {
      url: `${baseUrl}/es`,
      lastModified: formattedDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: formattedDate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${baseUrl}/cv/es`,
      lastModified: formattedDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: cvLanguages },
    },
    {
      url: `${baseUrl}/cv/en`,
      lastModified: formattedDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: cvLanguages },
    },
  ];
}
