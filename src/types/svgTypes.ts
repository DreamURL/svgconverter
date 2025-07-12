import { PathElement, SVGMetadata } from '../utils/svgParser';

// 기존 SVGConfig와 호환되는 글로벌 설정
export interface GlobalSVGConfig {
  // Color settings (기존 방식과 호환)
  color: string; // stroke color
  fillColor: string; // fill color
  strokeWidth: number; // stroke width
  
  // Transform settings
  size: number;
  rotation: number;
  opacity: number;
  
  // Animation settings
  animation: 'none' | 'spin' | 'pulse' | 'scale' | 'bounce';
  
  // Hover effects
  hoverEffect: 'none' | 'scale' | 'rotate' | 'opacity';
}

// 개별 path 편집을 위한 확장된 PathElement
export interface EditablePathElement extends PathElement {
  // 개별 편집 여부를 나타내는 플래그
  useIndividualSettings: boolean;
  
  // 개별 설정 (글로벌 설정을 오버라이드)
  individualSettings?: {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeLinecap?: 'round' | 'square' | 'butt';
    strokeLinejoin?: 'round' | 'bevel' | 'miter';
    opacity?: number;
  };
}

// 전체 SVG 편집기 상태
export interface SVGEditorState {
  // 기존 시스템과의 호환성을 위한 글로벌 설정
  globalConfig: GlobalSVGConfig;
  
  // 파싱된 SVG 정보
  parsedSVG: {
    metadata: SVGMetadata;
    paths: EditablePathElement[];
    originalSVG: string;
  } | null;
  
  // 편집 상태
  selectedPathId: string | null;
  editMode: 'global' | 'individual';
  
  // UI 상태
  showPathList: boolean;
}

// path별 편집 변경사항
export interface PathEditAction {
  type: 'UPDATE_PATH' | 'TOGGLE_INDIVIDUAL' | 'RESET_PATH';
  pathId: string;
  changes?: Partial<EditablePathElement['individualSettings']>;
}

// 글로벌 설정 변경사항
export interface GlobalEditAction {
  type: 'UPDATE_GLOBAL';
  changes: Partial<GlobalSVGConfig>;
}

// Helper 함수 타입
export interface PathRenderSettings {
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinecap: 'round' | 'square' | 'butt';
  strokeLinejoin: 'round' | 'bevel' | 'miter';
  opacity: number;
}

export { PathElement, SVGMetadata };