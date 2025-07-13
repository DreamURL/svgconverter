import { 
  GlobalSVGConfig, 
  EditablePathElement, 
  SVGEditorState, 
  PathRenderSettings,
  PathEditAction,
  GlobalEditAction 
} from '../types/svgTypes';
import { ParsedSVG} from './svgParser';

// ParsedSVG를 EditablePathElement로 변환
export function convertToEditablePaths(parsedSVG: ParsedSVG): EditablePathElement[] {
  return parsedSVG.paths.map(path => ({
    ...path,
    useIndividualSettings: false,
    individualSettings: undefined,
  }));
}

// 기존 SVGConfig에서 GlobalSVGConfig로 변환
export function migrateToGlobalConfig(legacyConfig: import('../app/page').SVGConfig): GlobalSVGConfig {
  return {
    color: legacyConfig.color || '#ffffff',
    fillColor: legacyConfig.fillColor || '#ffffff', 
    strokeWidth: legacyConfig.strokeWidth || 1,
    size: legacyConfig.size || 100,
    rotation: legacyConfig.rotation || 0,
    opacity: legacyConfig.opacity || 1,
    animation: legacyConfig.animation || 'none',
    hoverEffect: legacyConfig.hoverEffect || 'none',
  };
}

// GlobalSVGConfig에서 기존 SVGConfig로 변환 (하위 호환성)
export function convertToLegacyConfig(globalConfig: GlobalSVGConfig): import('../app/page').SVGConfig {
  return {
    color: globalConfig.color,
    fillColor: globalConfig.fillColor,
    strokeWidth: globalConfig.strokeWidth,
    size: globalConfig.size,
    rotation: globalConfig.rotation,
    opacity: globalConfig.opacity,
    animation: globalConfig.animation,
    hoverEffect: globalConfig.hoverEffect,
  };
}

// path의 실제 렌더링 설정 계산 (글로벌 + 개별 설정 병합)
export function getPathRenderSettings(
  path: EditablePathElement, 
  globalConfig: GlobalSVGConfig
): PathRenderSettings {
  if (path.useIndividualSettings && path.individualSettings) {
    return {
      fill: path.individualSettings.fill ?? (path.fill || globalConfig.fillColor),
      stroke: path.individualSettings.stroke ?? (path.stroke && path.stroke !== 'none' ? path.stroke : globalConfig.color),
      strokeWidth: path.individualSettings.strokeWidth ?? globalConfig.strokeWidth,
      strokeLinecap: path.individualSettings.strokeLinecap ?? (path.strokeLinecap || 'round'),
      strokeLinejoin: path.individualSettings.strokeLinejoin ?? (path.strokeLinejoin || 'round'),
      opacity: path.individualSettings.opacity ?? globalConfig.opacity,
    };
  }
  
  // 글로벌 설정 사용 (원본 색상 우선)
  return {
    fill: path.fill || globalConfig.fillColor,
    stroke: path.stroke && path.stroke !== 'none' ? path.stroke : globalConfig.color,
    strokeWidth: globalConfig.strokeWidth,
    strokeLinecap: path.strokeLinecap || 'round',
    strokeLinejoin: path.strokeLinejoin || 'round', 
    opacity: globalConfig.opacity,
  };
}

// path 배열에서 특정 path 업데이트
export function updatePathInArray(
  paths: EditablePathElement[], 
  pathId: string, 
  updates: Partial<EditablePathElement>
): EditablePathElement[] {
  return paths.map(path => 
    path.id === pathId 
      ? { ...path, ...updates }
      : path
  );
}

