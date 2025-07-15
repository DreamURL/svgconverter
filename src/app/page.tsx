'use client';

import { useState, useReducer, useEffect } from 'react';
import Link from 'next/link';
import { Download, Edit, Code } from 'lucide-react';
import { Header } from '@/components/Header';
import { UploadPanel } from '@/components/UploadPanel';
import { PreviewPanel } from '@/components/PreviewPanel';
import { ControlPanel } from '@/components/ControlPanel';
import { CodeModal } from '@/components/CodeModal';
import { ExportTestModal } from '@/components/ExportTestModal';
import { ParsedSVG } from '@/utils/svgParser';
import { 
  svgEditorReducer, 
  migrateToGlobalConfig, 
  convertToLegacyConfig 
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
  const [isConverting, setIsConverting] = useState(false);
  
  // 디버깅을 위한 상태 모니터링
  useEffect(() => {
    console.log('SVG Editor State changed:', svgEditorState);
  }, [svgEditorState]);


  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header 
        onExportCode={() => setIsCodeModalOpen(true)}
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
          <div className="h-full flex">
            {/* Left Panel - Controls */}
            <div className={`w-80 h-[1200px] border-r ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} p-6 overflow-y-auto`}>     
              <div className="ml-4">     
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
            /></div>  
            </div>
            
            {/* Right Panel - Preview */}
            <div className="flex-1 p-6 overflow-y-auto">
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
    </div>
  );
}
