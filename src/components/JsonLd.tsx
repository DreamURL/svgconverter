export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SVG Studio',
    alternateName: 'SVG Converter',
    description: 'Transform your images into customizable SVG components with real-time editing, animations, and exportable React code. Free online SVG converter and editor for developers and designers.',
    url: 'https://svg-studio.com',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      category: 'Free'
    },
    creator: {
      '@type': 'Organization',
      name: 'SVG Studio Team',
      url: 'https://svg-studio.com'
    },
    featureList: [
      'Image to SVG conversion',
      'Real-time SVG editing',
      'Color customization',
      'Size and rotation controls',
      'Animation effects',
      'React component export',
      'CSS code generation',
      'Responsive design support'
    ],
    screenshot: 'https://svg-studio.com/og-image.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}