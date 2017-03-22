# Splitting av JS i 2017

## Hvorfor?

* Raskere sidelasting
* Unngå at bruker laster ned kode som ikke trengs.
* Selektiv lasting av polyfills
* Ressurser som ikke endres ofte kan caches av nettleser.

## Hvordan?

* Bruk en bundler!
* Finnes mange bundlere (Webpack, Rollup m.fl)

## Hvordan med webpack?

* Bruker webpack til å definere "split-points" i koden.
* Definerer også en "commons" chunk, som inneholder vendorfiler (react, angular, moment, etc.)
* Webpack tar seg av async lasting av bundles.

## Eksempel

```js
// fil.js
export function myFunction() {
  return 'foo'
}

// annenFil.js
import('./fil').then(fil => {
  console.log(fil.myFunction()); // 'foo'
})
```

* `import` gjør at webpack lager et splitt-punkt, og gjør at innholdet i `fil.js` havner i sin egen bundle.
* Hvis man ikke har ES6-exports i koden sin kan man også bruke `require.ensure()`
* Trenger babel-plugin-syntax-dynamic-import for å få dynamiske imports til å bygge med babel.

## Vendor-filer

* Vanlig å putte vendor-filer i sin egen fil.

```js
//webpack.config.js
module.exports = {
  entry: {
    // ...
    vendor: ['react'],
  },
  // ...
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor', 'manifest' ]
    })
  ],
};
```

* Dette gjør at `react` havner i en egen `vendor`-bundle
* Alle pakker som puttes i `vendor`-lista blir nå flyttet til vendor-bundlen.

## Implisitt vendor-bundle

Hvis man vil at alt som importeres fra `node_modules` skal havne i en egen vendor-bundle kan man definere `CommonsChunkPlugin` slik:

```js
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function (module) {
    return module.context && module.context.indexOf('node_modules') !== -1;
  }
})
```

## Selektiv lasting av polyfills

```js
function initialize() {
  // init app
}

function browserSupportsAllFeatures() {
  return window.Promise
    && window.fetch
    && window.Symbol
    && Function.prototype.bind
    && Object.keys;
}

if (!browserSupportsAllFeatures()) {
  import('core-js').then(() => initialize());
} else {
  initialize();
}
```

## Mer lesning

* https://webpack.js.org/guides/code-splitting/
* https://webpack.js.org/plugins/commons-chunk-plugin/

# Demo!
