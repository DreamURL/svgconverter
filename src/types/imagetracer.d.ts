declare module 'imagetracerjs' {
  interface ImageTracerOptions {
    ltres?: number;
    qtres?: number;
    scale?: number;
    strokewidth?: number;
    linefilter?: boolean;
    speckleremoval?: number;
    colorsampling?: number;
    numberofcolors?: number;
    mincolorratio?: number;
    colorquantcycles?: number;
    layering?: number;
    blurradius?: number;
    blurdelta?: number;
    desc?: boolean;
    viewbox?: boolean;
    roundcoords?: number;
  }

  function imageToSVG(buffer: Buffer, options?: ImageTracerOptions): string;

  const ImageTracer: {
    imageToSVG: (buffer: Buffer, options?: ImageTracerOptions) => string;
  };

  export default ImageTracer;
}
