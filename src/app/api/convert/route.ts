import { NextRequest, NextResponse } from 'next/server';
import ImageTracer from 'imagetracerjs';
import sharp from 'sharp';

// SVG cleanup function
function cleanupSVG(svgString: string): string {
  return svgString
    .replace(/\s+/g, ' ') // Consolidate multiple spaces
    .replace(/>\s+</g, '><') // Remove spaces between tags
    .replace(/stroke="[^"]*"/g, '') // Remove unnecessary stroke
    .replace(/stroke-width="[^"]*"/g, '') // Remove unnecessary stroke-width
    .replace(/fill-rule="[^"]*"/g, '') // Remove unnecessary fill-rule
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Return SVG file as is
    if (file.type === 'image/svg+xml') {
      const svgContent = buffer.toString('utf-8');
      return NextResponse.json({ 
        success: true, 
        svg: svgContent,
        fileName: file.name 
      });
    }

    // Resize and optimize the image
    const processedBuffer = await sharp(buffer)
      .resize(400, 400, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .png()
      .toBuffer();

    // Convert to SVG using ImageTracer
    const ImageTracerLib = require('imagetracerjs');
    const svgString = ImageTracerLib.imageToSVG(processedBuffer, {
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
    });

    // Clean up SVG for better output
    const cleanSVG = cleanupSVG(svgString);

    return NextResponse.json({ 
      success: true, 
      svg: cleanSVG,
      fileName: file.name 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Server error occurred.' 
    }, { status: 500 });
  }
}
