'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { UploadPanel } from '@/components/UploadPanel';
import { PreviewPanel } from '@/components/PreviewPanel';
import { ControlPanel } from '@/components/ControlPanel';
import { CodeModal } from '@/components/CodeModal';
import { ExportTestModal } from '@/components/ExportTestModal';

export interface SVGConfig {
  // Color settings
  color: string; // stroke color
  fillColor: string; // fill color
  strokeWidth: number; // stroke width
  
  // Transform settings (independent)
  size: number;
  rotation: number;
  opacity: number;
  
  // Animation settings
  animation: 'none' | 'spin' | 'pulse' | 'scale' | 'bounce';
  
  // Hover effects
  hoverEffect: 'none' | 'scale' | 'rotate' | 'opacity';
}

export default function Home() {
  const [svgContent, setSvgContent] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [config, setConfig] = useState<SVGConfig>({
    color: '#ffffff',
    fillColor: '#000000',
    strokeWidth: 1,
    size: 100,
    rotation: 0,
    opacity: 1,
    animation: 'none',
    hoverEffect: 'none',
  });
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isExportTestModalOpen, setIsExportTestModalOpen] = useState(false);
  const [isConverting, setIsConverting] = useState(false);

  const handleDownloadSVG = () => {
    if (!svgContent) return;
    
    // SVG 내용을 설정에 따라 가공
    let processedSVG = svgContent;
    
    // 색상 적용
    processedSVG = processedSVG.replace(/fill="currentColor"/g, `fill="${config.color}"`);
    processedSVG = processedSVG.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
    
    // 기본 fill이 없는 경우 추가
    if (!processedSVG.includes('fill=') && !processedSVG.includes('foreignObject') && !processedSVG.includes('<image')) {
      processedSVG = processedSVG.replace(/<svg/, `<svg fill="${config.color}"`);
    }
    
    // 크기 설정
    if (processedSVG.includes('width=') && processedSVG.includes('height=')) {
      processedSVG = processedSVG.replace(/width="[^"]*"/g, `width="${config.size}"`);
      processedSVG = processedSVG.replace(/height="[^"]*"/g, `height="${config.size}"`);
    } else {
      processedSVG = processedSVG.replace(/<svg/, `<svg width="${config.size}" height="${config.size}"`);
    }
    
    // 회전 및 투명도 적용 (스타일 추가)
    if (config.rotation !== 0 || config.opacity !== 1) {
      const styleTransform = `transform: rotate(${config.rotation}deg); opacity: ${config.opacity};`;
      if (processedSVG.includes('style="')) {
        processedSVG = processedSVG.replace(/style="([^"]*)"/, `style="$1 ${styleTransform}"`);
      } else {
        processedSVG = processedSVG.replace(/<svg/, `<svg style="${styleTransform}"`);
      }
    }
    
    // 다운로드 실행
    const blob = new Blob([processedSVG], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName.replace(/\.[^/.]+$/, '')}_edited.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadGIF = async () => {
    if (!svgContent || config.animation === 'none') {
      alert('No animation is set. Please download static images as SVG.');
      return;
    }

    try {
      const GIF = (await import('gif.js')).default;
      
      // Canvas를 생성하여 직접 SVG 렌더링
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        alert('Cannot create canvas.');
        return;
      }
      
      // SVG 크기에 맞게 Canvas 크기 조정 (최소 400px, 최대 800px)
      const canvasSize = Math.max(400, Math.min(config.size + 100, 800));
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      
      // Worker 없이 실행하거나 worker 경로 설정
      const gifOptions: {
        quality: number;
        width: number;
        height: number;
        background: string;
        debug: boolean;
        workers?: number;
        workerScript?: string;
      } = {
        quality: 10,
        width: canvasSize,
        height: canvasSize,
        background: isDarkMode ? '#1a1a1a' : '#ffffff',
        debug: false,
      };
      
      // Worker 사용 시도, 실패하면 worker 없이 실행
      try {
        gifOptions.workers = 2;
        gifOptions.workerScript = '/gif.worker.js';
      } catch (e) {
        console.warn('Worker setup failed, running without worker:', e);
        gifOptions.workers = 0;
      }
      
      const gif = new GIF(gifOptions);

      // SVG를 이미지로 변환
      const svgElement = document.querySelector('[data-preview-svg] svg');
      if (!svgElement) {
        alert('SVG element not found.');
        return;
      }

      // SVG를 문자열로 변환하고 색상 적용
      let svgString = new XMLSerializer().serializeToString(svgElement);
      svgString = svgString.replace(/fill="currentColor"/g, `fill="${config.color}"`);
      svgString = svgString.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
      
      // 기본 fill 추가
      if (!svgString.includes('fill=') && !svgString.includes('foreignObject')) {
        svgString = svgString.replace(/<svg/, `<svg fill="${config.color}"`);
      }

      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      
      const img = new Image();
      
      img.onload = () => {
        console.log('SVG image loaded, starting GIF generation...');
        
        const frameCount = 20;
        const duration = 2; // 기본 애니메이션 지속시간 2초
        const frameDelay = Math.max(50, (duration * 1000) / frameCount); // 최소 50ms
        
        console.log(`Frame count: ${frameCount}, delay: ${frameDelay}ms`);
        
        for (let i = 0; i < frameCount; i++) {
          // 배경 클리어
          ctx.fillStyle = isDarkMode ? '#1a1a1a' : '#ffffff';
          ctx.fillRect(0, 0, canvasSize, canvasSize);
          
          // 중앙에 위치
          ctx.save();
          ctx.translate(canvasSize / 2, canvasSize / 2);
          
          // 애니메이션에 따른 변환
          if (config.animation === 'spin') {
            ctx.rotate((i / frameCount) * 2 * Math.PI + (config.rotation * Math.PI / 180));
          } else if (config.animation === 'pulse') {
            // Pulse: opacity 변화 (반짝임)
            const opacity = 0.5 + 0.5 * Math.sin((i / frameCount) * 2 * Math.PI);
            ctx.globalAlpha = config.opacity * opacity;
            ctx.rotate(config.rotation * Math.PI / 180);
          } else if (config.animation === 'scale') {
            // Scale: 크기 변화
            const scale = 1 + 0.1 * Math.sin((i / frameCount) * 2 * Math.PI);
            ctx.scale(scale, scale);
            ctx.rotate(config.rotation * Math.PI / 180);
          } else if (config.animation === 'bounce') {
            const bounce = Math.abs(Math.sin((i / frameCount) * 2 * Math.PI)) * 20;
            ctx.translate(0, -bounce);
            ctx.rotate(config.rotation * Math.PI / 180);
          } else {
            ctx.rotate(config.rotation * Math.PI / 180);
          }
          
          // 투명도 적용
          ctx.globalAlpha = config.opacity;
          
          // 이미지 그리기
          ctx.translate(-config.size / 2, -config.size / 2);
          ctx.drawImage(img, 0, 0, config.size, config.size);
          ctx.restore();
          
          // 캔버스를 gif에 추가
          gif.addFrame(ctx, { delay: frameDelay, copy: true });
        }
        
        console.log('All frames added, starting GIF rendering...');
        
        gif.on('finished', function(blob: Blob) {
          console.log('GIF generation completed!');
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${fileName.replace(/\.[^/.]+$/, '')}_animated.gif`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
        
        gif.on('progress', function(progress: number) {
          console.log('GIF generation progress:', Math.round(progress * 100) + '%');
        });
        
        gif.render();
        URL.revokeObjectURL(svgUrl);
      };
      
      img.onerror = () => {
        console.error('Failed to load SVG image');
        alert('Could not load SVG image.');
        URL.revokeObjectURL(svgUrl);
      };
      
      console.log('Starting to load SVG image...');
      img.src = svgUrl;
      
    } catch (error) {
      console.error('Error occurred during GIF generation:', error);
      alert('An error occurred during GIF generation. Please check the console.');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header 
        onExportCode={() => setIsCodeModalOpen(true)}
        onDownloadSVG={handleDownloadSVG}
        onDownloadGIF={handleDownloadGIF}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <main className="pt-16">
        {!svgContent ? (
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${isDarkMode ? 'from-white to-gray-400' : 'from-black to-gray-600'} bg-clip-text text-transparent`}>
                Turn Images into
                <br />
                Interactive SVG
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Convert your images and GIFs to customizable SVG components with animations, hover effects, and exportable React code.
              </p>
            </div>
            
            <UploadPanel
              onUpload={(content: string, name: string) => {
                setSvgContent(content);
                setFileName(name);
              }}
              isConverting={isConverting}
              setIsConverting={setIsConverting}
              isDarkMode={isDarkMode}
            />
          </div>
        ) : (
          <div className="h-full flex">
            {/* Left Panel - Controls */}
            <div className={`w-80 border-r ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} p-6 overflow-y-auto`}>            <ControlPanel
              config={config}
              onChange={(newConfig) => {
                console.log('Config changed:', newConfig); // 디버깅용
                setConfig(newConfig);
              }}
              fileName={fileName}
                onReset={() => {
                  setSvgContent('');
                  setFileName('');
                  setConfig({
                    color: '#ffffff',
                    fillColor: '#000000',
                    strokeWidth: 1,
                    size: 100,
                    rotation: 0,
                    opacity: 1,
                    animation: 'none',
                    hoverEffect: 'none',
                  });
                }}
                isDarkMode={isDarkMode}
              />
            </div>
            
            {/* Right Panel - Preview */}
            <div className="flex-1 p-6 overflow-y-auto">
              <PreviewPanel
                svgContent={svgContent}
                config={config}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        )}
      </main>

      <CodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        svgContent={svgContent}
        config={config}
        fileName={fileName}
      />
      <ExportTestModal
        isOpen={isExportTestModalOpen}
        onClose={() => setIsExportTestModalOpen(false)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}
