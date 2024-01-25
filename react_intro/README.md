# React intro
Create React App (CRA) is an officially supported way to create single-page React applications. It allow you to create a new React application by running a single command and you don't need to install or configure tools like webpack or Babel. They are preconfigured and hidden and if you ever want an advanced configuration, you can ”eject” from CRA and edit their config files directly.

## Description

* How to create a basic Javascript application using React
* How to use the package create-react-app to start developing quickly with React
* What JSX is and how to use it
* How to use the React Developer Tools to debug your code
* How to use Enzyme’s Shadow rendering to test your application
* How to use React with Webpack & Babel

## Setup

Node Version Manager (NVM), as the name implies, is a tool for managing Node versions on your device.
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
Close and Reopen Terminal:
```
$ nvm --version
0.38.0
```
Install Node.js with NVM:
```
$ nvm install 14
$ nvm use 14
Now using node v14.21.3 (npm v6.14.18)
```

---

### [0. Creating an interface for a student](./task_0/dashboard/src/App.js)
* Create a basic app named dashboard using create-react-app in a directory named task_0.
* Delete unused files. From package.json we can check that we are using CRA version "5.0.1" and starting from CRA version 4, the service worker files is not longer included by default. But we can delete other unused files.
* Modify the task_0/dashboard/src/App.js and the App.css to make the project looks like the given screenshot.
```
$ npx create-react-app dashboard
$ npm start

Compiled successfully!

You can now view dashboard in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.23.252.62:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
<p align="center">
  <img src="./images/task_0_dashboards.png" alt="Image Description" width="60%"/>
</p>

```
$ npm run  build
Compiled successfully.

File sizes after gzip:

  46.61 kB  build/static/js/main.d0d60f05.js
  1.78 kB   build/static/js/787.1cd31a9e.chunk.js
  364 B     build/static/css/main.c172c2f2.css
  ...
```

### [1. Embedding expressions, functions](./task_1/dashboard/src/App.js)
* Create a function named getFullYear that will return the current year and a function named getFooterCopy When true, should return Holberton School. When false, should return Holberton School main dashboard.
* Modify the footer returned in task_1/dashboard/src/App.js to use these two functions
* Create a notification component.
* Check that you can see the two elements on the browser, and using the React browser extension

<p align="center">
  <img src="./images/task_1_dashboards.png" alt="Image Description" width="60%"/>
</p>

### [2. Modify the App](./task_2/dashboard/src/App.js)
* Add a label and input for email, a label and input for password and one button element with the text “OK”.
* Create a function named getLatestNotification to populate the third element of the unordered list.
* Modify the notification component, style the list using the data attribute to make it look like the given screeshot.

<p align="center">
  <img src="./images/task_2_dashboards2.png" alt="Image Description" width="60%"/>
</p>

### [4. Create basic tests with Jest and then with Enzyme](./task_3/dashboard/src/utils.test.js)
Jest is available by default when you create a new React application using Create React App. You’ll need to add react-test-renderer for rendering test. We can use it() or test() blocks to define tests in files with the .test.js suffix. We can run the tests using the npm test command. This will launch Jest in watch mode, meaning it will re-run your tests every time you save a file.

* Create tests to check that the functions getFullYear, getFooterCopy and getLatestNotification work as expected.

```
/dashboard$ npm test
 PASS  src/utils.test.js (28.624 s)
  ✓ Current year (1 ms)
  ✓ Webpage footer when true
  ✓ Webpage footer when false
  ✓ Notification (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        47.416 s
```

* Intall enzyme.
```
/dashboard$ npm i --save-dev enzyme enzyme-adapter-react-16
/dashboard$ npm i --save-dev enzyme-to-json
```
*  Configure the setup file to use the adapter you’ve installed for Enzyme.
* Update your Jest configuration to automatically use enzyme-to-json serializer, by adding "snapshotSerializers": ["enzyme-to-json/serializer"] to your Jest configuration in your package.json.

Shallow rendering (from Enzyme) is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

* Test that App renders without crashing
  - verify that App renders a div with the class App-header
  - verify that App renders a div with the class App-body
  - verify that App renders a div with the class App-footer
* Test that Notifications renders without crashing
  - verify that Notifications renders three list items
  - verify that Notifications renders the text Here is the list of notifications
```
/dashboard$ npm test
 PASS  src/utils.test.js (28.03 s)
 PASS  src/Notifications.test.js (40.903 s)
 PASS  src/App.test.js (33.187 s)

Test Suites: 3 passed, 3 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        59.207 s
```

### [7. Deploy to a GitHub page](https://21kgold.github.io/holbertonschool-web_react/)
* Deploy your application to GitHub Pages using gh-pages branch and create-react-app. Don't forget to add the homepage property to your package.json file.
```
/task_4/dashboard$ npm i --save-dev gh-pages
/task_4/dashboard$ npm run deploy

> dashboard@0.1.0 predeploy  .../task_4/dashboard
> npm run build


> dashboard@0.1.0 build  .../task_4/dashboard
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  47.34 kB (-16 B)  build/static/js/main.6b026536.js
  1.78 kB           build/static/js/787.1cd31a9e.chunk.js
  440 B             build/static/css/main.4ef31a4b.css

> dashboard@0.1.0 deploy  .../task_4/dashboard
> gh-pages -d build

Username for 'https://github.com': 21Kgold
Password for 'https://21Kgold@github.com':
Published
```
### [8. Create a project using Webpack](./task_5/dashboard/src/index.js)
* Start a new project without using create-react-app but webpack. It most support css, images, inline source map.
* Set up a dev server with hot reloading
```
/task_5/dashboard$ npm init -y
/task_5/dashboard$ npm install --save-dev webpack webpack-cli css-loader style-loader file-loader image-webpack-loader webpack-dev-server
```
* Install Babel and babel-loader, and configure .babelrc for preset-env and preset-react. Configure Webpack to support js and jsx files.
* Reuse src files from previous task.
```
/task_5/dashboard$ npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader @babel/preset-react --save-dev web-vitals
/task_5/dashboard$ npm install react@16 react-dom@16
/task_5/dashboard$ npm start
```
* Reorganize the files: every file related to the App, should be within a App folder, etc.
* Install Jest and Enzyme and update your package.json to run the command `npm test`.
```
/task_5/dashboard$ npm install --save-dev jest enzyme enzyme-adapter-react-16 babel-jest
/task_5/dashboard$ npm start
/task_5/dashboard$ npm test
```
To set [Jest to handle the import of an image file](https://jestjs.io/docs/webpack#handling-static-assets), create a mock file and update package.json to tell Jest to use this mock file when it encounters file types that it doesn’t know how to handle.