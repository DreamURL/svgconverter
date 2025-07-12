'use client';

import { EditablePathElement, SVGEditorState, PathRenderSettings } from '@/types/svgTypes';
import { getPathRenderSettings } from '@/utils/svgStateManager';
import { Eye, EyeOff, RotateCcw, Settings } from 'lucide-react';
import { useState } from 'react';

interface PathEditorProps {
  svgEditorState: SVGEditorState;
  onPathUpdate: (pathId: string, changes: any) => void;
  onPathToggleIndividual: (pathId: string) => void;
  onPathReset: (pathId: string) => void;
  onPathSelect: (pathId: string | null) => void;
  isDarkMode: boolean;
}

export function PathEditor({ 
  svgEditorState, 
  onPathUpdate, 
  onPathToggleIndividual,
  onPathReset,
  onPathSelect,
  isDarkMode 
}: PathEditorProps) {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());

  if (!svgEditorState.parsedSVG || svgEditorState.parsedSVG.paths.length === 0) {
    return (
      <div className={`p-4 rounded-lg border ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          No paths found in this SVG. Upload an SVG file with path elements to enable individual editing.
        </p>
      </div>
    );
  }

  const togglePathExpansion = (pathId: string) => {
    const newExpanded = new Set(expandedPaths);
    if (newExpanded.has(pathId)) {
      newExpanded.delete(pathId);
    } else {
      newExpanded.add(pathId);
    }
    setExpandedPaths(newExpanded);
  };

  const ColorPicker = ({ 
    value, 
    onChange, 
    label 
  }: { 
    value: string; 
    onChange: (value: string) => void; 
    label: string;
  }) => (
    <div className="flex items-center space-x-2">
      <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-20 px-2 py-1 text-xs border rounded ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-white' 
              : 'bg-white border-gray-300 text-black'
          }`}
        />
      </div>
    </div>
  );

  const NumberSlider = ({ 
    value, 
    onChange, 
    min, 
    max, 
    step = 1, 
    label,
    unit = ''
  }: { 
    value: number; 
    onChange: (value: number) => void; 
    min: number; 
    max: number; 
    step?: number; 
    label: string; 
    unit?: string;
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {label}
        </label>
        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Path Editor
        </h3>
        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {svgEditorState.parsedSVG.paths.length} paths
        </span>
      </div>

      <div className="space-y-3">
        {svgEditorState.parsedSVG.paths.map((path, index) => {
          const isExpanded = expandedPaths.has(path.id);
          const isSelected = svgEditorState.selectedPathId === path.id;
          const renderSettings = getPathRenderSettings(path, svgEditorState.globalConfig);

          return (
            <div
              key={path.id}
              className={`border rounded-lg ${
                isSelected 
                  ? isDarkMode ? 'border-blue-500 bg-blue-500/10' : 'border-blue-500 bg-blue-50'
                  : isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
              }`}
            >
              {/* Path Header */}
              <div 
                className="p-3 cursor-pointer"
                onClick={() => {
                  onPathSelect(isSelected ? null : path.id);
                  if (!isExpanded) {
                    togglePathExpansion(path.id);
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Path Preview */}
                    <div className="w-8 h-8 border rounded flex items-center justify-center" style={{ backgroundColor: isDarkMode ? '#374151' : '#f3f4f6' }}>
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <path 
                          d={path.originalPath}
                          fill={renderSettings.fill}
                          stroke={renderSettings.stroke}
                          strokeWidth={Math.min(renderSettings.strokeWidth, 2)}
                          transform="scale(0.8) translate(2, 2)"
                        />
                      </svg>
                    </div>
                    
                    <div>
                      <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        Path {index + 1}
                      </div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {path.useIndividualSettings ? 'Individual' : 'Global'} settings
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Visibility Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: Implement visibility toggle
                      }}
                      className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    >
                      {path.visible ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </button>

                    {/* Individual Settings Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPathToggleIndividual(path.id);
                      }}
                      className={`p-1 rounded ${
                        path.useIndividualSettings 
                          ? 'bg-blue-500 text-white' 
                          : isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                      }`}
                      title={path.useIndividualSettings ? 'Using individual settings' : 'Using global settings'}
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Path Controls */}
              {isExpanded && path.useIndividualSettings && (
                <div className={`p-3 border-t space-y-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="grid grid-cols-1 gap-4">
                    {/* Fill Color */}
                    <ColorPicker
                      value={path.individualSettings?.fill || renderSettings.fill}
                      onChange={(value) => onPathUpdate(path.id, { fill: value })}
                      label="Fill"
                    />

                    {/* Stroke Color */}
                    <ColorPicker
                      value={path.individualSettings?.stroke || renderSettings.stroke}
                      onChange={(value) => onPathUpdate(path.id, { stroke: value })}
                      label="Stroke"
                    />

                    {/* Stroke Width */}
                    <NumberSlider
                      value={path.individualSettings?.strokeWidth || renderSettings.strokeWidth}
                      onChange={(value) => onPathUpdate(path.id, { strokeWidth: value })}
                      min={0}
                      max={10}
                      step={0.1}
                      label="Stroke Width"
                      unit="px"
                    />

                    {/* Opacity */}
                    <NumberSlider
                      value={path.individualSettings?.opacity || renderSettings.opacity}
                      onChange={(value) => onPathUpdate(path.id, { opacity: value })}
                      min={0}
                      max={1}
                      step={0.1}
                      label="Opacity"
                    />
                  </div>

                  {/* Reset Button */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => onPathReset(path.id)}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm rounded ${
                        isDarkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset to Original</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}