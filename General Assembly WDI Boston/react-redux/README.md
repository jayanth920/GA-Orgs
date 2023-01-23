[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Redux

Redux is a predictable state container for JavaScript apps. It is a popular tool used widely (although not exclusively) among the React community for state management.

## Prerequisites

-   Topics with which developers should be familiar with.
-   Prerequisites are "just-in-time", so if I have a prerequisite that mentions
    Sass, I would **not** need to include CSS as a prerequisite.
-   [Links to previous materials](https://www.github.com/ga-wdi-boston/example)
    are often useful.

## Objectives

By the end of this, developers should be able to:

- Create a basic Redux store
- Write basic Actions
- Develop and use reducers

## Preparation

1.  Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.

## Redux

React helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).

The main elements of a Redux application are the **store**, **actions**, and **reducers**.

![overview](https://media.git.generalassemb.ly/user/17300/files/ca760e80-a9ff-11e9-85d4-8aa9aa67bea1)

### Store

The store is what houses the state for our application.  It is the single source of the truth!

### Actions

An action is a regular JavaScript object that usually has two properties, type and payload.  The payload is the data that the actions carry to the store.

Action creators are functions that are used to create an action.

### Reducers

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

## Demo: Auth Actions and Reducers

Let's explore how Actions, Reducers and the Store work together, by looking at how the authentication elements of this repo work.

## Lab: Planning Our App

We're going to be building a revolutionary app that allows people to post short bits of information that others can like.  We'll need to have a post, a like counter and form to add our posts.

As a team, figure out what data and data types you'll need.

## Code Along: Writing Our First Action Creator

We need an action for adding posts.  This action will be in the form of:

```
{
  type: 'ADD_POST',
  id: /* integer */,
  text: /* string */
}
```

Let's create a new file in the actions folder for this and add our action creator.

```
let nextPostId = 0

export const addPost = text => ({
  type: 'ADD_POST',
  id: nextPostId++,
  text
})
```
We'll also need to increment our likes, so let's create that as well.

## Lab: Create a DELETE POST Action Creator

Since we can add a post we should probably be able to delete them.  Write an action create that takes in an id of a post to delete.

## Understanding Immutable State

Our state can never be changed.  Whaaaat?  It's immutable, but we can update it!  We just need to replace the part of the state tree that's affect with a **new** state.

## Demo: Reducers

Our reducer is going to use a switch statement to determine what happens when an action is received.  Let's examine how that works.

## Code Along: Posts Reducers

Create a new file in the reducers directory for the post reducers.

We need to also make sure that this reducer is connected to our Root Reducer.

## Code Along: Building Our Components

Together we'll be building a Post, PostList and Likes Counter components.

## Code Along: Dispatching Actions

Our components need to dispatch the actions when the state should be updated.  Actions carry the new data to the reducer which updates the store.

## Additional Resources

- [Redux Tutorial](https://redux.js.org/basics/basic-tutorial)
- [Redux Advanced Tutorial](https://redux.js.org/advanced/advanced-tutorial)
- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
