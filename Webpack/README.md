# Webpack
Webpack is a static module bundler for JavaScript applications. Its main purpose is to bundle JavaScript files for usage in a browser, Webpack goes through your package and creates what it calls a dependency graph which consists of various modules which your webapp would require to function as expected. Then, depending on this graph, it creates a new package which consists of the very bare minimum number of files required, often just a single bundle.js file which can be plugged into the html file easily and used for the application.

Webpack has a rich ecosystem of modules called "plugins", which are libraries that can modify and enhance the webpack build process. We'll explore a handful of helpful plugins as we continue to improve our webpack config throughout the project.

## Description
* How to setup Webpack for a basic project
* Entry points, output, and loaders
* How to add plugins
* How to split your code into chunks
* How to setup a dev server

### [0. Basic setup](./task_0/src/index.js)

* Install webpack and webpack-cli as developer dependencies within a task_0 folder. You will use CLI to call webpack from the command line.
* Install jQuery as a regular dependency using npm.
```
/task_0$ npm init -y
/task_0$ npm install --save-dev webpack webpack-cli
/task_0$ npm install jquery
```
* Verify the installation by checking your package.json file. You should see jQuery listed under dependencies and webpack and webpack-cli are listed under the devDependencies.
* Create a src directory with a index.js in it.
* The file should import jquery and add the given paragraphs to the page body.
* Create a dist/index.html. Import your main.js in the body.
```
/task_0$ $ npx webpack --mode development
asset main.js 320 KiB [emitted] (name: main)
runtime modules 937 bytes 4 modules
cacheable modules 279 KiB
  ./src/index.js 244 bytes [built] [code generated]
  ./node_modules/jquery/dist/jquery.js 279 KiB [built] [code generated]
webpack 5.89.0 compiled successfully in 437 ms
```
<p align="center">
  <img src="./images/task_0.png" alt="Image Description" width="60%" />
</p>

### [1. Learning how to use Webpack with a config file](./task_1/js/dashboard_main.js)

* Install webpack as dev dependency and jquery and Lodash as dependencies.
```
/task_1$ npm init -y
/task_1$ npm install --save-dev webpack webpack-cli 
/task_1$ npm install jquery lodash
```
* Modify your package.json to add a build script that runs webpack. Then you can run `npm run build` to bundle your JavaScript files.
* Create dashboard_main.js inside a js folder. With jQuery add the given paragraphs, a button and a click counter paragraph. Also create a updateCounter function to update the click counter paragraph.
* Bind the debounce function in Lodash to the click event on the button you created previously (The number of milliseconds to delay invocation should be 500).
* When running Webpack, a javaScript file named bundle.js should be generated in a folder named public.
* Create a public/index.html. Import bundle.js in the body.
* Set Webpack config mode to production.
```
/task_1$ npm run build
```
<p align="center">
  <img src="./images/task_1a.png" alt="Image Description" width="50%" />
  <img src="./images/task_1b.png" alt="Image Description" width="50%" />
</p>

### [2. Adding CSS & Images](./task_2/js/dashboard_main.js)

* Reuse the code from task_1
* Configure the system to integrate CSS into the bundle and to enable the addition of images within the CSS. Don't forget to modify webpack.config.js.
* In a file named main.css change the position of the counter next to the button. Add a logo at the top-right of the document. 
```
/task_2$ npm install --save-dev css-loader style-loader
/task_1$ npm run build
```
<p align="center">
  <img src="./images/task_2.png" alt="Image Description" width="60%" />
</p>

file-loader image-webpack-loader were installed at the end for checker, but it doesn't work.

### [3. Dev servers, modules, and tree shaking](./task_3/modules)
* Reuse the code from task_2.
* Setup a development server running on the port 8564 and its mode to development.
* Set the configuration to start the server and open the browser with npm run start-dev.
* Divide the main bundle into three modules and modify the webpack configuration to support three different entry points. Each entry point should generate a filename with the following format name_of_the_file.bundle.js.
* Add a plugin to Webpack to automatically create an index.html HTML file.

Improve development speed
* Modify the webpack config to support inline source mapping.
* Check that the console.log in the header.js now takes you to your javascript file instead of the main bundle.
* Add a plugin to Webpack to clean your build folder on each build.
Improve bundles size:
* You can see that the current modules generated with npm run build are quite large. They all contain jQuery and/or Lodash. Modify the Webpack configuration to split the modules in chunks.
```
/task_3$ npm install --save-dev html-webpack-plugin clean-webpack-plugin webpack-dev-server
```
<p align="center">
  <img src="./images/task_3.png" alt="Image Description" width="60%" />
</p>