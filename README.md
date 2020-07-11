# svg2img-workerpool

Example code to convert svgs to png images in parallel. Uses the `svg2img` library and the `workerpool` library.

## Usage:

Edit `index.js` to select either the `runSeries()` or the `runParallel()` call. Then run `index.js`:

```
node index.js
```

## Output:

When run, the code *should* convert each of the three SVG files, and save three PNG images.

Expected output when using `runSeries()`:

```
Converting triangle
Done with triangle
Converting square
Done with square
Converting circle
Done with circle
```

Expected output when using `runParallel()` (order may vary):

```
Converting triangle
Converting square
Converting circle
Done with triangle
Done with square
Done with circle
```

*Actual* output when using `runParallel()`:

```
(node:20657) UnhandledPromiseRejectionWarning: Error: Module did not self-register.
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:1003:18)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/home/eric/Documents/svg2img-workerpool/node_modules/canvas/lib/bindings.js:3:18)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
(node:20657) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:20657) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:20657) UnhandledPromiseRejectionWarning: Error: Module did not self-register.
    at Object.Module._extensions..node (internal/modules/cjs/loader.js:1003:18)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/home/eric/Documents/svg2img-workerpool/node_modules/canvas/lib/bindings.js:3:18)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
(node:20657) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
Converting triangle
Done with triangle
```

Only one of the SVGs is converted. The other two workers fail to start.