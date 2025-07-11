2025-07-11T12:13:52.447736Z	Cloning repository...
2025-07-11T12:13:53.379913Z	From https://github.com/minsun1231/svgconverter
2025-07-11T12:13:53.38042Z	 * branch            bba2136446157d46f24f3a89cdc6108dbb0b5c7a -> FETCH_HEAD
2025-07-11T12:13:53.38053Z	
2025-07-11T12:13:53.410674Z	HEAD is now at bba2136 20250711_v1
2025-07-11T12:13:53.411147Z	
2025-07-11T12:13:53.501073Z	
2025-07-11T12:13:53.501585Z	Using v2 root directory strategy
2025-07-11T12:13:53.527195Z	Success: Finished cloning repository files
2025-07-11T12:13:55.314059Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-07-11T12:13:55.315257Z	
2025-07-11T12:13:56.410758Z	No wrangler.toml file found. Continuing.
2025-07-11T12:13:56.484073Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-07-11T12:13:56.484642Z	Installing project dependencies: npm clean-install --progress=false
2025-07-11T12:14:00.198153Z	npm warn deprecated path-match@1.2.4: This package is archived and no longer maintained. For support, visit https://github.com/expressjs/express/discussions
2025-07-11T12:14:00.228076Z	npm warn deprecated phin@2.9.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
2025-07-11T12:14:16.474508Z	
2025-07-11T12:14:16.474886Z	added 742 packages, and audited 743 packages in 20s
2025-07-11T12:14:16.475063Z	
2025-07-11T12:14:16.475192Z	184 packages are looking for funding
2025-07-11T12:14:16.475325Z	  run `npm fund` for details
2025-07-11T12:14:16.510406Z	
2025-07-11T12:14:16.51074Z	15 vulnerabilities (1 low, 10 moderate, 4 high)
2025-07-11T12:14:16.510887Z	
2025-07-11T12:14:16.511012Z	To address issues that do not require attention, run:
2025-07-11T12:14:16.511118Z	  npm audit fix
2025-07-11T12:14:16.511229Z	
2025-07-11T12:14:16.51141Z	Some issues need review, and may require choosing
2025-07-11T12:14:16.511528Z	a different dependency.
2025-07-11T12:14:16.511628Z	
2025-07-11T12:14:16.511728Z	Run `npm audit` for details.
2025-07-11T12:14:16.54322Z	Executing user command: npm run build
2025-07-11T12:14:16.969367Z	
2025-07-11T12:14:16.969695Z	> svgconverter@0.1.0 build
2025-07-11T12:14:16.96995Z	> next build
2025-07-11T12:14:16.970072Z	
2025-07-11T12:14:17.770554Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-07-11T12:14:17.775252Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-07-11T12:14:17.775516Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-07-11T12:14:17.775632Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-07-11T12:14:17.775748Z	https://nextjs.org/telemetry
2025-07-11T12:14:17.776057Z	
2025-07-11T12:14:17.890116Z	   ▲ Next.js 15.3.5
2025-07-11T12:14:17.890512Z	
2025-07-11T12:14:17.90697Z	   Creating an optimized production build ...
2025-07-11T12:14:27.430687Z	 ✓ Compiled successfully in 5.0s
2025-07-11T12:14:27.503523Z	   Linting and checking validity of types ...
2025-07-11T12:14:30.358534Z	
2025-07-11T12:14:30.359033Z	Failed to compile.
2025-07-11T12:14:30.359149Z	
2025-07-11T12:14:30.359238Z	./src/app/page.tsx
2025-07-11T12:14:30.359319Z	118:11  Error: 'gifOptions' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:14:30.359456Z	118:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:14:30.359651Z	
2025-07-11T12:14:30.359807Z	./src/components/ControlPanel.tsx
2025-07-11T12:14:30.35993Z	21:54  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:14:30.360028Z	41:5  Error: 'configKey' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:14:30.36012Z	
2025-07-11T12:14:30.360216Z	./src/components/PreviewPanel.tsx
2025-07-11T12:14:30.360334Z	13:7  Error: 'getHueRotation' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:14:30.360459Z	61:9  Error: 'animationName' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:14:30.360535Z	79:9  Error: 'getHoverStyle' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:14:30.360635Z	
2025-07-11T12:14:30.388386Z	./src/components/UploadPanel.tsx
2025-07-11T12:14:30.388618Z	44:75  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:14:30.388935Z	
2025-07-11T12:14:30.389058Z	./src/types/imagetracer.d.ts
2025-07-11T12:14:30.389153Z	21:12  Error: 'imageToSVG' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:14:30.389252Z	
2025-07-11T12:14:30.389511Z	./src/types/potrace.d.ts
2025-07-11T12:14:30.390255Z	19:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:14:30.390372Z	45:12  Error: 'imageToSVG' is defined but only used as a type.  @typescript-eslint/no-unused-vars
2025-07-11T12:14:30.390451Z	
2025-07-11T12:14:30.39052Z	info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
2025-07-11T12:14:30.401655Z	Failed: Error while executing user command. Exited with error code: 1
2025-07-11T12:14:30.414045Z	Failed: build command exited with code: 1
2025-07-11T12:14:31.34531Z	Failed: error occurred while running build command