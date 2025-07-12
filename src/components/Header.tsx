import { Code2, Github, Twitter, Sun, Moon, Download, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Cup } from '@/components/ui/Cloud';

interface HeaderProps {
  onExportCode: () => void;
  onDownloadSVG: () => void;
  onDownloadGIF: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenExportTest?: () => void;
}

export function Header({ onExportCode, onDownloadSVG, onDownloadGIF, isDarkMode, onToggleTheme, onOpenExportTest}: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => window.location.href = '/'}
          className="cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-lg flex items-center justify-center`}>
              <Code2 className={`w-5 h-5 ${isDarkMode ? 'text-black' : 'text-white'}`} />
            </div>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>SVG Studio</h1>
          </div>
        </button>

        {/* Center buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onExportCode}
            className={`px-4 py-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} rounded-lg transition-colors font-medium flex items-center space-x-2`}
          >
            <Code2 className="w-4 h-4" />
            <span>Export Code</span>
          </button>

          <Cup />

<div
      style={{
        // Size property
        width: '100px',
        height: '100px',
        
        // Rotation property  
        transform: 'rotate(0deg)',
        
        // Opacity property
        opacity: 1,
        
        // Transition for smooth hover effects
        transition: 'all 1.5s ease-in-out',
        
        // Animation property
        
      }}
      
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
<path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#c13333" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>

          {/* Download dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`px-4 py-2 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'} rounded-lg transition-colors font-medium flex items-center space-x-2`}
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <div className={`absolute top-full right-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg z-10`}>
                <button
                  onClick={() => {
                    onDownloadSVG();
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left ${isDarkMode ? 'hover:bg-gray-700 text-white rounded-lg' : 'hover:bg-gray-100 text-black rounded-lg'} transition-colors flex items-center space-x-2`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download SVG</span>
                </button>
                <button
                  onClick={() => {
                    onDownloadGIF();
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left ${isDarkMode ? 'hover:bg-gray-700 text-white rounded-lg' : 'hover:bg-gray-100 text-black rounded-lg'} transition-colors flex items-center space-x-2`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download GIF</span>
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`px-4 py-3 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors flex items-center space-x-2`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}