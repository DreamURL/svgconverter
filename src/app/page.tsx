'use client';

import { useState, useReducer, useEffect } from 'react';
import Link from 'next/link';
import { Download, Edit, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { UploadPanel } from '@/components/UploadPanel';
import { PreviewPanel } from '@/components/PreviewPanel';
import { ControlPanel } from '@/components/ControlPanel';
import { CodeModal } from '@/components/CodeModal';
import { ExportTestModal } from '@/components/ExportTestModal';
import { HelpModal } from '@/components/HelpModal';
import { ParsedSVG } from '@/utils/svgParser';
import { 
  svgEditorReducer, 
  migrateToGlobalConfig, 
  convertToLegacyConfig,
  getPathRenderSettings 
} from '@/utils/svgStateManager';

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
  const [isControlPanelCollapsed, setIsControlPanelCollapsed] = useState(false);
  
  // 새로운 통합 상태 관리
  const [svgEditorState, dispatchSVGEditor] = useReducer(svgEditorReducer, {
    globalConfig: {
      color: '#000000',
      fillColor: '#000000',
      strokeWidth: 1,
      size: 100,
      rotation: 0,
      opacity: 1,
      animation: 'none',
      hoverEffect: 'none',
    },
    parsedSVG: null,
    selectedPathId: null,
    editMode: 'individual',
    showPathList: false,
  });
  
  // 기존 시스템과의 호환성을 위한 legacy config
  const config = convertToLegacyConfig(svgEditorState.globalConfig);
  const setConfig = (newConfig: SVGConfig) => {
    dispatchSVGEditor({
      type: 'UPDATE_GLOBAL',
      changes: migrateToGlobalConfig(newConfig),
    });
  };
  
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isExportTestModalOpen, setIsExportTestModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  
  // 디버깅을 위한 상태 모니터링
  useEffect(() => {
    console.log('SVG Editor State changed:', svgEditorState);
  }, [svgEditorState]);

  // AdSense 초기화
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, []);

  // SVG 다운로드 함수
  const handleDownloadSVG = () => {
    if (!svgContent || !svgEditorState.parsedSVG) return;

    try {
      // SVG 생성 (애니메이션과 호버 효과 제외)
      const paths = svgEditorState.parsedSVG.paths
        .filter(path => path.visible)
        .map(path => {
          const renderSettings = getPathRenderSettings(path, svgEditorState.globalConfig);
          
          return `    <path
      d="${path.originalPath}"
      fill="${renderSettings.fill}"
      stroke="${renderSettings.stroke}"
      stroke-width="${renderSettings.strokeWidth}"
      stroke-linecap="${renderSettings.strokeLinecap}"
      stroke-linejoin="${renderSettings.strokeLinejoin}"
      opacity="${renderSettings.opacity}"
      ${path.transform ? `transform="${path.transform}"` : ''}
    />`;
        })
        .join('\n');

      const svgCode = `<svg ${svgEditorState.parsedSVG.metadata.width ? `width="${svgEditorState.parsedSVG.metadata.width}"` : ''} ${svgEditorState.parsedSVG.metadata.height ? `height="${svgEditorState.parsedSVG.metadata.height}"` : ''} ${svgEditorState.parsedSVG.metadata.viewBox ? `viewBox="${svgEditorState.parsedSVG.metadata.viewBox}"` : ''} xmlns="${svgEditorState.parsedSVG.metadata.xmlns || 'http://www.w3.org/2000/svg'}" style="transform: scale(${config.size / 100}) rotate(${config.rotation}deg);">
${paths}
</svg>`;

      // 파일 다운로드
      const blob = new Blob([svgCode], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName.replace(/\.[^/.]+$/, '')}_edited.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading SVG:', error);
      alert('Error downloading SVG. Please try again.');
    }
  };


  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header 
        onExportCode={() => setIsCodeModalOpen(true)}
        onDownloadSVG={svgContent ? handleDownloadSVG : undefined}
        onShowHelp={() => setIsHelpModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <main className="pt-20 md:pt-16">
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
            
            <div className="grid md:grid-cols-5 gap-8 items-start">
              {/* Upload Section */}
              <div className="md:col-span-3 max-w-4xl">
                <UploadPanel
                  onUpload={(content: string, name: string, parsedSVG?: ParsedSVG) => {
                    setSvgContent(content);
                    setFileName(name);
                    dispatchSVGEditor({
                      type: 'SET_PARSED_SVG',
                      parsedSVG: parsedSVG || null,
                    });
                  }}
                  isConverting={isConverting}
                  setIsConverting={setIsConverting}
                  isDarkMode={isDarkMode}
                />
              </div>

              {/* Product Hunt Section */}
              <div className="md:col-span-2 text-center md:text-left">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      🚀 Love SVG Studio?
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Help us reach more developers by leaving a review and voting on Product Hunt. Your support helps us build better tools for the community!
                    </p>
                  </div>
                  <a href="https://www.producthunt.com/products/svg-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-svg&#0045;studio" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=992197&theme=dark&t=1752569302300"
                      alt="SVG&#0032;Studio - Edit&#0032;SVG&#0032;and&#0032;export&#0032;as&#0032;react&#0047;inline&#0047;css&#0032;code | Product Hunt"
                      style={{ width: 250, height: 54 }}
                      width={250}
                      height={54}
                    />
                  </a>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    ⭐ Takes less than 30 seconds
                  </p>
                </div>
              </div>
            </div>

            {/* Google AdSense Section */}
            <div className="mt-12 text-center">
              <div className={`p-6 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  Advertisement
                </p>
                <ins className="adsbygoogle"
                     style={{display: 'block'}}
                     data-ad-client="ca-pub-9786013383976168"
                     data-ad-slot="9580679762"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
              </div>
            </div>


            {/* SEO Links Section */}
            <div className="mt-16 text-center">
              <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Explore Our SVG Tools
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link 
                  href="/free-svg-converter"
                  className={`p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center mb-4`}>
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    Free SVG Converter
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Convert any image to SVG format instantly. No registration required, 100% free.
                  </p>
                </Link>

                <Link 
                  href="/svg-editor-online"
                  className={`p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} flex items-center justify-center mb-4`}>
                    <Edit className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    SVG Editor Online
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Professional SVG editor with colors, animations, and real-time preview.
                  </p>
                </Link>

                <Link 
                  href="/react-svg-components"
                  className={`p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} flex items-center justify-center mb-4`}>
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    React SVG Components
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Generate TypeScript React components from your SVG files.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen relative">
            {/* Left Panel - Controls */}
            {!isControlPanelCollapsed && (
              <div className={`fixed left-0 top-16 w-80 h-[calc(100vh-4rem)] border-r ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} overflow-y-auto z-40`}>
                <div className="p-6">
                  <ControlPanel
              config={config}
              onChange={(newConfig) => {
                console.log('Config changed:', newConfig); // 디버깅용
                setConfig(newConfig);
              }}
              fileName={fileName}
              onReset={() => {
                setSvgContent('');
                setFileName('');
                dispatchSVGEditor({
                  type: 'UPDATE_GLOBAL',
                  changes: {
                    color: '#ffffff',
                    fillColor: '#000000',
                    strokeWidth: 1,
                    size: 100,
                    rotation: 0,
                    opacity: 1,
                    animation: 'none',
                    hoverEffect: 'none',
                  },
                });
                dispatchSVGEditor({
                  type: 'SET_PARSED_SVG',
                  parsedSVG: null,
                });
              }}
              isDarkMode={isDarkMode}
              // 새로운 path 편집 관련 props
              svgEditorState={svgEditorState}
              onPathUpdate={(pathId, changes) => {
                dispatchSVGEditor({
                  type: 'UPDATE_PATH',
                  pathId,
                  changes,
                });
              }}
              onPathToggleIndividual={(pathId) => {
                dispatchSVGEditor({
                  type: 'TOGGLE_INDIVIDUAL',
                  pathId,
                });
              }}
              onPathReset={(pathId) => {
                dispatchSVGEditor({
                  type: 'RESET_PATH',
                  pathId,
                });
              }}
              onPathSelect={(pathId) => {
                dispatchSVGEditor({
                  type: 'SET_SELECTED_PATH',
                  pathId,
                });
              }}
              onEditModeChange={(mode) => {
                dispatchSVGEditor({
                  type: 'SET_EDIT_MODE',
                  mode,
                });
              }}
            />
                </div>
              </div>
            )}
            
            {/* Toggle Button */}
            <button
              onClick={() => setIsControlPanelCollapsed(!isControlPanelCollapsed)}
              className={`fixed top-32 ${isControlPanelCollapsed ? 'left-2' : 'left-70'} z-50 p-2 rounded-lg ${isDarkMode ? 'bg-blue-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-black'} shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}
              title={isControlPanelCollapsed ? 'Show Controls' : 'Hide Controls'}
            >
              {isControlPanelCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
            
            {/* Right Panel - Preview */}
            <div className="w-full h-full overflow-auto">
              <div className={`${!isControlPanelCollapsed ? 'ml-80' : ''} p-6 transition-all duration-300`}>
                <PreviewPanel
                  svgContent={svgContent}
                  config={config}
                  isDarkMode={isDarkMode}
                  // 새로운 path별 편집 정보 전달
                  svgEditorState={svgEditorState}
                  onPathSelect={(pathId: string) => {
                    dispatchSVGEditor({
                      type: 'SET_SELECTED_PATH',
                      pathId,
                    });
                  }}
                />
              </div>
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
        // 새로운 path별 편집 정보 전달
        svgEditorState={svgEditorState}
      />
      <ExportTestModal
        isOpen={isExportTestModalOpen}
        onClose={() => setIsExportTestModalOpen(false)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
