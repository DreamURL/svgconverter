19:01:29.174	Cloning repository...
19:01:30.060	From https://github.com/minsun1231/svgconverter
19:01:30.060	 * branch            7c8ba41e204bd7272fdd530aeb7bc10aa6b7a4d3 -> FETCH_HEAD
19:01:30.060	
19:01:30.085	HEAD is now at 7c8ba41 Fix Cloudflare Pages build config - Add wrangler.toml, .nvmrc, and update build script
19:01:30.085	
19:01:30.172	
19:01:30.173	Using v2 root directory strategy
19:01:30.197	Success: Finished cloning repository files
19:01:31.852	Checking for configuration in a Wrangler configuration file (BETA)
19:01:31.853	
19:01:31.854	Found wrangler.toml file. Reading build configuration...
19:01:32.960	A wrangler.toml file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
19:01:33.038	Detected the following tools from environment: nodejs@20.19.2, npm@10.9.2
19:01:33.038	Installing nodejs 20.19.2
19:01:34.081	Trying to update node-build... ok
19:01:34.174	To follow progress, use 'tail -f /tmp/node-build.20250813100134.490.log' or pass --verbose
19:01:34.271	Downloading node-v20.19.2-linux-x64.tar.gz...
19:01:34.523	-> https://nodejs.org/dist/v20.19.2/node-v20.19.2-linux-x64.tar.gz
19:01:36.100	
19:01:36.100	WARNING: node-v20.19.2-linux-x64 is in LTS Maintenance mode and nearing its end of life.
19:01:36.101	It only receives *critical* security updates, *critical* bug fixes and documentation updates.
19:01:36.101	
19:01:36.101	Installing node-v20.19.2-linux-x64...
19:01:36.493	Installed node-v20.19.2-linux-x64 to /opt/buildhome/.asdf/installs/nodejs/20.19.2
19:01:36.493	
19:01:37.501	Installing project dependencies: npm install --progress=false
19:01:55.724	npm warn deprecated phin@2.9.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
19:02:06.252	
19:02:06.252	added 474 packages, and audited 475 packages in 28s
19:02:06.252	
19:02:06.253	149 packages are looking for funding
19:02:06.253	  run `npm fund` for details
19:02:06.262	
19:02:06.262	5 moderate severity vulnerabilities
19:02:06.262	
19:02:06.262	Some issues need review, and may require choosing
19:02:06.262	a different dependency.
19:02:06.263	
19:02:06.263	Run `npm audit` for details.
19:02:06.280	Executing user command: npm run build
19:02:06.669	
19:02:06.669	> svgconverter@0.1.0 build
19:02:06.669	> npm install --production=false && next build
19:02:06.670	
19:02:06.825	npm warn config production Use `--omit=dev` instead.
19:02:09.676	
19:02:09.677	added 6 packages, and audited 481 packages in 3s
19:02:09.677	
19:02:09.677	152 packages are looking for funding
19:02:09.677	  run `npm fund` for details
19:02:09.691	
19:02:09.692	5 moderate severity vulnerabilities
19:02:09.692	
19:02:09.692	Some issues need review, and may require choosing
19:02:09.692	a different dependency.
19:02:09.692	
19:02:09.692	Run `npm audit` for details.
19:02:10.325	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
19:02:10.330	Attention: Next.js now collects completely anonymous telemetry regarding usage.
19:02:10.330	This information is used to shape Next.js' roadmap and prioritize features.
19:02:10.330	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
19:02:10.330	https://nextjs.org/telemetry
19:02:10.330	
19:02:10.403	
19:02:10.404	> Build error occurred
19:02:10.409	[Error: > Couldn't find any `pages` or `app` directory. Please create one under the project root]
19:02:10.428	Failed: Error while executing user command. Exited with error code: 1
19:02:10.437	Failed: build command exited with code: 1
19:02:11.613	Failed: error occurred while running build command