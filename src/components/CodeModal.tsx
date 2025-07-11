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

  const generateReactComponent = () => {
    // SVG에서 고정 색상을 제거하고 동적으로 적용할 수 있게 처리
    let processedSVG = svgContent
      .replace(/fill="currentColor"/g, `fill={color}`)
      .replace(/stroke="currentColor"/g, `stroke={color}`)
      .replace(/fill="#[a-fA-F0-9]{6}"/g, `fill={color}`)
      .replace(/fill="#[a-fA-F0-9]{3}"/g, `fill={color}`);
    
    // SVG 태그에 기본 fill 속성이 없으면 추가
    if (!processedSVG.includes('fill=') && !processedSVG.includes('foreignObject') && !processedSVG.includes('<image')) {
      processedSVG = processedSVG.replace(/<svg/, `<svg fill={color}`);
    }

    const getAnimationClass = () => {
      switch (config.animation) {
        case 'spin': return 'animate-spin';
        case 'pulse': return 'animate-pulse';
        case 'scale': return 'animate-scale';
        case 'bounce': return 'animate-bounce';
        default: return '';
      }
    };

    const getHoverEffectClass = () => {
      switch (config.hoverEffect) {
        case 'scale': return `hover:scale-[${config.hoverScale || 1.1}]`;
        case 'rotate': return `hover:rotate-[${config.hoverRotation || 15}deg]`;
        case 'opacity': return `hover:opacity-[${config.hoverOpacity || 0.8}]`;
        case 'color': return 'hover:brightness-110';
        default: return '';
      }
    };

    const classes = [
      'transition-all duration-300 ease-in-out',
      getAnimationClass(),
      getHoverEffectClass()
    ].filter(Boolean).join(' ');

    return `import React from 'react';

interface ${capitalizedName}Props {
  size?: number;
  color?: string;
  rotation?: number;
  opacity?: number;
  className?: string;
}

export function ${capitalizedName}({ 
  size = ${config.size},
  color = "${config.color}",
  rotation = ${config.rotation},
  opacity = ${config.opacity},
  className = ""
}: ${capitalizedName}Props) {
  return (
    <div
      className={\`${classes} \${className}\`}
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        transform: \`rotate(\${rotation}deg)\`,
        opacity: opacity,
        ${config.hoverEffect === 'color' && config.hoverColor ? `
        ':hover': {
          fill: '${config.hoverColor}'
        }` : ''}
      }}
    >
      ${processedSVG}
    </div>
  );
}`;
  };

  const generateInlineSVG = () => {
    // SVG에서 동적 색상 적용
    let processedSVG = svgContent
      .replace(/fill="currentColor"/g, `fill="${config.color}"`)
      .replace(/stroke="currentColor"/g, `stroke="${config.color}"`)
      .replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.color}"`)
      .replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.color}"`);
    
    // SVG 태그에 기본 fill 속성이 없으면 추가
    if (!processedSVG.includes('fill=') && !processedSVG.includes('foreignObject') && !processedSVG.includes('<image')) {
      processedSVG = processedSVG.replace(/<svg/, `<svg fill="${config.color}"`);
    }

    const getAnimationClass = () => {
      switch (config.animation) {
        case 'spin': return 'animate-spin';
        case 'pulse': return 'animate-pulse';
        case 'scale': return 'animate-scale';
        case 'bounce': return 'animate-bounce';
        default: return '';
      }
    };

    const getHoverEffectClass = () => {
      switch (config.hoverEffect) {
        case 'scale': return `hover:scale-[${config.hoverScale || 1.1}]`;
        case 'rotate': return `hover:rotate-[${config.hoverRotation || 15}deg]`;
        case 'opacity': return `hover:opacity-[${config.hoverOpacity || 0.8}]`;
        case 'color': return 'hover:brightness-110';
        default: return '';
      }
    };

    const classes = [
      'transition-all duration-300 ease-in-out',
      getAnimationClass(),
      getHoverEffectClass()
    ].filter(Boolean).join(' ');

    return `<div
  className="${classes}"
  style={{
    width: '${config.size}px',
    height: '${config.size}px',
    transform: 'rotate(${config.rotation}deg)',
    opacity: ${config.opacity}
  }}
>
  ${processedSVG}
</div>`;
  };

  const generateCSS = () => {
    const animationDuration = config.animationDuration || 2;
    const animationSpeed = config.animationSpeed || 5;
    const actualDuration = animationDuration / animationSpeed;
    
    return `.${componentName.toLowerCase()} {
  width: ${config.size}px;
  height: ${config.size}px;
  transform: rotate(${config.rotation}deg);
  opacity: ${config.opacity};
  transition: all ${config.hoverDuration || 0.3}s ease-in-out;
  ${config.animation === 'spin' ? `animation: spin ${actualDuration}s linear infinite;` : ''}
  ${config.animation === 'pulse' ? `animation: pulse ${actualDuration}s ease-in-out infinite;` : ''}
  ${config.animation === 'scale' ? `animation: scale ${actualDuration}s ease-in-out infinite;` : ''}
  ${config.animation === 'bounce' ? `animation: bounce ${actualDuration}s infinite;` : ''}
}

.${componentName.toLowerCase()}:hover {
  ${config.hoverEffect === 'scale' ? `transform: scale(${config.hoverScale || 1.1}) rotate(${config.rotation}deg);` : ''}
  ${config.hoverEffect === 'rotate' ? `transform: rotate(${config.rotation + (config.hoverRotation || 15)}deg);` : ''}
  ${config.hoverEffect === 'opacity' ? `opacity: ${config.hoverOpacity || 0.8};` : ''}
  ${config.hoverEffect === 'color' && config.hoverColor ? `fill: ${config.hoverColor};` : ''}
}

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
}`;
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
