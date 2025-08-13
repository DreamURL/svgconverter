(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/Cloud.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Supercoilsvgrepocom": (()=>Supercoilsvgrepocom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Supercoilsvgrepocom() {
    _s();
    // Advanced Animation Styles (slide-bck-tl)
    const animationStyles = `
      .slide-bck-tl {
      -webkit-animation: slide-bck-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
      @-webkit-keyframes slide-bck-tl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(-100px); transform: translateZ(-400px) translateX(-100px) translateY(-100px); }
      }
      @keyframes slide-bck-tl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(-100px); transform: translateZ(-400px) translateX(-100px) translateY(-100px); }
      }
  `;
    // Inject styles on component mount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Supercoilsvgrepocom.useEffect": ()=>{
            const styleId = 'advanced-animation-styles';
            if (!document.getElementById(styleId)) {
                const style = document.createElement('style');
                style.id = styleId;
                style.innerHTML = animationStyles;
                document.head.appendChild(style);
            }
        }
    }["Supercoilsvgrepocom.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "slide-bck-tl",
        style: {
            // Size property
            width: '294px',
            height: '294px',
            // Rotation property  
            transform: 'rotate(0deg)',
            // Opacity property
            opacity: 1,
            // Transition for smooth hover effects
            transition: 'all 1.5s ease-in-out',
            // Advanced Animation Override
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease',
            animationDelay: '0s'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1000 571",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 0 0 L 1000 0 L 1000 571 L 0 571 L 0 0 Z M 575 201 Q 544 237 517 277 L 515 278 L 492 247 Q 490 242 483 243 L 511 283 L 481 325 Q 480 327 487 326 L 514 290 Q 513 287 516 288 L 520 296 L 542 325 L 543 326 L 549 326 L 519 284 L 575 203 L 575 201 Z M 352 243 L 352 326 L 353 326 L 358 326 L 359 251 L 410 327 L 440 367 L 444 370 L 360 245 L 360 243 L 352 243 Z M 422 243 L 422 326 L 479 326 L 479 321 L 428 321 L 428 286 L 430 286 L 431 285 L 473 285 Q 474 287 475 285 Q 475 280 475 280 L 428 280 L 428 248 L 478 248 L 478 243 L 422 243 Z M 551 243 L 552 248 L 580 248 L 580 326 L 586 326 L 586 326 L 586 248 L 615 248 L 615 243 L 551 243 Z M 640 301 L 637 302 L 634 306 L 635 311 L 641 313 Q 646 311 644 317 L 642 318 L 637 315 Q 633 314 634 318 L 637 320 L 641 321 L 647 319 L 648 317 L 647 312 L 646 310 L 640 309 L 637 307 L 641 304 L 643 305 Q 645 304 644 307 L 648 306 Q 646 301 640 301 Z M 627 302 L 627 316 L 626 317 L 622 315 Q 618 314 619 318 L 625 321 L 630 319 L 631 316 L 630 314 L 630 312 L 630 304 L 631 303 L 627 302 Z M 614 316 L 612 318 L 614 320 Q 617 321 616 318 L 614 316 Z ",
                    fill: "rgb(0,0,0)",
                    stroke: "rgb(0,0,0)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 58,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 422.5 243 L 423 321.5 L 422 321.5 L 422.5 243 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 59,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 551.5 243 L 552 247 L 581 247 L 581 324.5 L 580 324.5 L 580 248 L 552.5 248 Q 549.8 246.8 551.5 243 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 60,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 614.5 243 L 615 246.5 L 614 246.5 L 614.5 243 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 61,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 477.5 246 L 476.5 248 L 429 247.5 L 476.5 247 L 477.5 246 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 62,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 585 247 L 590 247.5 L 586 248 L 585.5 321 L 585 247 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 63,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 591.5 247 L 613 247.5 L 591.5 248 L 591.5 247 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 64,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 357.5 250 L 358 253.5 L 357 253.5 L 357.5 250 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 65,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 357.5 255 L 358 324.5 L 357 324.5 L 357.5 255 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 66,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 474.5 281 L 475 284.5 L 474 284.5 L 474.5 281 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 67,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 510.5 281 L 512 283.5 L 511 283.5 L 510.5 281 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 68,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 637.5 302 L 639 302.5 L 636.5 304 L 637.5 302 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 69,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 643.5 304 L 647 306.5 L 645.5 307 L 643.5 304 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 70,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 635.5 309 L 640 311.5 L 638.5 312 L 635.5 309 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 71,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 634.5 315 L 636 317.5 L 634 316.5 L 634.5 315 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 72,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 437.5 360 L 440 363.5 L 437 361.5 L 437.5 360 Z ",
                    fill: "rgb(144,144,144)",
                    stroke: "rgb(144,144,144)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 73,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 567.5 211 L 566 213.5 L 518 283.5 L 548 326 L 542 325 L 515.5 287 L 485.5 326 Q 481.1 327.5 482 324.5 L 512 282.5 L 484 243.5 L 486.5 243 L 491 246.5 L 514.5 279 L 517 277.5 Q 540.5 242.5 567.5 211 Z ",
                    fill: "rgb(238,238,238)",
                    stroke: "rgb(238,238,238)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 74,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 354.5 243 L 357.5 243 L 362 247.5 L 435 356.5 L 432 354.5 L 411 326.5 L 358.5 250 Q 355.5 249.1 357 253.5 L 357 255.5 L 357 325.5 L 353 326 L 353 244.5 L 354.5 243 Z ",
                    fill: "rgb(238,238,238)",
                    stroke: "rgb(238,238,238)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 75,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 423.5 243 L 425.5 243 L 476.5 243 L 478 244.5 L 476.5 247 L 427 247 L 427 281 L 473.5 281 L 474 285 L 427 285 L 427 322 L 477.5 322 L 478 326 L 423.5 326 L 423 324.5 L 422 322.5 L 423 321.5 L 423.5 243 Z ",
                    fill: "rgb(238,238,238)",
                    stroke: "rgb(238,238,238)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 76,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 552 243 L 613.5 243 L 614 247 L 585 247 L 585 324.5 L 581 326 L 581 247 L 552.5 247 L 552 243 Z ",
                    fill: "rgb(238,238,238)",
                    stroke: "rgb(238,238,238)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 77,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 628.5 302 L 630 303.5 L 630 315.5 L 626.5 320 L 621 319 L 620 316.5 L 622 316 Q 620.6 319.7 626.5 318 L 628 316.5 L 628.5 302 Z ",
                    fill: "rgb(238,238,238)",
                    stroke: "rgb(238,238,238)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 78,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 639.5 302 Q 645.7 301.3 647 305.5 L 645.5 306 Q 644.3 302.8 638.5 304 Q 636 305.2 637 309 L 647 312.5 Q 648 318 644.5 319 L 638.5 320 L 636 319 L 635 315.5 L 638.5 318 Q 643.8 319.3 645 316.5 Q 646.5 312.1 643.5 313 L 635 308.5 Q 633.1 303.1 636.5 304 L 639.5 302 Z ",
                    fill: "rgb(238,238,238)",
                    stroke: "rgb(238,238,238)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 79,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 613 317 Q 616 315.8 615 319.5 L 613 318.5 L 613 317 Z ",
                    fill: "rgb(238,238,238)",
                    stroke: "rgb(238,238,238)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 80,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 352.5 250 L 353 323.5 L 352 323.5 L 352.5 250 Z ",
                    fill: "rgb(128,128,128)",
                    stroke: "rgb(128,128,128)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 81,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 627.5 303 L 628 313.5 L 627 313.5 L 627.5 303 Z ",
                    fill: "rgb(128,128,128)",
                    stroke: "rgb(128,128,128)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 82,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 428.5 321 L 472 321.5 L 428.5 322 L 428.5 321 Z ",
                    fill: "rgb(128,128,128)",
                    stroke: "rgb(128,128,128)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 83,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 473.5 321 L 478 321.5 L 473.5 322 L 473.5 321 Z ",
                    fill: "rgb(128,128,128)",
                    stroke: "rgb(128,128,128)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 84,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 575.5 200 L 575 201.5 Q 575.7 204.1 573 203 L 573 205.5 L 571 206.5 L 571 204.5 L 575.5 200 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 85,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 427.5 248 L 428 280 L 431 280.5 L 428.5 281 L 427 279.5 L 427.5 248 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 86,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 513.5 277 L 516 278.5 L 514.5 279 L 513.5 277 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 87,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 432.5 280 L 475 280.5 L 432.5 281 L 432.5 280 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 88,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 427.5 285 L 428 320.5 L 427 320.5 L 427.5 285 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 89,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 639.5 301 L 643 301.5 L 639.5 302 L 639.5 301 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 90,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 644.5 310 L 647 311.5 L 645.5 311 L 644.5 310 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 91,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 626.5 316 L 625.5 318 L 624 317.5 L 626.5 316 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 92,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 478.5 321 L 479 325.5 L 478 325.5 L 478.5 321 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 93,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 437.5 362 L 440 362.5 L 439.5 365 L 437.5 362 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 94,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 441.5 365 L 444 369.5 L 440 366.5 L 441.5 365 Z ",
                    fill: "rgb(98,98,98)",
                    stroke: "rgb(98,98,98)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Cloud.tsx",
                    lineNumber: 95,
                    columnNumber: 3
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Cloud.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Cloud.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Supercoilsvgrepocom, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Supercoilsvgrepocom;
var _c;
__turbopack_context__.k.register(_c, "Supercoilsvgrepocom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Cloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Cloud.tsx [app-client] (ecmascript)");
;
;
;
function Header({ onExportCode, onDownloadSVG, onShowHelp, isDarkMode, onToggleTheme }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 min-h-16 flex flex-col md:flex-row md:items-center justify-between py-2 md:py-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full md:w-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.href = '/',
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-8 h-8 ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-lg flex items-center justify-center flex-shrink-0`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                            className: `w-5 h-5 ${isDarkMode ? 'text-black' : 'text-white'} flex-shrink-0`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: `text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`,
                                        children: "SVG Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Cloud$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Supercoilsvgrepocom"], {}, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2 md:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onToggleTheme,
                                    className: `p-2 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors`,
                                    title: isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
                                    children: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-4 h-4 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-4 h-4 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 45,
                                        columnNumber: 73
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        className: "w-4 h-4 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://twitter.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center space-x-4 mt-2 md:mt-0 md:ml-[-40px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onExportCode,
                                    className: `px-4 py-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} rounded-lg transition-colors font-medium flex items-center space-x-2`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                            className: "w-4 h-4 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Export Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                onDownloadSVG && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onDownloadSVG,
                                    className: `px-4 py-2 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors font-medium flex items-center space-x-2`,
                                    title: "Download SVG",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-4 h-4 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Download SVG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        onShowHelp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onShowHelp,
                            className: `hidden md:flex px-4 py-3 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors items-center space-x-2`,
                            title: "Help & Usage Guide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                className: "w-4 h-4 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onToggleTheme,
                            className: `hidden md:flex px-4 py-3 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'} rounded-lg transition-colors items-center space-x-2`,
                            title: isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
                            children: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                className: "w-4 h-4 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 110,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                className: "w-4 h-4 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 110,
                                columnNumber: 71
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center space-x-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    className: "w-5 h-5 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://x.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5 h-5 flex-shrink-0 flex items-center justify-center bg-black rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-xs font-bold",
                                        children: "𝕏"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/svgParser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UploadPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UploadPanel": (()=>UploadPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$imagetracerjs$2f$imagetracer_v1$2e$2$2e$6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/imagetracerjs/imagetracer_v1.2.6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgParser.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function UploadPanel({ onUpload, isConverting, setIsConverting, isDarkMode }) {
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [conversionStep, setConversionStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Client-side image to SVG conversion
    const convertImageToSvg = (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = (event)=>{
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
                        roundcoords: 1
                    };
                    // imagetracerjs는 콜백 함수가 필수입니다
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$imagetracerjs$2f$imagetracer_v1$2e$2$2e$6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].imageToSVG(event.target.result, (svgString)=>{
                        resolve(svgString);
                    }, options);
                } else {
                    reject(new Error('Could not read file.'));
                }
            };
            reader.onerror = ()=>{
                reject(new Error('Error reading file.'));
            };
            reader.readAsDataURL(file);
        });
    };
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadPanel.useCallback[onDrop]": async (acceptedFiles)=>{
            if (acceptedFiles.length === 0) return;
            const file = acceptedFiles[0];
            setError('');
            setConversionStep('');
            setIsConverting(true);
            try {
                if (file.type === 'image/svg+xml') {
                    setConversionStep('Reading SVG file...');
                    const text = await file.text();
                    // Parse the SVG to extract path information
                    setConversionStep('Parsing SVG paths...');
                    try {
                        const parsedSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSVGPaths"])(text);
                        console.log('Parsed SVG:', parsedSVG); // Debug log
                        onUpload(text, file.name, parsedSVG);
                    } catch (parseError) {
                        console.warn('Failed to parse SVG paths, using original content:', parseError);
                        onUpload(text, file.name);
                    }
                } else if (file.type.startsWith('image/')) {
                    setConversionStep('Preparing image for conversion...');
                    const svgResult = await convertImageToSvg(file);
                    // Parse the generated SVG
                    setConversionStep('Parsing generated SVG...');
                    try {
                        const parsedSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSVGPaths"])(svgResult);
                        console.log('Parsed generated SVG:', parsedSVG); // Debug log
                        onUpload(svgResult, file.name, parsedSVG);
                    } catch (parseError) {
                        console.warn('Failed to parse generated SVG paths, using original content:', parseError);
                        onUpload(svgResult, file.name);
                    }
                } else {
                    throw new Error('Unsupported file type. Please upload SVG, PNG, JPG, or GIF files.');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred while processing the file.');
            } finally{
                setIsConverting(false);
                setConversionStep('');
            }
        }
    }["UploadPanel.useCallback[onDrop]"], [
        onUpload,
        setIsConverting
    ]);
    const { getRootProps, getInputProps, isDragActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        onDrop,
        accept: {
            'image/*': [
                '.svg',
                '.png',
                '.jpg',
                '.jpeg',
                '.gif',
                '.webp'
            ]
        },
        maxFiles: 1,
        disabled: isConverting
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...getRootProps(),
                className: `
          relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all
          ${isDragActive ? 'border-blue-500 bg-blue-500/10' : `${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`}
          ${isConverting ? 'pointer-events-none opacity-50' : ''}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...getInputProps()
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    isConverting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-12 h-12 text-blue-500 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                        children: "Converting to SVG..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    conversionStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`,
                                        children: conversionStep
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-16 h-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg flex items-center justify-center`,
                                children: isDragActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "w-8 h-8 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadPanel.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                    className: `w-8 h-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadPanel.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`,
                                        children: isDragActive ? 'Drop your image here' : 'Upload an image'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`,
                                        children: "Drag & drop or click to select • SVG, PNG, JPG, GIF up to 10MB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadPanel.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-4 p-4 ${isDarkMode ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-200'} border rounded-lg`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `${isDarkMode ? 'text-red-400' : 'text-red-600'} text-sm`,
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadPanel.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UploadPanel.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UploadPanel.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(UploadPanel, "JxmL/ETIIYRgvUu0PRY0JXCcBok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c = UploadPanel;
var _c;
__turbopack_context__.k.register(_c, "UploadPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/svgStateManager.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/cssLoader.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// CSS 파일 동적 로딩 유틸리티
__turbopack_context__.s({
    "getAnimationCSSContent": (()=>getAnimationCSSContent),
    "getLoadedAnimationCSS": (()=>getLoadedAnimationCSS),
    "getSpecificAnimationCSS": (()=>getSpecificAnimationCSS),
    "isAnimationCSSLoaded": (()=>isAnimationCSSLoaded),
    "loadAnimationCSS": (()=>loadAnimationCSS),
    "unloadAllAnimationCSS": (()=>unloadAllAnimationCSS),
    "unloadAnimationCSS": (()=>unloadAnimationCSS)
});
const loadedStylesheets = {};
// 애니메이션 CSS 정의
const ANIMATION_CSS = {
    flip: `
    /* Flip Animations */
    .flip-horizontal-bottom {
      -webkit-animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-bottom {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); }
    }
    @keyframes flip-horizontal-bottom {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); }
    }
    
    .flip-horizontal-top {
      -webkit-animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-top {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); }
    }
    @keyframes flip-horizontal-top {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); }
    }
    
    .flip-horizontal-fwd {
      -webkit-animation: flip-horizontal-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg); transform: translateZ(160px) rotateX(-180deg); }
    }
    @keyframes flip-horizontal-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg); transform: translateZ(160px) rotateX(-180deg); }
    }
    
    .flip-horizontal-bck {
      -webkit-animation: flip-horizontal-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg); transform: translateZ(-160px) rotateX(-180deg); }
    }
    @keyframes flip-horizontal-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg); transform: translateZ(-160px) rotateX(-180deg); }
    }
    
    .flip-vertical-left {
      -webkit-animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-left {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); }
    }
    @keyframes flip-vertical-left {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); }
    }
    
    .flip-vertical-right {
      -webkit-animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-right {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }
    }
    @keyframes flip-vertical-right {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }
    }
    
    .flip-vertical-fwd {
      -webkit-animation: flip-vertical-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-fwd {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateY(-180deg); transform: translateZ(160px) rotateY(-180deg); }
    }
    @keyframes flip-vertical-fwd {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateY(-180deg); transform: translateZ(160px) rotateY(-180deg); }
    }
    
    .flip-vertical-bck {
      -webkit-animation: flip-vertical-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-bck {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateY(-180deg); transform: translateZ(-160px) rotateY(-180deg); }
    }
    @keyframes flip-vertical-bck {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateY(-180deg); transform: translateZ(-160px) rotateY(-180deg); }
    }
    
    .flip-diagonal-1-fwd {
      -webkit-animation: flip-diagonal-1-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-1-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-1-bck {
      -webkit-animation: flip-diagonal-1-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-1-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-1-bl {
      -webkit-animation: flip-diagonal-1-bl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-bl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-bl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes flip-diagonal-1-bl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .flip-diagonal-1-tr {
      -webkit-animation: flip-diagonal-1-tr 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-tr 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-tr {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes flip-diagonal-1-tr {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .flip-diagonal-2-fwd {
      -webkit-animation: flip-diagonal-2-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-2-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-2-bck {
      -webkit-animation: flip-diagonal-2-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-2-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-2-br {
      -webkit-animation: flip-diagonal-2-br 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-br 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-br {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes flip-diagonal-2-br {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .flip-diagonal-2-tl {
      -webkit-animation: flip-diagonal-2-tl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-tl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-tl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes flip-diagonal-2-tl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
  `,
    'scale-up': `
    /* Scale Up Animations */
    .scale-up-center {
      -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-center {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); }
      100% { -webkit-transform: scale(1); transform: scale(1); }
    }
    @keyframes scale-up-center {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); }
      100% { -webkit-transform: scale(1); transform: scale(1); }
    }
    
    .scale-up-top {
      -webkit-animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-top {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-up-top {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-up-bottom {
      -webkit-animation: scale-up-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-bottom {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-up-bottom {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-up-left {
      -webkit-animation: scale-up-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-left {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-up-left {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-up-right {
      -webkit-animation: scale-up-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-right {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-up-right {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-up-hor-left {
      -webkit-animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-hor-left {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-up-hor-left {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-up-hor-center {
      -webkit-animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-hor-center {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); }
    }
    @keyframes scale-up-hor-center {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); }
    }
    
    .scale-up-hor-right {
      -webkit-animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-hor-right {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-up-hor-right {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-up-ver-top {
      -webkit-animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-ver-top {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-up-ver-top {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-up-ver-center {
      -webkit-animation: scale-up-ver-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-ver-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-ver-center {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
    }
    @keyframes scale-up-ver-center {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
    }
    
    .scale-up-ver-bottom {
      -webkit-animation: scale-up-ver-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-ver-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-ver-bottom {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-up-ver-bottom {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-up-tl {
      -webkit-animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-tl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes scale-up-tl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .scale-up-tr {
      -webkit-animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-tr {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes scale-up-tr {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .scale-up-bl {
      -webkit-animation: scale-up-bl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-bl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-bl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes scale-up-bl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .scale-up-br {
      -webkit-animation: scale-up-br 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-br 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-br {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes scale-up-br {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
    swing: `
    /* Swing Animations */
    .swing-top-fwd {
      -webkit-animation: swing-top-fwd 0.6s ease-out both;
      animation: swing-top-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    @keyframes swing-top-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    
    .swing-top-bck {
      -webkit-animation: swing-top-bck 0.6s ease-out both;
      animation: swing-top-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    @keyframes swing-top-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    
    .swing-bottom-fwd {
      -webkit-animation: swing-bottom-fwd 0.6s ease-out both;
      animation: swing-bottom-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    @keyframes swing-bottom-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    
    .swing-bottom-bck {
      -webkit-animation: swing-bottom-bck 0.6s ease-out both;
      animation: swing-bottom-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    @keyframes swing-bottom-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    
    .swing-left-fwd {
      -webkit-animation: swing-left-fwd 0.6s ease-out both;
      animation: swing-left-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-left-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    @keyframes swing-left-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    
    .swing-left-bck {
      -webkit-animation: swing-left-bck 0.6s ease-out both;
      animation: swing-left-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-left-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    @keyframes swing-left-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    
    .swing-right-fwd {
      -webkit-animation: swing-right-fwd 0.6s ease-out both;
      animation: swing-right-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-right-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    @keyframes swing-right-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    
    .swing-right-bck {
      -webkit-animation: swing-right-bck 0.6s ease-out both;
      animation: swing-right-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-right-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    @keyframes swing-right-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    
    .swing-top-left-fwd {
      -webkit-animation: swing-top-left-fwd 0.6s ease-out both;
      animation: swing-top-left-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes swing-top-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .swing-top-left-bck {
      -webkit-animation: swing-top-left-bck 0.6s ease-out both;
      animation: swing-top-left-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes swing-top-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .swing-top-right-fwd {
      -webkit-animation: swing-top-right-fwd 0.6s ease-out both;
      animation: swing-top-right-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes swing-top-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .swing-top-right-bck {
      -webkit-animation: swing-top-right-bck 0.6s ease-out both;
      animation: swing-top-right-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes swing-top-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .swing-bottom-left-fwd {
      -webkit-animation: swing-bottom-left-fwd 0.6s ease-out both;
      animation: swing-bottom-left-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes swing-bottom-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .swing-bottom-left-bck {
      -webkit-animation: swing-bottom-left-bck 0.6s ease-out both;
      animation: swing-bottom-left-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes swing-bottom-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .swing-bottom-right-fwd {
      -webkit-animation: swing-bottom-right-fwd 0.6s ease-out both;
      animation: swing-bottom-right-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes swing-bottom-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .swing-bottom-right-bck {
      -webkit-animation: swing-bottom-right-bck 0.6s ease-out both;
      animation: swing-bottom-right-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes swing-bottom-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
    'scale-down': `
    /* Scale Down Animations */
    .scale-down-center {
      -webkit-animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-center {
      0% { -webkit-transform: scale(1); transform: scale(1); }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); }
    }
    @keyframes scale-down-center {
      0% { -webkit-transform: scale(1); transform: scale(1); }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); }
    }
    
    .scale-down-top {
      -webkit-animation: scale-down-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-top {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-down-top {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-down-bottom {
      -webkit-animation: scale-down-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-bottom {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-down-bottom {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-down-left {
      -webkit-animation: scale-down-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-left {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-down-left {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-down-right {
      -webkit-animation: scale-down-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-right {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-down-right {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-down-hor-left {
      -webkit-animation: scale-down-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-hor-left {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-down-hor-left {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-down-hor-center {
      -webkit-animation: scale-down-hor-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-hor-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-hor-center {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
    }
    @keyframes scale-down-hor-center {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
    }
    
    .scale-down-hor-right {
      -webkit-animation: scale-down-hor-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-hor-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-hor-right {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-down-hor-right {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-down-ver-top {
      -webkit-animation: scale-down-ver-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-ver-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-ver-top {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-down-ver-top {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-down-ver-center {
      -webkit-animation: scale-down-ver-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-ver-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-ver-center {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
    }
    @keyframes scale-down-ver-center {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
    }
    
    .scale-down-ver-bottom {
      -webkit-animation: scale-down-ver-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-ver-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-ver-bottom {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-down-ver-bottom {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-down-tl {
      -webkit-animation: scale-down-tl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-tl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-tl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes scale-down-tl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .scale-down-tr {
      -webkit-animation: scale-down-tr 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-tr 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-tr {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes scale-down-tr {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .scale-down-bl {
      -webkit-animation: scale-down-bl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-bl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-bl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes scale-down-bl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .scale-down-br {
      -webkit-animation: scale-down-br 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-br 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-br {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes scale-down-br {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
    slide: `
    /* Slide Animations */
    .slide-top {
      -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-top {
      0% { -webkit-transform: translateY(-100px); transform: translateY(-100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    @keyframes slide-top {
      0% { -webkit-transform: translateY(-100px); transform: translateY(-100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    
    .slide-bottom {
      -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bottom {
      0% { -webkit-transform: translateY(100px); transform: translateY(100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    @keyframes slide-bottom {
      0% { -webkit-transform: translateY(100px); transform: translateY(100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    
    .slide-left {
      -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-left {
      0% { -webkit-transform: translateX(-100px); transform: translateX(-100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    @keyframes slide-left {
      0% { -webkit-transform: translateX(-100px); transform: translateX(-100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    
    .slide-right {
      -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-right {
      0% { -webkit-transform: translateX(100px); transform: translateX(100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    @keyframes slide-right {
      0% { -webkit-transform: translateX(100px); transform: translateX(100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    
    .slide-tl {
      -webkit-animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-tl {
      0% { -webkit-transform: translateX(-100px) translateY(-100px); transform: translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-tl {
      0% { -webkit-transform: translateX(-100px) translateY(-100px); transform: translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    
    .slide-tr {
      -webkit-animation: slide-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-tr {
      0% { -webkit-transform: translateX(100px) translateY(-100px); transform: translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-tr {
      0% { -webkit-transform: translateX(100px) translateY(-100px); transform: translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    
    .slide-bl {
      -webkit-animation: slide-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bl {
      0% { -webkit-transform: translateX(-100px) translateY(100px); transform: translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-bl {
      0% { -webkit-transform: translateX(-100px) translateY(100px); transform: translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    
    .slide-br {
      -webkit-animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-br {
      0% { -webkit-transform: translateX(100px) translateY(100px); transform: translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-br {
      0% { -webkit-transform: translateX(100px) translateY(100px); transform: translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
  `,
    'slide-fwd': `
    /* Slide Forward Animations */
    .slide-fwd-center {
      -webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(160px); transform: translateZ(160px); }
    }
    @keyframes slide-fwd-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(160px); transform: translateZ(160px); }
    }
    
    .slide-fwd-top {
      -webkit-animation: slide-fwd-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-top {
      0% { -webkit-transform: translateZ(0) translateY(-100px); transform: translateZ(0) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    @keyframes slide-fwd-top {
      0% { -webkit-transform: translateZ(0) translateY(-100px); transform: translateZ(0) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    
    .slide-fwd-bottom {
      -webkit-animation: slide-fwd-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-bottom {
      0% { -webkit-transform: translateZ(0) translateY(100px); transform: translateZ(0) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    @keyframes slide-fwd-bottom {
      0% { -webkit-transform: translateZ(0) translateY(100px); transform: translateZ(0) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    
    .slide-fwd-left {
      -webkit-animation: slide-fwd-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-left {
      0% { -webkit-transform: translateZ(0) translateX(-100px); transform: translateZ(0) translateX(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    @keyframes slide-fwd-left {
      0% { -webkit-transform: translateZ(0) translateX(-100px); transform: translateZ(0) translateX(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    
    .slide-fwd-right {
      -webkit-animation: slide-fwd-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-right {
      0% { -webkit-transform: translateZ(0) translateX(100px); transform: translateZ(0) translateX(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    @keyframes slide-fwd-right {
      0% { -webkit-transform: translateZ(0) translateX(100px); transform: translateZ(0) translateX(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    
    .slide-fwd-tl {
      -webkit-animation: slide-fwd-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-tl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(-100px); transform: translateZ(0) translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-tl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(-100px); transform: translateZ(0) translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    
    .slide-fwd-tr {
      -webkit-animation: slide-fwd-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-tr {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(-100px); transform: translateZ(0) translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-tr {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(-100px); transform: translateZ(0) translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    
    .slide-fwd-bl {
      -webkit-animation: slide-fwd-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-bl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(100px); transform: translateZ(0) translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-bl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(100px); transform: translateZ(0) translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    
    .slide-fwd-br {
      -webkit-animation: slide-fwd-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-br {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(100px); transform: translateZ(0) translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-br {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(100px); transform: translateZ(0) translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
  `,
    'slide-bck': `
    /* Slide Back Animations */
    .slide-bck-center {
      -webkit-animation: slide-bck-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(-400px); transform: translateZ(-400px); }
    }
    @keyframes slide-bck-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(-400px); transform: translateZ(-400px); }
    }
    
    .slide-bck-top {
      -webkit-animation: slide-bck-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(-100px); transform: translateZ(-400px) translateY(-100px); }
    }
    @keyframes slide-bck-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(-100px); transform: translateZ(-400px) translateY(-100px); }
    }
    
    .slide-bck-bottom {
      -webkit-animation: slide-bck-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(100px); transform: translateZ(-400px) translateY(100px); }
    }
    @keyframes slide-bck-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(100px); transform: translateZ(-400px) translateY(100px); }
    }
    
    .slide-bck-left {
      -webkit-animation: slide-bck-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px); transform: translateZ(-400px) translateX(-100px); }
    }
    @keyframes slide-bck-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px); transform: translateZ(-400px) translateX(-100px); }
    }
    
    .slide-bck-right {
      -webkit-animation: slide-bck-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px); transform: translateZ(-400px) translateX(100px); }
    }
    @keyframes slide-bck-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px); transform: translateZ(-400px) translateX(100px); }
    }
    
    .slide-bck-tl {
      -webkit-animation: slide-bck-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-tl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(-100px); transform: translateZ(-400px) translateX(-100px) translateY(-100px); }
    }
    @keyframes slide-bck-tl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(-100px); transform: translateZ(-400px) translateX(-100px) translateY(-100px); }
    }
    
    .slide-bck-tr {
      -webkit-animation: slide-bck-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-tr {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(-100px); transform: translateZ(-400px) translateX(100px) translateY(-100px); }
    }
    @keyframes slide-bck-tr {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(-100px); transform: translateZ(-400px) translateX(100px) translateY(-100px); }
    }
    
    .slide-bck-bl {
      -webkit-animation: slide-bck-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-bl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(100px); transform: translateZ(-400px) translateX(-100px) translateY(100px); }
    }
    @keyframes slide-bck-bl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(100px); transform: translateZ(-400px) translateX(-100px) translateY(100px); }
    }
    
    .slide-bck-br {
      -webkit-animation: slide-bck-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-br {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(100px); transform: translateZ(-400px) translateX(100px) translateY(100px); }
    }
    @keyframes slide-bck-br {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(100px); transform: translateZ(-400px) translateX(100px) translateY(100px); }
    }
  `,
    'slide-rotate': `
    /* Slide Rotate Animations */
    .slide-rotate-hor-top {
      -webkit-animation: slide-rotate-hor-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-top {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes slide-rotate-hor-top {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .slide-rotate-hor-bottom {
      -webkit-animation: slide-rotate-hor-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-bottom {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes slide-rotate-hor-bottom {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .slide-rotate-ver-left {
      -webkit-animation: slide-rotate-ver-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-left {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes slide-rotate-ver-left {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .slide-rotate-ver-right {
      -webkit-animation: slide-rotate-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-right {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes slide-rotate-ver-right {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .slide-rotate-hor-t-fwd {
      -webkit-animation: slide-rotate-hor-t-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-t-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-t-fwd {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(180deg); transform: translateZ(160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes slide-rotate-hor-t-fwd {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(180deg); transform: translateZ(160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .slide-rotate-hor-t-bck {
      -webkit-animation: slide-rotate-hor-t-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-t-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-t-bck {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(-180deg); transform: translateZ(-160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes slide-rotate-hor-t-bck {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(-180deg); transform: translateZ(-160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .slide-rotate-hor-b-fwd {
      -webkit-animation: slide-rotate-hor-b-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-b-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-b-fwd {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(-180deg); transform: translateZ(160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes slide-rotate-hor-b-fwd {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(-180deg); transform: translateZ(160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .slide-rotate-hor-b-bck {
      -webkit-animation: slide-rotate-hor-b-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-b-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-b-bck {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(180deg); transform: translateZ(-160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes slide-rotate-hor-b-bck {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(180deg); transform: translateZ(-160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .slide-rotate-ver-l-fwd {
      -webkit-animation: slide-rotate-ver-l-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-l-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-l-fwd {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(-180deg); transform: translateZ(160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes slide-rotate-ver-l-fwd {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(-180deg); transform: translateZ(160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .slide-rotate-ver-l-bck {
      -webkit-animation: slide-rotate-ver-l-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-l-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-l-bck {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(180deg); transform: translateZ(-160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes slide-rotate-ver-l-bck {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(180deg); transform: translateZ(-160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .slide-rotate-ver-r-fwd {
      -webkit-animation: slide-rotate-ver-r-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-r-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-r-fwd {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(180deg); transform: translateZ(160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes slide-rotate-ver-r-fwd {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(180deg); transform: translateZ(160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .slide-rotate-ver-r-bck {
      -webkit-animation: slide-rotate-ver-r-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-r-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-r-bck {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(-180deg); transform: translateZ(-160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes slide-rotate-ver-r-bck {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(-180deg); transform: translateZ(-160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `,
    'rotate-90': `
    /* Rotate 90 Animations */
    .rotate-90-cw {
      -webkit-animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
    }
    @keyframes rotate-90-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
    }
    
    .rotate-90-ccw {
      -webkit-animation: rotate-90-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); }
    }
    @keyframes rotate-90-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); }
    }
    
    .rotate-90-tl-cw {
      -webkit-animation: rotate-90-tl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-90-tl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-90-tl-ccw {
      -webkit-animation: rotate-90-tl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-90-tl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-90-tr-cw {
      -webkit-animation: rotate-90-tr-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tr-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tr-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-90-tr-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-90-tr-ccw {
      -webkit-animation: rotate-90-tr-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tr-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tr-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-90-tr-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-90-bl-cw {
      -webkit-animation: rotate-90-bl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-bl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-bl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-90-bl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-90-bl-ccw {
      -webkit-animation: rotate-90-bl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-bl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-bl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-90-bl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-90-br-cw {
      -webkit-animation: rotate-90-br-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-br-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-br-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-90-br-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .rotate-90-br-ccw {
      -webkit-animation: rotate-90-br-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-br-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-br-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-90-br-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
    rotate: `
    /* Rotate Animations */
    .rotate-center {
      -webkit-animation: rotate-center 0.6s ease-in-out both;
      animation: rotate-center 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-center {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
    }
    @keyframes rotate-center {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
    }
    
    .rotate-tl {
      -webkit-animation: rotate-tl 0.6s ease-in-out both;
      animation: rotate-tl 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-tl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-tl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-tr {
      -webkit-animation: rotate-tr 0.6s ease-in-out both;
      animation: rotate-tr 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-tr {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-tr {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-bl {
      -webkit-animation: rotate-bl 0.6s ease-in-out both;
      animation: rotate-bl 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-bl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-bl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-br {
      -webkit-animation: rotate-br 0.6s ease-in-out both;
      animation: rotate-br 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-br {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-br {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .rotate-top {
      -webkit-animation: rotate-top 0.6s ease-in-out both;
      animation: rotate-top 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-top {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes rotate-top {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .rotate-bottom {
      -webkit-animation: rotate-bottom 0.6s ease-in-out both;
      animation: rotate-bottom 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-bottom {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes rotate-bottom {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .rotate-left {
      -webkit-animation: rotate-left 0.6s ease-in-out both;
      animation: rotate-left 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-left {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes rotate-left {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .rotate-right {
      -webkit-animation: rotate-right 0.6s ease-in-out both;
      animation: rotate-right 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-right {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes rotate-right {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .rotate-diagonal-1 {
      -webkit-animation: rotate-diagonal-1 0.6s ease-in-out both;
      animation: rotate-diagonal-1 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-diagonal-1 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-diagonal-1 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-diagonal-2 {
      -webkit-animation: rotate-diagonal-2 0.6s ease-in-out both;
      animation: rotate-diagonal-2 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-diagonal-2 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-diagonal-2 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
    'rotate-scale': `
    /* Rotate Scale Animations */
    .rotate-scale-up {
      -webkit-animation: rotate-scale-up 0.65s linear both;
      animation: rotate-scale-up 0.65s linear both;
    }
    @-webkit-keyframes rotate-scale-up {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(2) rotateZ(180deg); transform: scale(2) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    @keyframes rotate-scale-up {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(2) rotateZ(180deg); transform: scale(2) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    
    .rotate-scale-down {
      -webkit-animation: rotate-scale-down 0.65s linear both;
      animation: rotate-scale-down 0.65s linear both;
    }
    @-webkit-keyframes rotate-scale-down {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(0.5) rotateZ(180deg); transform: scale(0.5) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    @keyframes rotate-scale-down {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(0.5) rotateZ(180deg); transform: scale(0.5) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    
    .rotate-scale-left {
      -webkit-animation: rotate-scale-left 0.65s ease-in-out both;
      animation: rotate-scale-left 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-left {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes rotate-scale-left {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .rotate-scale-right {
      -webkit-animation: rotate-scale-right 0.65s ease-in-out both;
      animation: rotate-scale-right 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-right {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes rotate-scale-right {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .rotate-scale-tl {
      -webkit-animation: rotate-scale-tl 0.65s ease-in-out both;
      animation: rotate-scale-tl 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-tl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-scale-tl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-scale-tr {
      -webkit-animation: rotate-scale-tr 0.65s ease-in-out both;
      animation: rotate-scale-tr 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-tr {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-scale-tr {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-scale-bl {
      -webkit-animation: rotate-scale-bl 0.65s ease-in-out both;
      animation: rotate-scale-bl 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-bl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-scale-bl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-scale-br {
      -webkit-animation: rotate-scale-br 0.65s ease-in-out both;
      animation: rotate-scale-br 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-br {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-scale-br {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
    'flip-2': `
    /* Flip 2 Animations */
    .flip-2-hor-top-1 {
      -webkit-animation: flip-2-hor-top-1 0.6s ease-out both;
      animation: flip-2-hor-top-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-top-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-2-hor-top-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-2-hor-top-2 {
      -webkit-animation: flip-2-hor-top-2 0.6s ease-out both;
      animation: flip-2-hor-top-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-top-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(180deg); transform: translateY(-100px) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-2-hor-top-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(180deg); transform: translateY(-100px) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-2-hor-bottom-1 {
      -webkit-animation: flip-2-hor-bottom-1 0.6s ease-out both;
      animation: flip-2-hor-bottom-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-bottom-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-2-hor-bottom-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-2-hor-bottom-2 {
      -webkit-animation: flip-2-hor-bottom-2 0.6s ease-out both;
      animation: flip-2-hor-bottom-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-bottom-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(-180deg); transform: translateY(100px) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-2-hor-bottom-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(-180deg); transform: translateY(100px) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-2-ver-left-1 {
      -webkit-animation: flip-2-ver-left-1 0.6s ease-out both;
      animation: flip-2-ver-left-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-left-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(180deg); transform: translateX(-100px) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-2-ver-left-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(180deg); transform: translateX(-100px) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-2-ver-left-2 {
      -webkit-animation: flip-2-ver-left-2 0.6s ease-out both;
      animation: flip-2-ver-left-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-left-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-2-ver-left-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-2-ver-right-1 {
      -webkit-animation: flip-2-ver-right-1 0.6s ease-out both;
      animation: flip-2-ver-right-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-right-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(-180deg); transform: translateX(100px) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-2-ver-right-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(-180deg); transform: translateX(100px) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .flip-2-ver-right-2 {
      -webkit-animation: flip-2-ver-right-2 0.6s ease-out both;
      animation: flip-2-ver-right-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-right-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-2-ver-right-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `,
    'shadow-drop': `
    /* Shadow Drop Animations */
    .shadow-drop-center {
      -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-center {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-center {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-top {
      -webkit-animation: shadow-drop-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-top {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-top {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-bottom {
      -webkit-animation: shadow-drop-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-bottom {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-bottom {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-left {
      -webkit-animation: shadow-drop-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-left {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-left {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-right {
      -webkit-animation: shadow-drop-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-right {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-right {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
  `,
    'shadow-drop-2': `
    /* Shadow Drop 2 Animations */
    .shadow-drop-2-center {
      -webkit-animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px); transform: translateZ(50px); -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px); transform: translateZ(50px); -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-top {
      -webkit-animation: shadow-drop-2-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(-25px); transform: translateZ(50px) translateY(-25px); -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(-25px); transform: translateZ(50px) translateY(-25px); -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-bottom {
      -webkit-animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(25px); transform: translateZ(50px) translateY(25px); -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(25px); transform: translateZ(50px) translateY(25px); -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-left {
      -webkit-animation: shadow-drop-2-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(-25px); transform: translateZ(50px) translateX(-25px); -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(-25px); transform: translateZ(50px) translateX(-25px); -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-right {
      -webkit-animation: shadow-drop-2-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(25px); transform: translateZ(50px) translateX(25px); -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(25px); transform: translateZ(50px) translateX(25px); -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
  `,
    'shadow-inset': `
    /* Shadow Inset Animations */
    .shadow-inset-center {
      -webkit-animation: shadow-inset-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-center {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-center {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-top {
      -webkit-animation: shadow-inset-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-top {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-top {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-bottom {
      -webkit-animation: shadow-inset-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-bottom {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-bottom {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-left {
      -webkit-animation: shadow-inset-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-left {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-left {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-right {
      -webkit-animation: shadow-inset-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-right {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-right {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
  `,
    'shadow-pop': `
    /* Shadow Pop Animations */
    .shadow-pop-tl {
      -webkit-animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-tl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(-8px); transform: translateX(-8px) translateY(-8px); }
    }
    @keyframes shadow-pop-tl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(-8px); transform: translateX(-8px) translateY(-8px); }
    }
    
    .shadow-pop-tr {
      -webkit-animation: shadow-pop-tr 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-tr 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-tr {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; -webkit-transform: translateX(8px) translateY(-8px); transform: translateX(8px) translateY(-8px); }
    }
    @keyframes shadow-pop-tr {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; -webkit-transform: translateX(8px) translateY(-8px); transform: translateX(8px) translateY(-8px); }
    }
    
    .shadow-pop-bl {
      -webkit-animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-bl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(8px); transform: translateX(-8px) translateY(8px); }
    }
    @keyframes shadow-pop-bl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(8px); transform: translateX(-8px) translateY(8px); }
    }
    
    .shadow-pop-br {
      -webkit-animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-br {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; -webkit-transform: translateX(8px) translateY(8px); transform: translateX(8px) translateY(8px); }
    }
    @keyframes shadow-pop-br {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; -webkit-transform: translateX(8px) translateY(8px); transform: translateX(8px) translateY(8px); }
    }
  `,
    'flip-scale': `
    /* Flip Scale Animations */
    .flip-scale-hor-top {
      -webkit-animation: flip-scale-hor-top 0.5s linear both;
      animation: flip-scale-hor-top 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.5) rotateX(-90deg); transform: scale(1.5) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-scale-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.5) rotateX(-90deg); transform: scale(1.5) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-scale-hor-bottom {
      -webkit-animation: flip-scale-hor-bottom 0.5s linear both;
      animation: flip-scale-hor-bottom 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.5) rotateX(90deg); transform: scale(1.5) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-scale-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.5) rotateX(90deg); transform: scale(1.5) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-scale-ver-left {
      -webkit-animation: flip-scale-ver-left 0.5s linear both;
      animation: flip-scale-ver-left 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(-90deg); transform: scale(1.5) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-scale-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(-90deg); transform: scale(1.5) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-scale-ver-right {
      -webkit-animation: flip-scale-ver-right 0.5s linear both;
      animation: flip-scale-ver-right 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(90deg); transform: scale(1.5) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-scale-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(90deg); transform: scale(1.5) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `,
    'flip-scale-2': `
    /* Flip Scale 2 Animations */
    .flip-scale-2-hor-top {
      -webkit-animation: flip-scale-2-hor-top 0.5s ease-out both;
      animation: flip-scale-2-hor-top 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.3) rotateX(-90deg); transform: scale(1.3) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      75% { -webkit-transform: scale(1.3) rotateX(-180deg); transform: scale(1.3) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-scale-2-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.3) rotateX(-90deg); transform: scale(1.3) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      75% { -webkit-transform: scale(1.3) rotateX(-180deg); transform: scale(1.3) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-scale-2-hor-bottom {
      -webkit-animation: flip-scale-2-hor-bottom 0.5s ease-out both;
      animation: flip-scale-2-hor-bottom 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.3) rotateX(90deg); transform: scale(1.3) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      75% { -webkit-transform: scale(1.3) rotateX(180deg); transform: scale(1.3) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-scale-2-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.3) rotateX(90deg); transform: scale(1.3) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      75% { -webkit-transform: scale(1.3) rotateX(180deg); transform: scale(1.3) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-scale-2-ver-left {
      -webkit-animation: flip-scale-2-ver-left 0.5s ease-out both;
      animation: flip-scale-2-ver-left 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(-90deg); transform: scale(1.3) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(-180deg); transform: scale(1.3) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-scale-2-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(-90deg); transform: scale(1.3) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(-180deg); transform: scale(1.3) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-scale-2-ver-right {
      -webkit-animation: flip-scale-2-ver-right 0.5s ease-out both;
      animation: flip-scale-2-ver-right 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(90deg); transform: scale(1.3) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(180deg); transform: scale(1.3) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-scale-2-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(90deg); transform: scale(1.3) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(180deg); transform: scale(1.3) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `
};
async function loadAnimationCSS(animationType) {
    const stylesheetId = `animation-${animationType}`;
    // 이미 로드된 경우 스킵
    if (loadedStylesheets[stylesheetId]) {
        return Promise.resolve();
    }
    const cssContent = ANIMATION_CSS[animationType];
    if (!cssContent) {
        return Promise.reject(new Error(`No CSS defined for animation type: ${animationType}`));
    }
    return new Promise((resolve)=>{
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = stylesheetId;
        style.innerHTML = cssContent;
        document.head.appendChild(style);
        loadedStylesheets[stylesheetId] = style; // HTMLLinkElement이지만 HTMLStyleElement도 허용
        resolve();
    });
}
function unloadAnimationCSS(animationType) {
    const stylesheetId = `animation-${animationType}`;
    const link = loadedStylesheets[stylesheetId];
    if (link && link.parentNode) {
        link.parentNode.removeChild(link);
        delete loadedStylesheets[stylesheetId];
    }
}
function unloadAllAnimationCSS() {
    Object.keys(loadedStylesheets).forEach((stylesheetId)=>{
        const link = loadedStylesheets[stylesheetId];
        if (link && link.parentNode) {
            link.parentNode.removeChild(link);
        }
    });
    // 로드된 스타일시트 목록 초기화
    Object.keys(loadedStylesheets).forEach((key)=>{
        delete loadedStylesheets[key];
    });
}
function getLoadedAnimationCSS() {
    return Object.keys(loadedStylesheets).map((id)=>id.replace('animation-', ''));
}
function isAnimationCSSLoaded(animationType) {
    const stylesheetId = `animation-${animationType}`;
    return !!loadedStylesheets[stylesheetId];
}
function getAnimationCSSContent(animationType) {
    return ANIMATION_CSS[animationType] || null;
}
function getSpecificAnimationCSS(animationType, direction) {
    const fullCSS = ANIMATION_CSS[animationType];
    if (!fullCSS) return '';
    const className = `${animationType}-${direction}`;
    let result = '';
    // CSS를 줄 단위로 분할하여 처리
    const lines = fullCSS.split('\n');
    let currentSection = '';
    let braceCount = 0;
    let inTargetSection = false;
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim();
        // 빈 줄은 스킵
        if (!line) continue;
        // 타겟 클래스나 키프레임을 찾았는지 확인
        const isTargetClass = line.includes(`.${className}`) && line.includes('{');
        const isTargetWebkitKeyframe = line.includes(`@-webkit-keyframes ${className}`) && line.includes('{');
        const isTargetKeyframe = line.includes(`@keyframes ${className}`) && line.includes('{');
        if (isTargetClass || isTargetWebkitKeyframe || isTargetKeyframe) {
            inTargetSection = true;
            currentSection = line;
            braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            // 같은 줄에 닫는 중괄호가 있으면 바로 완료
            if (braceCount === 0) {
                result += currentSection + '\n';
                currentSection = '';
                inTargetSection = false;
            }
            continue;
        }
        // 타겟 섹션 안에 있다면 계속 수집
        if (inTargetSection) {
            currentSection += '\n' + line;
            braceCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            // 중괄호가 모두 닫혔으면 섹션 완료
            if (braceCount === 0) {
                result += currentSection + '\n';
                currentSection = '';
                inTargetSection = false;
            }
        }
    }
    return result.trim();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PreviewPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PreviewPanel": (()=>PreviewPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgStateManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cssLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cssLoader.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function PreviewPanel({ svgContent, config, isDarkMode, svgEditorState, onPathSelect, animationConfig }) {
    _s();
    // 애니메이션 CSS 동적 로딩
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PreviewPanel.useEffect": ()=>{
            if (animationConfig && animationConfig.type) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cssLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAnimationCSS"])(animationConfig.type).catch({
                    "PreviewPanel.useEffect": (error)=>{
                        console.warn(`Failed to load animation CSS for ${animationConfig.type}:`, error);
                    }
                }["PreviewPanel.useEffect"]);
            }
        }
    }["PreviewPanel.useEffect"], [
        animationConfig
    ]);
    // 개별 path 설정을 반영한 SVG 처리
    const processedSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PreviewPanel.useMemo[processedSVG]": ()=>{
            if (!svgContent) return '';
            // 파싱된 SVG가 있는 경우 개별 path 설정 적용
            if (svgEditorState?.parsedSVG) {
                try {
                    // 각 path에 개별 설정 적용하여 새로운 SVG 생성
                    const updatedPaths = svgEditorState.parsedSVG.paths.map({
                        "PreviewPanel.useMemo[processedSVG].updatedPaths": (path)=>{
                            const renderSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathRenderSettings"])(path, svgEditorState.globalConfig);
                            return {
                                ...path,
                                fill: renderSettings.fill,
                                stroke: renderSettings.stroke,
                                strokeWidth: renderSettings.strokeWidth,
                                strokeLinecap: renderSettings.strokeLinecap,
                                strokeLinejoin: renderSettings.strokeLinejoin,
                                opacity: renderSettings.opacity
                            };
                        }
                    }["PreviewPanel.useMemo[processedSVG].updatedPaths"]);
                    const updatedParsedSVG = {
                        ...svgEditorState.parsedSVG,
                        paths: updatedPaths
                    };
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSVGWithPaths"])(updatedParsedSVG);
                } catch (error) {
                    console.warn('Failed to apply individual path settings, falling back to global:', error);
                }
            }
            // Fallback: 기존 글로벌 방식으로 처리
            let processed = svgContent.replace(/<\?xml[^>]*\?>/g, '').replace(/<!--[^>]*-->/g, '').trim();
            // 글로벌 설정 적용
            processed = processed.replace(/stroke-width="([^"]*)"/g, `stroke-width="${config.strokeWidth}"`);
            processed = processed.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
            processed = processed.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
            processed = processed.replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.fillColor}"`);
            processed = processed.replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.fillColor}"`);
            processed = processed.replace(/stroke="#[a-fA-F0-9]{6}"/g, `stroke="${config.color}"`);
            processed = processed.replace(/stroke="#[a-fA-F0-9]{3}"/g, `stroke="${config.color}"`);
            // 기본 색상 이름들 교체
            processed = processed.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
            processed = processed.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
            return processed;
        }
    }["PreviewPanel.useMemo[processedSVG]"], [
        svgContent,
        config,
        svgEditorState
    ]);
    // 인터랙티브 SVG 렌더링 (path 클릭 지원)
    const renderInteractiveSVG = ()=>{
        if (!svgEditorState?.parsedSVG || !onPathSelect) {
            // 기본 SVG 렌더링
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: processedSVG
                },
                className: "w-full h-full flex items-center justify-center"
            }, void 0, false, {
                fileName: "[project]/src/components/PreviewPanel.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this);
        }
        // path별로 분리된 인터랙티브 SVG 렌더링
        const { metadata, paths } = svgEditorState.parsedSVG;
        const selectedPathId = svgEditorState.selectedPathId;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: metadata.width || "100%",
                height: metadata.height || "100%",
                viewBox: metadata.viewBox || "0 0 100 100",
                xmlns: metadata.xmlns || "http://www.w3.org/2000/svg",
                className: "max-w-full max-h-full",
                children: paths.map((path, index)=>{
                    const renderSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathRenderSettings"])(path, svgEditorState.globalConfig);
                    const isSelected = selectedPathId === path.id;
                    const isVisible = path.visible !== false;
                    if (!isVisible) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: path.originalPath,
                        fill: renderSettings.fill,
                        stroke: renderSettings.stroke,
                        strokeWidth: renderSettings.strokeWidth,
                        strokeLinecap: renderSettings.strokeLinecap,
                        strokeLinejoin: renderSettings.strokeLinejoin,
                        opacity: renderSettings.opacity,
                        transform: path.transform,
                        onClick: ()=>onPathSelect(path.id),
                        className: `cursor-pointer transition-all duration-200 ${isSelected ? 'drop-shadow-lg' : 'hover:opacity-80'}`,
                        style: {
                            filter: isSelected ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' : undefined
                        },
                        "data-path-info": `Path ${index + 1} - Click to select`
                    }, path.id, false, {
                        fileName: "[project]/src/components/PreviewPanel.tsx",
                        lineNumber: 125,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/PreviewPanel.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PreviewPanel.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    };
    // Wrapper 스타일 생성 (size, rotation, opacity 적용)
    const getWrapperStyle = ()=>{
        return {
            width: `${config.size}px`,
            height: `${config.size}px`,
            transform: `rotate(${config.rotation}deg)`,
            opacity: config.opacity,
            transformOrigin: 'center',
            transition: 'all 0.3s ease'
        };
    };
    // 애니메이션 스타일 생성 (애니메이션만)
    const getAnimationStyle = ()=>{
        // Advanced Animation이 있는 경우
        if (animationConfig && animationConfig.type && animationConfig.direction) {
            return {
                animationDuration: `${animationConfig.duration}s`,
                animationIterationCount: animationConfig.iterationCount,
                animationTimingFunction: animationConfig.timingFunction,
                animationDelay: `${animationConfig.delay}s`
            };
        }
        // Basic Animation (기존 방식) - 이 경우 wrapper 스타일과 함께 적용
        if (config.animation === 'spin') {
            return {
                animation: 'spin 2s linear infinite'
            };
        } else if (config.animation === 'pulse') {
            return {
                animation: 'pulse 2s ease-in-out infinite'
            };
        } else if (config.animation === 'scale') {
            return {
                animation: 'scale 2s ease-in-out infinite'
            };
        } else if (config.animation === 'bounce') {
            return {
                animation: 'bounce 2s ease-in-out infinite'
            };
        }
        return {};
    };
    // 애니메이션 클래스명 생성
    const getAnimationClassName = ()=>{
        if (animationConfig && animationConfig.type && animationConfig.direction) {
            return `${animationConfig.type}-${animationConfig.direction}`;
        }
        return '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "4ecaf7a19b6403c9",
                [
                    config.rotation,
                    config.rotation + 360,
                    config.opacity,
                    Math.max(0.3, config.opacity - 0.3),
                    config.rotation,
                    config.rotation,
                    config.rotation,
                    config.rotation,
                    config.rotation
                ]
            ]
        ]) + " " + "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "4ecaf7a19b6403c9",
                        [
                            config.rotation,
                            config.rotation + 360,
                            config.opacity,
                            Math.max(0.3, config.opacity - 0.3),
                            config.rotation,
                            config.rotation,
                            config.rotation,
                            config.rotation,
                            config.rotation
                        ]
                    ]
                ]) + " " + "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "4ecaf7a19b6403c9",
                                [
                                    config.rotation,
                                    config.rotation + 360,
                                    config.opacity,
                                    Math.max(0.3, config.opacity - 0.3),
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation
                                ]
                            ]
                        ]) + " " + `text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`,
                        children: "Preview"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PreviewPanel.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    svgEditorState?.parsedSVG && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "4ecaf7a19b6403c9",
                                [
                                    config.rotation,
                                    config.rotation + 360,
                                    config.opacity,
                                    Math.max(0.3, config.opacity - 0.3),
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation
                                ]
                            ]
                        ]) + " " + `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                        children: [
                            svgEditorState.editMode === 'individual' ? 'Individual Mode' : 'Global Mode',
                            " • ",
                            svgEditorState.parsedSVG.paths.length,
                            " paths"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PreviewPanel.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PreviewPanel.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "4ecaf7a19b6403c9",
                        [
                            config.rotation,
                            config.rotation + 360,
                            config.opacity,
                            Math.max(0.3, config.opacity - 0.3),
                            config.rotation,
                            config.rotation,
                            config.rotation,
                            config.rotation,
                            config.rotation
                        ]
                    ]
                ]) + " " + "flex-1 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minHeight: '500px',
                        minWidth: '500px'
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "4ecaf7a19b6403c9",
                            [
                                config.rotation,
                                config.rotation + 360,
                                config.opacity,
                                Math.max(0.3, config.opacity - 0.3),
                                config.rotation,
                                config.rotation,
                                config.rotation,
                                config.rotation,
                                config.rotation
                            ]
                        ]
                    ]) + " " + `relative p-20 rounded-lg `,
                    children: svgContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: getWrapperStyle(),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "4ecaf7a19b6403c9",
                                [
                                    config.rotation,
                                    config.rotation + 360,
                                    config.opacity,
                                    Math.max(0.3, config.opacity - 0.3),
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation
                                ]
                            ]
                        ]) + " " + "w-full h-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: getAnimationStyle(),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "4ecaf7a19b6403c9",
                                    [
                                        config.rotation,
                                        config.rotation + 360,
                                        config.opacity,
                                        Math.max(0.3, config.opacity - 0.3),
                                        config.rotation,
                                        config.rotation,
                                        config.rotation,
                                        config.rotation,
                                        config.rotation
                                    ]
                                ]
                            ]) + " " + `w-full h-full flex items-center justify-center ${getAnimationClassName()}`,
                            children: renderInteractiveSVG()
                        }, void 0, false, {
                            fileName: "[project]/src/components/PreviewPanel.tsx",
                            lineNumber: 236,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PreviewPanel.tsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "4ecaf7a19b6403c9",
                                [
                                    config.rotation,
                                    config.rotation + 360,
                                    config.opacity,
                                    Math.max(0.3, config.opacity - 0.3),
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation,
                                    config.rotation
                                ]
                            ]
                        ]) + " " + `text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "4ecaf7a19b6403c9",
                                        [
                                            config.rotation,
                                            config.rotation + 360,
                                            config.opacity,
                                            Math.max(0.3, config.opacity - 0.3),
                                            config.rotation,
                                            config.rotation,
                                            config.rotation,
                                            config.rotation,
                                            config.rotation
                                        ]
                                    ]
                                ]) + " " + "text-lg mb-2",
                                children: "No SVG uploaded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PreviewPanel.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "4ecaf7a19b6403c9",
                                        [
                                            config.rotation,
                                            config.rotation + 360,
                                            config.opacity,
                                            Math.max(0.3, config.opacity - 0.3),
                                            config.rotation,
                                            config.rotation,
                                            config.rotation,
                                            config.rotation,
                                            config.rotation
                                        ]
                                    ]
                                ]) + " " + "text-sm",
                                children: "Upload an image or SVG file to see the preview"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PreviewPanel.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PreviewPanel.tsx",
                        lineNumber: 244,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PreviewPanel.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PreviewPanel.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4ecaf7a19b6403c9",
                dynamic: [
                    config.rotation,
                    config.rotation + 360,
                    config.opacity,
                    Math.max(0.3, config.opacity - 0.3),
                    config.rotation,
                    config.rotation,
                    config.rotation,
                    config.rotation,
                    config.rotation
                ],
                children: `@keyframes spin{0%{transform:rotate(${config.rotation}deg)}to{transform:rotate(${config.rotation + 360}deg)}}@keyframes pulse{0%,to{opacity:${config.opacity}}50%{opacity:${Math.max(0.3, config.opacity - 0.3)}}}@keyframes scale{0%,to{transform:scale(1)rotate(${config.rotation}deg)}50%{transform:scale(1.1)rotate(${config.rotation}deg)}}@keyframes bounce{0%,20%,53%,80%,to{transform:rotate(${config.rotation}deg)translateY(0)}40%,43%{transform:rotate(${config.rotation}deg)translateY(-30px)}70%{transform:rotate(${config.rotation}deg)translateY(-15px)}}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PreviewPanel.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s(PreviewPanel, "46DkkgmUE9b2v3tmjAqOB2efhDg=");
_c = PreviewPanel;
var _c;
__turbopack_context__.k.register(_c, "PreviewPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PathEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PathEditor": (()=>PathEditor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgStateManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PathEditor({ svgEditorState, onPathUpdate, onPathToggleIndividual, onPathReset, onPathSelect, isDarkMode }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [expandedPaths, setExpandedPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // 전체 설정 상태 확인
    const allPathsUseIndividual = svgEditorState.parsedSVG?.paths.every((path)=>path.useIndividualSettings) || false;
    // 전체 설정 토글
    const handleToggleAllSettings = ()=>{
        const message = allPathsUseIndividual ? 'Are you sure you want to disable individual settings for all paths? This will apply global settings to all paths.' : 'Are you sure you want to enable individual settings for all paths?';
        if (window.confirm(message)) {
            svgEditorState.parsedSVG?.paths.forEach((path)=>{
                // 현재 상태와 원하는 상태가 다른 경우에만 토글
                if (path.useIndividualSettings === allPathsUseIndividual) {
                    onPathToggleIndividual(path.id);
                }
            });
        }
    };
    if (!svgEditorState.parsedSVG || svgEditorState.parsedSVG.paths.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `p-4 rounded-lg border ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                children: "No paths found in this SVG. Upload an SVG file with path elements to enable individual editing."
            }, void 0, false, {
                fileName: "[project]/src/components/PathEditor.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PathEditor.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    const togglePathExpansion = (pathId)=>{
        const newExpanded = new Set(expandedPaths);
        if (newExpanded.has(pathId)) {
            newExpanded.delete(pathId);
        } else {
            newExpanded.add(pathId);
        }
        setExpandedPaths(newExpanded);
    };
    const ColorPicker = ({ value, onChange, label, disabled = false })=>{
        _s1();
        const [tempValue, setTempValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
        // 외부 값이 변경되면 임시값도 업데이트
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "PathEditor.ColorPicker.useEffect": ()=>{
                setTempValue(value);
            }
        }["PathEditor.ColorPicker.useEffect"], [
            value
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: `text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/PathEditor.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "color",
                            value: tempValue,
                            onChange: (e)=>disabled ? null : setTempValue(e.target.value),
                            onBlur: (e)=>disabled ? null : onChange(e.target.value),
                            disabled: disabled,
                            className: `w-8 h-8 rounded border border-gray-300 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/PathEditor.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: tempValue,
                            onChange: (e)=>disabled ? null : setTempValue(e.target.value),
                            onBlur: (e)=>disabled ? null : onChange(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter' && !disabled) {
                                    onChange(tempValue);
                                }
                            },
                            disabled: disabled,
                            className: `w-20 px-2 py-1 text-xs border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/PathEditor.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PathEditor.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PathEditor.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    };
    _s1(ColorPicker, "54dVOdbx1pEptCx1RrKE/UI6ASA=");
    const NumberSlider = ({ value, onChange, min, max, step = 1, label, unit = '', disabled = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: `text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/components/PathEditor.tsx",
                            lineNumber: 141,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                            children: [
                                value,
                                unit
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PathEditor.tsx",
                            lineNumber: 144,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PathEditor.tsx",
                    lineNumber: 140,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: min,
                    max: max,
                    step: step,
                    value: value,
                    onChange: (e)=>disabled ? null : onChange(parseFloat(e.target.value)),
                    disabled: disabled,
                    className: `w-full h-2 bg-gray-200 rounded-lg appearance-none dark:bg-gray-700 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`
                }, void 0, false, {
                    fileName: "[project]/src/components/PathEditor.tsx",
                    lineNumber: 148,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PathEditor.tsx",
            lineNumber: 139,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`,
                                children: "Path Editor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PathEditor.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleToggleAllSettings,
                                className: `p-1 rounded ${allPathsUseIndividual ? 'bg-blue-500 text-white' : isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`,
                                title: allPathsUseIndividual ? 'Disable all individual settings' : 'Enable all individual settings',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PathEditor.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PathEditor.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PathEditor.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                        children: [
                            svgEditorState.parsedSVG.paths.length,
                            " paths"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PathEditor.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PathEditor.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: svgEditorState.parsedSVG.paths.map((path, index)=>{
                    const isExpanded = expandedPaths.has(path.id);
                    const isSelected = svgEditorState.selectedPathId === path.id;
                    const renderSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathRenderSettings"])(path, svgEditorState.globalConfig);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border rounded-lg ${isSelected ? isDarkMode ? 'border-blue-500 bg-blue-500/10' : 'border-blue-500 bg-blue-200' : isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 cursor-pointer",
                                onClick: ()=>{
                                    onPathSelect(isSelected ? null : path.id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 border rounded flex items-center justify-center",
                                                    style: {
                                                        backgroundColor: isDarkMode ? '#374151' : '#f3f4f6'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: path.originalPath,
                                                            fill: renderSettings.fill,
                                                            stroke: renderSettings.stroke,
                                                            strokeWidth: Math.min(renderSettings.strokeWidth, 2),
                                                            transform: "scale(0.8) translate(2, 2)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PathEditor.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PathEditor.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PathEditor.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                            children: [
                                                                "Path ",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/PathEditor.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`,
                                                            children: [
                                                                path.useIndividualSettings ? 'Individual' : 'Global',
                                                                " settings"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/PathEditor.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PathEditor.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PathEditor.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        togglePathExpansion(path.id);
                                                    },
                                                    className: `p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PathEditor.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PathEditor.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        onPathToggleIndividual(path.id);
                                                    },
                                                    className: `p-1 rounded ${path.useIndividualSettings ? 'bg-blue-500 text-white' : isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`,
                                                    title: path.useIndividualSettings ? 'Using individual settings' : 'Using global settings',
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PathEditor.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PathEditor.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PathEditor.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PathEditor.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PathEditor.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 border-t space-y-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                                                value: path.individualSettings?.fill || renderSettings.fill,
                                                onChange: path.useIndividualSettings ? (value)=>onPathUpdate(path.id, {
                                                        fill: value
                                                    }) : ()=>{},
                                                label: "Fill",
                                                disabled: !path.useIndividualSettings
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PathEditor.tsx",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                                                value: path.individualSettings?.stroke || renderSettings.stroke,
                                                onChange: path.useIndividualSettings ? (value)=>onPathUpdate(path.id, {
                                                        stroke: value
                                                    }) : ()=>{},
                                                label: "Stroke",
                                                disabled: !path.useIndividualSettings
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PathEditor.tsx",
                                                lineNumber: 276,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberSlider, {
                                                value: path.individualSettings?.strokeWidth || renderSettings.strokeWidth,
                                                onChange: path.useIndividualSettings ? (value)=>onPathUpdate(path.id, {
                                                        strokeWidth: value
                                                    }) : ()=>{},
                                                min: 0,
                                                max: 10,
                                                step: 0.1,
                                                label: "Stroke Width",
                                                unit: "px",
                                                disabled: !path.useIndividualSettings
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PathEditor.tsx",
                                                lineNumber: 284,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberSlider, {
                                                value: path.individualSettings?.opacity || renderSettings.opacity,
                                                onChange: path.useIndividualSettings ? (value)=>onPathUpdate(path.id, {
                                                        opacity: value
                                                    }) : ()=>{},
                                                min: 0,
                                                max: 1,
                                                step: 0.1,
                                                label: "Opacity",
                                                disabled: !path.useIndividualSettings
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PathEditor.tsx",
                                                lineNumber: 296,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PathEditor.tsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 border-t border-gray-200 dark:border-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onPathReset(path.id),
                                            className: `flex items-center space-x-2 px-3 py-2 text-sm rounded ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PathEditor.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Reset to Original"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PathEditor.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PathEditor.tsx",
                                            lineNumber: 309,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PathEditor.tsx",
                                        lineNumber: 308,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PathEditor.tsx",
                                lineNumber: 265,
                                columnNumber: 17
                            }, this)
                        ]
                    }, path.id, true, {
                        fileName: "[project]/src/components/PathEditor.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/PathEditor.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PathEditor.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(PathEditor, "c4MYjG/gEtcIK0H1mfVnlxrrYhQ=");
_c = PathEditor;
var _c;
__turbopack_context__.k.register(_c, "PathEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ControlPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ControlPanel": (()=>ControlPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move.js [app-client] (ecmascript) <export default as Move>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PathEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PathEditor.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ControlPanel({ config, onChange, fileName, onReset, isDarkMode, svgEditorState, onPathUpdate, onPathToggleIndividual, onPathReset, onPathSelect, onEditModeChange }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hover: true
    });
    const handleChange = (key, value)=>{
        onChange({
            ...config,
            [key]: value
        });
    };
    const toggleSection = (section)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    // 슬라이더 + 숫자 표시 컴포넌트
    const NumberSlider = ({ value, onChange, min, max, step = 1, label, unit = '', isDarkMode })=>{
        _s1();
        const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const [dragValue, setDragValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
        // 외부에서 값이 변경되면 드래그 값도 업데이트 (드래그 중이 아닐 때만)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "ControlPanel.NumberSlider.useEffect": ()=>{
                if (!isDragging) {
                    setDragValue(value);
                }
            }
        }["ControlPanel.NumberSlider.useEffect"], [
            value,
            isDragging
        ]);
        const handleSliderMouseDown = ()=>{
            setIsDragging(true);
        };
        const handleSliderMouseUp = ()=>{
            setIsDragging(false);
            onChange(dragValue);
        };
        const handleSliderInput = (e)=>{
            const newValue = Number(e.target.value);
            setDragValue(newValue);
        // 드래그 중에는 미리보기 업데이트 안함
        };
        const handleSliderChange = (e)=>{
            const newValue = Number(e.target.value);
            setDragValue(newValue);
            // 드래그 중이 아닐 때만 실시간 업데이트
            if (!isDragging) {
                onChange(newValue);
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "ControlPanel.NumberSlider.useEffect": ()=>{
                const handleGlobalMouseUp = {
                    "ControlPanel.NumberSlider.useEffect.handleGlobalMouseUp": ()=>{
                        if (isDragging) {
                            setIsDragging(false);
                            onChange(dragValue);
                        }
                    }
                }["ControlPanel.NumberSlider.useEffect.handleGlobalMouseUp"];
                document.addEventListener('mouseup', handleGlobalMouseUp);
                return ({
                    "ControlPanel.NumberSlider.useEffect": ()=>document.removeEventListener('mouseup', handleGlobalMouseUp)
                })["ControlPanel.NumberSlider.useEffect"];
            }
        }["ControlPanel.NumberSlider.useEffect"], [
            isDragging,
            dragValue,
            onChange
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ControlPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                children: [
                                    dragValue,
                                    unit
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ControlPanel.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ControlPanel.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: min,
                    max: max,
                    step: step,
                    value: dragValue,
                    onInput: handleSliderInput,
                    onChange: handleSliderChange,
                    onMouseDown: handleSliderMouseDown,
                    onMouseUp: handleSliderMouseUp,
                    className: "w-full accent-blue-500 cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/components/ControlPanel.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ControlPanel.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    };
    _s1(NumberSlider, "U94SHYkMIDhpaIEZBMMX46a0Ego=");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 h-full overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`,
                            children: "Controls"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ControlPanel.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onReset,
                            className: `p-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`,
                            title: "Reset",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ControlPanel.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ControlPanel.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ControlPanel.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "File: ",
                        fileName
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ControlPanel.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ControlPanel.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            svgEditorState?.parsedSVG && svgEditorState.parsedSVG.paths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                children: "Edit Mode"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex rounded-lg p-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEditModeChange?.('global'),
                                className: `flex-1 px-3 py-2 text-sm rounded-md transition-colors ${svgEditorState.editMode === 'global' ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`,
                                children: "Global"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEditModeChange?.('individual'),
                                className: `flex-1 px-3 py-2 text-sm rounded-md transition-colors ${svgEditorState.editMode === 'individual' ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`,
                                children: "Individual"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ControlPanel.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this),
            svgEditorState?.editMode === 'individual' && svgEditorState.parsedSVG && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PathEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathEditor"], {
                svgEditorState: svgEditorState,
                onPathUpdate: onPathUpdate || (()=>{}),
                onPathToggleIndividual: onPathToggleIndividual || (()=>{}),
                onPathReset: onPathReset || (()=>{}),
                onPathSelect: onPathSelect || (()=>{}),
                isDarkMode: isDarkMode
            }, void 0, false, {
                fileName: "[project]/src/components/ControlPanel.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            (!svgEditorState?.parsedSVG || svgEditorState.editMode === 'global') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 222,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                        children: "Colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 223,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 221,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Stroke Color"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 228,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: config.color,
                                                onChange: (e)=>handleChange('color', e.target.value),
                                                className: "w-10 h-10 rounded border border-gray-600 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 230,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: config.color,
                                                onChange: (e)=>handleChange('color', e.target.value),
                                                className: `flex-1 px-3 py-2 text-sm rounded border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`,
                                                placeholder: "#ffffff"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 236,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 229,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 227,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Fill Color"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 252,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "color",
                                                value: config.fillColor,
                                                onChange: (e)=>handleChange('fillColor', e.target.value),
                                                className: "w-10 h-10 rounded border border-gray-600 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 254,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: config.fillColor,
                                                onChange: (e)=>handleChange('fillColor', e.target.value),
                                                className: `flex-1 px-3 py-2 text-sm rounded border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`,
                                                placeholder: "#000000"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 260,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 253,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 251,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberSlider, {
                                        value: config.strokeWidth,
                                        onChange: (value)=>handleChange('strokeWidth', value),
                                        min: 0,
                                        max: 10,
                                        step: 0.5,
                                        label: "Stroke Width",
                                        isDarkMode: isDarkMode
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 276,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                        children: "* Line thickness is applied in real-time. Preview does not show line thickness."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 285,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 275,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__["Move"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 294,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 295,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 293,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberSlider, {
                                value: config.size,
                                onChange: (value)=>handleChange('size', value),
                                min: 10,
                                max: 500,
                                step: 1,
                                label: "Size",
                                unit: "px"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 298,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 292,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 312,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                        children: "Rotation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 313,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 311,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberSlider, {
                                value: config.rotation,
                                onChange: (value)=>handleChange('rotation', value),
                                min: 0,
                                max: 360,
                                step: 1,
                                label: "Rotation",
                                unit: "°"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 316,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 310,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 330,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                        children: "Opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 331,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 329,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumberSlider, {
                                value: config.opacity,
                                onChange: (value)=>handleChange('opacity', value),
                                min: 0,
                                max: 1,
                                step: 0.01,
                                label: "Opacity",
                                unit: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 334,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 328,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleSection('hover'),
                                className: `w-full flex items-center justify-between p-2 rounded ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__["Move"], {
                                                className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 355,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                children: [
                                                    "Hover Effects",
                                                    config.hoverEffect !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-xs bg-purple-500 text-white px-2 py-1 rounded",
                                                        children: config.hoverEffect
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ControlPanel.tsx",
                                                lineNumber: 356,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 354,
                                        columnNumber: 11
                                    }, this),
                                    expandedSections.hover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ControlPanel.tsx",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 348,
                                columnNumber: 9
                            }, this),
                            expandedSections.hover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 pl-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 block`,
                                            children: "Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ControlPanel.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: config.hoverEffect,
                                            onChange: (e)=>handleChange('hoverEffect', e.target.value),
                                            className: `w-full px-3 py-2 text-sm rounded border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "none",
                                                    children: "None"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ControlPanel.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "scale",
                                                    children: "Scale"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ControlPanel.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "rotate",
                                                    children: "Rotate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ControlPanel.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "opacity",
                                                    children: "Opacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ControlPanel.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ControlPanel.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ControlPanel.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ControlPanel.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ControlPanel.tsx",
                        lineNumber: 347,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ControlPanel.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(ControlPanel, "OQUeT3HMapulDmEnNz+q5sF0eh4=");
_c = ControlPanel;
var _c;
__turbopack_context__.k.register(_c, "ControlPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CodeModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CodeModal": (()=>CodeModal),
    "generateInlineSVG": (()=>generateInlineSVG)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgStateManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgParser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cssLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cssLoader.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function generateInlineSVG(svgContent, config, svgEditorState, animationConfig) {
    let processedSVG = '';
    // 개별 path 설정이 있는 경우 우선 적용
    if (svgEditorState?.parsedSVG) {
        try {
            // 각 path에 개별 설정 적용하여 새로운 SVG 생성
            const updatedPaths = svgEditorState.parsedSVG.paths.map((path)=>{
                const renderSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathRenderSettings"])(path, svgEditorState.globalConfig);
                return {
                    ...path,
                    fill: renderSettings.fill,
                    stroke: renderSettings.stroke,
                    strokeWidth: renderSettings.strokeWidth,
                    strokeLinecap: renderSettings.strokeLinecap,
                    strokeLinejoin: renderSettings.strokeLinejoin,
                    opacity: renderSettings.opacity
                };
            });
            const updatedParsedSVG = {
                ...svgEditorState.parsedSVG,
                paths: updatedPaths
            };
            processedSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSVGWithPaths"])(updatedParsedSVG);
        } catch (error) {
            console.warn('Failed to apply individual path settings in code generation, falling back to global:', error);
            // Fallback to original SVG
            processedSVG = svgContent;
        }
    } else {
        // Fallback: 기존 방식
        processedSVG = svgContent;
    }
    // JSX 형식으로 변환
    processedSVG = processedSVG.replace(/<\?xml[^>]*\?>/g, '').replace(/<!--[^>]*-->/g, '').trim();
    // JSX 속성 변환 (React에서 요구하는 camelCase)
    processedSVG = processedSVG.replace(/stroke-width="([^"]*)"/g, `strokeWidth="$1"`);
    processedSVG = processedSVG.replace(/stroke-linecap="([^"]*)"/g, `strokeLinecap="$1"`);
    processedSVG = processedSVG.replace(/stroke-linejoin="([^"]*)"/g, `strokeLinejoin="$1"`);
    processedSVG = processedSVG.replace(/stroke-dasharray="([^"]*)"/g, `strokeDasharray="$1"`);
    processedSVG = processedSVG.replace(/stroke-dashoffset="([^"]*)"/g, `strokeDashoffset="$1"`);
    processedSVG = processedSVG.replace(/fill-rule="([^"]*)"/g, `fillRule="$1"`);
    processedSVG = processedSVG.replace(/clip-rule="([^"]*)"/g, `clipRule="$1"`);
    processedSVG = processedSVG.replace(/xml:space="([^"]*)"/g, `xmlSpace="$1"`);
    processedSVG = processedSVG.replace(/xmlns:xlink="([^"]*)"/g, `xmlnsXlink="$1"`);
    processedSVG = processedSVG.replace(/xlink:href="([^"]*)"/g, `xlinkHref="$1"`);
    processedSVG = processedSVG.replace(/<svg([^>]*)\sstyle="[^"]*"([^>]*)>/i, '<svg$1$2>');
    processedSVG = processedSVG.replace(/desc="([^"]*)"/g, ``); // ImageTracerJS desc 제거
    // 개별 path 설정이 없는 경우에만 글로벌 색상 적용
    if (!svgEditorState?.parsedSVG) {
        // currentColor를 실제 색상으로 변경
        processedSVG = processedSVG.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
        // 색상 코드를 새 색상으로 교체
        processedSVG = processedSVG.replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/stroke="#[a-fA-F0-9]{6}"/g, `stroke="${config.color}"`);
        processedSVG = processedSVG.replace(/stroke="#[a-fA-F0-9]{3}"/g, `stroke="${config.color}"`);
        // 검은색과 흰색 등 색상 이름도 교체
        processedSVG = processedSVG.replace(/fill="black"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/fill="white"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/fill="#000000"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/fill="#000"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/fill="#ffffff"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/fill="#fff"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/stroke="black"/g, `stroke="${config.color}"`);
        processedSVG = processedSVG.replace(/stroke="white"/g, `stroke="${config.color}"`);
        processedSVG = processedSVG.replace(/stroke="#000000"/g, `stroke="${config.color}"`);
        processedSVG = processedSVG.replace(/stroke="#000"/g, `stroke="${config.color}"`);
        processedSVG = processedSVG.replace(/stroke="#ffffff"/g, `stroke="${config.color}"`);
        processedSVG = processedSVG.replace(/stroke="#fff"/g, `stroke="${config.color}"`);
        // 기존의 다른 색상 이름들도 교체 (none, transparent, url 제외)
        processedSVG = processedSVG.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
        // style 속성 내의 fill과 stroke도 교체
        processedSVG = processedSVG.replace(/style="([^"]*)"/g, (match, styleContent)=>{
            let newStyle = styleContent;
            newStyle = newStyle.replace(/fill:\\s*[^;]*(;|$)/g, `fill:${config.fillColor}$1`);
            newStyle = newStyle.replace(/stroke:\\s*[^;]*(;|$)/g, `stroke:${config.color}$1`);
            return `style="${newStyle}"`;
        });
    }
    // 개별 path 설정이 없는 경우에만 추가 글로벌 색상 처리
    if (!svgEditorState?.parsedSVG) {
        // SVG 요소에 기본 색상 적용
        if (!processedSVG.includes('fill=') && !processedSVG.includes('foreignObject') && !processedSVG.includes('<image')) {
            processedSVG = processedSVG.replace(/<svg/, `<svg fill="${config.fillColor}"`);
        }
        // 이미 SVG 태그에 fill이나 stroke가 있으면 업데이트
        processedSVG = processedSVG.replace(/<svg([^>]*)\sfill="[^"]*"([^>]*)>/i, `<svg$1 fill="${config.fillColor}"$2>`);
        processedSVG = processedSVG.replace(/<svg([^>]*)\sstroke="[^"]*"([^>]*)>/i, `<svg$1 stroke="${config.color}"$2>`);
        // CSS 내부 스타일도 처리
        processedSVG = processedSVG.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, cssContent)=>{
            let newCSS = cssContent;
            newCSS = newCSS.replace(/fill:\s*[^;}]*(;|})/g, `fill:${config.fillColor}$1`);
            newCSS = newCSS.replace(/stroke:\s*[^;}]*(;|})/g, `stroke:${config.color}$1`);
            return `<style>${newCSS}</style>`;
        });
    }
    // 크기를 100%로 설정
    processedSVG = processedSVG.replace(/width="[^"]*"/g, 'width="100%"');
    processedSVG = processedSVG.replace(/height="[^"]*"/g, 'height="100%"');
    // Generate hover handlers only if hover effect is enabled
    let hoverHandlers = '';
    const baseTransform = `rotate(${config.rotation}deg)`;
    if (config.hoverEffect === 'scale') {
        hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) ${baseTransform}'}
      onMouseLeave={(e) => e.currentTarget.style.transform = '${baseTransform}'}`;
    } else if (config.hoverEffect === 'rotate') {
        // scale 애니메이션과의 충돌을 방지하기 위해 animation을 잠시 중단
        if (config.animation === 'scale') {
            hoverHandlers = `onMouseEnter={(e) => {
        e.currentTarget.style.animation = 'none';
        e.currentTarget.style.transform = 'rotate(${config.rotation + 360}deg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.animation = '${config.animation} 2s infinite';
        e.currentTarget.style.transform = '${baseTransform}';
      }}`;
        } else {
            hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(${config.rotation + 360}deg)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = '${baseTransform}'}`;
        }
    } else if (config.hoverEffect === 'opacity') {
        hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '${config.opacity}'}`;
    }
    // Advanced Animation Configuration
    let animationStyle = '';
    let animationClass = '';
    if (animationConfig && animationConfig.type && animationConfig.direction) {
        // Advanced animation 사용
        animationClass = `${animationConfig.type}-${animationConfig.direction}`;
        animationStyle = `
        // Advanced Animation Override
        animationDuration: '${animationConfig.duration}s',
        animationIterationCount: ${animationConfig.iterationCount === 'infinite' ? "'infinite'" : animationConfig.iterationCount},
        animationTimingFunction: '${animationConfig.timingFunction}',
        animationDelay: '${animationConfig.delay}s',`;
    } else if (config.animation !== 'none') {
        // Basic animation 사용 (기존 방식)
        animationStyle = `animation: '${config.animation} 2s infinite',`;
    }
    return `<div
      ${animationClass ? `className="${animationClass}"` : ''}
      style={{
        // Size property
        width: '${config.size}px',
        height: '${config.size}px',
        
        // Rotation property  
        transform: '${baseTransform}',
        
        // Opacity property
        opacity: ${config.opacity},
        
        // Transition for smooth hover effects
        transition: 'all 1.5s ease-in-out',
        ${animationStyle}
      }}
      ${hoverHandlers}
    >
      ${processedSVG}
    </div>`;
}
function CodeModal({ isOpen, onClose, svgContent, config, fileName, svgEditorState, animationConfig }) {
    _s();
    const [copiedSection, setCopiedSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('react');
    if (!isOpen) return null;
    const componentName = fileName.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '');
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    // const generateHoverFunction = () => {
    //   const baseTransform = `rotate(${config.rotation}deg)`;
    //   if (config.hoverEffect === 'scale') {
    //     return `const getHoverStyle = () => {
    //   if (!isHovered) return {};
    //   const baseTransform = \`${baseTransform}\`;
    //   return { transform: \`scale(1.1) \${baseTransform}\` };
    // };`;
    //   } else if (config.hoverEffect === 'rotate') {
    //     return `const getHoverStyle = () => {
    //   if (!isHovered) return {};
    //   return { animation: 'hover-rotate 1s linear infinite' };
    // };`;
    //   } else if (config.hoverEffect === 'opacity') {
    //     return `const getHoverStyle = () => {
    //   if (!isHovered) return {};
    //   const baseTransform = \`${baseTransform}\`;
    //   return { 
    //     opacity: 0.8,
    //     transform: baseTransform 
    //   };
    // };`;
    //   }
    //   return '';
    // };
    const generateReactComponent = ()=>{
        // Inline SVG 코드를 그대로 가져와서 React Component로 wrapping
        const inlineSVGCode = generateInlineSVG(svgContent, config, svgEditorState, animationConfig);
        // Advanced Animation이 있는 경우 특정 애니메이션 CSS만 포함
        let animationCSS = '';
        if (animationConfig && animationConfig.type && animationConfig.direction) {
            const cssContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cssLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpecificAnimationCSS"])(animationConfig.type, animationConfig.direction);
            if (cssContent) {
                // CSS 내용을 정리하고 들여쓰기 조정
                const cleanedCSS = cssContent.trim().split('\n').map((line)=>line.trim() ? `      ${line}` : '').join('\n');
                animationCSS = `\n\n  // Advanced Animation Styles (${animationConfig.type}-${animationConfig.direction})
  const animationStyles = \`
${cleanedCSS}
  \`;

  // Inject styles on component mount
  React.useEffect(() => {
    const styleId = 'advanced-animation-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = animationStyles;
      document.head.appendChild(style);
    }
  }, []);`;
            }
        }
        return `import React from 'react';

export function ${capitalizedName}() {${animationCSS}

  return (
    ${inlineSVGCode}
  );
}`;
    };
    // const generateInlineSVGCode = () => {
    //   return generateInlineSVG(svgContent, config, fileName);
    // };
    // const _generateInlineSVG = () => {
    //   // JSX 형식으로 SVG 처리
    //   let processedSVG = svgContent
    //     .replace(/<\?xml[^>]*\?>/g, '')
    //     .replace(/<!--[^>]*-->/g, '')
    //     .trim();
    //   // JSX 속성 변환 (React에서 요구하는 camelCase)
    //   processedSVG = processedSVG.replace(/stroke-width="([^"]*)"/g, `strokeWidth="$1"`);
    //   processedSVG = processedSVG.replace(/stroke-linecap="([^"]*)"/g, `strokeLinecap="$1"`);
    //   processedSVG = processedSVG.replace(/stroke-linejoin="([^"]*)"/g, `strokeLinejoin="$1"`);
    //   processedSVG = processedSVG.replace(/stroke-dasharray="([^"]*)"/g, `strokeDasharray="$1"`);
    //   processedSVG = processedSVG.replace(/stroke-dashoffset="([^"]*)"/g, `strokeDashoffset="$1"`);
    //   processedSVG = processedSVG.replace(/fill-rule="([^"]*)"/g, `fillRule="$1"`);
    //   processedSVG = processedSVG.replace(/clip-rule="([^"]*)"/g, `clipRule="$1"`);
    //   processedSVG = processedSVG.replace(/xml:space="([^"]*)"/g, `xmlSpace="$1"`);
    //   processedSVG = processedSVG.replace(/xmlns:xlink="([^"]*)"/g, `xmlnsXlink="$1"`);
    //   processedSVG = processedSVG.replace(/xlink:href="([^"]*)"/g, `xlinkHref="$1"`);
    //   processedSVG = processedSVG.replace(/<svg([^>]*)\sstyle="[^"]*"([^>]*)>/i, '<svg$1$2>');
    //   // currentColor를 실제 색상으로 변경
    //   processedSVG = processedSVG.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
    //   // 색상 코드를 새 색상으로 교체
    //   processedSVG = processedSVG.replace(/fill="#[a-fA-F0-9]{6}"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/fill="#[a-fA-F0-9]{3}"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/stroke="#[a-fA-F0-9]{6}"/g, `stroke="${config.color}"`);
    //   processedSVG = processedSVG.replace(/stroke="#[a-fA-F0-9]{3}"/g, `stroke="${config.color}"`);
    //   // 검은색과 흰색 등 색상 이름도 교체
    //   processedSVG = processedSVG.replace(/fill="black"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/fill="white"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/fill="#000000"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/fill="#000"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/fill="#ffffff"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/fill="#fff"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/stroke="black"/g, `stroke="${config.color}"`);
    //   processedSVG = processedSVG.replace(/stroke="white"/g, `stroke="${config.color}"`);
    //   processedSVG = processedSVG.replace(/stroke="#000000"/g, `stroke="${config.color}"`);
    //   processedSVG = processedSVG.replace(/stroke="#000"/g, `stroke="${config.color}"`);
    //   processedSVG = processedSVG.replace(/stroke="#ffffff"/g, `stroke="${config.color}"`);
    //   processedSVG = processedSVG.replace(/stroke="#fff"/g, `stroke="${config.color}"`);
    //   // 기존의 다른 색상 이름들도 교체 (none, transparent, url 제외)
    //   processedSVG = processedSVG.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
    //   processedSVG = processedSVG.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
    //   // style 속성 내의 fill과 stroke도 교체
    //   processedSVG = processedSVG.replace(/style="([^"]*)"/g, (match, styleContent) => {
    //     let newStyle = styleContent;
    //     newStyle = newStyle.replace(/fill:\\s*[^;]*(;|$)/g, `fill:${config.fillColor}$1`);
    //     newStyle = newStyle.replace(/stroke:\\s*[^;]*(;|$)/g, `stroke:${config.color}$1`);
    //     return `style="${newStyle}"`;
    //   });
    //   // SVG 요소에 기본 색상 적용
    //   if (!processedSVG.includes('fill=') && !processedSVG.includes('foreignObject') && !processedSVG.includes('<image')) {
    //     processedSVG = processedSVG.replace(/<svg/, `<svg fill="${config.fillColor}"`);
    //   }
    //   // 이미 SVG 태그에 fill이나 stroke가 있으면 업데이트
    //   processedSVG = processedSVG.replace(/<svg([^>]*)\sfill="[^"]*"([^>]*)>/i, `<svg$1 fill="${config.fillColor}"$2>`);
    //   processedSVG = processedSVG.replace(/<svg([^>]*)\sstroke="[^"]*"([^>]*)>/i, `<svg$1 stroke="${config.color}"$2>`);
    //   // CSS 내부 스타일도 처리
    //   processedSVG = processedSVG.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, cssContent) => {
    //     let newCSS = cssContent;
    //     newCSS = newCSS.replace(/fill:\s*[^;}]*(;|})/g, `fill:${config.fillColor}$1`);
    //     newCSS = newCSS.replace(/stroke:\s*[^;}]*(;|})/g, `stroke:${config.color}$1`);
    //     return `<style>${newCSS}</style>`;
    //   });
    //   // 크기를 100%로 설정
    //   processedSVG = processedSVG.replace(/width="[^"]*"/g, 'width="100%"');
    //   processedSVG = processedSVG.replace(/height="[^"]*"/g, 'height="100%"');
    //   // Generate hover handlers only if hover effect is enabled
    //   let hoverHandlers = '';
    //   const baseTransform = `rotate(${config.rotation}deg)`;
    //   if (config.hoverEffect === 'scale') {
    //     hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) ${baseTransform}'}
    //       onMouseLeave={(e) => e.currentTarget.style.transform = '${baseTransform}'}`;
    //   } else if (config.hoverEffect === 'rotate') {
    //     // scale 애니메이션과의 충돌을 방지하기 위해 animation을 잠시 중단
    //     if (config.animation === 'scale') {
    //       hoverHandlers = `onMouseEnter={(e) => {
    //         e.currentTarget.style.animation = 'none';
    //         e.currentTarget.style.transform = 'rotate(${config.rotation + 360}deg)';
    //       }}
    //       onMouseLeave={(e) => {
    //         e.currentTarget.style.animation = '${config.animation} 2s infinite';
    //         e.currentTarget.style.transform = '${baseTransform}';
    //       }}`;
    //     } else {
    //       hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(${config.rotation + 360}deg)'}
    //       onMouseLeave={(e) => e.currentTarget.style.transform = '${baseTransform}'}`;
    //     }
    //   } else if (config.hoverEffect === 'opacity') {
    //     hoverHandlers = `onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
    //       onMouseLeave={(e) => e.currentTarget.style.opacity = '${config.opacity}'}`;
    //   }
    //   return `<div
    //       style={{
    //         // Size property
    //         width: '${config.size}px',
    //         height: '${config.size}px',
    //         // Rotation property  
    //         transform: '${baseTransform}',
    //         // Opacity property
    //         opacity: ${config.opacity},
    //         // Transition for smooth hover effects
    //         transition: 'all 1.5s ease-in-out',
    //         // Animation property
    //         ${config.animation !== 'none' ? `animation: '${config.animation} 2s infinite'` : ''}
    //       }}
    //       ${hoverHandlers}
    //     >
    //       ${processedSVG}
    //     </div>`;
    // };
    const generateCSS = ()=>{
        // CSS용 SVG 처리 - 색상 완전 적용
        let processedSVG = svgContent.replace(/<\?xml[^>]*\?>/g, '').replace(/<!--[^>]*-->/g, '').trim();
        // ImageTracerJS desc 제거
        processedSVG = processedSVG.replace(/desc="([^"]*)"/g, ``);
        // currentColor를 실제 색상으로 변경
        processedSVG = processedSVG.replace(/fill="currentColor"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/stroke="currentColor"/g, `stroke="${config.color}"`);
        // 기존 색상을 새 색상으로 교체
        processedSVG = processedSVG.replace(/fill="(?!none|transparent|url\()[^"]*"/g, `fill="${config.fillColor}"`);
        processedSVG = processedSVG.replace(/stroke="(?!none|transparent|url\()[^"]*"/g, `stroke="${config.color}"`);
        // stroke-width 설정
        processedSVG = processedSVG.replace(/stroke-width="[^"]*"/g, `stroke-width="${config.strokeWidth}"`);
        // 크기를 100%로 설정
        processedSVG = processedSVG.replace(/width="[^"]*"/g, 'width="100%"');
        processedSVG = processedSVG.replace(/height="[^"]*"/g, 'height="100%"');
        const className = componentName.toLowerCase();
        const baseTransform = `rotate(${config.rotation}deg)`;
        // Generate hover CSS only if hover effect is enabled
        let hoverCSS = '';
        if (config.hoverEffect === 'scale') {
            hoverCSS = `.${className}:hover {
  transform: scale(1.1) ${baseTransform};
}`;
        } else if (config.hoverEffect === 'rotate') {
            hoverCSS = `.${className}:hover {
  animation: hover-rotate 1s linear infinite;
}`;
        } else if (config.hoverEffect === 'opacity') {
            hoverCSS = `.${className}:hover {
  opacity: 0.8;
  transform: ${baseTransform};
}`;
        }
        // Advanced Animation CSS
        let animationCSS = '';
        let additionalClasses = '';
        if (animationConfig && animationConfig.type && animationConfig.direction) {
            // Advanced animation 사용 - 특정 애니메이션 CSS만 포함
            const animationClassName = `${animationConfig.type}-${animationConfig.direction}`;
            additionalClasses = ` ${animationClassName}`;
            const cssContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cssLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpecificAnimationCSS"])(animationConfig.type, animationConfig.direction);
            if (cssContent) {
                // CSS 내용을 정리
                const cleanedCSS = cssContent.trim();
                animationCSS = `\n/* Advanced Animation Styles (${animationClassName}) */\n${cleanedCSS}\n\n/* Animation Override */
.${animationClassName} {
  animation-duration: ${animationConfig.duration}s !important;
  animation-iteration-count: ${animationConfig.iterationCount} !important;
  animation-timing-function: ${animationConfig.timingFunction} !important;
  animation-delay: ${animationConfig.delay}s !important;
}`;
            } else {
                animationCSS = `
/* Advanced Animation Override */
.${animationClassName} {
  animation-duration: ${animationConfig.duration}s;
  animation-iteration-count: ${animationConfig.iterationCount};
  animation-timing-function: ${animationConfig.timingFunction};
  animation-delay: ${animationConfig.delay}s;
}`;
            }
        } else if (config.animation !== 'none') {
            // Basic animation 사용 (기존 방식)
            animationCSS = `
/* Basic Animation */
.${className} {
  animation: ${config.animation} 2s infinite;
}`;
        }
        return `/* SVG Animation Styles */

.${className} {
  /* Size property */
  width: ${config.size}px;
  height: ${config.size}px;
  
  /* Rotation property */
  transform: ${baseTransform};
  
  /* Opacity property */
  opacity: ${config.opacity};
  
  /* Transition for smooth hover effects */
  transition: all 0.3s ease-in-out;
}

${hoverCSS}

${animationCSS}

/* Basic Animation keyframes (fallback) */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-30px); }
  70% { transform: translateY(-15px); }
}

${config.hoverEffect === 'rotate' ? `@keyframes hover-rotate {
  from { transform: rotate(${config.rotation}deg); }
  to { transform: rotate(${config.rotation + 360}deg); }
}` : ''}

/* HTML */
<div class="${className}${additionalClasses}">
  ${processedSVG}
</div>`;
    };
    const copyToClipboard = async (text, section)=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopiedSection(section);
            setTimeout(()=>setCopiedSection(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    const reactComponent = generateReactComponent();
    const inlineSVG = generateInlineSVG(svgContent, config, svgEditorState, animationConfig);
    const cssCode = generateCSS();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-white",
                            children: "Export Code"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 text-gray-400 hover:text-white transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CodeModal.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CodeModal.tsx",
                    lineNumber: 594,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('react'),
                            className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'react' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`,
                            children: "React Component"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('inline'),
                            className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'inline' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`,
                            children: "Inline SVG"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('css'),
                            className: `px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'css' ? 'border-blue-500 text-white' : 'border-transparent text-gray-400 hover:text-white'}`,
                            children: "CSS + HTML"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CodeModal.tsx",
                    lineNumber: 605,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto max-h-[calc(90vh-180px)]",
                    children: [
                        activeTab === 'react' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium text-white",
                                            children: "React Component"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeModal.tsx",
                                            lineNumber: 643,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>copyToClipboard(reactComponent, 'react'),
                                            className: "flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors",
                                            children: copiedSection === 'react' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 650,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Copied!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Copy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeModal.tsx",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CodeModal.tsx",
                                    lineNumber: 642,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-950 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: reactComponent
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeModal.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeModal.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 641,
                            columnNumber: 13
                        }, this),
                        activeTab === 'inline' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium text-white",
                                            children: "Inline SVG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeModal.tsx",
                                            lineNumber: 671,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>copyToClipboard(inlineSVG, 'inline'),
                                            className: "flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors",
                                            children: copiedSection === 'inline' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Copied!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Copy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeModal.tsx",
                                            lineNumber: 672,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CodeModal.tsx",
                                    lineNumber: 670,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-950 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: inlineSVG
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeModal.tsx",
                                        lineNumber: 690,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeModal.tsx",
                                    lineNumber: 689,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 669,
                            columnNumber: 13
                        }, this),
                        activeTab === 'css' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-medium text-white",
                                            children: "CSS + HTML"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeModal.tsx",
                                            lineNumber: 699,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>copyToClipboard(cssCode, 'css'),
                                            className: "flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm text-gray-300 transition-colors",
                                            children: copiedSection === 'css' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 706,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Copied!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Copy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CodeModal.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CodeModal.tsx",
                                            lineNumber: 700,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CodeModal.tsx",
                                    lineNumber: 698,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-950 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: cssCode
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CodeModal.tsx",
                                        lineNumber: 718,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CodeModal.tsx",
                                    lineNumber: 717,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CodeModal.tsx",
                            lineNumber: 697,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CodeModal.tsx",
                    lineNumber: 638,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CodeModal.tsx",
            lineNumber: 593,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CodeModal.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
}
_s(CodeModal, "DxOJ26scaLLQc/cDFrsl8E3WClM=");
_c = CodeModal;
var _c;
__turbopack_context__.k.register(_c, "CodeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ExportTestModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExportTestModal": (()=>ExportTestModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ExportTestModal({ isOpen, onClose, isDarkMode, onToggleTheme }) {
    _s();
    const [codeType, setCodeType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('react');
    const [codeInput, setCodeInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copiedCode, setCopiedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sampleCodes = {
        react: `import React from 'react';

interface CloudssvgrepocomProps {
  size?: number;
  color?: string;
  rotation?: number;
  opacity?: number;
  className?: string;
}

export function Cloudssvgrepocom({ 
  size = 204,
  color = "#ffffff",
  rotation = 0,
  opacity = 1,
  className = ""
}: CloudssvgrepocomProps) {
  return (
    <div
      className={\`transition-all duration-300 ease-in-out animate-scale hover:opacity-[0.43] \${className}\`}
      style={{
        width: \`\${size}px\`,
        height: \`\${size}px\`,
        transform: \`rotate(\${rotation}deg)\`,
        opacity: opacity,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}`,
        inline: `<div
  className="transition-all duration-300 ease-in-out animate-scale hover:opacity-[0.43]"
  style={{
    width: '204px',
    height: '204px',
    transform: 'rotate(0deg)',
    opacity: 1
  }}
>
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>`,
        css: `.cloudssvgrepocom {
  width: 204px;
  height: 204px;
  transform: rotate(0deg);
  opacity: 1;
  transition: all 1s ease-in-out;
  animation: scale 0.4s ease-in-out infinite;
}

.cloudssvgrepocom:hover {
  opacity: 0.43;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-30px); }
  70% { transform: translateY(-15px); }
}

/* HTML */
<div class="cloudssvgrepocom">
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>`
    };
    const copyToClipboard = async (text)=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(true);
            setTimeout(()=>setCopiedCode(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    const loadSampleCode = ()=>{
        setCodeInput(sampleCodes[codeType]);
        setErrorMessage('');
    };
    const renderPreview = ()=>{
        if (!codeInput.trim()) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-64 text-gray-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Enter some code to see the preview"
                }, void 0, false, {
                    fileName: "[project]/src/components/ExportTestModal.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExportTestModal.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this);
        }
        try {
            if (codeType === 'react') {
                // Extract JSX from React component
                const returnMatch = codeInput.match(/return\s*\([\s\S]*?\);/);
                if (!returnMatch) {
                    throw new Error('Could not find return statement in React component');
                }
                let jsxContent = returnMatch[0].replace(/return\s*\(/, '').replace(/\);$/, '').trim();
                // Convert JSX to HTML
                jsxContent = jsxContent.replace(/className=\{[^}]+\}/g, (match)=>{
                    const content = match.replace(/className=\{`([^`]+)`\}/, '$1').replace(/\$\{className\}/g, '').replace(/\$\{[^}]+\}/g, '').replace(/className=\{"([^"]+)"\}/, '$1').replace(/className=\{'([^']+)'\}/, '$1').trim();
                    return `class="${content}"`;
                }).replace(/className="([^"]+)"/g, 'class="$1"').replace(/style=\{\{([^}]+)\}\}/g, (match, styles)=>{
                    const styleProps = styles.split(',').map((prop)=>{
                        const [key, value] = prop.split(':').map((s)=>s.trim());
                        if (key && value) {
                            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                            const cssValue = value.replace(/[`'"]/g, '').replace(/\$\{[^}]+\}/g, '204');
                            return `${cssKey}: ${cssValue}`;
                        }
                        return '';
                    }).filter(Boolean).join('; ');
                    return `style="${styleProps}"`;
                }).replace(/strokeWidth="([^"]+)"/g, 'stroke-width="$1"').replace(/strokeLinecap="([^"]+)"/g, 'stroke-linecap="$1"').replace(/strokeLinejoin="([^"]+)"/g, 'stroke-linejoin="$1"').replace(/\{color\}/g, '#ffffff');
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                        __html: jsxContent
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ExportTestModal.tsx",
                    lineNumber: 178,
                    columnNumber: 16
                }, this);
            } else if (codeType === 'inline') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                        __html: codeInput
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ExportTestModal.tsx",
                    lineNumber: 180,
                    columnNumber: 16
                }, this);
            } else if (codeType === 'css') {
                // CSS와 HTML을 분리
                const htmlCommentIndex = codeInput.indexOf('/* HTML */');
                if (htmlCommentIndex !== -1) {
                    // CSS 부분 (/* HTML */ 이전까지)
                    const cssContent = codeInput.substring(0, htmlCommentIndex).trim();
                    // HTML 부분 (/* HTML */ 이후부터)
                    const htmlContent = codeInput.substring(htmlCommentIndex).trim();
                    const htmlMatch = htmlContent.match(/<div[\s\S]*?<\/div>/);
                    if (htmlMatch) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                    dangerouslySetInnerHTML: {
                                        __html: cssContent
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: htmlMatch[0]
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true);
                    }
                }
                // Fallback
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                        __html: codeInput
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ExportTestModal.tsx",
                    lineNumber: 204,
                    columnNumber: 16
                }, this);
            }
        } catch (error) {
            setErrorMessage(`Preview error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-64 text-red-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Error rendering preview"
                }, void 0, false, {
                    fileName: "[project]/src/components/ExportTestModal.tsx",
                    lineNumber: 210,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExportTestModal.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-88c76c11cbde4e28" + " " + "fixed inset-0 z-50 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: "jsx-88c76c11cbde4e28" + " " + "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/src/components/ExportTestModal.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-88c76c11cbde4e28" + " " + "relative min-h-screen flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-88c76c11cbde4e28" + " " + `relative w-full max-w-7xl mx-auto rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-88c76c11cbde4e28" + " " + `flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-88c76c11cbde4e28" + " " + "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                            className: `w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-88c76c11cbde4e28" + " " + `text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`,
                                            children: "Export Code Tester"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-88c76c11cbde4e28" + " " + "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onToggleTheme,
                                            className: "jsx-88c76c11cbde4e28" + " " + `px-3 py-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`,
                                            children: isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExportTestModal.tsx",
                                                lineNumber: 251,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExportTestModal.tsx",
                                                lineNumber: 251,
                                                columnNumber: 61
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "jsx-88c76c11cbde4e28" + " " + `p-2 rounded-lg transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExportTestModal.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExportTestModal.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-88c76c11cbde4e28" + " " + "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-88c76c11cbde4e28" + " " + `p-4 rounded-lg border mb-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-88c76c11cbde4e28" + " " + "flex flex-wrap items-center gap-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "jsx-88c76c11cbde4e28" + " " + "font-medium",
                                                    children: "Code Type:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-88c76c11cbde4e28" + " " + "flex gap-2",
                                                    children: [
                                                        'react',
                                                        'inline',
                                                        'css'
                                                    ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCodeType(type),
                                                            className: "jsx-88c76c11cbde4e28" + " " + `px-4 py-2 rounded-lg transition-colors ${codeType === type ? 'bg-blue-600 text-white' : isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                            children: type === 'react' ? 'React Component' : type === 'inline' ? 'Inline SVG' : 'CSS/HTML'
                                                        }, type, false, {
                                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-88c76c11cbde4e28" + " " + "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: loadSampleCode,
                                                    className: "jsx-88c76c11cbde4e28" + " " + "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                                                    children: "Load Sample"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>copyToClipboard(sampleCodes[codeType]),
                                                    className: "jsx-88c76c11cbde4e28" + " " + `px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                                    children: copiedCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ExportTestModal.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-88c76c11cbde4e28",
                                                                children: "Copied!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ExportTestModal.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ExportTestModal.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-88c76c11cbde4e28",
                                                                children: "Copy Sample"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ExportTestModal.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-88c76c11cbde4e28" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-88c76c11cbde4e28" + " " + `p-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-88c76c11cbde4e28" + " " + "text-lg font-medium mb-3",
                                                    children: "Code Input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: codeInput,
                                                    onChange: (e)=>setCodeInput(e.target.value),
                                                    placeholder: `Paste your ${codeType === 'react' ? 'React component' : codeType === 'inline' ? 'inline SVG' : 'CSS/HTML'} code here...`,
                                                    className: "jsx-88c76c11cbde4e28" + " " + `w-full h-80 p-3 rounded border font-mono text-sm resize-none ${isDarkMode ? 'bg-gray-900 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, this),
                                                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-88c76c11cbde4e28" + " " + "mt-3 p-3 bg-red-100 border border-red-300 text-red-700 rounded",
                                                    children: errorMessage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-88c76c11cbde4e28" + " " + `p-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-88c76c11cbde4e28" + " " + "text-lg font-medium mb-3",
                                                    children: "Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-88c76c11cbde4e28" + " " + `h-80 p-4 rounded border flex items-center justify-center overflow-auto ${isDarkMode ? 'bg-gray-900 border-gray-600' : 'bg-white border-gray-300'}`,
                                                    children: renderPreview()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ExportTestModal.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExportTestModal.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExportTestModal.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExportTestModal.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExportTestModal.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "88c76c11cbde4e28",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes scale{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@keyframes bounce{0%,20%,53%,80%,to{transform:translateY(0)}40%,43%{transform:translateY(-30px)}70%{transform:translateY(-15px)}}.animate-spin{animation:2s linear infinite spin}.animate-pulse{animation:2s ease-in-out infinite pulse}.animate-scale{animation:2s ease-in-out infinite scale}.animate-bounce{animation:2s infinite bounce}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExportTestModal.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
_s(ExportTestModal, "UfiBszfkczwtUneEQzJ8QqKtAmo=");
_c = ExportTestModal;
var _c;
__turbopack_context__.k.register(_c, "ExportTestModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HelpModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HelpModal": (()=>HelpModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move.js [app-client] (ecmascript) <export default as Move>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
function HelpModal({ isOpen, onClose, isDarkMode }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                            children: "📖 How to Use SVG Studio"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: `p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'} transition-colors`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HelpModal.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HelpModal.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold",
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "Upload Your Image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-11 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "w-5 h-5 text-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Drag & Drop"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 19
                                                        }, this),
                                                        " or ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Click"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 51
                                                        }, this),
                                                        " to upload your image"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                            children: [
                                                "• Supported formats: SVG, PNG, JPG, GIF, WebP",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 62
                                                }, this),
                                                "• Maximum file size: 10MB",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 42
                                                }, this),
                                                "• Images will be automatically converted to SVG format"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold",
                                            children: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "Choose Edit Mode"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-11 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "w-5 h-5 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                            children: "Global Mode"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: "Apply the same settings to all paths in your SVG"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-5 h-5 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                            children: "Individual Mode"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: [
                                                        "• Each path starts with its original colors",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 62
                                                        }, this),
                                                        "• Click the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-4 h-4 inline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 31
                                                        }, this),
                                                        " icon to expand path options",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 93
                                                        }, this),
                                                        "• Click the ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "w-4 h-4 inline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 31
                                                        }, this),
                                                        " icon to enable/disable individual settings",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 113
                                                        }, this),
                                                        "• Use the global ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "w-4 h-4 inline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 36
                                                        }, this),
                                                        " button to toggle all paths at once"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "Customize Your SVG"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-11 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                                    className: "w-5 h-5 text-purple-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                    children: "Colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                            children: [
                                                                "• Stroke Color: Border color",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 49
                                                                }, this),
                                                                "• Fill Color: Interior color",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 49
                                                                }, this),
                                                                "• Stroke Width: Line thickness"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__["Move"], {
                                                                    className: "w-5 h-5 text-purple-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                                    children: "Transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                            children: [
                                                                "• Size: Scale the SVG",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 42
                                                                }, this),
                                                                "• Rotation: Rotate in degrees",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 50
                                                                }, this),
                                                                "• Opacity: Transparency level"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-5 h-5 text-purple-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                            children: "Effects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: [
                                                        "• Animations: Spin, Pulse, Scale, Bounce",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 59
                                                        }, this),
                                                        "• Hover Effects: Scale, Rotate, Opacity changes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold",
                                            children: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "Preview Your Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-11 space-y-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: [
                                            "• Real-time preview shows all your changes",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/HelpModal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 59
                                            }, this),
                                            "• Click on individual paths to select them",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/HelpModal.tsx",
                                                lineNumber: 137,
                                                columnNumber: 59
                                            }, this),
                                            "• Test animations and hover effects in the preview area"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HelpModal.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold",
                                            children: "5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "Export Your Work"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-11 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                            className: "w-5 h-5 text-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                            children: "Export Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: [
                                                        "• React Components: Ready-to-use JSX components",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 66
                                                        }, this),
                                                        "• Inline SVG: HTML-ready SVG code",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 52
                                                        }, this),
                                                        "• CSS Styles: Separated CSS animations and effects"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            className: "w-5 h-5 text-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                            children: "Download SVG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `ml-7 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: [
                                                        "• Download as static SVG file",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 48
                                                        }, this),
                                                        "• Includes all colors, transforms, and opacity",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 65
                                                        }, this),
                                                        "• Perfect for use in design tools or websites"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HelpModal.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold",
                                            children: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                            children: "Reset & Start Over"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelpModal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-11 space-y-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                className: "w-5 h-5 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HelpModal.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: "Use the reset button in the Controls panel to start over with a new image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HelpModal.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HelpModal.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HelpModal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pt-6`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                        children: "💖 Support SVG Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HelpModal.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "If you find SVG Studio helpful, please consider supporting us:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HelpModal.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.producthunt.com/products/svg-studio",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: `flex items-center space-x-2 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white transition-colors`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HelpModal.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Leave a Review on Product Hunt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HelpModal.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HelpModal.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://x.com/intent/tweet?text=Just%20discovered%20SVG%20Studio%20-%20an%20amazing%20tool%20for%20editing%20SVG%20files%20and%20exporting%20React%20components!%20Check%20it%20out%20at%20[your-website-url]",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: `flex items-center space-x-2 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-900 hover:bg-gray-800'} text-white transition-colors`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 flex items-center justify-center bg-black rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-xs font-bold",
                                                            children: "𝕏"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HelpModal.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HelpModal.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Share on X"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HelpModal.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HelpModal.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HelpModal.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                        children: "Your support helps us build better tools for the developer community! 🚀"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HelpModal.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HelpModal.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HelpModal.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HelpModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HelpModal.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HelpModal.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = HelpModal;
var _c;
__turbopack_context__.k.register(_c, "HelpModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AnimationPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimationPanel": (()=>AnimationPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cssLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cssLoader.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// 애니메이션 카테고리와 방향 정의
const ANIMATION_CATEGORIES = {
    swing: {
        name: 'Swing',
        directions: [
            'top-fwd',
            'top-bck',
            'bottom-fwd',
            'bottom-bck',
            'left-fwd',
            'left-bck',
            'right-fwd',
            'right-bck',
            'top-left-fwd',
            'top-left-bck',
            'top-right-fwd',
            'top-right-bck',
            'bottom-left-fwd',
            'bottom-left-bck',
            'bottom-right-fwd',
            'bottom-right-bck'
        ]
    },
    'scale-up': {
        name: 'Scale Up',
        directions: [
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br',
            'hor-left',
            'hor-center',
            'hor-right',
            'ver-top',
            'ver-center',
            'ver-bottom'
        ]
    },
    'scale-down': {
        name: 'Scale Down',
        directions: [
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br',
            'hor-left',
            'hor-center',
            'hor-right',
            'ver-top',
            'ver-center',
            'ver-bottom'
        ]
    },
    slide: {
        name: 'Slide',
        directions: [
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br'
        ]
    },
    'slide-fwd': {
        name: 'Slide Forward',
        directions: [
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br'
        ]
    },
    'slide-bck': {
        name: 'Slide Back',
        directions: [
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br'
        ]
    },
    'slide-rotate': {
        name: 'Slide Rotate',
        directions: [
            'hor-top',
            'hor-bottom',
            'hor-t-fwd',
            'hor-t-bck',
            'hor-b-fwd',
            'hor-b-bck',
            'ver-left',
            'ver-right',
            'ver-l-fwd',
            'ver-l-bck',
            'ver-r-fwd',
            'ver-r-bck'
        ]
    },
    rotate: {
        name: 'Rotate',
        directions: [
            'center',
            'tl',
            'tr',
            'bl',
            'br',
            'top',
            'bottom',
            'left',
            'right',
            'diagonal-1',
            'diagonal-2'
        ]
    },
    'rotate-90': {
        name: 'Rotate 90°',
        directions: [
            'cw',
            'ccw',
            'tl-cw',
            'tl-ccw',
            'tr-cw',
            'tr-ccw',
            'bl-cw',
            'bl-ccw',
            'br-cw',
            'br-ccw'
        ]
    },
    'rotate-scale': {
        name: 'Rotate Scale',
        directions: [
            'up',
            'down',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br'
        ]
    },
    flip: {
        name: 'Flip',
        directions: [
            'horizontal-bottom',
            'horizontal-top',
            'horizontal-fwd',
            'horizontal-bck',
            'vertical-left',
            'vertical-right',
            'vertical-fwd',
            'vertical-bck',
            'diagonal-1-fwd',
            'diagonal-1-bck',
            'diagonal-1-bl',
            'diagonal-1-tr',
            'diagonal-2-fwd',
            'diagonal-2-bck',
            'diagonal-2-br',
            'diagonal-2-tl'
        ]
    },
    'flip-2': {
        name: 'Flip 2',
        directions: [
            'hor-top-1',
            'hor-top-2',
            'hor-bottom-1',
            'hor-bottom-2',
            'ver-left-1',
            'ver-left-2',
            'ver-right-1',
            'ver-right-2'
        ]
    },
    'flip-scale': {
        name: 'Flip Scale',
        directions: [
            'hor-top',
            'hor-bottom',
            'ver-left',
            'ver-right'
        ]
    },
    'flip-scale-2': {
        name: 'Flip Scale 2',
        directions: [
            'hor-top',
            'hor-bottom',
            'ver-left',
            'ver-right'
        ]
    },
    'shadow-drop': {
        name: 'Shadow Drop',
        directions: [
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br',
            'tb',
            'lr'
        ]
    },
    'shadow-drop-2': {
        name: 'Shadow Drop 2',
        directions: [
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br',
            'tb',
            'lr'
        ]
    },
    'shadow-inset': {
        name: 'Shadow Inset',
        directions: [
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'tl',
            'tr',
            'bl',
            'br',
            'tb',
            'lr'
        ]
    },
    'shadow-pop': {
        name: 'Shadow Pop',
        directions: [
            'tl',
            'tr',
            'bl',
            'br'
        ]
    }
};
const TIMING_FUNCTIONS = [
    {
        value: 'ease',
        name: 'Ease'
    },
    {
        value: 'ease-in',
        name: 'Ease In'
    },
    {
        value: 'ease-out',
        name: 'Ease Out'
    },
    {
        value: 'ease-in-out',
        name: 'Ease In Out'
    },
    {
        value: 'linear',
        name: 'Linear'
    },
    {
        value: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        name: 'Custom Cubic'
    },
    {
        value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        name: 'Back Out'
    }
];
function AnimationPanel({ onAnimationChange, isDarkMode, initialConfig }) {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDirection, setSelectedDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2.0);
    const [iterationCount, setIterationCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('infinite');
    const [timingFunction, setTimingFunction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ease');
    const [delay, setDelay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        animation: true,
        settings: false
    });
    const [previewActive, setPreviewActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 초기 설정 적용
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimationPanel.useEffect": ()=>{
            if (initialConfig) {
                setSelectedCategory(initialConfig.type);
                setSelectedDirection(initialConfig.direction);
                setDuration(initialConfig.duration);
                setIterationCount(initialConfig.iterationCount);
                setTimingFunction(initialConfig.timingFunction);
                setDelay(initialConfig.delay);
            }
        }
    }["AnimationPanel.useEffect"], [
        initialConfig
    ]);
    // CSS 동적 로딩 및 실시간 애니메이션 적용
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimationPanel.useEffect": ()=>{
            if (selectedCategory && selectedDirection) {
                // 애니메이션 CSS 로드
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cssLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAnimationCSS"])(selectedCategory).then({
                    "AnimationPanel.useEffect": ()=>{
                        const animationConfig = {
                            type: selectedCategory,
                            direction: selectedDirection,
                            duration,
                            iterationCount,
                            timingFunction,
                            delay
                        };
                        onAnimationChange(animationConfig);
                    }
                }["AnimationPanel.useEffect"]).catch({
                    "AnimationPanel.useEffect": (error)=>{
                        console.warn(`Failed to load animation CSS for ${selectedCategory}:`, error);
                        // CSS 로딩 실패해도 애니메이션 설정은 적용
                        const animationConfig = {
                            type: selectedCategory,
                            direction: selectedDirection,
                            duration,
                            iterationCount,
                            timingFunction,
                            delay
                        };
                        onAnimationChange(animationConfig);
                    }
                }["AnimationPanel.useEffect"]);
            } else {
                onAnimationChange(null);
            }
        }
    }["AnimationPanel.useEffect"], [
        selectedCategory,
        selectedDirection,
        duration,
        iterationCount,
        timingFunction,
        delay,
        onAnimationChange
    ]);
    const toggleSection = (section)=>{
        setExpandedSections((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category);
        if (category && ANIMATION_CATEGORIES[category].directions.length > 0) {
            setSelectedDirection(ANIMATION_CATEGORIES[category].directions[0]);
        } else {
            setSelectedDirection('');
        }
    };
    const handlePreview = ()=>{
        if (selectedCategory && selectedDirection) {
            // 미리보기 활성화
            setPreviewActive(true);
            setTimeout(()=>setPreviewActive(false), duration * 1000);
        }
    };
    const handleClearAnimation = ()=>{
        setSelectedCategory(null);
        setSelectedDirection('');
        onAnimationChange(null);
    };
    const formatDirectionName = (direction)=>{
        return direction.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 h-full overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`,
                        children: "Animation Effects"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClearAnimation,
                        className: `px-3 py-1 text-sm rounded cursor-pointer transition-all duration-150 transform active:scale-95 ${isDarkMode ? 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg' : 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg'}`,
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnimationPanel.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleSection('animation'),
                        className: `w-full flex items-center justify-between p-2 rounded cursor-pointer transition-all duration-150 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                        children: [
                                            "Animation Type",
                                            selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded",
                                                children: ANIMATION_CATEGORIES[selectedCategory].name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            expandedSections.animation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    expandedSections.animation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedCategory || '',
                                        onChange: (e)=>handleCategoryChange(e.target.value || null),
                                        className: `w-full px-3 py-2 text-sm rounded border cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "None"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this),
                                            Object.entries(ANIMATION_CATEGORIES).map(([key, category])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: key,
                                                    children: category.name
                                                }, key, false, {
                                                    fileName: "[project]/src/components/AnimationPanel.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Direction"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: ANIMATION_CATEGORIES[selectedCategory].directions.map((direction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedDirection(direction),
                                                className: `px-3 py-2 text-xs rounded transition-all duration-150 cursor-pointer transform active:scale-95 ${selectedDirection === direction ? isDarkMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg' : isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'}`,
                                                children: formatDirectionName(direction)
                                            }, direction, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 327,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 323,
                                columnNumber: 15
                            }, this),
                            selectedCategory && selectedDirection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePreview,
                                    className: `flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded cursor-pointer transition-all duration-150 transform active:scale-95 ${isDarkMode ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg' : 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AnimationPanel.tsx",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AnimationPanel.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AnimationPanel.tsx",
                                    lineNumber: 350,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 349,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnimationPanel.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>toggleSection('settings'),
                        className: `w-full flex items-center justify-between p-2 rounded cursor-pointer transition-all duration-150 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`,
                                        children: "Animation Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            expandedSections.settings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    expandedSections.settings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: "Duration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: [
                                                    duration,
                                                    "s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 0.1,
                                        max: 3,
                                        step: 0.1,
                                        value: duration,
                                        onChange: (e)=>setDuration(Number(e.target.value)),
                                        className: "w-full accent-blue-500 cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Repeat"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: iterationCount,
                                        onChange: (e)=>setIterationCount(e.target.value === 'infinite' ? 'infinite' : Number(e.target.value)),
                                        className: `w-full px-3 py-2 text-sm rounded border cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "infinite",
                                                children: "Infinite"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 1,
                                                children: "Once"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 2,
                                                children: "Twice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 3,
                                                children: "3 times"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 5,
                                                children: "5 times"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                        children: "Easing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: timingFunction,
                                        onChange: (e)=>setTimingFunction(e.target.value),
                                        className: `w-full px-3 py-2 text-sm rounded border cursor-pointer ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`,
                                        children: TIMING_FUNCTIONS.map((func)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: func.value,
                                                children: func.name
                                            }, func.value, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: "Delay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: [
                                                    delay,
                                                    "s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                                lineNumber: 451,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 449,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 0,
                                        max: 2,
                                        step: 0.1,
                                        value: delay,
                                        onChange: (e)=>setDelay(Number(e.target.value)),
                                        className: "w-full accent-blue-500 cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimationPanel.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimationPanel.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnimationPanel.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            selectedCategory && selectedDirection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-4 rounded border ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`,
                        children: "Current Animation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-black'} mb-1`,
                        children: ANIMATION_CATEGORIES[selectedCategory].name
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                        children: [
                            formatDirectionName(selectedDirection),
                            " • ",
                            duration,
                            "s • ",
                            iterationCount === 'infinite' ? '∞' : `${iterationCount}x`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimationPanel.tsx",
                        lineNumber: 480,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnimationPanel.tsx",
                lineNumber: 471,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimationPanel.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(AnimationPanel, "IStZSWiCk92LciiIfxKQmaQVrRM=");
_c = AnimationPanel;
var _c;
__turbopack_context__.k.register(_c, "AnimationPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UploadPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PreviewPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PreviewPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ControlPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportTestModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExportTestModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelpModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HelpModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimationPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/svgStateManager.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const [svgContent, setSvgContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isControlPanelCollapsed, setIsControlPanelCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimationPanelCollapsed, setIsAnimationPanelCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 애니메이션 설정 상태
    const [animationConfig, setAnimationConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 새로운 통합 상태 관리
    const [svgEditorState, dispatchSVGEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgEditorReducer"], {
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
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToLegacyConfig"])(svgEditorState.globalConfig);
    const setConfig = (newConfig)=>{
        dispatchSVGEditor({
            type: 'UPDATE_GLOBAL',
            changes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["migrateToGlobalConfig"])(newConfig)
        });
    };
    const [isCodeModalOpen, setIsCodeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExportTestModalOpen, setIsExportTestModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHelpModalOpen, setIsHelpModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConverting, setIsConverting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 디버깅을 위한 상태 모니터링
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            console.log('SVG Editor State changed:', svgEditorState);
        }
    }["Home.useEffect"], [
        svgEditorState
    ]);
    // AdSense 초기화
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const adsbygoogle = window.adsbygoogle || [];
                    window.adsbygoogle = adsbygoogle;
                    // 광고가 로드된 후 초기화
                    setTimeout({
                        "Home.useEffect": ()=>{
                            adsbygoogle.push({});
                        }
                    }["Home.useEffect"], 100);
                } catch (error) {
                    console.error('AdSense error:', error);
                }
            }
        }
    }["Home.useEffect"], []);
    // SVG 다운로드 함수
    const handleDownloadSVG = ()=>{
        if (!svgContent || !svgEditorState.parsedSVG) return;
        try {
            // SVG 생성 (애니메이션과 호버 효과 제외)
            const paths = svgEditorState.parsedSVG.paths.filter((path)=>path.visible).map((path)=>{
                const renderSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$svgStateManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathRenderSettings"])(path, svgEditorState.globalConfig);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                onExportCode: ()=>setIsCodeModalOpen(true),
                onDownloadSVG: svgContent ? handleDownloadSVG : undefined,
                onShowHelp: ()=>setIsHelpModalOpen(true),
                isDarkMode: isDarkMode,
                onToggleTheme: ()=>setIsDarkMode(!isDarkMode)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-20 md:pt-16",
                children: !svgContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${isDarkMode ? 'from-white to-gray-400' : 'from-black to-gray-600'} bg-clip-text text-transparent`,
                                    children: [
                                        "Turn Images into",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        "Interactive SVG"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`,
                                    children: "Convert your images and GIFs to customizable SVG components with animations, hover effects, and exportable React code."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-5 gap-8 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-3 max-w-4xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadPanel"], {
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
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 text-center md:text-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "🚀 Love SVG Studio?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Help us reach more developers by leaving a review and voting on Product Hunt. Your support helps us build better tools for the community!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.producthunt.com/products/svg-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-svg-studio",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-block hover:opacity-80 transition-opacity",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                children: "⭐ Takes less than 30 seconds"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 sm:p-4 md:p-6 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 text-center`,
                                        children: "Advertisement"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                                                async: true,
                                                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9786013383976168",
                                                crossOrigin: "anonymous"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
                                                className: "adsbygoogle",
                                                style: {
                                                    display: 'block',
                                                    width: '100%',
                                                    minHeight: '100px'
                                                },
                                                "data-ad-client": "ca-pub-9786013383976168",
                                                "data-ad-slot": "4523651989",
                                                "data-ad-format": "auto",
                                                "data-full-width-responsive": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-lg p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                        children: "About SVG Studio - Professional Vector Graphics Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-4xl mx-auto space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: "SVG Studio is a comprehensive web-based platform specifically designed for converting, editing, and optimizing Scalable Vector Graphics (SVG) files. Our platform serves web developers, UI/UX designers, graphic artists, and digital marketing professionals who need high-quality vector graphics for modern web applications, mobile apps, and digital projects."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: "As a specialized SVG processing tool, we focus on three core functionalities: image-to-SVG conversion using advanced vectorization algorithms, real-time SVG editing with precision controls, and automated code generation for popular web frameworks including React, Vue.js, and Angular. Our platform eliminates the need for expensive desktop software while providing professional-grade results."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                children: "Built for the modern web development ecosystem, SVG Studio integrates seamlessly with contemporary development workflows. We support TypeScript definitions, provide clean and optimized code output, and ensure all generated SVG files are web-performance optimized with proper accessibility standards. Our tool is particularly valuable for teams working on responsive web design, icon libraries, and scalable user interface components."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                    children: "Technical Specifications & Features"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "🔧 Input Format Support"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Raster Images:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " PNG, JPG, JPEG, GIF (up to 10MB)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Vector Files:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " SVG, existing vector graphics"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Processing:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Advanced edge detection and vectorization"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Quality:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Lossless conversion with detail preservation"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Optimization:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Automatic path simplification and compression"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "🎨 Editing Capabilities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Color Control:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Individual path color customization"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Transformations:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Scale, rotate, position adjustments"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Animations:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " CSS-based spin, pulse, scale, bounce effects"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Opacity:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Transparency and layer blending controls"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Stroke:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Width, color, and style modifications"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "💻 Code Generation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "React Components:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " JSX with TypeScript definitions"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "CSS Output:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Clean CSS with animation keyframes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "SVG Markup:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Optimized, standards-compliant code"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Props Support:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Customizable size, color, animation props"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Tree Shaking:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Optimized for modern bundlers"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "🚀 Performance & Compatibility"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Browser Support:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " All modern browsers (Chrome, Firefox, Safari, Edge)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Processing Speed:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Real-time editing with instant preview"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "File Size:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Optimized output with minimal file size"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Accessibility:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ARIA labels and semantic markup"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Responsive:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Scalable graphics for all screen sizes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                    children: "Professional Use Cases & Target Audience"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "👨‍💻 Web Developers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Creating scalable icons for web applications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Converting design assets to code-ready components"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Building responsive UI elements and graphics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Optimizing graphics for web performance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Integrating with React, Vue, Angular projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "🎨 UI/UX Designers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Converting mockups to implementable graphics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Creating consistent icon libraries"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Designing scalable brand elements"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Prototyping interactive animations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Ensuring design-to-development handoff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "📱 Digital Marketers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Creating scalable social media graphics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Converting logos for web and print use"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Building email template graphics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Optimizing graphics for fast loading"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Maintaining brand consistency across platforms"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                    children: "How to Use SVG Studio - Complete Guide"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-lg p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "📤 Step 1: Upload Your Image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Upload any image format (PNG, JPG, GIF, or existing SVG) by clicking the upload area or dragging and dropping your file. Our advanced image processing converts raster images to scalable vector graphics while preserving quality."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: `list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Supports PNG, JPG, JPEG, GIF, and SVG formats"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Maximum file size: 10MB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Automatic format detection and optimization"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "🎨 Step 2: Customize Your SVG"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Use our intuitive editor to customize colors, size, rotation, and animations. Each path in your SVG can be individually controlled or edited globally for consistent styling across your entire graphic."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: `list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Individual path color customization"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Global size and rotation controls"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Animation effects (spin, pulse, scale, bounce)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "💻 Step 3: Export Your Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Generate production-ready code in multiple formats. Export as React components with TypeScript support, inline CSS, or clean SVG markup. Perfect for modern web development workflows."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: `list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "React components with TypeScript"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "CSS code with animations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Clean SVG markup"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "🚀 Step 4: Download & Integrate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Download your customized SVG file or copy the generated code directly into your project. Our code is optimized for performance and follows best practices for web accessibility."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: `list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "One-click download functionality"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Copy code to clipboard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Optimized for web performance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                    children: "Why Choose SVG Studio?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "🎯"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "Precision Control"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: "Edit individual SVG paths with pixel-perfect precision. Control colors, opacity, and animations for each element separately or apply changes globally."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "Real-time Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: "See changes instantly as you edit. Our real-time preview ensures you get exactly the result you want before exporting your SVG."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-4",
                                                    children: "🔧"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                    children: "Developer-Friendly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                    children: "Export clean, optimized code that integrates seamlessly with React, Vue, Angular, and vanilla JavaScript projects. TypeScript support included."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                    children: "Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `rounded-lg p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "What image formats can I upload?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "SVG Studio supports PNG, JPG, JPEG, GIF, and existing SVG files. We automatically convert raster images to vector format while maintaining quality and detail."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 466,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "Is SVG Studio free to use?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Yes! SVG Studio is completely free to use. You can convert unlimited images, customize SVG graphics, and export code without any restrictions or watermarks."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "Can I use the generated code in commercial projects?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "Absolutely! All code generated by SVG Studio can be used in personal and commercial projects without any licensing restrictions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 482,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`,
                                                        children: "Do you store my uploaded images?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
                                                        children: "No, we don't store your images. All processing happens in your browser, and your files remain completely private and secure."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                    children: "Explore Our SVG Tools"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/free-svg-converter",
                                            className: `p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center mb-4`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                    children: "Free SVG Converter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: "Convert any image to SVG format instantly. No registration required, 100% free."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/svg-editor-online",
                                            className: `p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-lg ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} flex items-center justify-center mb-4`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                    children: "SVG Editor Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: "Professional SVG editor with colors, animations, and real-time preview."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/react-svg-components",
                                            className: `p-6 rounded-lg border ${isDarkMode ? 'border-gray-800 bg-gray-900 hover:bg-gray-800' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-lg ${isDarkMode ? 'bg-green-600' : 'bg-green-500'} flex items-center justify-center mb-4`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`,
                                                    children: "React SVG Components"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`,
                                                    children: "Generate TypeScript React components from your SVG files."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 top-16 flex",
                    children: [
                        !isControlPanelCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-80 border-r ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} overflow-y-auto z-40`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlPanel"], {
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
                                        setAnimationConfig(null);
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
                                    lineNumber: 562,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 561,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 560,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsControlPanelCollapsed(!isControlPanelCollapsed),
                            className: `absolute top-0 ${isControlPanelCollapsed ? 'left-0' : 'left-0'} z-50 p-2 rounded-lg ${isDarkMode ? 'bg-blue-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-black'} shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`,
                            title: isControlPanelCollapsed ? 'Show Controls' : 'Hide Controls',
                            children: isControlPanelCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 637,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 639,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsAnimationPanelCollapsed(!isAnimationPanelCollapsed),
                            className: `absolute top-0 ${isAnimationPanelCollapsed ? 'right-0' : 'right-0'} z-50 p-2 rounded-lg ${isDarkMode ? 'bg-purple-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-black'} shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`,
                            title: isAnimationPanelCollapsed ? 'Show Animation Panel' : 'Hide Animation Panel',
                            children: isAnimationPanelCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 650,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 652,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 644,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 overflow-auto ${isDarkMode ? 'bg-black' : 'bg-white'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PreviewPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewPanel"], {
                                    svgContent: svgContent,
                                    config: config,
                                    isDarkMode: isDarkMode,
                                    // 새로운 path별 편집 정보 전달
                                    svgEditorState: svgEditorState,
                                    animationConfig: animationConfig,
                                    onPathSelect: (pathId)=>{
                                        dispatchSVGEditor({
                                            type: 'SET_SELECTED_PATH',
                                            pathId
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 659,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 658,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this),
                        !isAnimationPanelCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-80 border-l ${isDarkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'} overflow-y-auto z-40`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationPanel"], {
                                    onAnimationChange: setAnimationConfig,
                                    isDarkMode: isDarkMode,
                                    initialConfig: animationConfig || undefined
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 680,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 679,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 678,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 557,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeModal"], {
                isOpen: isCodeModalOpen,
                onClose: ()=>setIsCodeModalOpen(false),
                svgContent: svgContent,
                config: config,
                fileName: fileName,
                // 새로운 path별 편집 정보 전달
                svgEditorState: svgEditorState,
                animationConfig: animationConfig
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 692,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExportTestModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportTestModal"], {
                isOpen: isExportTestModalOpen,
                onClose: ()=>setIsExportTestModalOpen(false),
                isDarkMode: isDarkMode,
                onToggleTheme: ()=>setIsDarkMode(!isDarkMode)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 702,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelpModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpModal"], {
                isOpen: isHelpModalOpen,
                onClose: ()=>setIsHelpModalOpen(false),
                isDarkMode: isDarkMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 708,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(Home, "LgGdsjasSo7E2qpTggWKypYYzI0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_04e5a897._.js.map