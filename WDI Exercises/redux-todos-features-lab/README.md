# Lab: Todo Features

This lab will build features onto an existing redux app.
We will be starting with the Redux app built in the [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) videos and the [basics guide](http://redux.js.org/docs/basics/) from the redux docs. It can be found in the [examples directory of the `redux` repo](https://github.com/reactjs/redux/tree/master/examples)([License](https://github.com/reactjs/redux/blob/master/LICENSE.md)
).

There will be several levels to this lab. You should implement each entirely before starting on the next.

Before you start, consider adding the `redux-devtools` middleware to the redux store by updating the store defined in `src/index.js` as follows:

```js
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```

## Delete todos

Add a button to delete a todo. This will involve:
- Adding a button to the `Todo` component
- Adding a new action creator in `src/actions/index.js`
- Importing this action creator into `src/containers/VisibleTodoList.js`
  - This action will need to be added to the `mapDispatchToProps` object. (hint: follow the `toggleTodo` action creator)
  > We haven't looked at `mapDispatchToProps` in class but it has a similar purpose to `mapStateToProps`. You may be able to infer how it works but for an in-depth explination, you can check out [this detailed SO answer](https://stackoverflow.com/a/40068198)
- The `TodoList` passing along this dispatch method to the `Todo` component (hint: follow the `onTodoClick` method)
- Call the new action dispatching method from the `Todo` component when appropriate
> At this point in time, we should be able to see the button dispatching actions but no update to state.
- Adding a case to the `todos` reducer.
> After this update, we expect to see working functionality for deleting a todo. Before moving on, spend a moment looking at `combineReducers` in `src/reducers/index.js`. As with so many other particulars, the redux docs have a very thorough exploration of [`combineReducers`](http://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html). The most common way to organize reducers in react is to define one for each slice of state, a slice being a particular property. `combineReducers` lets us just write reducer functions for dealing with each slice individualy, put the reducers in an object, and `combineReducers` deals with combining them into one over-all reducer (the `rootReducer`).

## Search Filter

Add an input field to filter todos by input string. This will involve:
- Updating the structure of the `visibilityFilter` slice of state so it can have a `filter` (i.e. `'SHOW_ALL'`, `'SHOW_ACTIVE'`, `'SHOW_COMPLETED'`, and something like `'SHOW_SEARCH'`) and optionally a `query` to hold the input of the search. This state will need to be altered in how it is defined initially (as a default argument) and the value returned by the reducer.
  > NOTE: this is just refering to changing the structure of state in the app. Actually handling the action will be the last step
- Creating a component to take input and dispatches and action with the input as a payload (like `AddTodo`)
- Updating the `setVisibilityFilter` action creator to take an optional argument of the search query
- Updating the `getVisibleTodos` function in `VisibleTodoList` to handle the new search filter.

## [Undo / Redo](http://redux.js.org/docs/recipes/ImplementingUndoHistory.html)

This is would be a lot to take on but if you are through the first two features this would be a really neat addition and would be excellent developing familiarity with the benefits and fundemental workings of redux.

Original README follows...

# Redux Todos Example

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX.  See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
