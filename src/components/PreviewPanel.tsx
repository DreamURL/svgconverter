'use client';

import { SVGConfig } from '@/app/page';
import { SVGEditorState, AnimationConfig } from '@/types/svgTypes';
import { getPathRenderSettings } from '@/utils/svgStateManager';
import { formatSVGWithPaths } from '@/utils/svgParser';
import { useMemo, useEffect } from 'react';
import { loadAnimationCSS } from '@/utils/cssLoader';

interface PreviewPanelProps {
  svgContent: string;
  config: SVGConfig;
  isDarkMode: boolean;
  // 새로운 props (optional로 처리)
  svgEditorState?: SVGEditorState;
  onPathSelect?: (pathId: string) => void;
  animationConfig?: AnimationConfig | null;
}

export function PreviewPanel({ 
  svgContent, 
  config, 
  isDarkMode,
  svgEditorState,
  onPathSelect,
  animationConfig,
}: PreviewPanelProps) {
  
  // 애니메이션 CSS 동적 로딩
  useEffect(() => {
    if (animationConfig && animationConfig.type) {
      loadAnimationCSS(animationConfig.type).catch((error) => {
        console.warn(`Failed to load animation CSS for ${animationConfig.type}:`, error);
      });
    }
  }, [animationConfig]);
  
  // 개별 path 설정을 반영한 SVG 처리
  const processedSVG = useMemo(() => {
    if (!svgContent) return '';

    // 파싱된 SVG가 있는 경우 개별 path 설정 적용
    if (svgEditorState?.parsedSVG) {
      try {
        // 각 path에 개별 설정 적용하여 새로운 SVG 생성
        const updatedPaths = svgEditorState.parsedSVG.paths.map(path => {
          const renderSettings = getPathRenderSettings(path, svgEditorState.globalConfig);
          return {
            ...path,
            fill: renderSettings.fill,
            stroke: renderSettings.stroke,
            strokeWidth: renderSettings.strokeWidth,
            strokeLinecap: renderSettings.strokeLinecap,
            strokeLinejoin: renderSettings.strokeLinejoin,
            opacity: renderSettings.opacity,
          };
        });

        const updatedParsedSVG = {
          ...svgEditorState.parsedSVG,
          paths: updatedPaths,
        };

        return formatSVGWithPaths(updatedParsedSVG);
      } catch (error) {
        console.warn('Failed to apply individual path settings, falling back to global:', error);
      }
    }

    // Fallback: 기존 글로벌 방식으로 처리
    let processed = svgContent
      .replace(/<\?xml[^>]*\?>/g, '')
      .replace(/<!--[^>]*-->/g, '')
      .trim();

    // 글로벌 설정 적용
    processed = processed.replace(/stroke-width="([^"]*)"/g, `stroke-width="${config.strokeWidth}"`);
    processed = processed.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
    processed = processed.replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="#[a-fA-F0-9]{6}"/g, `stroke="${config.color}"`);
    processed = processed.replace(/stroke="#[a-fA-F0-9]{3}"/g, `stroke="${config.color}"`);
    
    // 기본 색상 이름들 교체
    processed = processed.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
    processed = processed.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);

    return processed;
  }, [svgContent, config, svgEditorState]);

  // 인터랙티브 SVG 렌더링 (path 클릭 지원)
  const renderInteractiveSVG = () => {
    if (!svgEditorState?.parsedSVG || !onPathSelect) {
      // 기본 SVG 렌더링
      return (
        <div 
          dangerouslySetInnerHTML={{ __html: processedSVG }}
          className="w-full h-full flex items-center justify-center"
        />
      );
    }

    // path별로 분리된 인터랙티브 SVG 렌더링
    const { metadata, paths } = svgEditorState.parsedSVG;
    const selectedPathId = svgEditorState.selectedPathId;

    return (
      <div className="w-full h-full flex items-center justify-center">
        <svg
          width={metadata.width || "100%"}
          height={metadata.height || "100%"}
          viewBox={metadata.viewBox || "0 0 100 100"}
          xmlns={metadata.xmlns || "http://www.w3.org/2000/svg"}
          className="max-w-full max-h-full"
        >
          {paths.map((path, index) => {
            const renderSettings = getPathRenderSettings(path, svgEditorState.globalConfig);
            const isSelected = selectedPathId === path.id;
            const isVisible = path.visible !== false;

            if (!isVisible) return null;

            return (
              <path
                key={path.id}
                d={path.originalPath}
                fill={renderSettings.fill}
                stroke={renderSettings.stroke}
                strokeWidth={renderSettings.strokeWidth}
                strokeLinecap={renderSettings.strokeLinecap}
                strokeLinejoin={renderSettings.strokeLinejoin}
                opacity={renderSettings.opacity}
                transform={path.transform}
                onClick={() => onPathSelect(path.id)}
                className={`cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? 'drop-shadow-lg' 
                    : 'hover:opacity-80'
                }`}
                style={{
                  filter: isSelected ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' : undefined,
                }}
                data-path-info={`Path ${index + 1} - Click to select`}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  // Wrapper 스타일 생성 (size, rotation, opacity 적용)
  const getWrapperStyle = () => {
    return {
      width: `${config.size}px`,
      height: `${config.size}px`,
      transform: `rotate(${config.rotation}deg)`,
      opacity: config.opacity,
      transformOrigin: 'center',
      transition: 'all 0.3s ease',
    };
  };

  // 애니메이션 스타일 생성 (애니메이션만)
  const getAnimationStyle = () => {
    // Advanced Animation이 있는 경우
    if (animationConfig && animationConfig.type && animationConfig.direction) {
      return {
        animationDuration: `${animationConfig.duration}s`,
        animationIterationCount: animationConfig.iterationCount,
        animationTimingFunction: animationConfig.timingFunction,
        animationDelay: `${animationConfig.delay}s`,
      };
    }

    // Basic Animation (기존 방식) - 이 경우 wrapper 스타일과 함께 적용
    if (config.animation === 'spin') {
      return {
        animation: 'spin 2s linear infinite',
      };
    } else if (config.animation === 'pulse') {
      return {
        animation: 'pulse 2s ease-in-out infinite',
      };
    } else if (config.animation === 'scale') {
      return {
        animation: 'scale 2s ease-in-out infinite',
      };
    } else if (config.animation === 'bounce') {
      return {
        animation: 'bounce 2s ease-in-out infinite',
      };
    }

    return {};
  };

  // 애니메이션 클래스명 생성
  const getAnimationClassName = () => {
    if (animationConfig && animationConfig.type && animationConfig.direction) {
      return `${animationConfig.type}-${animationConfig.direction}`;
    }
    return '';
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Preview
        </h2>
        
        {svgEditorState?.parsedSVG && (
          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {svgEditorState.editMode === 'individual' ? 'Individual Mode' : 'Global Mode'} • {svgEditorState.parsedSVG.paths.length} paths
          </div>
        )}
      </div>

      {/* SVG Preview */}
      <div className="flex-1 flex items-center justify-center">
        <div 
          className={`relative p-20 rounded-lg `}
          style={{ 
            minHeight: '500px', 
            minWidth: '500px'
          }}
        >
          {svgContent ? (
            <div 
              style={getWrapperStyle()}
              className="w-full h-full flex items-center justify-center"
            >
              <div 
                style={getAnimationStyle()}
                className={`w-full h-full flex items-center justify-center ${getAnimationClassName()}`}
              >
                {renderInteractiveSVG()}
              </div>
            </div>
          ) : (
            <div className={`text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <p className="text-lg mb-2">No SVG uploaded</p>
              <p className="text-sm">Upload an image or SVG file to see the preview</p>
            </div>
          )}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(${config.rotation}deg); }
          to { transform: rotate(${config.rotation + 360}deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: ${config.opacity}; }
          50% { opacity: ${Math.max(0.3, config.opacity - 0.3)}; }
        }

        @keyframes scale {
          0%, 100% { transform: scale(1) rotate(${config.rotation}deg); }
          50% { transform: scale(1.1) rotate(${config.rotation}deg); }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: rotate(${config.rotation}deg) translateY(0); }
          40%, 43% { transform: rotate(${config.rotation}deg) translateY(-30px); }
          70% { transform: rotate(${config.rotation}deg) translateY(-15px); }
        }
      `}</style>
    </div>
  );
}