'use client';

import { SVGConfig } from '@/app/page';
import { useMemo } from 'react';

interface PreviewPanelProps {
  svgContent: string;
  config: SVGConfig;
  isDarkMode: boolean;
}

export function PreviewPanel({ svgContent, config, isDarkMode }: PreviewPanelProps) {
  // CodeModal의 generateInlineSVG와 동일한 로직으로 SVG 처리
  const processedSVG = useMemo(() => {
    if (!svgContent) return '';
    
    let processed = svgContent
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/<!--[^>]*-->/g, '')
      .trim();

    // JSX 속성 변환 (React에서 요구하는 camelCase)
    processed = processed.replace(/stroke-width="([^"]*)"/g, `strokeWidth="${config.strokeWidth}"`);
    processed = processed.replace(/stroke-linecap="([^"]*)"/g, `strokeLinecap="$1"`);
    processed = processed.replace(/stroke-linejoin="([^"]*)"/g, `strokeLinejoin="$1"`);
    processed = processed.replace(/stroke-dasharray="([^"]*)"/g, `strokeDasharray="$1"`);
    processed = processed.replace(/stroke-dashoffset="([^"]*)"/g, `strokeDashoffset="$1"`);
    processed = processed.replace(/fill-rule="([^"]*)"/g, `fillRule="$1"`);
    processed = processed.replace(/clip-rule="([^"]*)"/g, `clipRule="$1"`);
    processed = processed.replace(/xml:space="([^"]*)"/g, `xmlSpace="$1"`);
    processed = processed.replace(/xmlns:xlink="([^"]*)"/g, `xmlnsXlink="$1"`);
    processed = processed.replace(/xlink:href="([^"]*)"/g, `xlinkHref="$1"`);
    processed = processed.replace(/<svg([^>]*)\sstyle="[^"]*"([^>]*)>/i, '<svg$1$2>');
    processed = processed.replace(/desc="([^"]*)"/g, ``); // ImageTracerJS desc 제거

    // currentColor를 실제 색상으로 변경
    processed = processed.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
    
    // 색상 코드를 새 색상으로 교체
    processed = processed.replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="#[a-fA-F0-9]{6}"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="#[a-fA-F0-9]{3}"/g, `stroke="${config.color}"`);
    
    // 검은색과 흰색 등 색상 이름도 교체
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
    
    // 기존의 다른 색상 이름들도 교체 (none, transparent, url 제외)
    processed = processed.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
    
    // style 속성 내의 fill과 stroke도 교체
    processed = processed.replace(/style="([^"]*)"/g, (match, styleContent) => {
      let newStyle = styleContent;
      newStyle = newStyle.replace(/fill:\s*[^;]*(;|$)/g, `fill:${config.fillColor}$1`);
      newStyle = newStyle.replace(/stroke:\s*[^;]*(;|$)/g, `stroke:${config.color}$1`);
      return `style="${newStyle}"`;
    });
    
    // SVG 요소에 기본 색상 적용
    if (!processed.includes('fill=') && !processed.includes('foreignObject') && !processed.includes('<image')) {
      processed = processed.replace(/<svg/, `<svg fill="${config.fillColor}"`);
    }
    
    // 이미 SVG 태그에 fill이나 stroke가 있으면 업데이트
    processed = processed.replace(/<svg([^>]*)\sfill="[^"]*"([^>]*)>/i, `<svg$1 fill="${config.fillColor}"$2>`);
    processed = processed.replace(/<svg([^>]*)\sstroke="[^"]*"([^>]*)>/i, `<svg$1 stroke="${config.color}"$2>`);
    
    // CSS 내부 스타일도 처리
    processed = processed.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, cssContent) => {
      let newCSS = cssContent;
      newCSS = newCSS.replace(/fill:\s*[^;}]*(;|})/g, `fill:${config.fillColor}$1`);
      newCSS = newCSS.replace(/stroke:\s*[^;}]*(;|})/g, `stroke:${config.color}$1`);
      return `<style>${newCSS}</style>`;
    });
    
    // 크기를 100%로 설정
    processed = processed.replace(/width="[^"]*"/g, 'width="100%"');
    processed = processed.replace(/height="[^"]*"/g, 'height="100%"');

    return processed;
  }, [svgContent, config.fillColor, config.color, config.strokeWidth]);

  return (
    <div className="h-full flex flex-col overflow-y-auto">
      {/* CSS 애니메이션 키프레임 정의 */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
      
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Preview</h2>
        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {config.size}px × {config.size}px
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative">
          <div 
            className={`relative ${isDarkMode ? 'bg-gray-900/30' : 'bg-gray-100/50'} rounded-lg w-[800px] h-[800px] flex items-center justify-center overflow-hidden`}
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
            
            {/* 실시간 동적 렌더링 - JSX 스타일 */}
            <div 
              style={{
                width: `${config.size}px`,
                height: `${config.size}px`,
                transform: `rotate(${config.rotation}deg)`,
                opacity: config.opacity,
                transition: 'all 0.3s ease-in-out',
                animation: config.animation !== 'none' ? `${config.animation} 2s infinite` : undefined,
              }}
              onMouseEnter={(e) => {
                if (config.hoverEffect === 'scale') {
                  e.currentTarget.style.transform = `scale(1.1) rotate(${config.rotation}deg)`;
                } else if (config.hoverEffect === 'rotate') {
                  e.currentTarget.style.transform = `rotate(${config.rotation + 360}deg)`;
                } else if (config.hoverEffect === 'opacity') {
                  e.currentTarget.style.opacity = '0.8';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${config.rotation}deg)`;
                e.currentTarget.style.opacity = `${config.opacity}`;
              }}
            >
              <div data-preview-svg dangerouslySetInnerHTML={{ __html: processedSVG }} />
            </div>
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