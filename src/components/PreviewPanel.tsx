'use client';

import { SVGConfig } from '@/app/page';
import { useMemo } from 'react';

interface PreviewPanelProps {
  svgContent: string;
  config: SVGConfig;
  isDarkMode: boolean;
}

export function PreviewPanel({ svgContent, config, isDarkMode }: PreviewPanelProps) {
  // Add CSS for hover-rotate animation
  const hoverRotateStyle = `
    @keyframes hover-rotate {
      from { transform: rotate(${config.rotation}deg); }
      to { transform: rotate(${config.rotation + 360}deg); }
    }
  `;

  // Insert the style into the document head
  if (typeof document !== 'undefined' && config.hoverEffect === 'rotate') {
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
  const processedSVG = useMemo(() => {
    if (!svgContent) return '';
    
    // SVG 내용을 가공하여 스타일 적용
    let processed = svgContent;
    
    // JSX 속성 변환 (React에서 요구하는 camelCase)
    processed = processed.replace(/stroke-width="([^"]*)"/g, `strokeWidth="$1"`);
    processed = processed.replace(/stroke-linecap="([^"]*)"/g, `strokeLinecap="$1"`);
    processed = processed.replace(/stroke-linejoin="([^"]*)"/g, `strokeLinejoin="$1"`);
    processed = processed.replace(/stroke-dasharray="([^"]*)"/g, `strokeDasharray="$1"`);
    processed = processed.replace(/stroke-dashoffset="([^"]*)"/g, `strokeDashoffset="$1"`);
    processed = processed.replace(/fill-rule="([^"]*)"/g, `fillRule="$1"`);
    processed = processed.replace(/clip-rule="([^"]*)"/g, `clipRule="$1"`);
    processed = processed.replace(/xml:space="([^"]*)"/g, `xmlSpace="$1"`);
    
    // currentColor를 실제 색상으로 변경
    processed = processed.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
    
    // 색상 코드를 새 색상으로 교체
    processed = processed.replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="#[a-fA-F0-9]{6}"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="#[a-fA-F0-9]{3}"/g, `stroke="${config.color}"`);
    
    // 검은색과 흰색 등 색상 이름도 교체 (이미지 변환 SVG 대응)
    processed = processed.replace(/fill="black"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="white"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="#000000"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="#000"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="#ffffff"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="#fff"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="black"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="white"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="#000000"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="#000"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="#ffffff"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="#fff"/g, `stroke="${config.color}"`);
    
    // 기존의 다른 색상 이름들도 교체 (black, white, red 등)
    processed = processed.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
    
    // style 속성 내의 fill과 stroke도 교체
    processed = processed.replace(/style="([^"]*)"/g, (match, styleContent) => {
      let newStyle = styleContent;
      newStyle = newStyle.replace(/fill:\s*[^;]*(;|$)/g, `fill:${config.fillColor}$1`);
      newStyle = newStyle.replace(/stroke:\s*[^;]*(;|$)/g, `stroke:${config.color}$1`);
      return `style="${newStyle}"`;
    });
    
    // 기본 fill이 없는 경우 추가 (foreignObject나 image가 아닌 경우만)
    if (!processed.includes('fill=') && !processed.includes('style=') && !processed.includes('foreignObject') && !processed.includes('<image')) {
      processed = processed.replace(/<svg/, `<svg fill="${config.fillColor}"`);
    }
    
    // 복잡한 이미지 변환 SVG의 경우: 이미 SVG 태그에 fill이 있으면 그것도 업데이트
    processed = processed.replace(/<svg([^>]*)\sfill="[^"]*"([^>]*)>/i, `<svg$1 fill="${config.fillColor}"$2>`);
    processed = processed.replace(/<svg([^>]*)\sstroke="[^"]*"([^>]*)>/i, `<svg$1 stroke="${config.color}"$2>`);
    
    // CSS 내부 스타일도 처리
    processed = processed.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, cssContent) => {
      let newCSS = cssContent;
      newCSS = newCSS.replace(/fill:\s*[^;}]*(;|})/g, `fill:${config.fillColor}$1`);
      newCSS = newCSS.replace(/stroke:\s*[^;}]*(;|})/g, `stroke:${config.color}$1`);
      return `<style>${newCSS}</style>`;
    });
    
    // SVG의 viewBox가 없으면 추가
    if (!processed.includes('viewBox') && processed.includes('width=') && processed.includes('height=')) {
      const widthMatch = processed.match(/width="([^"]+)"/);
      const heightMatch = processed.match(/height="([^"]+)"/);
      if (widthMatch && heightMatch) {
        const width = widthMatch[1].replace('px', '');
        const height = heightMatch[1].replace('px', '');
        processed = processed.replace(/<svg/, `<svg viewBox="0 0 ${width} ${height}"`);
      }
    }
    
    return processed;
  }, [svgContent, config.color, config.fillColor]);

  const getAnimationStyle = () => {
    if (config.animation === 'none') return {};
    
    const duration = 2; // 기본 2초 고정
    const timingFunction = config.animation === 'bounce' ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-in-out';
    const animationName = config.animation;
    
    return {
      animation: `${animationName} ${duration}s ${timingFunction} infinite`
    };
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Preview</h2>
        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {config.size}px × {config.size}px
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative">
          {/* Fixed size background container */}
          <div 
            className={`relative ${isDarkMode ? 'bg-gray-900/30' : 'bg-gray-100/50'} rounded-lg w-[800px] h-[800px] flex items-center justify-center overflow-hidden`}
            data-preview-svg
          >
            {/* Grid Background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
                  linear-gradient(90deg, ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 0'
              }}
            />
            
            {/* SVG Container - Always centered */}
            {/* SVG Container - Always centered */}
            <div
              className="flex items-center justify-center"
              style={{
                // Size properties
                width: `${Math.min(config.size, 400)}px`,
                height: `${Math.min(config.size, 400)}px`,
                
                // Rotation property
                transform: `rotate(${config.rotation}deg)`,
                
                // Opacity property
                opacity: config.opacity,
                
                // Animation property
                ...getAnimationStyle(),
                
                // Hover interaction properties
                cursor: config.hoverEffect !== 'none' ? 'pointer' : 'default',
                transition: config.hoverEffect !== 'none' ? 'all 1.5s ease-in-out' : 'none'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                const element = e.currentTarget;
                const baseTransform = `rotate(${config.rotation}deg)`;
                
                // Apply hover effect while preserving other properties
                switch (config.hoverEffect) {
                  case 'scale':
                    element.style.transform = `${baseTransform} scale(1.1)`;
                    break;
                  case 'rotate':
                    element.style.animation = 'hover-rotate 1s linear infinite';
                    break;
                  case 'opacity':
                    element.style.opacity = '0.8';
                    element.style.transform = baseTransform; // Keep rotation
                    break;
                  default:
                    break;
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                const element = e.currentTarget;
                const baseTransform = `rotate(${config.rotation}deg)`;
                
                // Reset to original values
                switch (config.hoverEffect) {
                  case 'scale':
                    element.style.transform = baseTransform;
                    break;
                  case 'rotate':
                    element.style.animation = config.animation !== 'none' ? getAnimationStyle().animation : 'none';
                    element.style.transform = baseTransform;
                    break;
                  case 'opacity':
                    element.style.opacity = String(config.opacity);
                    element.style.transform = baseTransform; // Keep rotation
                    break;
                  default:
                    break;
                }
              }}
              dangerouslySetInnerHTML={{ __html: processedSVG }}
            />
          </div>
        </div>
      </div>

      {/* Config Summary */}
      <div className={`mt-6 p-4 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'} rounded-lg`}>
        <h3 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Current Settings</h3>
        <div className={`grid grid-cols-2 gap-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <div>Stroke: {config.color}</div>
          <div>Fill: {config.fillColor}</div>
          <div>Size: {config.size}px</div>
          <div>Rotation: {config.rotation}°</div>
          <div>Opacity: {Math.round(config.opacity * 100)}%</div>
          <div>Animation: {config.animation}</div>
          <div>Hover: {config.hoverEffect}</div>
        </div>
      </div>
    </div>
  );
}