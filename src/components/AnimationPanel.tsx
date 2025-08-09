'use client';

import { useState, useEffect } from 'react';
import { Zap, ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { AnimationConfig } from '@/types/svgTypes';
import { loadAnimationCSS } from '@/utils/cssLoader';

interface AnimationPanelProps {
  onAnimationChange: (config: AnimationConfig | null) => void;
  isDarkMode: boolean;
  initialConfig?: AnimationConfig;
}

// 애니메이션 카테고리와 방향 정의
const ANIMATION_CATEGORIES = {
  swing: {
    name: 'Swing',
    directions: [
      'top-fwd', 'top-bck', 'bottom-fwd', 'bottom-bck',
      'left-fwd', 'left-bck', 'right-fwd', 'right-bck',
      'top-left-fwd', 'top-left-bck', 'top-right-fwd', 'top-right-bck',
      'bottom-left-fwd', 'bottom-left-bck', 'bottom-right-fwd', 'bottom-right-bck'
    ]
  },
  'scale-up': {
    name: 'Scale Up',
    directions: [
      'center', 'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br',
      'hor-left', 'hor-center', 'hor-right',
      'ver-top', 'ver-center', 'ver-bottom'
    ]
  },
  'scale-down': {
    name: 'Scale Down',
    directions: [
      'center', 'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br',
      'hor-left', 'hor-center', 'hor-right',
      'ver-top', 'ver-center', 'ver-bottom'
    ]
  },
  slide: {
    name: 'Slide',
    directions: [
      'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br'
    ]
  },
  'slide-fwd': {
    name: 'Slide Forward',
    directions: [
      'center', 'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br'
    ]
  },
  'slide-bck': {
    name: 'Slide Back',
    directions: [
      'center', 'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br'
    ]
  },
  'slide-rotate': {
    name: 'Slide Rotate',
    directions: [
      'hor-top', 'hor-bottom', 'hor-t-fwd', 'hor-t-bck', 'hor-b-fwd', 'hor-b-bck',
      'ver-left', 'ver-right', 'ver-l-fwd', 'ver-l-bck', 'ver-r-fwd', 'ver-r-bck'
    ]
  },
  rotate: {
    name: 'Rotate',
    directions: [
      'center', 'tl', 'tr', 'bl', 'br',
      'top', 'bottom', 'left', 'right',
      'diagonal-1', 'diagonal-2'
    ]
  },
  'rotate-90': {
    name: 'Rotate 90°',
    directions: [
      'cw', 'ccw', 'tl-cw', 'tl-ccw', 'tr-cw', 'tr-ccw',
      'bl-cw', 'bl-ccw', 'br-cw', 'br-ccw'
    ]
  },
  'rotate-scale': {
    name: 'Rotate Scale',
    directions: [
      'up', 'down', 'left', 'right',
      'tl', 'tr', 'bl', 'br'
    ]
  },
  flip: {
    name: 'Flip',
    directions: [
      'horizontal-bottom', 'horizontal-top', 'horizontal-fwd', 'horizontal-bck',
      'vertical-left', 'vertical-right', 'vertical-fwd', 'vertical-bck',
      'diagonal-1-fwd', 'diagonal-1-bck', 'diagonal-1-bl', 'diagonal-1-tr',
      'diagonal-2-fwd', 'diagonal-2-bck', 'diagonal-2-br', 'diagonal-2-tl'
    ]
  },
  'flip-2': {
    name: 'Flip 2',
    directions: [
      'hor-top-1', 'hor-top-2', 'hor-bottom-1', 'hor-bottom-2',
      'ver-left-1', 'ver-left-2', 'ver-right-1', 'ver-right-2'
    ]
  },
  'flip-scale': {
    name: 'Flip Scale',
    directions: [
      'hor-top', 'hor-bottom', 'ver-left', 'ver-right'
    ]
  },
  'flip-scale-2': {
    name: 'Flip Scale 2',
    directions: [
      'hor-top', 'hor-bottom', 'ver-left', 'ver-right'
    ]
  },
  'shadow-drop': {
    name: 'Shadow Drop',
    directions: [
      'center', 'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br', 'tb', 'lr'
    ]
  },
  'shadow-drop-2': {
    name: 'Shadow Drop 2',
    directions: [
      'center', 'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br', 'tb', 'lr'
    ]
  },
  'shadow-inset': {
    name: 'Shadow Inset',
    directions: [
      'center', 'top', 'bottom', 'left', 'right',
      'tl', 'tr', 'bl', 'br', 'tb', 'lr'
    ]
  },
  'shadow-pop': {
    name: 'Shadow Pop',
    directions: ['tl', 'tr', 'bl', 'br']
  }
} as const;

const TIMING_FUNCTIONS = [
  { value: 'ease', name: 'Ease' },
  { value: 'ease-in', name: 'Ease In' },
  { value: 'ease-out', name: 'Ease Out' },
  { value: 'ease-in-out', name: 'Ease In Out' },
  { value: 'linear', name: 'Linear' },
  { value: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', name: 'Custom Cubic' },
  { value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', name: 'Back Out' },
];

export function AnimationPanel({ onAnimationChange, isDarkMode, initialConfig }: AnimationPanelProps) {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof ANIMATION_CATEGORIES | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<string>('');
  const [duration, setDuration] = useState(2.0);
  const [iterationCount, setIterationCount] = useState<'infinite' | number>('infinite');
  const [timingFunction, setTimingFunction] = useState('ease');
  const [delay, setDelay] = useState(0);
  const [expandedSections, setExpandedSections] = useState({
    animation: true,
    settings: false
  });

  // 초기 설정 적용
  useEffect(() => {
    if (initialConfig) {
      setSelectedCategory(initialConfig.type as keyof typeof ANIMATION_CATEGORIES);
      setSelectedDirection(initialConfig.direction);
      setDuration(initialConfig.duration);
      setIterationCount(initialConfig.iterationCount);
      setTimingFunction(initialConfig.timingFunction);
      setDelay(initialConfig.delay);
    }
  }, [initialConfig]);

  // CSS 동적 로딩 및 실시간 애니메이션 적용
  useEffect(() => {
    if (selectedCategory && selectedDirection) {
      // 애니메이션 CSS 로드
      loadAnimationCSS(selectedCategory)
        .then(() => {
          const animationConfig: AnimationConfig = {
            type: selectedCategory,
            direction: selectedDirection,
            duration,
            iterationCount,
            timingFunction,
            delay
          };
          onAnimationChange(animationConfig);
        })
        .catch((error) => {
          console.warn(`Failed to load animation CSS for ${selectedCategory}:`, error);
          // CSS 로딩 실패해도 애니메이션 설정은 적용
          const animationConfig: AnimationConfig = {
            type: selectedCategory,
            direction: selectedDirection,
            duration,
            iterationCount,
            timingFunction,
            delay
          };
          onAnimationChange(animationConfig);
        });
    } else {
      onAnimationChange(null);
    }
  }, [selectedCategory, selectedDirection, duration, iterationCount, timingFunction, delay, onAnimationChange]);

  const toggleSection = (section: 'animation' | 'settings') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category: keyof typeof ANIMATION_CATEGORIES | null) => {
    setSelectedCategory(category);
    if (category && ANIMATION_CATEGORIES[category].directions.length > 0) {
      setSelectedDirection(ANIMATION_CATEGORIES[category].directions[0]);
    } else {
      setSelectedDirection('');
    }
  };



  const handleClearAnimation = () => {
    setSelectedCategory(null);
    setSelectedDirection('');
    onAnimationChange(null);
  };

  const formatDirectionName = (direction: string) => {
    return direction
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="space-y-6 h-full overflow-y-auto">
      <div className="flex items-center justify-between">
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Animation Effects
        </h2>
        {selectedCategory && (
          <button
            onClick={handleClearAnimation}
            className={`px-3 py-1 text-sm rounded cursor-pointer transition-all duration-150 transform active:scale-95 ${
              isDarkMode 
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg' 
                : 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg'
            }`}
          >
            Clear
          </button>
        )}
      </div>

      {/* Animation Category Selection */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('animation')}
          className={`w-full flex items-center justify-between p-2 rounded cursor-pointer transition-all duration-150 ${
            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Zap className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Animation Type
              {selectedCategory && (
                <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                  {ANIMATION_CATEGORIES[selectedCategory].name}
                </span>
              )}
            </span>
          </div>
          {expandedSections.animation ? (
            <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          ) : (
            <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          )}
        </button>
        
        {expandedSections.animation && (
          <div className="space-y-4 pl-4">
            {/* Category Selection */}
            <div className="space-y-2">
              <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Category</label>
              <select
                value={selectedCategory || ''}
                onChange={(e) => handleCategoryChange(e.target.value as keyof typeof ANIMATION_CATEGORIES || null)}
                className={`w-full px-3 py-2 text-sm rounded border cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-black'
                }`}
              >
                <option value="">None</option>
                {Object.entries(ANIMATION_CATEGORIES).map(([key, category]) => (
                  <option key={key} value={key}>{category.name}</option>
                ))}
              </select>
            </div>

            {/* Direction Selection */}
            {selectedCategory && (
              <div className="space-y-2">
                <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Direction</label>
                <div className="grid grid-cols-2 gap-2">
                  {ANIMATION_CATEGORIES[selectedCategory].directions.map((direction) => (
                    <button
                      key={direction}
                      onClick={() => setSelectedDirection(direction)}
                      className={`px-3 py-2 text-xs rounded transition-all duration-150 cursor-pointer transform active:scale-95 ${
                        selectedDirection === direction
                          ? isDarkMode
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-blue-500 text-white shadow-lg'
                          : isDarkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                      }`}
                    >
                      {formatDirectionName(direction)}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>

      {/* Animation Settings */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('settings')}
          className={`w-full flex items-center justify-between p-2 rounded cursor-pointer transition-all duration-150 ${
            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Settings className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Animation Settings
            </span>
          </div>
          {expandedSections.settings ? (
            <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          ) : (
            <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          )}
        </button>

        {expandedSections.settings && (
          <div className="space-y-4 pl-4">
            {/* Duration */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Duration</label>
                <span className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {duration}s
                </span>
              </div>
              <input
                type="range"
                min={0.1}
                max={3}
                step={0.1}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Iteration Count */}
            <div className="space-y-2">
              <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Repeat</label>
              <select
                value={iterationCount}
                onChange={(e) => setIterationCount(e.target.value === 'infinite' ? 'infinite' : Number(e.target.value))}
                className={`w-full px-3 py-2 text-sm rounded border cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-black'
                }`}
              >
                <option value="infinite">Infinite</option>
                <option value={1}>Once</option>
                <option value={2}>Twice</option>
                <option value={3}>3 times</option>
                <option value={5}>5 times</option>
              </select>
            </div>

            {/* Timing Function */}
            <div className="space-y-2">
              <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Easing</label>
              <select
                value={timingFunction}
                onChange={(e) => setTimingFunction(e.target.value)}
                className={`w-full px-3 py-2 text-sm rounded border cursor-pointer ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-black'
                }`}
              >
                {TIMING_FUNCTIONS.map((func) => (
                  <option key={func.value} value={func.value}>{func.name}</option>
                ))}
              </select>
            </div>

            {/* Delay */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Delay</label>
                <span className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {delay}s
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={2}
                step={0.1}
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Current Selection Display */}
      {selectedCategory && selectedDirection && (
        <div className={`p-4 rounded border ${
          isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
        }`}>
          <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Current Animation
          </div>
          <div className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-1`}>
            {ANIMATION_CATEGORIES[selectedCategory].name}
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {formatDirectionName(selectedDirection)} • {duration}s • {iterationCount === 'infinite' ? '∞' : `${iterationCount}x`}
          </div>
        </div>
      )}
    </div>
  );
}