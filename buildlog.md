2025-07-11T12:22:00.42018106Z	Cloning repository...
2025-07-11T12:22:01.32320843Z	From https://github.com/minsun1231/svgconverter
2025-07-11T12:22:01.32351491Z	 * branch            bba2136446157d46f24f3a89cdc6108dbb0b5c7a -> FETCH_HEAD
2025-07-11T12:22:01.323529172Z	
2025-07-11T12:22:01.349531534Z	HEAD is now at bba2136 20250711_v1
2025-07-11T12:22:01.349930925Z	
2025-07-11T12:22:01.42508509Z	
2025-07-11T12:22:01.425528881Z	Using v2 root directory strategy
2025-07-11T12:22:01.448355703Z	Success: Finished cloning repository files
2025-07-11T12:22:03.07783382Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-07-11T12:22:01.32320843Z	From https://github.com/minsun1231/svgconverter
2025-07-11T12:22:01.32351491Z	 * branch            bba2136446157d46f24f3a89cdc6108dbb0b5c7a -> FETCH_HEAD
2025-07-11T12:22:01.323529172Z	
2025-07-11T12:22:01.349531534Z	HEAD is now at bba2136 20250711_v1
2025-07-11T12:22:01.349930925Z	
2025-07-11T12:22:01.42508509Z	
2025-07-11T12:22:01.425528881Z	Using v2 root directory strategy
2025-07-11T12:22:01.448355703Z	Success: Finished cloning repository files
2025-07-11T12:22:03.07783382Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-07-11T12:22:03.078696167Z	
2025-07-11T12:22:04.234380848Z	No wrangler.toml file found. Continuing.
2025-07-11T12:22:04.299708526Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-07-11T12:22:04.300032866Z	Installing project dependencies: npm clean-install --progress=false
2025-07-11T12:22:07.511307987Z	npm warn deprecated phin@2.9.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
2025-07-11T12:22:07.512334414Z	npm warn deprecated path-match@1.2.4: This package is archived and no longer maintained. For support, visit https://github.com/expressjs/express/discussions
2025-07-11T12:22:21.68640267Z	
2025-07-11T12:22:21.686594864Z	added 742 packages, and audited 743 packages in 17s
2025-07-11T12:22:21.686747266Z	
2025-07-11T12:22:21.686858934Z	184 packages are looking for funding
2025-07-11T12:22:21.686998287Z	  run `npm fund` for details
2025-07-11T12:22:21.714300837Z	
2025-07-11T12:22:21.714454606Z	15 vulnerabilities (1 low, 10 moderate, 4 high)
2025-07-11T12:22:21.714552726Z	
2025-07-11T12:22:21.714624829Z	To address issues that do not require attention, run:
2025-07-11T12:22:21.714753824Z	  npm audit fix
2025-07-11T12:22:21.714940797Z	
2025-07-11T12:22:21.715102698Z	Some issues need review, and may require choosing
2025-07-11T12:22:21.715234372Z	a different dependency.
2025-07-11T12:22:21.715358047Z	
2025-07-11T12:22:21.715477496Z	Run `npm audit` for details.
2025-07-11T12:22:21.754147969Z	Executing user command: npm run build
2025-07-11T12:22:22.142200648Z	
2025-07-11T12:22:22.142354011Z	> svgconverter@0.1.0 build
2025-07-11T12:22:22.142668663Z	> next build
2025-07-11T12:22:22.14287763Z	
2025-07-11T12:22:22.859059984Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-07-11T12:22:22.862990333Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-07-11T12:22:22.863187322Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-07-11T12:22:22.863209479Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-07-11T12:22:22.863467856Z	https://nextjs.org/telemetry
2025-07-11T12:22:22.863478554Z	
2025-07-11T12:22:22.962602151Z	   ▲ Next.js 15.3.5
2025-07-11T12:22:22.962870349Z	
2025-07-11T12:22:22.975725959Z	   Creating an optimized production build ...
2025-07-11T12:22:31.350780999Z	 ✓ Compiled successfully in 4.0s
2025-07-11T12:22:31.355728679Z	   Linting and checking validity of types ...
2025-07-11T12:22:33.937101887Z	
2025-07-11T12:22:33.938036672Z	Failed to compile.
2025-07-11T12:22:33.93844382Z	
2025-07-11T12:22:33.938583852Z	./src/app/page.tsx
2025-07-11T12:22:33.939376328Z	118:11  Error: 'gifOptions' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:22:33.939714769Z	118:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:22:33.939730653Z	
2025-07-11T12:22:33.939855003Z	./src/components/ControlPanel.tsx
2025-07-11T12:22:33.940000279Z	21:54  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:22:33.940104234Z	41:5  Error: 'configKey' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:22:33.940238365Z	
2025-07-11T12:22:33.940377381Z	./src/components/PreviewPanel.tsx
2025-07-11T12:22:33.940405164Z	13:7  Error: 'getHueRotation' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:22:33.940515773Z	61:9  Error: 'animationName' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:22:33.940651765Z	79:9  Error: 'getHoverStyle' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:22:33.940757072Z	
2025-07-11T12:22:33.940879008Z	./src/components/UploadPanel.tsx
2025-07-11T12:22:33.940944285Z	44:75  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:22:33.941104965Z	
2025-07-11T12:22:33.941272375Z	./src/types/imagetracer.d.ts
2025-07-11T12:22:33.941281474Z	21:12  Error: 'imageToSVG' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:22:33.941457804Z	
2025-07-11T12:22:33.941488207Z	./src/types/potrace.d.ts
2025-07-11T12:22:33.941589314Z	19:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:22:33.941667831Z	45:12  Error: 'imageToSVG' is defined but only used as a type.  @typescript-eslint/no-unused-vars
2025-07-11T12:22:33.94173764Z	
2025-07-11T12:22:33.941815167Z	info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
2025-07-11T12:22:33.984232141Z	Failed: Error while executing user command. Exited with error code: 1
2025-07-11T12:22:33.995590832Z	Failed: build command exited with code: 1
2025-07-11T12:22:35.09585Z	Failed: error occurred while running build command