export interface PathElement {
  id: string;
  originalPath: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: 'round' | 'square' | 'butt';
  strokeLinejoin?: 'round' | 'bevel' | 'miter';
  opacity?: number;
  transform?: string;
  visible: boolean;
}

export interface SVGMetadata {
  width?: string;
  height?: string;
  viewBox?: string;
  xmlns?: string;
}

export interface ParsedSVG {
  metadata: SVGMetadata;
  paths: PathElement[];
  originalSVG: string;
}

export function parseSVGPaths(svgContent: string): ParsedSVG {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, 'image/svg+xml');
    
    // Check for parsing errors
    const errorNode = doc.querySelector('parsererror');
    if (errorNode) {
      throw new Error('Invalid SVG format');
    }
    
    const svgElement = doc.querySelector('svg');
    if (!svgElement) {
      throw new Error('No SVG element found');
    }
    
    // Extract SVG metadata
    const metadata: SVGMetadata = {
      width: svgElement.getAttribute('width') || undefined,
      height: svgElement.getAttribute('height') || undefined,
      viewBox: svgElement.getAttribute('viewBox') || undefined,
      xmlns: svgElement.getAttribute('xmlns') || 'http://www.w3.org/2000/svg',
    };
    
    // Extract all path elements
    const pathElements = doc.querySelectorAll('path');
    const paths: PathElement[] = Array.from(pathElements).map((path, index) => {
      return {
        id: `path-${index}`,
        originalPath: path.getAttribute('d') || '',
        fill: path.getAttribute('fill') || '#000000',
        stroke: path.getAttribute('stroke') || 'none',
        strokeWidth: parseFloat(path.getAttribute('stroke-width') || '1'),
        strokeLinecap: (path.getAttribute('stroke-linecap') as PathElement['strokeLinecap']) || 'round',
        strokeLinejoin: (path.getAttribute('stroke-linejoin') as PathElement['strokeLinejoin']) || 'round',
        opacity: path.getAttribute('opacity') ? parseFloat(path.getAttribute('opacity')!) : 1,
        transform: path.getAttribute('transform') || undefined,
        visible: true,
      };
    });
    
    return {
      metadata,
      paths,
      originalSVG: svgContent,
    };
  } catch (error) {
    console.error('Error parsing SVG:', error);
    throw error;
  }
}

export function formatSVGWithPaths(parsedSVG: ParsedSVG): string {
  const { metadata, paths } = parsedSVG;
  
  // Create SVG opening tag with metadata
  const svgAttributes = [
    metadata.width ? `width="${metadata.width}"` : '',
    metadata.height ? `height="${metadata.height}"` : '',
    metadata.viewBox ? `viewBox="${metadata.viewBox}"` : '',
    `xmlns="${metadata.xmlns || 'http://www.w3.org/2000/svg'}"`,
  ].filter(Boolean).join(' ');
  
  const svgContent = paths
    .filter(path => path.visible && path.originalPath)
    .map(path => {
      const pathAttributes = [
        `d="${path.originalPath}"`,
        path.fill && path.fill !== 'none' ? `fill="${path.fill}"` : '',
        path.stroke && path.stroke !== 'none' ? `stroke="${path.stroke}"` : '',
        path.strokeWidth ? `stroke-width="${path.strokeWidth}"` : '',
        path.strokeLinecap ? `stroke-linecap="${path.strokeLinecap}"` : '',
        path.strokeLinejoin ? `stroke-linejoin="${path.strokeLinejoin}"` : '',
        path.opacity !== 1 ? `opacity="${path.opacity}"` : '',
        path.transform ? `transform="${path.transform}"` : '',
      ].filter(Boolean).join(' ');
      
      return `  <path ${pathAttributes} />`;
    })
    .join('\n');
  
  return `<svg ${svgAttributes}>
${svgContent}
</svg>`;
}

// Helper function to get default path configuration
export function getDefaultPathConfig(): Partial<PathElement> {
  return {
    fill: undefined,
    stroke: 'none',
    strokeWidth: 1,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    opacity: 1,
    visible: true,
  };
}

// Helper function to apply global settings to all paths
export function applyGlobalSettings(paths: PathElement[], globalSettings: {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}): PathElement[] {
  return paths.map(path => ({
    ...path,
    ...(globalSettings.fill && { fill: globalSettings.fill }),
    ...(globalSettings.stroke && { stroke: globalSettings.stroke }),
    ...(globalSettings.strokeWidth && { strokeWidth: globalSettings.strokeWidth }),
  }));
}