import { NextResponse } from 'next/server';

export async function GET() {
  const siteName = 'SVG Studio';
  const siteUrl = 'https://svg-studio.com';
  const siteDescription = 'Professional SVG converter and editor tools for web developers and designers';
  
  const rssItems = [
    {
      title: 'SVG Studio - Convert Images to Interactive SVG Components',
      link: siteUrl,
      description: 'Transform your images into customizable SVG components with real-time editing, animations, and exportable React code. Professional online SVG converter and editor for developers and designers.',
      pubDate: new Date('2024-01-15').toUTCString(),
    },
    {
      title: 'Free SVG Converter - Convert PNG, JPG, GIF to SVG Files',
      link: `${siteUrl}/free-svg-converter`,
      description: 'Convert any image to SVG format completely free. Upload PNG, JPG, JPEG, GIF files and get high-quality scalable vector graphics instantly. No registration, no watermarks, unlimited conversions.',
      pubDate: new Date('2024-01-10').toUTCString(),
    },
    {
      title: 'React SVG Components Generator - TypeScript Support',
      link: `${siteUrl}/react-svg-components`,
      description: 'Generate production-ready React SVG components from images with TypeScript support, customizable props, and clean code output. Perfect for React developers, Next.js projects, and component libraries.',
      pubDate: new Date('2024-01-05').toUTCString(),
    },
    {
      title: 'Professional Online SVG Editor - Advanced Features',
      link: `${siteUrl}/svg-editor-online`,
      description: 'Advanced online SVG editor with real-time preview, color customization, animations, and React component export. Professional vector graphics editor for web developers and designers.',
      pubDate: new Date('2024-01-01').toUTCString(),
    },
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>${siteDescription}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/api/rss" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/thumnail.jpg</url>
      <title>${siteName}</title>
      <link>${siteUrl}</link>
      <width>1200</width>
      <height>630</height>
      <description>${siteDescription}</description>
    </image>
    ${rssItems
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}