To test out the various ways of applying the Futamura Projections on the GoI machine, first clone the GoI machine outside of this repository (https://git.cs.bham.ac.uk/txw467/viz).


There are three ways this can be achieved:
1. By running `npm run build-goi-machine`, which applies Webpack to the `goi-machine.js` file in the cloned repo. This returns a `umd` module with any `require.js` syntax replaced by normal, ES5 syntax. Haven't checked yet if this can be run in the browser via the UI written in `require.js`, but inituitively, I would say it won't work.
2. By running `node lib/goiMachine/futamura.js`, which runs Prepack on the same `goi-machine.js` file but adds some Prepack specific code, to know how to deal with syntax like `define`. This, however, should be easy to use from the `require.js` module, however it is not as optimized yet as we would like.
3. By running `npm run prepack-goi-machine`, which also applies Webpack to the `goi-machine.js` file but it includes the Webpack Prepack plugin. This returns an `amd` module, which should hopefully be able to be used by the initial `require.js` module.