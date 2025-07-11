2025-07-11T12:33:26.757659Z	Cloning repository...
2025-07-11T12:33:27.721802Z	From https://github.com/minsun1231/svgconverter
2025-07-11T12:33:27.722354Z	 * branch            bba2136446157d46f24f3a89cdc6108dbb0b5c7a -> FETCH_HEAD
2025-07-11T12:33:27.722497Z	
2025-07-11T12:33:27.751591Z	HEAD is now at bba2136 20250711_v1
2025-07-11T12:33:27.752336Z	
2025-07-11T12:33:27.835887Z	
2025-07-11T12:33:27.83643Z	Using v2 root directory strategy
2025-07-11T12:33:27.858011Z	Success: Finished cloning repository files
2025-07-11T12:33:29.611864Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-07-11T12:33:29.612654Z	
2025-07-11T12:33:30.715662Z	No wrangler.toml file found. Continuing.
2025-07-11T12:33:30.783622Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-07-11T12:33:30.784241Z	Installing project dependencies: npm clean-install --progress=false
2025-07-11T12:33:34.21637Z	npm warn deprecated path-match@1.2.4: This package is archived and no longer maintained. For support, visit https://github.com/expressjs/express/discussions
2025-07-11T12:33:34.240226Z	npm warn deprecated phin@2.9.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
2025-07-11T12:33:49.557433Z	
2025-07-11T12:33:49.55769Z	added 742 packages, and audited 743 packages in 18s
2025-07-11T12:33:49.557788Z	
2025-07-11T12:33:49.557891Z	184 packages are looking for funding
2025-07-11T12:33:49.557968Z	  run `npm fund` for details
2025-07-11T12:33:49.585368Z	
2025-07-11T12:33:49.585859Z	15 vulnerabilities (1 low, 10 moderate, 4 high)
2025-07-11T12:33:49.586004Z	
2025-07-11T12:33:49.586118Z	To address issues that do not require attention, run:
2025-07-11T12:33:49.586218Z	  npm audit fix
2025-07-11T12:33:49.586325Z	
2025-07-11T12:33:49.586497Z	Some issues need review, and may require choosing
2025-07-11T12:33:49.586621Z	a different dependency.
2025-07-11T12:33:49.586733Z	
2025-07-11T12:33:49.586852Z	Run `npm audit` for details.
2025-07-11T12:33:49.617214Z	Executing user command: npm run build
2025-07-11T12:33:50.027338Z	
2025-07-11T12:33:50.027593Z	> svgconverter@0.1.0 build
2025-07-11T12:33:50.027891Z	> next build
2025-07-11T12:33:50.027984Z	
2025-07-11T12:33:50.787202Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-07-11T12:33:50.791782Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-07-11T12:33:50.792094Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-07-11T12:33:50.792281Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-07-11T12:33:50.792456Z	https://nextjs.org/telemetry
2025-07-11T12:33:50.792574Z	
2025-07-11T12:33:50.900169Z	   ▲ Next.js 15.3.5
2025-07-11T12:33:50.900549Z	
2025-07-11T12:33:50.916684Z	   Creating an optimized production build ...
2025-07-11T12:33:59.944105Z	 ✓ Compiled successfully in 5.0s
2025-07-11T12:34:00.050614Z	   Linting and checking validity of types ...
2025-07-11T12:34:02.881017Z	
2025-07-11T12:34:02.881318Z	Failed to compile.
2025-07-11T12:34:02.881442Z	
2025-07-11T12:34:02.881535Z	./src/app/page.tsx
2025-07-11T12:34:02.881624Z	118:11  Error: 'gifOptions' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:34:02.881714Z	118:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:34:02.881856Z	
2025-07-11T12:34:02.881956Z	./src/components/ControlPanel.tsx
2025-07-11T12:34:02.882045Z	21:54  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:34:02.882148Z	41:5  Error: 'configKey' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:34:02.882254Z	
2025-07-11T12:34:02.882347Z	./src/components/PreviewPanel.tsx
2025-07-11T12:34:02.88243Z	13:7  Error: 'getHueRotation' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:34:02.882626Z	61:9  Error: 'animationName' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:34:02.882723Z	79:9  Error: 'getHoverStyle' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:34:02.882849Z	
2025-07-11T12:34:02.882942Z	./src/components/UploadPanel.tsx
2025-07-11T12:34:02.883028Z	44:75  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:34:02.883138Z	
2025-07-11T12:34:02.883218Z	./src/types/imagetracer.d.ts
2025-07-11T12:34:02.883307Z	21:12  Error: 'imageToSVG' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:34:02.883396Z	
2025-07-11T12:34:02.883483Z	./src/types/potrace.d.ts
2025-07-11T12:34:02.883575Z	19:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:34:02.883668Z	45:12  Error: 'imageToSVG' is defined but only used as a type.  @typescript-eslint/no-unused-vars
2025-07-11T12:34:02.883758Z	
2025-07-11T12:34:02.883882Z	info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
2025-07-11T12:34:02.924273Z	Failed: Error while executing user command. Exited with error code: 1
2025-07-11T12:34:02.936995Z	Failed: build command exited with code: 1
2025-07-11T12:34:03.931611Z	Failed: error occurred while running build command