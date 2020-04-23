[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)


# Nog React monorepo
This monorepo encompasses the React ecosystem for Nog, including components, functions and apps, using `Lerna`, `TypeScript`, `Jest`, `styled-components`, `Storybook`, and `Create React App`.

## packages:
### admin app
This app is for admin purposes and could include dashboard functionality.

### app
This will be the main Nog web app.

### demo app
This is the Nog demo app for testing, marketing and research. It will probably not contain all future functionality of the Nog web app.

### ui-library
Components for use in apps.

### function-library
Shareable functions.


## commands:
Run these in the root directory on the command line.

```yarn watch``` - watches packages for changes - includes: function-library, ui-library

```yarn start:admin``` - starts the admin app on port 3002

```yarn start:app``` - starts the app on port 3000

```yarn start:demo``` - starts the demo app on port 3001

```yarn test``` - runs all Jest tests in all packages

```yarn build:function-library``` - builds the function-library package

```yarn build:ui-library``` - builds the function-library package

Currently, **Storybook** has been added to function-library and ui-library. Navigate to the library's directory and run ```yarn storybook```
