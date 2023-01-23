[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# The Component Life Cycle

So far, we've used react components to build simple applications. We've added
state and props and controlled data flow through them (using just the `render`
and `setState` methods). In order to do more complex things, we'll have to use
life cycle methods.

## Prerequisites

- React
- Components
- State and props

## Objectives

By the end of this, developers should be able to:

- Explain how to use React's life cycle methods
- Use asynchronous functions within react
- Retrieve data from an API inside of a component

## Introduction

This lesson will introduce the Component Life Cycle: hooks that are fired at
different states of a components "life" for solving challenges such as getting data from an API to use in our components.

So, what is the Component Life Cycle?

## The Component Life Cycle

### The Life Cycle Methods

When we create a react component we get a couple of lifecycle methods included
that we can use to add functionality to our components. These methods are
invoked at specific periods during the "life" of a component, like when it
mounts to the DOM or unmounts from the DOM. While there are a lot of lifecycle
methods, there are only a few that you will use regularly.

There are three types of component lifecycle methods:

**Mounting:** called when a component is created and inserted into the DOM.

- **`constructor()`**
- `getDerivedStateFromProps()`
- **`render()`**
- **`componentDidMount()`**

**Updating:** usually triggered by changes in props or state.

- `getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- **`render()`**
- `getSnapshotBeforeUpdate()`
- **`componentDidUpdate()`**

**Unmounting:** called when a component is being removed from the DOM.

- **`componentWillUnmount()`**

> the **bold** methods are the most commonly used ones and the ones we'll focus
> on for this lesson

Review
[this handy cheat sheet](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
for a visual explanation of these life cycle methods and when they get invoked.

## We do: Exploring the Life Cycle Methods

Fork and clone this
[repository](https://git.generalassemb.ly/seir-622/component-lifecycle-exercise)
with a short exercise for exploring the life cycle methods.

This exercise is a simple, 2 "page" website where each page is a component.
We'll be adding the component life cycle methods to each page-component. As we
do consider the following questions:

- What order are the methods run in? Before or after rendering?
- How many times is the method invoked?
- What causes the method to be (re)invoked?

> Add the mounting methods to Home.js and the update methods to
> Counter.js. Then, `console.log` the component name and the lifecycle name in each method to observe the order in real time as you click through the different pages and use the counter.

## Codebase Review (10 min)
Spend the next 10 minutes looking over the codebase together in your breakout group. There are lots of comments explaining stuff.

Afterwards, we'll discuss each part of the starting codebase, using the commented annotations as our guide.

Here are some things to think about while browing the codebase:

- Look at the imports at the top of each file. How do they relate to each other?
- How many components are there? What does each component do?
- What dependencies does this repo have?

If you don't know what's going on in some area of the codebase, write down a question and we'll discuss it together.

## Break

## Requesting Data from an API (60 min / 2:10)

Now that we've reviewed the component life cycle methods, let's dive in to what
we use them for. There are two common use cases for the life cycle methods, but
the most common is requesting data from an API.

### We Do: [Country List](https://git.generalassemb.ly/seir-622/react-country-list)

Fork and clone this
[repository](https://git.generalassemb.ly/seir-622/react-country-list)
which has some exercises on how to make AJAX requests using `fetch()` inside of
a component.

## Review Questions

- What is the component lifecycle? What are the lifecycle methods?
- What are the commonly used lifecycle methods?
- What do we use these methods for?

**BONUS: Documentation Deep Dive** Read the documentation on
[The Component Life Cycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle).
Read the sections title The Component Lifecycle and Reference. Stop when you get
to the section titled Rarely Used Lifecycle Methods.

## Additional Resources

- [React Docs: The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [React Docs: Commonly Used Lifecycle Methods](https://reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods)
- [React Docs: AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)
- [React Docs: Working with Other Libraries](https://reactjs.org/docs/integrating-with-other-libraries.html)
- [Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
