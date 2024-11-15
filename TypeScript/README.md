﻿![](./images/barra2.png)

<h1 align="center">TypeScript</h1>

<p align="center">
  Coding projects developed as part of the 
  <strong>Full-Stack Web Development</strong> specialization program at  
  <a href="https://www.holbertonschool.com/">
    <img src="./images/holberton school cherry logo.png" alt="Holberton School" height="15">
  </a>
</p>

<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-1e145f.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3.x-2f878c.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-e1003c.svg)](https://nodejs.org/)
[![Webpack](https://img.shields.io/badge/Webpack-4.x-8dd6f9.svg)](https://webpack.js.org/)
[![ESLint](https://img.shields.io/badge/ESLint-7.x-4B32C3.svg)](https://eslint.org/)
</div>

﻿![](./images/barra2.png)

## Key Features
* Type-safe DOM manipulation with TypeScript for dynamic rendering
* Bundling of TypeScript projects with webpack
* Style enforcement tailored for TypeScript
* Advanced TypeScript Patterns
* Strictness typing configuration

## Coding projects
Each task was completed within specific constraints regarding allowed libraries, programming languages, development tools and using the provided configuration files.<br>

**Configuration Files**
- [package.json](./task_0/package.json): Manages project dependencies and scripts
- [.eslintrc.js](./task_0/.eslintrc.js): ESLint configuration for code linting
- [tsconfig.json](./task_0/tsconfig.json): TypeScript compiler options
- [webpack.config.js](./task_0/webpack.config.js): Webpack configuration for bundling


### [Task 0: Basic TypeScript Setup](./task_0/js/main.ts) 
Deciphered the architecture of a foundational TypeScript project from provided configuration files, and implemented a dynamic data display using Vanilla JavaScript in accordance with the existing project structure.

### [Task 1: Interfaces and Classes](./task_1/js/main.ts)
Developed a comprehensive class structure with associated interfaces and interface extensions.

### [Task 2: Advanced Types](./task_2/js/main.ts)
Created a factory function utilizing type predicates and string literals, for precise argument handling.

### [Task 3: Ambient Declarations](./task_3/js/main.ts)
Integrated an external JavaScript library (crud.js) into a TypeScript project using ambient declarations.

### [Task 4: Namespaces](./task_4/js/main.ts)
Developed a multi-file namespace structure with an accompanying HTML demo, necessitating alternative approaches to module management and script loading due to the absence of bundling tools. This task utilized a new provided [package.json](./task_4/package.json) that excluded bundlers.

### [Task 5: Brand Types](./task_5/js/main.ts)
Created unique, incompatible types for structurally similar data models using TypeScript's branded types feature.

<details><summary><b>Display Task Results</b></summary>

### Task 0 Typescript dynamic data display
Note that dist directory is being erased or not populated when using npm run start-dev. This behavior is normal because the development server doesn't create physical files in the dist directory. Instead, it serves the files from memory to provide a quicker feedback loop during development.
<p align="center">
  <img src="./images/transpiled files after npm run start-dev.png" alt="Image Description" width="800" />
</p>
<p align="center"><em>Development Server files of Task 0</em></p>

<p></p>

<p align="center"><img src="./images/task_0_browser.png" alt="Task 0" width="800"/></p>
<p align="center"><em>Development Server Output of Task 0</em></p>

### Task 1: Interfaces and Classes
```bash
USER-PC/task_1$ node ./dist/bundle.js 
{
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Lenon',
  yearsOfExperience: 33,
  location: 'Liverpool, England',
  contract: false,
  subject: 'guitar'
}
{
  firstName: 'Paul',
  fullTimeEmployee: true,
  lastName: 'McCartney',
  location: 'Liverpool, England',
  subject: 'piano'
}
{
  firstName: 'George',
  fullTimeEmployee: true,
  lastName: 'Harrison',
  location: 'Liverpool, England'
}
{
  firstName: 'Ringo',
  fullTimeEmployee: true,
  lastName: 'Star',
  location: 'Liverpool, England',
  numberOfReports: 1
}
J. Lennon
Yoco: Currently working
```

### Task 2: Advanced Types

<p align="center">
  <img src="./images/task_2_browser.png" alt="Task 2 Screenshot" width="800"/>
</p>
<p align="center"><em>DevTools console of Task 2</em></p>

### Task 3: Ambient Declarations
```bash
USER-PC/task_3$ node ./dist/bundle.js
Insert row { firstName: 'Guillaume', lastName: 'Salva' }
Update row 573 { firstName: 'Guillaume', lastName: 'Salva', age: 23 }
Delete row id 573
```

### Task 4: Namespaces

<p align="center">
  <img src="./images/task_4_browser.png" alt="Task 4 Screenshot" width="800"/>
</p>
<p align="center"><em>DevTools console of Task 4</em></p>

### Task 5: Brand Types
```bash
USER-PC/task_5$ node ./dist/bundle.js
{ credits: 6 }
```

</details>

## Project Setup
**Development Environment**
* Editor: Visual Studio Code
* Node 14.21.3 and npm for package management
* Operating System: Ubuntu 18.04.6 LTS<br>

**Technologies**
- TypeScript 3.x
- JavaScript ES6+
- Webpack 4.x
- ESLint 7.x with TypeScript parser and plugins<br>

**Getting Started**
1. Ensure Node.js v14.x is installed
2. Clone the repository:
``` bash
git clone https://github.com/21Kgold/holbertonschool-web_react.git
cd holbertonschool-web_react/TypeScript/task_0
```
3. Install dependencies:
``` bash
npm install
```
## Usage

<div align="center">

| Description | Command |
|-------------|---------|
| Start Development Server | `npm run start-dev` |
| Build for Production | `npm run build` |
| Lint Code | `npm run lint` |
| Execute JavaScript | `node ./dist/bundle.js` |

</div>

## Author
<p><strong>Claudia R. Pérez</strong></p>
<p>
  <a href="https://github.com/21Kgold">
    <img src="https://img.shields.io/badge/GitHub_Profile-24292e?style=flat-square&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://linkedin.com/in/claudia-tech">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

﻿![](./images/barra2.png)
