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

  const ImageTracer: {
    imageToSVG: (buffer: never, options?: ImageTracerOptions) => string;
  };

  export default ImageTracer;
}
