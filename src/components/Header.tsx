import { Code2, Github, Sun, Moon, Download, HelpCircle, X } from 'lucide-react';



interface HeaderProps {
  onExportCode: () => void;
  onDownloadSVG?: () => void;
  onShowHelp?: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Header({ onExportCode, onDownloadSVG, onShowHelp, isDarkMode, onToggleTheme}: HeaderProps) {

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4 min-h-16 flex flex-col md:flex-row md:items-center justify-between py-2 md:py-0">
        {/* Top row on mobile, left side on desktop */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={() => window.location.href = '/'}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Code2 className={`w-5 h-5 ${isDarkMode ? 'text-black' : 'text-white'} flex-shrink-0`} />
              </div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>SVG Studio</h1>
            </div>
          </button>




          {/* Theme toggle and social links - visible on mobile top row */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 flex-shrink-0" /> : <Moon className="w-4 h-4 flex-shrink-0" />}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Github className="w-4 h-4 flex-shrink-0" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <X className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Bottom row on mobile, center on desktop */}
        <div className="flex items-center justify-center space-x-4 mt-2 md:mt-0 md:ml-[-40px]">
          <div className="flex items-center space-x-2">
            <button
              onClick={onExportCode}
              className={`px-4 py-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} rounded-lg transition-colors font-medium flex items-center space-x-2`}
            >
              <Code2 className="w-4 h-4 flex-shrink-0" />
              <span>Export Code</span>
            </button>
            
           {/* <Cloud/> */}

            {onDownloadSVG && (
              <button
                onClick={onDownloadSVG}
                className={`px-4 py-2 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors font-medium flex items-center space-x-2`}
                title="Download SVG"
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                <span>Download SVG</span>
              </button>
            )}
          </div>

          {/* <Cloud /> */}

          {/* Help Button - visible on desktop */}
          {onShowHelp && (
            <button
              onClick={onShowHelp}
              className={`hidden md:flex px-4 py-3 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors items-center space-x-2`}
              title="Help & Usage Guide"
            >
              <HelpCircle className="w-4 h-4 flex-shrink-0" />
            </button>
          )}

          {/* Theme Toggle - visible on desktop */}
          <button
            onClick={onToggleTheme}
            className={`hidden md:flex px-4 py-3 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors items-center space-x-2`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4 flex-shrink-0" /> : <Moon className="w-4 h-4 flex-shrink-0" />}
          </button>
        </div>

        {/* Right side - visible on desktop only */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Github className="w-5 h-5 flex-shrink-0" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-black rounded-full">
                <span className="text-white text-xs font-bold">𝕏</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}