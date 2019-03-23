Appshot 2019
=============================

Everything you need to build out an application in Q1 2019!

NOTE: This is a personal boilerplate that I use, utilizing all of what I've got :D. This is fairly opinionated, but feel free to use for your own projects.

I have used similar architecture in previous projects before, and like this folder structure.

To use this boilerplate:

1. Clone the repo.
2. Delete the `.git` folder
3. Go ham and start coding!

## Tech stack 🕹️

### Main 🏭

* [Node v10.x](https://nodejs.org/en/blog/release/v10.15.0/) - build environment
* [Nunjucks](https://mozilla.github.io/nunjucks/) - HTML Templating for building the main HTML page
* [React 16.8.x](https://reactjs.org/) - UI component library
* [Redux](https://redux.js.org/) - Flux pattern architecture state management system
* [Redux-Saga](https://redux-saga.js.org/) - Generator based tool for managing async side effects in Redux
* [Emotion](https://emotion.sh/docs/@emotion/core) - CSS-in-JS tool used for fast rendering and extraction of CSS into stylesheets

### Build System 🛠️

* [Webpack 4.29.x](https://webpack.js.org/) - Build / Development system
* [Babel v7](https://babeljs.io/) - Transpiles JS to work on all browsers. We use the following non-standard tools with Babel:
  * [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
  * [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
  * [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)

### Development + Testing tools 💡

The tools here are considered to be "part of the standard" in any normal React project:

* [Jest](https://jestjs.io/) - Testing library that automatically mocks dependencies
* [Enzyme](https://airbnb.io/enzyme/docs/api/) - React test renderer library
* [Flow](https://flow.org/) - Static type checking designed for React Components
* [Eslint](https://eslint.org/) - Error and warning linter for modern Javascript and React Components
* [Prettier](https://prettier.io/) - Automated code styling
* [Hygen](https://www.hygen.io/) - Generate new modules with a quick `npm` script

## 3rd Party Libraries and tooling 🖱️

### Additional Development Tools

* [SVGR](https://www.smooth-code.com/open-source/svgr/) - turns an SVG into a React component
  * **On SVGs** - Pass in `props` to the newly created React component from SVG - to autoscale with width, use `width="auto"`

* [React Styleguidist](https://react-styleguidist.js.org/) - Isolated React component dev environment with a live styleguide with documentation


## Local development 💻

1. Clone the repo with `git clone`
2. Install all your dependencies with `npm install` or `npm i`
3. Create a `.env.development` file in the root. Add the following text to this file:

```sh
NODE_ENV=development
```

4. Start your local development server with `npm start` or `npm run dev`
5. A QR code will be generated and displayed in your terminal. Scan this code with a mobile device to visit your local development environment on that device. This device and your computer must be connected to the same WiFi network for this to work. Download QR code scanner apps for [iOS](https://itunes.apple.com/us/app/qr-reader-for-iphone/id368494609?mt=8) or [Android](https://play.google.com/store/apps/details?id=tw.mobileapp.qrcode.banner&hl=en_US)

## Npm Scripts 📜

* `npm run build` - Builds the app
  * Builds in development mode by default. Build production mode by running:
  `npm run build -- --production`
* `npm run ci` - Convenience command that runs flow, then unit tests. Exits with code 0 if successful, otherwise non-zero.
* `npm run coverage` - Quick convenience script for macOS to open up code coverage charts in default web browser
* `npm run dev` - Starts your local development environment with webpack-dev-server
* `npm run flow` - Runs flow typechecking
* `npm run flow-watch` - Runs flow in watch mode
* `npm run generate` - Use Hygen to create a new React component. Usage instructions [here](#auto-generate-react-components)
* `npm run lint` - Runs ESLint
* `npm run prettier` - Runs prettier to prettify all your files
* `npm start` - Alias for `npm run dev`
* `npm run styleguide` - Runs [react-styleguidist](https://react-styleguidist.js.org/)
* `npm test` - Runs unit tests

## Git hooks 🎣

We use `husky` to share git hooks across computers. As of this writing, we have the following active git-hooks

* `pre-commit` - on commit, your files will be prettified with `prettier` and then committed.

## ⌚ Shortcuts

### Filesystem Aliases

Save time with some handly little shortcuts for navigating the filesystem:

All the most commonly used folders at the root `src` level can be referenced with an `@folder_name` in your `import` statement.

No need to write long relative paths like this:
```js
// This doesn't exist in the codebase, it's just an example!
import { RecipientTools } from '../../../utils/Recipient';
```

You can do this instead:

```js
// This doesn't exist in the codebase, it's just an example!
import { RecipientTools } from '@utils/Recipient';
```

We have the following aliases available for your convenience:

* `@src` - Root `src` folder
* `@actions` - Same as `@src/actions`
* `@constants` - Same as `@src/constants`
* `@components` - Same as `@src/components`
* `@pages` - Same as `@src/pages`
* `@reducers` - Same as `@src/reducers`
* `@sagas` - Same as `@src/sagas`
* `@static` - Same as `@src/static`
* `@utils` - Same as `@src/utils`

### Auto-generate React Components

You can automatically generate React components with the `npm run generate` command.

As of this writing, we have 3 generator scripts:

1. **Generate Class/Stateful Component**
  * `npm run generate component-class new`
2. **Generate Stateless functional Component**
  * `npm run generate component-stateless new`
3. **Generate new Page/View/Container component**
  * `npm run generate page-class new`

These commands will generate the following files:
* Component.js file with flowtypes.
* Component.style.js file for styling.
* Component.test.js unit test file.
* Component.md example file for react-styleguidist.
* index.js pass through file inside of our standard `components/Component/` folder strtucture.

* `Page/View/Container` components would go to `@src/pages/` instead of `@src/components`

All based on the interactive CLI prompts afterwards. Handy!

## Redux Action Name Conventions ⚛️

In our Redux actions, we follow a fairly strict naming convention in order to prevent empty re-renders so a single action can fire off multiple reducers and render once.

Our action naming convention goes as follows:

```
REDUCER_DESCRIPTOR_STATUS
```

* `REDUCER` - the main reducer used to fire the action
* `DESCRIPTOR` - a human readable description of what this action is
* `STATUS` - One of these types:
  * `ASYNC` - This action shoots of an async action (ex: API call)
  * `OK` - The action's request was successful
  * `ERROR` - the action's request resulted in some sort of error

Example of our redux actions, in action:
When a user attempts to log in, Redux fires off this action

* `AUTH_LOGIN_ASYNC`
  * `REDUCER`: `AUTH` is the main reducer to look at.
  * `DESCRIPTOR`: `LOGIN` - user is trying to log in
  * `STATUS`: `ASYNC` - This is an async action. Will update `async` state to show spinners if need be

How our `sagas` are set up is that the next action, depending on the response from the API call will be

* `AUTH_LOGIN_OK`
  * STATUS: `OK` - means that everything went OK!

**--OR--**

* `AUTH_LOGIN_ERROR`
  * `STATUS`: `ERROR` - means something went wrong!

An `_OK` or `_ERROR` action marks the resolution of the `_ASYNC` action. No need to hunt around for what calls are in progress. All you need to do is pull the `async` value in the store and look at these values:

```
async: {
  requestsInProgress: number (the total number of requests in progress)
  lowercase_name_of_reducer: boolean (true if an action from this reducer origin is in progress; false if not)
}
```

### But why use this weird async approach?

This allows us to control the applications async requests by just naming actions with the appropriate name. No need to worry about what's in progres and what isn't. All of that gets taken care of by this `AsyncStatusReducer` - so just name your actions and you don't need to think about what's in progress and what isn't 🎉🎉🎉🎉🎉

### Under the hood

We have a single reducer that keeps track of all of our requests that are waiting for a response: `AsyncStatus`.

This approach was inspired by the multi-store methodologies in [MobX](https://mobx.js.org/best/store.html) while using 2 stores: one for data, and another for purely `async` actions.

Redux only allows for use of one store, so all `async` actions all live inside of a single reducer value called `async` that _sort of_ acts like its own store. This reducer looks at 2 things:

1. The origin reducer that's being affected
2. The status of the action: either `ASYNC` to start, `OK` to show it's OK, and `ERROR` to show something went wrong.

### Async Action Lifecycle

* `In progress` - a request has been made with an `_ASYNC` action. We're waiting for a response now. Mark the origin reducer as waiting for data to return, and increase the number of calls in progress by 1.
* `OK` - We got a response back and everything's cool! Denoted by `_OK`. Mark the origin reducer as resolved and reduce the number of calls in progress by 1.
* `ERROR` - Oh no! The response timed out, or there was some error in the request. Denoted by `_ERROR`. Mark the origin reducer as resolved and reduce the number of calls in progress by 1.

Architected with ❤ by [Ben Junya @MrBenJ](https://www.github.com/MrBenJ)
