import { Code2, Github, Twitter, Sun, Moon } from 'lucide-react';
import { Cup2 } from '@/components/ui/Cloud';

interface HeaderProps {
  onExportCode: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Header({ onExportCode, isDarkMode, onToggleTheme}: HeaderProps) {

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

          <Cup2 />

        {/* Center buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onExportCode}
            className={`px-4 py-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} rounded-lg transition-colors font-medium flex items-center space-x-2`}
          >
            <Code2 className="w-4 h-4" />
            <span>Export Code</span>
          </button>


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