import { MetadataRoute } from 'next'

export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dreamurl.github.io/svgconverter',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dreamurl.github.io/svgconverter/free-svg-converter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://dreamurl.github.io/svgconverter/svg-editor-online',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://dreamurl.github.io/svgconverter/react-svg-components',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}