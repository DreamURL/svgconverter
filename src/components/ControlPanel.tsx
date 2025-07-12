'use client';

import { SVGConfig } from '@/app/page';
import { RotateCcw, Palette, Move, Zap, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ControlPanelProps {
  config: SVGConfig;
  onChange: (config: SVGConfig) => void;
  fileName: string;
  onReset: () => void;
  isDarkMode: boolean;
}

export function ControlPanel({ config, onChange, fileName, onReset, isDarkMode }: ControlPanelProps) {
  const [expandedSections, setExpandedSections] = useState({
    animation: true,
    hover: true,
  });

  const handleChange = (key: keyof SVGConfig, value: string | number | boolean) => {
    onChange({ ...config, [key]: value });
  };

  const toggleSection = (section: 'animation' | 'hover') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // 슬라이더 + 숫자 표시 컴포넌트
  const NumberSlider = ({ 
    value, 
    onChange, 
    min, 
    max, 
    step = 1, 
    label,
    unit = '',
    isDarkMode,
  }: { 
    value: number; 
    onChange: (value: number) => void; 
    min: number; 
    max: number; 
    step?: number; 
    label?: string; 
    unit?: string;
    isDarkMode?: boolean;
  }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragValue, setDragValue] = useState(value);

    // 외부에서 값이 변경되면 드래그 값도 업데이트 (드래그 중이 아닐 때만)
    useEffect(() => {
      if (!isDragging) {
        setDragValue(value);
      }
    }, [value, isDragging]);

    const handleSliderMouseDown = () => {
      setIsDragging(true);
    };

    const handleSliderMouseUp = () => {
      setIsDragging(false);
      onChange(dragValue);
    };

    const handleSliderInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setDragValue(newValue);
      // 드래그 중에는 미리보기 업데이트 안함
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setDragValue(newValue);
      // 드래그 중이 아닐 때만 실시간 업데이트
      if (!isDragging) {
        onChange(newValue);
      }
    };

    useEffect(() => {
      const handleGlobalMouseUp = () => {
        if (isDragging) {
          setIsDragging(false);
          onChange(dragValue);
        }
      };

      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
    }, [isDragging, dragValue, onChange]);
    
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{label}</span>
          <div className="flex items-center space-x-1">
            <span className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {dragValue}{unit}
            </span>
          </div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={dragValue}
          onInput={handleSliderInput}
          onChange={handleSliderChange}
          onMouseDown={handleSliderMouseDown}
          onMouseUp={handleSliderMouseUp}
          className="w-full accent-blue-500 cursor-pointer"
        />
      </div>
    );
  };

  return (
    <div className="space-y-6 h-full overflow-y-auto">
      <div className="flex items-center justify-between">
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Controls</h2>
        <button
          onClick={onReset}
          className={`p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
          title="Reset"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p>File: {fileName}</p>
      </div>

      {/* Color Control */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Palette className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <label className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Colors</label>
        </div>
        
        {/* Stroke Color */}
        <div className="space-y-2">
          <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Stroke Color</label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={config.color}
              onChange={(e) => handleChange('color', e.target.value)}
              className="w-10 h-10 rounded border border-gray-600 cursor-pointer"
            />
            <input
              type="text"
              value={config.color}
              onChange={(e) => handleChange('color', e.target.value)}
              className={`flex-1 px-3 py-2 text-sm rounded border ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300 text-black'
              }`}
              placeholder="#ffffff"
            />
          </div>
        </div>
        
        {/* Fill Color */}
        <div className="space-y-2">
          <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Fill Color</label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value={config.fillColor}
              onChange={(e) => handleChange('fillColor', e.target.value)}
              className="w-10 h-10 rounded border border-gray-600 cursor-pointer"
            />
            <input
              type="text"
              value={config.fillColor}
              onChange={(e) => handleChange('fillColor', e.target.value)}
              className={`flex-1 px-3 py-2 text-sm rounded border ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300 text-black'
              }`}
              placeholder="#000000"
            />
          </div>
        </div>
        
        {/* Stroke Width */}
        <div className="space-y-2">
          <NumberSlider
            value={config.strokeWidth}
            onChange={(value) => handleChange('strokeWidth', value)}
            min={0}
            max={10}
            step={0.5}
            label="Stroke Width"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>

      {/* Size Control */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Move className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <label className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Size</label>
        </div>
        
        <NumberSlider
          value={config.size}
          onChange={(value) => handleChange('size', value)}
          min={10}
          max={500}
          step={1}
          label="Size"
          unit="px"
        />
      </div>

      {/* Rotation Control */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <RotateCcw className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <label className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Rotation</label>
        </div>
        
        <NumberSlider
          value={config.rotation}
          onChange={(value) => handleChange('rotation', value)}
          min={0}
          max={360}
          step={1}
          label="Rotation"
          unit="°"
        />
      </div>

      {/* Opacity Control */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Eye className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          <label className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Opacity</label>
        </div>
        
        <NumberSlider
          value={config.opacity}
          onChange={(value) => handleChange('opacity', value)}
          min={0}
          max={1}
          step={0.01}
          label="Opacity"
          unit=""
        />
      </div>

      {/* Animation Control */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('animation')}
          className={`w-full flex items-center justify-between p-2 rounded ${
            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Zap className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Animation
              {config.animation !== 'none' && (
                <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                  {config.animation}
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
            <div className="space-y-4">
              <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 block`}>Type</label>
              <select
                value={config.animation}
                onChange={(e) => handleChange('animation', e.target.value)}
                className={`w-full px-3 py-2 text-sm rounded border ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-black'
                } ${config.animation !== 'none' ? '' : ''}`}
              >
                <option value="none">None</option>
                <option value="spin">Spin</option>
                <option value="pulse">Pulse</option>
                <option value="scale">Scale</option>
                <option value="bounce">Bounce</option>
              </select>
            </div>
            
          </div>
        )}
      </div>

      {/* Hover Effects */}
      <div className="space-y-3">
        <button
          onClick={() => toggleSection('hover')}
          className={`w-full flex items-center justify-between p-2 rounded ${
            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <Move className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Hover Effects
              {config.hoverEffect !== 'none' && (
                <span className="ml-2 text-xs bg-purple-500 text-white px-2 py-1 rounded">
                  {config.hoverEffect}
                </span>
              )}
            </span>
          </div>
          {expandedSections.hover ? (
            <ChevronUp className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          ) : (
            <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          )}
        </button>
        
        {expandedSections.hover && (
          <div className="space-y-4 pl-4">
            <div className="space-y-4">
              <label className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 block`}>Type</label>
              <select
                value={config.hoverEffect}
                onChange={(e) => handleChange('hoverEffect', e.target.value)}
                className={`w-full px-3 py-2 text-sm rounded border ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-black'
                }`}
              >
                <option value="none">None</option>
                <option value="scale">Scale</option>
                <option value="rotate">Rotate</option>
                <option value="opacity">Opacity</option>
              </select>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
