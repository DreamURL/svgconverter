'use client';

import { SVGConfig } from '@/app/page';
import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  svgContent: string;
  config: SVGConfig;
  fileName: string;
}

export function CodeModal({ isOpen, onClose, svgContent, config, fileName }: CodeModalProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const componentName = fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '');
  const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

  const generateHoverFunction = () => {
    const baseTransform = `rotate(${config.rotation}deg)`;
    
    if (config.hoverEffect === 'scale') {
      return `const getHoverStyle = () => {
    if (!isHovered) return {};
    
    const baseTransform = \`${baseTransform}\`;
    
    return { transform: \`scale(1.1) \${baseTransform}\` };
  };`;
    } else if (config.hoverEffect === 'rotate') {
      return `const getHoverStyle = () => {
    if (!isHovered) return {};
    
    return { animation: 'hover-rotate 1s linear infinite' };
  };`;
    } else if (config.hoverEffect === 'opacity') {
      return `const getHoverStyle = () => {
    if (!isHovered) return {};
    
    const baseTransform = \`${baseTransform}\`;
    
    return { 
      opacity: 0.8,
      transform: baseTransform 
    };
  };`;
    }
    return '';
  };

  const generateReactComponent = () => {
    // 간단한 SVG 처리
    const processedSVG = svgContent
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/<!--[^>]*-->/g, '')
      .replace(/stroke-width/g, 'strokeWidth')
      .replace(/fill="[^"]*"/g, `fill="${config.fillColor}"`)
      .replace(/stroke="[^"]*"/g, `stroke="${config.color}"`)
      .replace(/width="[^"]*"/g, 'width="100%"')
      .replace(/height="[^"]*"/g, 'height="100%"')
      .trim();

    return `import React${config.hoverEffect !== 'none' ? ', { useState }' : ''} from 'react';

${config.hoverEffect === 'rotate' ? `
// CSS for hover-rotate animation
const hoverRotateStyle = \`
  @keyframes hover-rotate {
    from { transform: rotate(${config.rotation}deg); }
    to { transform: rotate(${config.rotation + 360}deg); }
  }
\`;

// Insert the style into the document head
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('hover-rotate-style');
  if (existingStyle) {
    existingStyle.textContent = hoverRotateStyle;
  } else {
    const style = document.createElement('style');
    style.id = 'hover-rotate-style';
    style.textContent = hoverRotateStyle;
    document.head.appendChild(style);
  }
}
` : ''}
export function ${capitalizedName}() {
  ${config.hoverEffect !== 'none' ? 'const [isHovered, setIsHovered] = useState(false);' : ''}

  ${config.hoverEffect !== 'none' ? generateHoverFunction() : ''}

  const baseStyle = {
    // Size property
    width: '${config.size}px',
    height: '${config.size}px',
    
    // Rotation property
    transform: 'rotate(${config.rotation}deg)',
    
    // Opacity property
    opacity: ${config.opacity},
    
    // Transition for smooth hover effects
    transition: 'all 0.3s ease-in-out',
    
    // Animation property
    ${config.animation !== 'none' ? `animation: '${config.animation} 2s infinite'` : ''}
  };

  return (
    <div
      ${config.hoverEffect !== 'none' ? `onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}` : ''}
      style={{
        ...baseStyle${config.hoverEffect !== 'none' ? ',\n        ...getHoverStyle()' : ''}
      }}
    >
      ${processedSVG}
    </div>
  );
}`;
  };

  const generateInlineSVG = () => {
    // JSX 형식으로 SVG 처리
    let processedSVG = svgContent
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/<!--[^>]*-->/g, '')
      .trim();

    // JSX 속성 변환 (React에서 요구하는 camelCase)
    processedSVG = processedSVG.replace(/stroke-width="([^"]*)"/g, `strokeWidth="$1"`);
    processedSVG = processedSVG.replace(/stroke-linecap="([^"]*)"/g, `strokeLinecap="$1"`);
    processedSVG = processedSVG.replace(/stroke-linejoin="([^"]*)"/g, `strokeLinejoin="$1"`);
    processedSVG = processedSVG.replace(/stroke-dasharray="([^"]*)"/g, `strokeDasharray="$1"`);
    processedSVG = processedSVG.replace(/stroke-dashoffset="([^"]*)"/g, `strokeDashoffset="$1"`);
    processedSVG = processedSVG.replace(/fill-rule="([^"]*)"/g, `fillRule="$1"`);
    processedSVG = processedSVG.replace(/clip-rule="([^"]*)"/g, `clipRule="$1"`);
    processedSVG = processedSVG.replace(/xml-space="([^"]*)"/g, `xmlSpace="$1"`);
    
    // currentColor를 실제 색상으로 변경
    processedSVG = processedSVG.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
    
    // 색상 코드를 새 색상으로 교체
    processedSVG = processedSVG.replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/stroke="#[a-fA-F0-9]{6}"/g, `stroke="${config.color}"`);
    processedSVG = processedSVG.replace(/stroke="#[a-fA-F0-9]{3}"/g, `stroke="${config.color}"`);
    
    // 검은색과 흰색 등 색상 이름도 교체
    processedSVG = processedSVG.replace(/fill="black"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/fill="white"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/fill="#000000"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/fill="#000"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/fill="#ffffff"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/fill="#fff"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/stroke="black"/g, `stroke="${config.color}"`);
    processedSVG = processedSVG.replace(/stroke="white"/g, `stroke="${config.color}"`);
    processedSVG = processedSVG.replace(/stroke="#000000"/g, `stroke="${config.color}"`);
    processedSVG = processedSVG.replace(/stroke="#000"/g, `stroke="${config.color}"`);
    processedSVG = processedSVG.replace(/stroke="#ffffff"/g, `stroke="${config.color}"`);
    processedSVG = processedSVG.replace(/stroke="#fff"/g, `stroke="${config.color}"`);
    
    // 기존의 다른 색상 이름들도 교체 (none, transparent, url 제외)
    processedSVG = processedSVG.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
    processedSVG = processedSVG.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
    
    // style 속성 내의 fill과 stroke도 교체
    processedSVG = processedSVG.replace(/style="([^"]*)"/g, (match, styleContent) => {
      let newStyle = styleContent;
      newStyle = newStyle.replace(/fill:\\s*[^;]*(;|$)/g, `fill:${config.fillColor}$1`);
      newStyle = newStyle.replace(/stroke:\\s*[^;]*(;|$)/g, `stroke:${config.color}$1`);
      return `style="${newStyle}"`;
    });
    
    // SVG 요소에 기본 색상 적용
    if (!processedSVG.includes('fill=') && !processedSVG.includes('foreignObject') && !processedSVG.includes('<image')) {
      processedSVG = processedSVG.replace(/<svg/, `<svg fill="${config.fillColor}"`);
    }
    
    // 이미 SVG 태그에 fill이나 stroke가 있으면 업데이트
    processedSVG = processedSVG.replace(/<svg([^>]*)\sfill="[^"]*"([^>]*)>/i, `<svg$1 fill="${config.fillColor}"$2>`);
    processedSVG = processedSVG.replace(/<svg([^>]*)\sstroke="[^"]*"([^>]*)>/i, `<svg$1 stroke="${config.color}"$2>`);
    
    // CSS 내부 스타일도 처리
    processedSVG = processedSVG.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, cssContent) => {
      let newCSS = cssContent;
      newCSS = newCSS.replace(/fill:\s*[^;}]*(;|})/g, `fill:${config.fillColor}$1`);
      newCSS = newCSS.replace(/stroke:\s*[^;}]*(;|})/g, `stroke:${config.color}$1`);
      return `<style>${newCSS}</style>`;
    });
    
    // 크기를 100%로 설정
    processedSVG = processedSVG.replace(/width="[^"]*"/g, 'width="100%"');
    processedSVG = processedSVG.replace(/height="[^"]*"/g, 'height="100%"');

    // Generate hover handlers only if hover effect is enabled
    let hoverHandlers = '';
    const baseTransform = `rotate(${config.rotation}deg)`;
    
    if (config.hoverEffect === 'scale') {
      hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) ${baseTransform}'}
        onMouseLeave={(e) => e.currentTarget.style.transform = '${baseTransform}'}`;
    } else if (config.hoverEffect === 'rotate') {
      hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(${config.rotation + 360}deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = '${baseTransform}'}`;
    } else if (config.hoverEffect === 'opacity') {
      hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '${config.opacity}'}`;
    }

    return `<div
        style={{
          // Size property
          width: '${config.size}px',
          height: '${config.size}px',
          
          // Rotation property  
          transform: '${baseTransform}',
          
          // Opacity property
          opacity: ${config.opacity},
          
          // Transition for smooth hover effects
          transition: 'all 1.5s ease-in-out',
          
          // Animation property
          ${config.animation !== 'none' ? `animation: '${config.animation} 2s infinite'` : ''}
        }}
        ${hoverHandlers}
      >
        ${processedSVG}
      </div>`;
  };

  const generateCSS = () => {
    // 간단한 SVG 처리
    const processedSVG = svgContent
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/<!--[^>]*-->/g, '')
      .replace(/fill="[^"]*"/g, `fill="${config.fillColor}"`)
      .replace(/stroke="[^"]*"/g, `stroke="${config.color}"`)
      .replace(/width="[^"]*"/g, 'width="100%"')
      .replace(/height="[^"]*"/g, 'height="100%"')
      .trim();

    const className = componentName.toLowerCase();
    const baseTransform = `rotate(${config.rotation}deg)`;
    
    // Generate hover CSS only if hover effect is enabled
    let hoverCSS = '';
    if (config.hoverEffect === 'scale') {
      hoverCSS = `.${className}:hover {
  transform: scale(1.1) ${baseTransform};
}`;
    } else if (config.hoverEffect === 'rotate') {
      hoverCSS = `.${className}:hover {
  animation: hover-rotate 1s linear infinite;
}`;
    } else if (config.hoverEffect === 'opacity') {
      hoverCSS = `.${className}:hover {
  opacity: 0.8;
  transform: ${baseTransform};
}`;
    }

    return `.${className} {
  /* Size property */
  width: ${config.size}px;
  height: ${config.size}px;
  
  /* Rotation property */
  transform: ${baseTransform};
  
  /* Opacity property */
  opacity: ${config.opacity};
  
  /* Transition for smooth hover effects */
  transition: all 0.3s ease-in-out;
  
  /* Animation property */
  ${config.animation !== 'none' ? `animation: ${config.animation} 2s infinite;` : ''}
}

${hoverCSS}

/* Animation keyframes */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-30px); }
  70% { transform: translateY(-15px); }
}

${config.hoverEffect === 'rotate' ? `@keyframes hover-rotate {
  from { transform: rotate(${config.rotation}deg); }
  to { transform: rotate(${config.rotation + 360}deg); }
}` : ''}

/* HTML */
<div class="${className}">
  ${processedSVG}
</div>`;
  };

  const copyToClipboard = async (text: string, section: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const reactComponent = generateReactComponent();
  const inlineSVG = generateInlineSVG();
  const cssCode = generateCSS();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Export Code</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* React Component */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium text-white">React Component</h3>
              <button
                onClick={() => copyToClipboard(reactComponent, 'react')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors"
              >
                {copiedSection === 'react' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-gray-950 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{reactComponent}</code>
            </pre>
          </div>

          {/* Inline SVG */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium text-white">Inline SVG</h3>
              <button
                onClick={() => copyToClipboard(inlineSVG, 'inline')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors"
              >
                {copiedSection === 'inline' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-gray-950 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{inlineSVG}</code>
            </pre>
          </div>

          {/* CSS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium text-white">CSS</h3>
              <button
                onClick={() => copyToClipboard(cssCode, 'css')}
                className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors"
              >
                {copiedSection === 'css' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-gray-950 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{cssCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}