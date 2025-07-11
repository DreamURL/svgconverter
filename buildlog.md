2025-07-11T12:28:44.937932Z	Cloning repository...
2025-07-11T12:28:45.930287Z	From https://github.com/minsun1231/svgconverter
2025-07-11T12:28:45.930809Z	 * branch            bba2136446157d46f24f3a89cdc6108dbb0b5c7a -> FETCH_HEAD
2025-07-11T12:28:45.930914Z	
2025-07-11T12:28:45.959814Z	HEAD is now at bba2136 20250711_v1
2025-07-11T12:28:45.960317Z	
2025-07-11T12:28:46.040337Z	
2025-07-11T12:28:46.04082Z	Using v2 root directory strategy
2025-07-11T12:28:46.062134Z	Success: Finished cloning repository files
2025-07-11T12:28:47.702669Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-07-11T12:28:47.703546Z	
2025-07-11T12:28:48.80007Z	No wrangler.toml file found. Continuing.
2025-07-11T12:28:48.864662Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-07-11T12:28:48.865199Z	Installing project dependencies: npm clean-install --progress=false
2025-07-11T12:28:52.242037Z	npm warn deprecated path-match@1.2.4: This package is archived and no longer maintained. For support, visit https://github.com/expressjs/express/discussions
2025-07-11T12:28:52.274245Z	npm warn deprecated phin@2.9.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
2025-07-11T12:29:07.403515Z	
2025-07-11T12:29:07.403808Z	added 742 packages, and audited 743 packages in 18s
2025-07-11T12:29:07.403959Z	
2025-07-11T12:29:07.404069Z	184 packages are looking for funding
2025-07-11T12:29:07.404191Z	  run `npm fund` for details
2025-07-11T12:29:07.431154Z	
2025-07-11T12:29:07.431465Z	15 vulnerabilities (1 low, 10 moderate, 4 high)
2025-07-11T12:29:07.431616Z	
2025-07-11T12:29:07.431732Z	To address issues that do not require attention, run:
2025-07-11T12:29:07.431843Z	  npm audit fix
2025-07-11T12:29:07.431971Z	
2025-07-11T12:29:07.432155Z	Some issues need review, and may require choosing
2025-07-11T12:29:07.432273Z	a different dependency.
2025-07-11T12:29:07.432373Z	
2025-07-11T12:29:07.432476Z	Run `npm audit` for details.
2025-07-11T12:29:07.464253Z	Executing user command: npm run build
2025-07-11T12:29:07.856883Z	
2025-07-11T12:29:07.857347Z	> svgconverter@0.1.0 build
2025-07-11T12:29:07.857477Z	> next build
2025-07-11T12:29:07.857542Z	
2025-07-11T12:29:08.616171Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-07-11T12:29:08.620445Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-07-11T12:29:08.620648Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-07-11T12:29:08.620793Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-07-11T12:29:08.620928Z	https://nextjs.org/telemetry
2025-07-11T12:29:08.621054Z	
2025-07-11T12:29:08.726903Z	   ▲ Next.js 15.3.5
2025-07-11T12:29:08.727217Z	
2025-07-11T12:29:08.740794Z	   Creating an optimized production build ...
2025-07-11T12:29:17.48791Z	 ✓ Compiled successfully in 4.0s
2025-07-11T12:29:17.492268Z	   Linting and checking validity of types ...
2025-07-11T12:29:20.245471Z	
2025-07-11T12:29:20.246186Z	Failed to compile.
2025-07-11T12:29:20.246423Z	
2025-07-11T12:29:20.246548Z	./src/app/page.tsx
2025-07-11T12:29:20.246652Z	118:11  Error: 'gifOptions' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:29:20.246761Z	118:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:29:20.246957Z	
2025-07-11T12:29:20.247074Z	./src/components/ControlPanel.tsx
2025-07-11T12:29:20.247197Z	21:54  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:29:20.247404Z	41:5  Error: 'configKey' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:29:20.247565Z	
2025-07-11T12:29:20.247758Z	./src/components/PreviewPanel.tsx
2025-07-11T12:29:20.247929Z	13:7  Error: 'getHueRotation' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:29:20.248146Z	61:9  Error: 'animationName' is never reassigned. Use 'const' instead.  prefer-const
2025-07-11T12:29:20.248356Z	79:9  Error: 'getHoverStyle' is assigned a value but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:29:20.248568Z	
2025-07-11T12:29:20.248754Z	./src/components/UploadPanel.tsx
2025-07-11T12:29:20.24884Z	44:75  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:29:20.248982Z	
2025-07-11T12:29:20.249092Z	./src/types/imagetracer.d.ts
2025-07-11T12:29:20.249189Z	21:12  Error: 'imageToSVG' is defined but never used.  @typescript-eslint/no-unused-vars
2025-07-11T12:29:20.24929Z	
2025-07-11T12:29:20.249394Z	./src/types/potrace.d.ts
2025-07-11T12:29:20.24951Z	19:23  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
2025-07-11T12:29:20.249621Z	45:12  Error: 'imageToSVG' is defined but only used as a type.  @typescript-eslint/no-unused-vars
2025-07-11T12:29:20.249964Z	
2025-07-11T12:29:20.25021Z	info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
2025-07-11T12:29:20.290781Z	Failed: Error while executing user command. Exited with error code: 1
2025-07-11T12:29:20.30275Z	Failed: build command exited with code: 1
2025-07-11T12:29:21.303646Z	Failed: error occurred while running build command