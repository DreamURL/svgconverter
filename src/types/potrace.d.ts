declare module 'potrace' {
  interface PotraceOptions {
    threshold?: number;
    color?: string;
    background?: string;
    turdSize?: number;
    optTolerance?: number;
    steps?: number[];
  }

  interface Potrace {
    TURNPOLICY_MINORITY: number;
    TURNPOLICY_MAJORITY: number;
  }

  function trace(
    buffer: Buffer,
    options: PotraceOptions,
    callback: (error: any, svg: string) => void
  ): void;

  const Potrace: Potrace;
}

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

  const _default: {
    imageToSVG: typeof imageToSVG;
  };
  export default _default;
}
