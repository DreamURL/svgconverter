'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileImage, Loader2 } from 'lucide-react';
import ImageTracer from 'imagetracerjs';

interface UploadPanelProps {
  onUpload: (content: string, name: string) => void;
  isConverting: boolean;
  setIsConverting: (isConverting: boolean) => void;
  isDarkMode: boolean;
}

export function UploadPanel({ onUpload, isConverting, setIsConverting, isDarkMode }: UploadPanelProps) {
  const [error, setError] = useState<string>('');
  const [conversionStep, setConversionStep] = useState<string>('');

  // Client-side image to SVG conversion
  const convertImageToSvg = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setConversionStep('Tracing image to SVG...');
          const options = {
            ltres: 1,
            qtres: 1,
            scale: 1,
            strokewidth: 0,
            linefilter: true,
            speckleremoval: 4,
            colorsampling: 2,
            numberofcolors: 12,
            mincolorratio: 0.05,
            colorquantcycles: 3,
            layering: 0,
            blurradius: 0,
            blurdelta: 20,
            desc: false,
            viewbox: true,
            roundcoords: 1,
          };
          const svgString = ImageTracer.imageToSVG(event.target.result as never, options);
          resolve(svgString);
        } else {
          reject(new Error('Could not read file.'));
        }
      };
      reader.onerror = () => {
        reject(new Error('Error reading file.'));
      };
      reader.readAsDataURL(file);
    });
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    setError('');
    setConversionStep('');
    setIsConverting(true);
    
    try {
      if (file.type === 'image/svg+xml') {
        setConversionStep('Reading SVG file...');
        const text = await file.text();
        onUpload(text, file.name);
      } else if (file.type.startsWith('image/')) {
        setConversionStep('Preparing image for conversion...');
        const svgResult = await convertImageToSvg(file);
        onUpload(svgResult, file.name);
      } else {
        throw new Error('Unsupported file type. Please upload SVG, PNG, JPG, or GIF files.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while processing the file.');
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