// path의 개별 설정 토글
export function togglePathIndividualSettings(
  paths: EditablePathElement[],
  pathId: string,
  globalConfig: GlobalSVGConfig
): EditablePathElement[] {
  return paths.map(path => {
    if (path.id !== pathId) return path;
    
    const isTogglingOn = !path.useIndividualSettings;
    
    if (isTogglingOn) {
      // 개별 설정을 켜는 경우: 현재 렌더링 색상을 개별 설정으로 복사
      return {
        ...path,
        useIndividualSettings: true,
        individualSettings: {
          fill: path.fill || globalConfig.fillColor,
          stroke: path.stroke && path.stroke !== 'none' ? path.stroke : globalConfig.color,
          strokeWidth: globalConfig.strokeWidth,
          strokeLinecap: path.strokeLinecap || 'round',
          strokeLinejoin: path.strokeLinejoin || 'round',
          opacity: globalConfig.opacity,
        },
      };
    } else {
      // 개별 설정을 끄는 경우: 개별 설정 제거
      return {
        ...path,
        useIndividualSettings: false,
        individualSettings: undefined,
      };
    }
  });
}

// path 개별 설정 업데이트
export function updatePathIndividualSettings(
  paths: EditablePathElement[],
  pathId: string,
  settingUpdates: Partial<EditablePathElement['individualSettings']>
): EditablePathElement[] {
  return paths.map(path => {
    if (path.id !== pathId || !path.useIndividualSettings) return path;
    
    return {
      ...path,
      individualSettings: {
        ...path.individualSettings,
        ...settingUpdates,
      },
    };
  });
}

// path 초기화 (원본 속성으로 되돌리기)
export function resetPathToOriginal(
  paths: EditablePathElement[],
  pathId: string
): EditablePathElement[] {
  return paths.map(path => {
    if (path.id !== pathId) return path;
    
    return {
      ...path,
      useIndividualSettings: false,
      individualSettings: undefined,
      fill: path.fill, // 원본 속성 유지
      stroke: path.stroke,
      strokeWidth: path.strokeWidth,
    };
  });
}

// 전체 상태 업데이트 reducer 함수
export function svgEditorReducer(
  state: SVGEditorState,
  action: PathEditAction | GlobalEditAction | 
    { type: 'SET_PARSED_SVG'; parsedSVG: ParsedSVG | null } |
    { type: 'SET_SELECTED_PATH'; pathId: string | null } |
    { type: 'SET_EDIT_MODE'; mode: 'global' | 'individual' }
): SVGEditorState {
  switch (action.type) {
    case 'UPDATE_GLOBAL':
      return {
        ...state,
        globalConfig: {
          ...state.globalConfig,
          ...action.changes,
        },
      };
      
    case 'UPDATE_PATH':
      if (!state.parsedSVG) return state;
      return {
        ...state,
        parsedSVG: {
          ...state.parsedSVG,
          paths: updatePathIndividualSettings(
            state.parsedSVG.paths,
            action.pathId,
            action.changes || {}
          ),
        },
      };
      
    case 'TOGGLE_INDIVIDUAL':
      if (!state.parsedSVG) return state;
      return {
        ...state,
        parsedSVG: {
          ...state.parsedSVG,
          paths: togglePathIndividualSettings(
            state.parsedSVG.paths,
            action.pathId,
            state.globalConfig
          ),
        },
      };
      
    case 'RESET_PATH':
      if (!state.parsedSVG) return state;
      return {
        ...state,
        parsedSVG: {
          ...state.parsedSVG,
          paths: resetPathToOriginal(state.parsedSVG.paths, action.pathId),
        },
      };
      
    case 'SET_PARSED_SVG':
      return {
        ...state,
        parsedSVG: action.parsedSVG ? {
          metadata: action.parsedSVG.metadata,
          paths: convertToEditablePaths(action.parsedSVG),
          originalSVG: action.parsedSVG.originalSVG,
        } : null,
        selectedPathId: null,
        editMode: 'global',
      };
      
    case 'SET_SELECTED_PATH':
      return {
        ...state,
        selectedPathId: action.pathId,
      };
      
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editMode: action.mode,
        selectedPathId: action.mode === 'global' ? null : state.selectedPathId,
      };
      
    default:
      return state;
  }
}