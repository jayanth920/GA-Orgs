# Redux Lab

In this lab, you will be taking a pre-built application that uses local state
and integrating Redux into it to manage state instead.

## Part 1: Set Up Redux

In order migrate the existing app to Redux, first install it and set up its core
pieces:

### Actions

Identify where changes to state are happening currently and for each type of
change, define an action to represent this change.

### Reducer

Similar to above, set up a reducer to carry out the necessary changes to state
(while adhering to Redux's rules on immutability) in response to actions being
dispatched.

### Store

Use the reducer you've defined with Redux's `createStore` to set up a Store
instance and modify the initial state of the store to include the array of
preset stocks under a `stocks` attribute.


## Part 2: Connect `App` to the Store

Using the `dispatch`, `getState`, and `subscribe` methods, modify the root `App`
component's methods to retrieve state from and send state changes to the Store
in Part 1.

## Part 3: Add `react-redux` Bindings

Now that the `App` component no longer needs to hold the shared state of our
application (as we have moved all state to the Redux Store), let's look at how
we can move each piece of functionality (`handleInput`, `handleSubmit`,
`handleRemove`) down the component tree to the specific components that use
them. To make this easier, install and import the tools from `react-redux`.

### Provider

Import the `Provider` component and wrap your application root within it
(including `Router`) while passing your instance of `store` as a prop.

### connect()

Import the `connect` function and use it to wrap any components that will need
to send actions to the store (`Stock` and `NewStock`). Test out dispatching
actions via props.

### mapStateToProps / mapDispatchToProps

Define and use `mapStateToProps` and `mapDispatchToProps` to bind dispatches to
components' props and automatically subscribe their rendering to changes in the
Redux Store state.

## Getting Unstuck

This lab is based on the [two lessons covering
Redux](https://git.generalassemb.ly/ga-wdi-lessons/react-redux) from earlier
this week. Your best bet is to follow the process of working with Redux outlined
in those lessons.

Here is some further reading that may help you with this lab:

- [Updating state without mutating it
  (immutability)](https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html)
- [Using Redux with React
  Router](https://redux.js.org/docs/advanced/UsageWithReactRouter.html)
- [Working with asynchronous
  actions](https://redux.js.org/docs/advanced/AsyncActions.html)
- [Using
  `combineReducers`](https://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html)
- [Reducing
  boilerplate](https://redux.js.org/docs/recipes/ReducingBoilerplate.html)
- [Structuring
  reducers](https://redux.js.org/docs/recipes/StructuringReducers.html)

## Bonus: Add APIs

Set up a Mongoose / Express back-end for keeping track of your tracked stocks
and update your action creators to handle for asynchronous API calls.
Additionally, add on third-party APIs to allow for Search functionality.

- [Redux Documentation on Asynchronous
  Actions](https://redux.js.org/docs/advanced/AsyncActions.html)

## Bonus: Refactor to the [Ducks Pattern](https://github.com/erikras/ducks-modular-redux)

The way we've organized our store, constants, reducers and actions is very
common among applications that use Redux. But it has one major downside: if we
want to add or modify a feature, we need to do so across at least 3 different
files. If our application is big (or even if it isn't that big), this could
become tedious.

The [ducks pattern](https://github.com/erikras/ducks-modular-redux) is a way of
organizing your reducers, actions and constants by module.
