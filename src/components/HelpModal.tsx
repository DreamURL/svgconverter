'use client';

import { X, Upload, Settings, Code, Download, Eye, RotateCcw, Palette, Move, Zap, Star } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export function HelpModal({ isOpen, onClose, isDarkMode }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            📖 How to Use SVG Studio
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'} transition-colors`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Step 1: Upload */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Upload Your Image</h3>
            </div>
            <div className="ml-11 space-y-2">
              <div className="flex items-center space-x-2">
                <Upload className="w-5 h-5 text-blue-500" />
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Drag & Drop</strong> or <strong>Click</strong> to upload your image
                </p>
              </div>
              <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                • Supported formats: SVG, PNG, JPG, GIF, WebP<br/>
                • Maximum file size: 10MB<br/>
                • Images will be automatically converted to SVG format
              </div>
            </div>
          </div>

          {/* Step 2: Edit Mode */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Choose Edit Mode</h3>
            </div>
            <div className="ml-11 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-green-500" />
                  <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Global Mode</p>
                </div>
                <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Apply the same settings to all paths in your SVG
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-green-500" />
                  <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Individual Mode</p>
                </div>
                <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  • Each path starts with its original colors<br/>
                  • Click the <Eye className="w-4 h-4 inline" /> icon to expand path options<br/>
                  • Click the <Settings className="w-4 h-4 inline" /> icon to enable/disable individual settings<br/>
                  • Use the global <Settings className="w-4 h-4 inline" /> button to toggle all paths at once
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Customize */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Customize Your SVG</h3>
            </div>
            <div className="ml-11 space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-purple-500" />
                    <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Colors</p>
                  </div>
                  <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    • Stroke Color: Border color<br/>
                    • Fill Color: Interior color<br/>
                    • Stroke Width: Line thickness
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Move className="w-5 h-5 text-purple-500" />
                    <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Transform</p>
                  </div>
                  <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    • Size: Scale the SVG<br/>
                    • Rotation: Rotate in degrees<br/>
                    • Opacity: Transparency level
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Effects</p>
                </div>
                <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  • Animations: Spin, Pulse, Scale, Bounce<br/>
                  • Hover Effects: Scale, Rotate, Opacity changes
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Preview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Preview Your Changes</h3>
            </div>
            <div className="ml-11 space-y-2">
              <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                • Real-time preview shows all your changes<br/>
                • Click on individual paths to select them<br/>
                • Test animations and hover effects in the preview area
              </div>
            </div>
          </div>

          {/* Step 5: Export */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Export Your Work</h3>
            </div>
            <div className="ml-11 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-red-500" />
                  <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Export Code</p>
                </div>
                <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  • React Components: Ready-to-use JSX components<br/>
                  • Inline SVG: HTML-ready SVG code<br/>
                  • CSS Styles: Separated CSS animations and effects
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-red-500" />
                  <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Download SVG</p>
                </div>
                <div className={`ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  • Download as static SVG file<br/>
                  • Includes all colors, transforms, and opacity<br/>
                  • Perfect for use in design tools or websites
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Reset */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Reset & Start Over</h3>
            </div>
            <div className="ml-11 space-y-2">
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-gray-500" />
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Use the reset button in the Controls panel to start over with a new image
                </p>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pt-6`}>
            <div className="text-center space-y-4">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                💖 Support SVG Studio
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                If you find SVG Studio helpful, please consider supporting us:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://www.producthunt.com/products/svg-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white transition-colors`}
                >
                  <Star className="w-4 h-4" />
                  <span>Leave a Review on Product Hunt</span>
                </a>
                <a
                  href="https://x.com/intent/tweet?text=Just%20discovered%20SVG%20Studio%20-%20an%20amazing%20tool%20for%20editing%20SVG%20files%20and%20exporting%20React%20components!%20Check%20it%20out%20at%20[your-website-url]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-900 hover:bg-gray-800'} text-white transition-colors`}
                >
                  <div className="w-4 h-4 flex items-center justify-center bg-black rounded-full">
                    <span className="text-white text-xs font-bold">𝕏</span>
                  </div>
                  <span>Share on X</span>
                </a>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Your support helps us build better tools for the developer community! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}