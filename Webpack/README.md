Webpack is a static module bundler for JavaScript applications. Its main purpose is to bundle JavaScript files for usage in a browser, Webpack goes through your package and creates what it calls a dependency graph which consists of various modules which your webapp would require to function as expected. Then, depending on this graph, it creates a new package which consists of the very bare minimum number of files required, often just a single bundle.js file which can be plugged into the html file easily and used for the application1.

How to setup Webpack for a basic project
Entry points, output, and loaders
How to add plugins
How to split your code into chunks
How to setup a dev server

* Install webpack and webpack-cli as developer dependencies within a task_0 folder. You will use CLI to call webpack from the command line.
* Install jQuery as a regular dependency using npm.
```
/task_0$ npm init -y
/task_0$ npm install --save-dev webpack webpack-cli
/task_0$ npm install jquery
```
Verify the installation by checking your package.json file. You should see jQuery listed under dependencies and webpack and webpack-cli are listed under the devDependencies.
```
/task_0$ $ npx webpack --mode development
asset main.js 320 KiB [emitted] (name: main)
runtime modules 937 bytes 4 modules
cacheable modules 279 KiB
  ./src/index.js 244 bytes [built] [code generated]
  ./node_modules/jquery/dist/jquery.js 279 KiB [built] [code generated]
webpack 5.89.0 compiled successfully in 437 ms
```