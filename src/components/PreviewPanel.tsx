'use client';

import { SVGConfig } from '@/app/page';
import { useMemo } from 'react';

interface PreviewPanelProps {
  svgContent: string;
  config: SVGConfig;
  isDarkMode: boolean;
}

export function PreviewPanel({ svgContent, config, isDarkMode }: PreviewPanelProps) {
  const processedSVG = useMemo(() => {
    if (!svgContent) return '';
    
    // SVG 내용을 가공하여 스타일 적용
    let processed = svgContent;
    
    // currentColor를 실제 색상으로 변경
    processed = processed.replace(/fill="currentColor"/g, `fill="${config.color}"`);
    processed = processed.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
    
    // 기본 fill이 없는 경우 추가 (foreignObject나 image가 아닌 경우만)
    if (!processed.includes('fill=') && !processed.includes('foreignObject') && !processed.includes('<image')) {
      processed = processed.replace(/<svg/, `<svg fill="${config.color}"`);
    }
    
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
  }, [svgContent, config.color]);

  const getAnimationStyle = () => {
    if (config.animation === 'none') return {};
    
    const duration = config.animationDuration || 2; // 기본 2초
    const speed = config.animationSpeed || 5; // 기본 5배속
    const actualDuration = duration / speed; // 실제 애니메이션 시간
    
    const timingFunction = config.animation === 'bounce' ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-in-out';
    const animationName = config.animation;
    
    return {
      animation: `${animationName} ${actualDuration}s ${timingFunction} infinite`
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
                width: `${Math.min(config.size, 350)}px`,
                height: `${Math.min(config.size, 350)}px`,
                transform: `rotate(${config.rotation}deg)`,
                opacity: config.opacity,
                ...getAnimationStyle(),
                cursor: config.hoverEffect !== 'none' ? 'pointer' : 'default',
                transition: config.hoverEffect !== 'none' ? `all ${config.hoverDuration || 0.3}s ease-in-out` : 'none'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                const element = e.currentTarget;
                const svgElement = element.querySelector('svg');
                
                if (config.hoverEffect === 'scale' && config.hoverScale) {
                  element.style.transform = `rotate(${config.rotation}deg) scale(${config.hoverScale})`;
                } else if (config.hoverEffect === 'rotate' && config.hoverRotation) {
                  element.style.transform = `rotate(${config.rotation + config.hoverRotation}deg)`;
                } else if (config.hoverEffect === 'opacity' && config.hoverOpacity) {
                  element.style.opacity = String(config.hoverOpacity);
                } else if (config.hoverEffect === 'color' && config.hoverColor && svgElement) {
                  const fills = svgElement.querySelectorAll('[fill]');
                  fills.forEach((el: Element) => {
                    (el as SVGElement).style.fill = config.hoverColor!;
                  });
                  if (svgElement.getAttribute('fill')) {
                    svgElement.style.fill = config.hoverColor;
                  }
                }
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                const element = e.currentTarget;
                const svgElement = element.querySelector('svg');
                
                if (config.hoverEffect === 'scale' || config.hoverEffect === 'rotate') {
                  element.style.transform = `rotate(${config.rotation}deg)`;
                } else if (config.hoverEffect === 'opacity') {
                  element.style.opacity = String(config.opacity);
                } else if (config.hoverEffect === 'color' && svgElement) {
                  const fills = svgElement.querySelectorAll('[fill]');
                  fills.forEach((el: Element) => {
                    (el as SVGElement).style.fill = config.color;
                  });
                  if (svgElement.getAttribute('fill')) {
                    svgElement.style.fill = config.color;
                  }
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
          <div>Color: {config.color}</div>
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