import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    host: 'https://www.simpleitnews.tech',
    sitemap: 'https://www.simpleitnews.tech/sitemap.xml',
  };
}
