[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)

# ![Nog React](https://github.com/JohnDHamm/nog-react/raw/master/nog_logo.png 'Nog React')

# Nog React monorepo

This monorepo encompasses the React ecosystem for Nog, including components, functions and apps, using `Lerna`, `TypeScript`, `Jest`, `styled-components`, `Storybook`, and `Create React App`.

## packages:

### admin app

This app is for admin purposes and could include dashboard functionality.

### app

This will be the main Nog web app.

### demo app

This is the Nog demo app for testing, marketing and research. It will probably not contain all future functionality of the Nog web app.

### design-system

Contains design elements such as Colors, Fonts, layout components.

### ui-library

Components for use in apps.

### function-library

Shareable functions for use in apps.

### storybook-helpers

Shared components to help build Storybook stories.

## commands:

Run these in the root directory on the command line.

`yarn watch` - watches packages for changes - includes: function-library, ui-library, design-system, storybook-helpers

`yarn storybook` - runs Storybook - includes ui-library, function-library, design-system, and storybook-helpers stories

`yarn start:admin` - starts the admin app on port 3002

`yarn start:app` - starts the app on port 3000

`yarn start:demo` - starts the demo app on port 3001

`yarn test` - runs (and watches) all Jest tests in all packages (libraries and apps)

`yarn build:design-system` - builds the design-system package

`yarn build:function-library` - builds the function-library package

`yarn build:storybook-helpers` - builds the storybook-helpers package

`yarn build:ui-library` - builds the function-library package

## adding a new package:

Follow these instructions for adding a non-CRA package with jest, React (optional), and Storybook(optional):

• `cd packages`

• `npx tsdx create new-library` choose template for including React or React and Storybook

• `cd new-library`

• (optional) `yarn add styled-components @types/styled-components` add styled-components if library will include React components

• remove `./example` and `./github` folders (example app and GitHub actions not needed)

• remove `"rootDir": "./src"` from new package's `tsconfig.json` (for running global Storybook)

• add `"watch": "tsdx watch --noClean"` to new package's `package.json`

• remove **tsdx lint hook** from new package's `package.json`

## other dev notes:

• using **tsdx** to create a new library with Storybook adds the `react-docgen-typescript-loader` devDependency for use with the Storybook `@storybook/addon-docs`. Currently not utilizing and could be removed in future.
