module.exports = {

"[project]/src/utils/svgParser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applyGlobalSettings": (()=>applyGlobalSettings),
    "formatSVGWithPaths": (()=>formatSVGWithPaths),
    "getDefaultPathConfig": (()=>getDefaultPathConfig),
    "parseSVGPaths": (()=>parseSVGPaths)
});
function parseSVGPaths(svgContent) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgContent, 'image/svg+xml');
        // Check for parsing errors
        const errorNode = doc.querySelector('parsererror');
        if (errorNode) {
            throw new Error('Invalid SVG format');
        }
        const svgElement = doc.querySelector('svg');
        if (!svgElement) {
            throw new Error('No SVG element found');
        }
        // Extract SVG metadata
        const metadata = {
            width: svgElement.getAttribute('width') || undefined,
            height: svgElement.getAttribute('height') || undefined,
            viewBox: svgElement.getAttribute('viewBox') || undefined,
            xmlns: svgElement.getAttribute('xmlns') || 'http://www.w3.org/2000/svg'
        };
        // Extract all path elements
        const pathElements = doc.querySelectorAll('path');
        const paths = Array.from(pathElements).map((path, index)=>{
            return {
                id: `path-${index}`,
                originalPath: path.getAttribute('d') || '',
                fill: path.getAttribute('fill') || '#000000',
                stroke: path.getAttribute('stroke') || 'none',
                strokeWidth: parseFloat(path.getAttribute('stroke-width') || '1'),
                strokeLinecap: path.getAttribute('stroke-linecap') || 'round',
                strokeLinejoin: path.getAttribute('stroke-linejoin') || 'round',
                opacity: path.getAttribute('opacity') ? parseFloat(path.getAttribute('opacity')) : 1,
                transform: path.getAttribute('transform') || undefined,
                visible: true
            };
        });
        return {
            metadata,
            paths,
            originalSVG: svgContent
        };
    } catch (error) {
        console.error('Error parsing SVG:', error);
        throw error;
    }
}
function formatSVGWithPaths(parsedSVG) {
    const { metadata, paths } = parsedSVG;
    // Create SVG opening tag with metadata
    const svgAttributes = [
        metadata.width ? `width="${metadata.width}"` : '',
        metadata.height ? `height="${metadata.height}"` : '',
        metadata.viewBox ? `viewBox="${metadata.viewBox}"` : '',
        `xmlns="${metadata.xmlns || 'http://www.w3.org/2000/svg'}"`
    ].filter(Boolean).join(' ');
    const svgContent = paths.filter((path)=>path.visible && path.originalPath).map((path)=>{
        const pathAttributes = [
            `d="${path.originalPath}"`,
            path.fill && path.fill !== 'none' ? `fill="${path.fill}"` : '',
            path.stroke && path.stroke !== 'none' ? `stroke="${path.stroke}"` : '',
            path.strokeWidth ? `stroke-width="${path.strokeWidth}"` : '',
            path.strokeLinecap ? `stroke-linecap="${path.strokeLinecap}"` : '',
            path.strokeLinejoin ? `stroke-linejoin="${path.strokeLinejoin}"` : '',
            path.opacity !== 1 ? `opacity="${path.opacity}"` : '',
            path.transform ? `transform="${path.transform}"` : ''
        ].filter(Boolean).join(' ');
        return `  <path ${pathAttributes} />`;
    }).join('\n');
    return `<svg ${svgAttributes}>
${svgContent}
</svg>`;
}
function getDefaultPathConfig() {
    return {
        fill: undefined,
        stroke: 'none',
        strokeWidth: 1,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        opacity: 1,
        visible: true
    };
}
function applyGlobalSettings(paths, globalSettings) {
    return paths.map((path)=>({
            ...path,
            ...globalSettings.fill && {
                fill: globalSettings.fill
            },
            ...globalSettings.stroke && {
                stroke: globalSettings.stroke
            },
            ...globalSettings.strokeWidth && {
                strokeWidth: globalSettings.strokeWidth
            }
        }));
}
}}),
"[project]/src/utils/svgStateManager.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertToEditablePaths": (()=>convertToEditablePaths),
    "convertToLegacyConfig": (()=>convertToLegacyConfig),
    "getPathRenderSettings": (()=>getPathRenderSettings),
    "migrateToGlobalConfig": (()=>migrateToGlobalConfig),
    "resetPathToOriginal": (()=>resetPathToOriginal),
    "svgEditorReducer": (()=>svgEditorReducer),
    "togglePathIndividualSettings": (()=>togglePathIndividualSettings),
    "updatePathInArray": (()=>updatePathInArray),
    "updatePathIndividualSettings": (()=>updatePathIndividualSettings)
});
function convertToEditablePaths(parsedSVG) {
    return parsedSVG.paths.map((path)=>({
            ...path,
            useIndividualSettings: true,
            individualSettings: {
                fill: path.fill || '#000000',
                stroke: path.stroke || 'none',
                strokeWidth: path.strokeWidth || 1,
                strokeLinecap: path.strokeLinecap || 'round',
                strokeLinejoin: path.strokeLinejoin || 'round',
                opacity: path.opacity || 1
            }
        }));
}
function migrateToGlobalConfig(legacyConfig) {
    return {
        color: legacyConfig.color || '#000000',
        fillColor: legacyConfig.fillColor || '#000000',
        strokeWidth: legacyConfig.strokeWidth || 1,
        size: legacyConfig.size || 100,
        rotation: legacyConfig.rotation || 0,
        opacity: legacyConfig.opacity || 1,
        animation: legacyConfig.animation || 'none',
        hoverEffect: legacyConfig.hoverEffect || 'none'
    };
}
function convertToLegacyConfig(globalConfig) {
    return {
        color: globalConfig.color,
        fillColor: globalConfig.fillColor,
        strokeWidth: globalConfig.strokeWidth,
        size: globalConfig.size,
        rotation: globalConfig.rotation,
        opacity: globalConfig.opacity,
        animation: globalConfig.animation,
        hoverEffect: globalConfig.hoverEffect
    };
}
function getPathRenderSettings(path, globalConfig) {
    if (path.useIndividualSettings && path.individualSettings) {
        return {
            fill: path.individualSettings.fill ?? (path.fill || '#000000'),
            stroke: path.individualSettings.stroke ?? (path.stroke || 'none'),
            strokeWidth: path.individualSettings.strokeWidth ?? globalConfig.strokeWidth,
            strokeLinecap: path.individualSettings.strokeLinecap ?? (path.strokeLinecap || 'round'),
            strokeLinejoin: path.individualSettings.strokeLinejoin ?? (path.strokeLinejoin || 'round'),
            opacity: path.individualSettings.opacity ?? globalConfig.opacity
        };
    }
    // Global config 사용 (individual settings가 off일 때)
    return {
        fill: globalConfig.fillColor,
        stroke: globalConfig.color,
        strokeWidth: globalConfig.strokeWidth,
        strokeLinecap: path.strokeLinecap || 'round',
        strokeLinejoin: path.strokeLinejoin || 'round',
        opacity: globalConfig.opacity
    };
}
function updatePathInArray(paths, pathId, updates) {
    return paths.map((path)=>path.id === pathId ? {
            ...path,
            ...updates
        } : path);
}
function togglePathIndividualSettings(paths, pathId, globalConfig) {
    return paths.map((path)=>{
        if (path.id !== pathId) return path;
        const isTogglingOn = !path.useIndividualSettings;
        if (isTogglingOn) {
            // 개별 설정을 켜는 경우: 기존 individualSettings가 있으면 유지, 없으면 초기값 설정
            return {
                ...path,
                useIndividualSettings: true,
                individualSettings: path.individualSettings || {
                    fill: path.fill || '#000000',
                    stroke: path.stroke || 'none',
                    strokeWidth: globalConfig.strokeWidth,
                    strokeLinecap: path.strokeLinecap || 'round',
                    strokeLinejoin: path.strokeLinejoin || 'round',
                    opacity: globalConfig.opacity
                }
            };
        } else {
            // 개별 설정을 끄는 경우: 플래그만 끄고 설정값은 보존
            return {
                ...path,
                useIndividualSettings: false
            };
        }
    });
}
function updatePathIndividualSettings(paths, pathId, settingUpdates) {
    return paths.map((path)=>{
        if (path.id !== pathId || !path.useIndividualSettings) return path;
        return {
            ...path,
            individualSettings: {
                ...path.individualSettings,
                ...settingUpdates
            }
        };
    });
}
function resetPathToOriginal(paths, pathId) {
    return paths.map((path)=>{
        if (path.id !== pathId) return path;
        return {
            ...path,
            useIndividualSettings: false,
            individualSettings: undefined,
            fill: path.fill,
            stroke: path.stroke,
            strokeWidth: path.strokeWidth
        };
    });
}
function svgEditorReducer(state, action) {
    switch(action.type){
        case 'UPDATE_GLOBAL':
            return {
                ...state,
                globalConfig: {
                    ...state.globalConfig,
                    ...action.changes
                }
            };
        case 'UPDATE_PATH':
            if (!state.parsedSVG) return state;
            return {
                ...state,
                parsedSVG: {
                    ...state.parsedSVG,
                    paths: updatePathIndividualSettings(state.parsedSVG.paths, action.pathId, action.changes || {})
                }
            };
        case 'TOGGLE_INDIVIDUAL':
            if (!state.parsedSVG) return state;
            return {
                ...state,
                parsedSVG: {
                    ...state.parsedSVG,
                    paths: togglePathIndividualSettings(state.parsedSVG.paths, action.pathId, state.globalConfig)
                }
            };
        case 'RESET_PATH':
            if (!state.parsedSVG) return state;
            return {
                ...state,
                parsedSVG: {
                    ...state.parsedSVG,
                    paths: resetPathToOriginal(state.parsedSVG.paths, action.pathId)
                }
            };
        case 'SET_PARSED_SVG':
            return {
                ...state,
                parsedSVG: action.parsedSVG ? {
                    metadata: action.parsedSVG.metadata,
                    paths: convertToEditablePaths(action.parsedSVG),
                    originalSVG: action.parsedSVG.originalSVG
                } : null,
                selectedPathId: null,
                editMode: 'global'
            };
        case 'SET_SELECTED_PATH':
            return {
                ...state,
                selectedPathId: action.pathId
            };
        case 'SET_EDIT_MODE':
            return {
                ...state,
                editMode: action.mode,
                selectedPathId: action.mode === 'global' ? null : state.selectedPathId
            };
        default:
            return state;
    }
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UploadPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PreviewPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PreviewPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ControlPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportTestModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExportTestModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HelpModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgStateManager.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [svgContent, setSvgContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isControlPanelCollapsed, setIsControlPanelCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 새로운 통합 상태 관리
    const [svgEditorState, dispatchSVGEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgEditorReducer"], {
        globalConfig: {
            color: '#000000',
            fillColor: '#000000',
            strokeWidth: 1,
            size: 100,
            rotation: 0,
            opacity: 1,
            animation: 'none',
            hoverEffect: 'none'
        },
        parsedSVG: null,
        selectedPathId: null,
        editMode: 'individual',
        showPathList: false
    });
    // 기존 시스템과의 호환성을 위한 legacy config
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToLegacyConfig"])(svgEditorState.globalConfig);
    const setConfig = (newConfig)=>{
        dispatchSVGEditor({
            type: 'UPDATE_GLOBAL',
            changes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["migrateToGlobalConfig"])(newConfig)
        });
    };
    const [isCodeModalOpen, setIsCodeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExportTestModalOpen, setIsExportTestModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHelpModalOpen, setIsHelpModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConverting, setIsConverting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 디버깅을 위한 상태 모니터링
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('SVG Editor State changed:', svgEditorState);
    }, [
        svgEditorState
    ]);
    // AdSense 초기화
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    // SVG 다운로드 함수
    const handleDownloadSVG = ()=>{
        if (!svgContent || !svgEditorState.parsedSVG) return;
        try {
            // SVG 생성 (애니메이션과 호버 효과 제외)
            const paths = svgEditorState.parsedSVG.paths.filter((path)=>path.visible).map((path)=>{
                const renderSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPathRenderSettings"])(path, svgEditorState.globalConfig);
                return `    <path
      d="${path.originalPath}"
      fill="${renderSettings.fill}"
      stroke="${renderSettings.stroke}"
      stroke-width="${renderSettings.strokeWidth}"
      stroke-linecap="${renderSettings.strokeLinecap}"
      stroke-linejoin="${renderSettings.strokeLinejoin}"
      opacity="${renderSettings.opacity}"
      ${path.transform ? `transform="${path.transform}"` : ''}
    />`;
            }).join('\n');
            const svgCode = `<svg ${svgEditorState.parsedSVG.metadata.width ? `width="${svgEditorState.parsedSVG.metadata.width}"` : ''} ${svgEditorState.parsedSVG.metadata.height ? `height="${svgEditorState.parsedSVG.metadata.height}"` : ''} ${svgEditorState.parsedSVG.metadata.viewBox ? `viewBox="${svgEditorState.parsedSVG.metadata.viewBox}"` : ''} xmlns="${svgEditorState.parsedSVG.metadata.xmlns || 'http://www.w3.org/2000/svg'}" style="transform: scale(${config.size / 100}) rotate(${config.rotation}deg);">
${paths}
</svg>`;
            // 파일 다운로드
            const blob = new Blob([
                svgCode
            ], {
                type: 'image/svg+xml'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName.replace(/\.[^/.]+$/, '')}_edited.svg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading SVG:', error);
            alert('Error downloading SVG. Please try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                onExportCode: ()=>setIsCodeModalOpen(true),
                onDownloadSVG: svgContent ? handleDownloadSVG : undefined,
                onShowHelp: ()=>setIsHelpModalOpen(true),
                isDarkMode: isDarkMode,
                onToggleTheme: ()=>setIsDarkMode(!isDarkMode)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-20 md:pt-16",
                children: !svgContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${isDarkMode ? 'from-white to-gray-400' : 'from-black to-gray-600'} bg-clip-text text-transparent`,
                                    children: [
                                        "Turn Images into",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        "Interactive SVG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`,
                                    children: "Convert your images and GIFs to customizable SVG components with animations, hover effects, and exportable React code."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-5 gap-8 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-3 max-w-4xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadPanel"], {
                                        onUpload: (content, name, parsedSVG)=>{
                                            setSvgContent(content);
                                            setFileName(name);
                                            dispatchSVGEditor({
                                                type: 'SET_PARSED_SVG',
                                                parsedSVG: parsedSVG || null
                                            });
                                        },
                                        isConverting: isConverting,
                                        setIsConverting: setIsConverting,
                                        isDarkMode: isDarkMode
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 text-center md:text-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "🚀 Love SVG Studio?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Help us reach more developers by leaving a review and voting on Product Hunt. Your support helps us build better tools for the community!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.producthunt.com/products/svg-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-svg-studio",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-block hover:opacity-80 transition-opacity",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=992197&theme=dark&t=1752569302300",
                                                    alt: "SVG Studio - Edit SVG and export as react/inline/css code | Product Hunt",
                                                    width: 250,
                                                    height: 54,
                                                    style: {
                                                        width: 250,
                                                        height: 54
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                children: "⭐ Takes less than 30 seconds"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-6 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`,
                                        children: "Advertisement"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
                                        className: "adsbygoogle",
                                        style: {
                                            display: 'block'
                                        },
                                        "data-ad-client": "ca-pub-9786013383976168",
                                        "data-ad-slot": "9580679762",
                                        "data-ad-format": "auto",
                                        "data-full-width-responsive": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                    children: "Explore Our SVG Tools"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/free-svg-converter",
                                            className: `p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center mb-4`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                    children: "Free SVG Converter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: "Convert any image to SVG format instantly. No registration required, 100% free."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/svg-editor-online",
                                            className: `p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-lg ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} flex items-center justify-center mb-4`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                    children: "SVG Editor Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: "Professional SVG editor with colors, animations, and real-time preview."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/react-svg-components",
                                            className: `p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-lg ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} flex items-center justify-center mb-4`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                    children: "React SVG Components"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: "Generate TypeScript React components from your SVG files."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 top-16 flex",
                    children: [
                        !isControlPanelCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-80 border-r ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} overflow-y-auto z-40`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ControlPanel"], {
                                    config: config,
                                    onChange: (newConfig)=>{
                                        console.log('Config changed:', newConfig); // 디버깅용
                                        setConfig(newConfig);
                                    },
                                    fileName: fileName,
                                    onReset: ()=>{
                                        setSvgContent('');
                                        setFileName('');
                                        dispatchSVGEditor({
                                            type: 'UPDATE_GLOBAL',
                                            changes: {
                                                color: '#ffffff',
                                                fillColor: '#000000',
                                                strokeWidth: 1,
                                                size: 100,
                                                rotation: 0,
                                                opacity: 1,
                                                animation: 'none',
                                                hoverEffect: 'none'
                                            }
                                        });
                                        dispatchSVGEditor({
                                            type: 'SET_PARSED_SVG',
                                            parsedSVG: null
                                        });
                                    },
                                    isDarkMode: isDarkMode,
                                    // 새로운 path 편집 관련 props
                                    svgEditorState: svgEditorState,
                                    onPathUpdate: (pathId, changes)=>{
                                        dispatchSVGEditor({
                                            type: 'UPDATE_PATH',
                                            pathId,
                                            changes
                                        });
                                    },
                                    onPathToggleIndividual: (pathId)=>{
                                        dispatchSVGEditor({
                                            type: 'TOGGLE_INDIVIDUAL',
                                            pathId
                                        });
                                    },
                                    onPathReset: (pathId)=>{
                                        dispatchSVGEditor({
                                            type: 'RESET_PATH',
                                            pathId
                                        });
                                    },
                                    onPathSelect: (pathId)=>{
                                        dispatchSVGEditor({
                                            type: 'SET_SELECTED_PATH',
                                            pathId
                                        });
                                    },
                                    onEditModeChange: (mode)=>{
                                        dispatchSVGEditor({
                                            type: 'SET_EDIT_MODE',
                                            mode
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 284,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 283,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsControlPanelCollapsed(!isControlPanelCollapsed),
                            className: `absolute top-16 ${isControlPanelCollapsed ? 'left-2' : 'left-80'} z-50 p-2 rounded-lg ${isDarkMode ? 'bg-blue-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-black'} shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`,
                            title: isControlPanelCollapsed ? 'Show Controls' : 'Hide Controls',
                            children: isControlPanelCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 359,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 361,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 overflow-auto ${isDarkMode ? 'bg-black' : 'bg-white'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PreviewPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreviewPanel"], {
                                    svgContent: svgContent,
                                    config: config,
                                    isDarkMode: isDarkMode,
                                    // 새로운 path별 편집 정보 전달
                                    svgEditorState: svgEditorState,
                                    onPathSelect: (pathId)=>{
                                        dispatchSVGEditor({
                                            type: 'SET_SELECTED_PATH',
                                            pathId
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 367,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 366,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeModal"], {
                isOpen: isCodeModalOpen,
                onClose: ()=>setIsCodeModalOpen(false),
                svgContent: svgContent,
                config: config,
                fileName: fileName,
                // 새로운 path별 편집 정보 전달
                svgEditorState: svgEditorState
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportTestModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportTestModal"], {
                isOpen: isExportTestModalOpen,
                onClose: ()=>setIsExportTestModalOpen(false),
                isDarkMode: isDarkMode,
                onToggleTheme: ()=>setIsDarkMode(!isDarkMode)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HelpModal"], {
                isOpen: isHelpModalOpen,
                onClose: ()=>setIsHelpModalOpen(false),
                isDarkMode: isDarkMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_6bcb72f0._.js.map