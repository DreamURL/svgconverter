'use client';

import { useState } from 'react';
import { Code2, Copy, Check, X, Sun, Moon } from 'lucide-react';

interface ExportTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function ExportTestModal({ isOpen, onClose, isDarkMode, onToggleTheme }: ExportTestModalProps) {
  const [codeType, setCodeType] = useState<'react' | 'inline' | 'css'>('react');
  const [codeInput, setCodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleCodes = {
    react: `import React from 'react';

interface CloudssvgrepocomProps {
  size?: number;
  color?: string;
  rotation?: number;
  opacity?: number;
  className?: string;
}

export function Cloudssvgrepocom({ 
  size = 204,
  color = "#ffffff",
  rotation = 0,
  opacity = 1,
  className = ""
}: CloudssvgrepocomProps) {
  return (
    <div
      className={\`transition-all duration-300 ease-in-out animate-scale hover:opacity-[0.43] \${className}\`}
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        transform: \`rotate(\${rotation}deg)\`,
        opacity: opacity,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}`,
    inline: `<div
  className="transition-all duration-300 ease-in-out animate-scale hover:opacity-[0.43]"
  style={{
    width: '204px',
    height: '204px',
    transform: 'rotate(0deg)',
    opacity: 1
  }}
>
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>`,
    css: `.cloudssvgrepocom {
  width: 204px;
  height: 204px;
  transform: rotate(0deg);
  opacity: 1;
  transition: all 1s ease-in-out;
  animation: scale 0.4s ease-in-out infinite;
}

.cloudssvgrepocom:hover {
  opacity: 0.43;
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
}

/* HTML */
<div class="cloudssvgrepocom">
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>`
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const loadSampleCode = () => {
    setCodeInput(sampleCodes[codeType]);
    setErrorMessage('');
  };

  const renderPreview = () => {
    if (!codeInput.trim()) {
      return (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <p>Enter some code to see the preview</p>
        </div>
      );
    }

    try {
      if (codeType === 'react') {
        // Extract JSX from React component
        const returnMatch = codeInput.match(/return\s*\([\s\S]*?\);/);
        if (!returnMatch) {
          throw new Error('Could not find return statement in React component');
        }
        
        let jsxContent = returnMatch[0]
          .replace(/return\s*\(/, '')
          .replace(/\);$/, '')
          .trim();
        
        // Convert JSX to HTML
        jsxContent = jsxContent
          .replace(/className=\{[^}]+\}/g, (match) => {
            const content = match.replace(/className=\{`([^`]+)`\}/, '$1')
              .replace(/\$\{className\}/g, '')
              .replace(/\$\{[^}]+\}/g, '')
              .replace(/className=\{"([^"]+)"\}/, '$1')
              .replace(/className=\{'([^']+)'\}/, '$1')
              .trim();
            return `class="${content}"`;
          })
          .replace(/className="([^"]+)"/g, 'class="$1"')
          .replace(/style=\{\{([^}]+)\}\}/g, (match, styles) => {
            const styleProps = styles
              .split(',')
              .map((prop: string) => {
                const [key, value] = prop.split(':').map((s: string) => s.trim());
                if (key && value) {
                  const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                  const cssValue = value.replace(/[`'"]/g, '').replace(/\$\{[^}]+\}/g, '204');
                  return `${cssKey}: ${cssValue}`;
                }
                return '';
              })
              .filter(Boolean)
              .join('; ');
            return `style="${styleProps}"`;
          })
          .replace(/strokeWidth="([^"]+)"/g, 'stroke-width="$1"')
          .replace(/strokeLinecap="([^"]+)"/g, 'stroke-linecap="$1"')
          .replace(/strokeLinejoin="([^"]+)"/g, 'stroke-linejoin="$1"')
          .replace(/\{color\}/g, '#ffffff');
        
        return <div dangerouslySetInnerHTML={{ __html: jsxContent }} />;
      } else if (codeType === 'inline') {
        return <div dangerouslySetInnerHTML={{ __html: codeInput }} />;
      } else if (codeType === 'css') {
        // CSS와 HTML을 분리
        const htmlCommentIndex = codeInput.indexOf('/* HTML */');
        
        if (htmlCommentIndex !== -1) {
          // CSS 부분 (/* HTML */ 이전까지)
          const cssContent = codeInput.substring(0, htmlCommentIndex).trim();
          
          // HTML 부분 (/* HTML */ 이후부터)
          const htmlContent = codeInput.substring(htmlCommentIndex).trim();
          const htmlMatch = htmlContent.match(/<div[\s\S]*?<\/div>/);
          
          if (htmlMatch) {
            return (
              <>
                <style dangerouslySetInnerHTML={{ __html: cssContent }} />
                <div dangerouslySetInnerHTML={{ __html: htmlMatch[0] }} />
              </>
            );
          }
        }
        
        // Fallback
        return <div dangerouslySetInnerHTML={{ __html: codeInput }} />;
      }
    } catch (error) {
      setErrorMessage(`Preview error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return (
        <div className="flex items-center justify-center h-64 text-red-500">
          <p>Error rendering preview</p>
        </div>
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className={`relative w-full max-w-7xl mx-auto rounded-lg shadow-xl ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center space-x-2">
              <Code2 className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Export Code Tester
              </h2>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={onToggleTheme}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Controls */}
            <div className={`p-4 rounded-lg border mb-6 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <label className="font-medium">Code Type:</label>
                <div className="flex gap-2">
                  {(['react', 'inline', 'css'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setCodeType(type)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        codeType === type
                          ? 'bg-blue-600 text-white'
                          : isDarkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type === 'react' ? 'React Component' : 
                       type === 'inline' ? 'Inline SVG' : 'CSS/HTML'}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={loadSampleCode}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Load Sample
                </button>
                
                <button
                  onClick={() => copyToClipboard(sampleCodes[codeType])}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                    isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Sample</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Split view */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Code input */}
              <div className={`p-4 rounded-lg border ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className="text-lg font-medium mb-3">Code Input</h3>
                <textarea
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  placeholder={`Paste your ${codeType === 'react' ? 'React component' : codeType === 'inline' ? 'inline SVG' : 'CSS/HTML'} code here...`}
                  className={`w-full h-80 p-3 rounded border font-mono text-sm resize-none ${
                    isDarkMode
                      ? 'bg-gray-900 border-gray-600 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
                {errorMessage && (
                  <div className="mt-3 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
                    {errorMessage}
                  </div>
                )}
              </div>

              {/* Preview */}
              <div className={`p-4 rounded-lg border ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className="text-lg font-medium mb-3">Preview</h3>
                <div className={`h-80 p-4 rounded border flex items-center justify-center overflow-auto ${
                  isDarkMode
                    ? 'bg-gray-900 border-gray-600'
                    : 'bg-white border-gray-300'
                }`}>
                  {renderPreview()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
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
        
        .animate-spin {
          animation: spin 2s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-scale {
          animation: scale 2s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
