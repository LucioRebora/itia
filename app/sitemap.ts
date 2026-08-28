import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://itia.ar';
  const routes = [
    '',
    '/desarrollo-software',
    '/desarrollo-web',
    '/software-a-medida',
    '/automatizacion-ia',
    '/inteligencia-artificial',
    '/desarrollo-aplicaciones',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.9,
  }));
}
