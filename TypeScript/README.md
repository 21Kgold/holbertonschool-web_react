# Typescript

TypeScript is a superset of JavaScript that adds static typing, that catch type-related errors during development. TypeScript also introduces features like interfaces, classes, and advanced type annotations.

TypeScript code is transpiled to standard JavaScript, which means that developer can choose which javascript modules use in the ts files and to which javascript version transpile them.

## Description
* Basic types in Typescript
* Interfaces, Classes, and functions
* How to work with the DOM and Typescript
* Generic types
* How to use namespaces
* How to merge declarations
* How to use an ambient Namespace to import an external library
* Basic nominal typing with Typescript

## Setup

```
$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 18.04.6 LTS
Release:        18.04
Codename:       bionic
```

Install NodeJS 12.11.x if not installed
```
$ nodejs -v
v12.22.12
$ npm -v
6.14.16
```

Install ESLint, typescript and webpack in task_0 directory:
```
$ npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
$ npm install webpack webpack-cli typescript ts-loader --save-dev
```

Include the configuration files:
* [package.json](./task_0/package.json)
* [.eslintrc.js](./task_0/.eslintrc.js)
* [tsconfig.json](./task_0/tsconfig.json)
* [webpack.config.js](./task_0/webpack.config.js)

Finally, run `npm install` from the terminal of your project folder to install all necessary project dependencies.

---

### [0. Creating an interface for a student](./task_0/js/main.ts)
* Define a TypeScript interface Student that accepts the following elements:
    - firstName: string
    - lastName: string
    - age: number
    - location: string
* Use the interface to create two student objects (student1 and student2), then create an array studentsList that holds these student objects. 
* Dynamically create an HTML table to display firstname and location of each student.

Using Webpack with TypeScript provides a comprehensive build and bundling solution for modern web development, addressing not only TypeScript compilation but also optimizing assets, supporting modular development, and enhancing the development experience. While running TypeScript directly is suitable for simpler scenarios, Webpack becomes increasingly valuable as projects grow in complexity and require advanced optimization techniques.

```
$ npm run build    

> typescript_dependencies@1.0.0 build /mnt/c/Users/cau_r/Github/holbertonschool-web_react/TypeScript/task_0     
> webpack

Starting type checking service...
Using 1 worker with 2048MB memory limit
Hash: 47ba650bbd456b73c1da
Version: webpack 4.47.0
Time: 46853ms
Built at: 01/04/2024 12:10:45 PM
     Asset       Size  Chunks             Chunk Names
 bundle.js   9.88 KiB       0  [emitted]  main
index.html  182 bytes          [emitted]
Entrypoint main = bundle.js
[0] ./js/main.ts 834 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
```
<p align="center">
  <img src="./images/task_0_transpiled_files.png" alt="Image Description" />
</p>


```
$ npm run start-dev

> typescript_dependencies@1.0.0 start-dev /mnt/c/Users/cau_r/Github/holbertonschool-web_react/TypeScript/task_0 
> webpack-dev-server --open

Starting type checking service...
Using 1 worker with 2048MB memory limit
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from ./dist
ℹ ｢wdm｣: wait until bundle finished: /
Type checking in progress...
ℹ ｢wdm｣: Hash: 453efb46d800a24a8ad5
Version: webpack 4.47.0
Time: 3760ms
Built at: 01/04/2024 12:11:40 PM
     Asset       Size  Chunks             Chunk Names
 bundle.js    992 KiB    main  [emitted]  main
index.html  182 bytes          [emitted]
Entrypoint main = bundle.js
[0] multi (webpack)-dev-server/client?http://localhost:8080 ./js/main.ts 40 bytes {main} [built]
[./js/main.ts] 834 bytes {main} [built]
[./node_modules/ansi-html-community/index.js] 4.16 KiB {main} [built]
[./node_modules/html-entities/lib/index.js] 449 bytes {main} [built]
[./node_modules/loglevel/lib/loglevel.js] 9.34 KiB {main} [built]
[./node_modules/url/url.js] 23 KiB {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.52 KiB {main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] (webpack)-dev-server/node_modules/strip-ansi/index.js 161 bytes {main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]  
    + 36 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/html-webpack-plugin/default_index.ejs] 376 bytes {0} [built]
    [./node_modules/lodash/lodash.js] 531 KiB {0} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
    [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
ℹ ｢wdm｣: Compiled successfully.
No type errors found
Version: typescript 3.9.10
Time: 50137ms
^C
```
<p align="center">
  <img src="./images/task_0_browser.png" alt="Image Description" />
  <img src="./images/task_0_browser_inspect.png" alt="Image Description" />
  <img src="./images/transpiled files after npm run start-dev.png" alt="Image Description" />
</p>

Note that dist directory is being erased or not populated when using npm run start-dev. This behavior is normal because the development server doesn't create physical files in the dist directory. Instead, it serves the files from memory to provide a quicker feedback loop during development.

### [0. Creating an interface for a student](./task_0/js/main.ts)
* Define a TypeScript interface Student that accepts the following elements:
    - firstName: string
    - lastName: string
    - age: number
    - location: string