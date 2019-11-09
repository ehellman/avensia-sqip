declare module 'sqip' {

  interface SqipImageDimensions {
    imageUrl: string;
    ixid: string;
    auto: string; // change enum
    fit: string; // enum
    w: string;
    q: string;
  }

  interface SqipOptions {
    filename: string;
    numberOfPrimitives?: number;
    mode?: number;
    blur?: number;
  }
  
  interface SqipResult {
    final_svg: string;
    svg_base64encoded: string;
    img_dimensions: SqipImageDimensions;
  }

   var sqip: (options: SqipOptions) => SqipResult

  //  var koko: typeof sqip;

   export = sqip
}