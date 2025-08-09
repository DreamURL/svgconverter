Run `npm audit` for details.
12:48:08.112	Executing user command: npm run build
12:48:08.495	
12:48:08.495	> svgconverter@0.1.0 build
12:48:08.495	> next build
12:48:08.495	
12:48:09.236	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
12:48:09.240	Attention: Next.js now collects completely anonymous telemetry regarding usage.
12:48:09.240	This information is used to shape Next.js' roadmap and prioritize features.
12:48:09.240	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
12:48:09.240	https://nextjs.org/telemetry
12:48:09.240	
12:48:09.299	   ▲ Next.js 15.3.5
12:48:09.300	
12:48:09.360	   Creating an optimized production build ...
12:48:18.547	 ✓ Compiled successfully in 5.0s
12:48:18.573	   Linting and checking validity of types ...
12:48:21.836	
12:48:21.836	Failed to compile.
12:48:21.836	
12:48:21.836	./src/components/AnimationPanel.tsx
12:48:21.836	6:28  Error: 'unloadAnimationCSS' is defined but never used.  @typescript-eslint/no-unused-vars
12:48:21.836	169:10  Error: 'previewActive' is assigned a value but never used.  @typescript-eslint/no-unused-vars
12:48:21.837	
12:48:21.837	./src/components/ControlPanel.tsx
12:48:21.837	5:36  Error: 'Zap' is defined but never used.  @typescript-eslint/no-unused-vars
12:48:21.837	
12:48:21.837	./src/components/ui/Cloud.tsx
12:48:21.837	30:6  Warning: React Hook React.useEffect has a missing dependency: 'animationStyles'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
12:48:21.837	
12:48:21.838	./src/utils/cssLoader.ts
12:48:21.838	2254:48  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
12:48:21.838	
12:48:21.838	info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
12:48:21.884	Failed: Error while executing user command. Exited with error code: 1
12:48:21.894	Failed: build command exited with code: 1
12:48:22.921	Failed: error occurred while running build command