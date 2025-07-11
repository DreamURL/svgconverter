'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileImage, Loader2 } from 'lucide-react';

interface UploadPanelProps {
  onUpload: (content: string, name: string) => void;
  isConverting: boolean;
  setIsConverting: (isConverting: boolean) => void;
  isDarkMode: boolean;
}

export function UploadPanel({ onUpload, isConverting, setIsConverting, isDarkMode }: UploadPanelProps) {
  const [error, setError] = useState<string>('');
  const [conversionStep, setConversionStep] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    setError('');
    setConversionStep('');
    setIsConverting(true);
    
    try {
      if (file.type === 'image/svg+xml') {
        // SVG 파일은 직접 읽기
        setConversionStep('Reading SVG file...');
        const text = await file.text();
        onUpload(text, file.name);
      } else if (file.type.startsWith('image/')) {
        // 서버 API를 통해 이미지를 SVG로 변환
        try {
          setConversionStep('Uploading image...');
          const formData = new FormData();
          formData.append('file', file);
          
          setConversionStep('Processing image...');
          const response = await fetch('/api/convert', {
            method: 'POST',
            body: formData,
          });
          
          const result = await response.json();
          
          if (result.success) {
            setConversionStep('Converting to SVG...');
            onUpload(result.svg, file.name);
          } else {
            throw new Error(result.error || '변환에 실패했습니다.');
          }
        } catch (apiError) {
          console.warn('API 변환 실패, 대체 방법 사용:', apiError);
          setConversionStep('Creating image-embedded SVG...');
          // API 실패 시 실제 이미지를 포함한 SVG 생성
          const imageSVG = await createImageEmbeddedSVG(file);
          onUpload(imageSVG, file.name);
        }
      } else {
        throw new Error('지원되지 않는 파일 형식입니다. SVG, PNG, JPG, GIF 파일만 업로드 가능합니다.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '파일 처리 중 오류가 발생했습니다.');
    } finally {
      setIsConverting(false);
      setConversionStep('');
    }
  }, [onUpload, setIsConverting]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp']
    },
    maxFiles: 1,
    disabled: isConverting
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all
          ${isDragActive 
            ? 'border-blue-500 bg-blue-500/10' 
            : `${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`
          }
          ${isConverting ? 'pointer-events-none opacity-50' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        {isConverting ? (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <div className="text-center">
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Converting to SVG...</p>
              {conversionStep && (
                <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>{conversionStep}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className={`w-16 h-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg flex items-center justify-center`}>
              {isDragActive ? (
                <Upload className="w-8 h-8 text-blue-500" />
              ) : (
                <FileImage className={`w-8 h-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              )}
            </div>
            
            <div>
              <p className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {isDragActive ? 'Drop your image here' : 'Upload an image'}
              </p>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Drag & drop or click to select • SVG, PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className={`mt-4 p-4 ${isDarkMode ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-200'} border rounded-lg`}>
          <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} text-sm`}>{error}</p>
        </div>
      )}
    </div>
  );
}

// 실제 이미지를 base64로 임베드한 SVG 생성
async function createImageEmbeddedSVG(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
          <image 
            href="${base64}" 
            x="0" 
            y="0" 
            width="400" 
            height="400" 
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      `.trim();
      
      resolve(svg);
    };
    reader.readAsDataURL(file);
  });
}

// 더 실용적인 SVG 생성 함수
function createBetterMockSVG(fileName: string): string {
  const name = fileName.replace(/\.[^/.]+$/, '');
  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#f97316'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color}80;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#grad1)" rx="20"/>
      <circle cx="100" cy="80" r="30" fill="white" fill-opacity="0.3"/>
      <rect x="70" y="120" width="60" height="40" fill="white" fill-opacity="0.3" rx="5"/>
    </svg>
  `.trim();
}
