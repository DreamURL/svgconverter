import { SVGConfig } from '@/app/page';

// CSS 생성을 위한 유틸리티 함수
export function generateCSSForPreview(svgContent: string, config: SVGConfig, fileName: string) {
  // CSS용 SVG 처리 - 색상 완전 적용
  let processedSVG = svgContent
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!--[^>]*-->/g, '')
    .trim();

  // ImageTracerJS desc 제거
  processedSVG = processedSVG.replace(/desc="([^"]*)"/g, ``);
  
  // currentColor를 실제 색상으로 변경
  processedSVG = processedSVG.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
  processedSVG = processedSVG.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
  
  // 기존 색상을 새 색상으로 교체
  processedSVG = processedSVG.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
  processedSVG = processedSVG.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
  
  // stroke-width 설정
  processedSVG = processedSVG.replace(/stroke-width="[^"]*"/g, `stroke-width="${config.strokeWidth}"`);
  
  // 크기를 100%로 설정
  processedSVG = processedSVG.replace(/width="[^"]*"/g, 'width="100%"');
  processedSVG = processedSVG.replace(/height="[^"]*"/g, 'height="100%"');

  const componentName = fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '') || 'SVGIcon';
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

  const css = `.${className} {
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
}` : ''}`;

  return {
    css,
    processedSVG,
    className
  };
}
