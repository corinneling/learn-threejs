# Setup webpack from Scratch

### Steps

1. `npm i webpack`
2. `npm i webpack-cli` 
3. `touch webpack.config.js` in your root directory
4. Add the entry point and output to your webpack config file
5. Add `"js": "webpack" as a script in your package.json 
5. Add `"js:watch": "webpack --watch" as a script in your package.json 

### Notes
* webpack is a static module bundler
* entry  = the module that webpack should start building the bundle with
```
module.exports = {
   entry: './path/to/file.js'
};
```
* output = where to put the bundles webpack builds and how to name them
   * include path at the beginning of the file to tell webpack where the output should be
```
const path = require('path');
module.exports = {
   entry: './path/to/file.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   }
};
```
