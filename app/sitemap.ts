import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.volareavi.com';

    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/travel`,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/charter`,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pilot-services`,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: new Date('2026-08-01'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
    return [...routes];
}