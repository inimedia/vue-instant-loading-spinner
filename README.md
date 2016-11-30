# vue-instant-loading-spinner

> Instant loading spinner for use with awesome Vue

## Installation

``` bash
# yarn
yarn add vue-instant-loading-spinenr

# npm
npm install --save vue-instant-loading-spinenr
```

## Example

### Markup

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>vue-instant-loading-spinner</title>
  </head>
  <body>
    <div id="app">
      <vue-instant-loading-spinner ref="Spinner"></vue-instant-loading-spinner>
      <button @click="test()">Test</button>
    </div>
    <!-- your script -->
  </body>
</html>
```

### Script

``` javascript
import Vue from 'vue'
import VueInstantLoadingSpinner from 'vue-instant-loading-spinner'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { VueInstantLoadingSpinner },
  methods: {
    test: function () {
      this.$refs.Spinner.show();
      setTimeout(function () {
        this.$refs.Spinner.hide();
      }.bind(this), 2000);
    }
  }
});
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
