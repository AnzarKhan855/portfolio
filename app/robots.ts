import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://portfolio-flame-eight-qxl2s9gocz.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/resume'],
      disallow: ['/api/contact'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
