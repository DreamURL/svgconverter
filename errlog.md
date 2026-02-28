Node.js v22.17.1
PS E:\외주\svgconverter> npm run dev

> svgconverter@0.1.0 dev
> next dev --turbopack

node:internal/modules/cjs/loader:1404
  throw err;
  ^

Error: Cannot find module 'E:\외주\svgconverter\node_modules\next\dist\bin\next'
    at Function._resolveFilename (node:internal/modules/cjs/loader:1401:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1057:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1062:22)
    at Function._load (node:internal/modules/cjs/loader:1211:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v22.17.1