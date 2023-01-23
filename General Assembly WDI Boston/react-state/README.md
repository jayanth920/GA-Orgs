[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React State & Lifecycle Methods

## Prerequisites

- [react](https://git.generalassemb.ly/ga-wdi-boston/react)

## Objectives

By the end of this, developers should be able to:

- Explain state and how they it is used in React
- Set up and update state using lifecycle methods

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Class Components

During our first day learning about React we built a function component for a movie.

```jsx
const Movie = ({ title, director, cast }) => {
  const actorsJsx = cast.map(actor => (
    <Actor
      key={actor.id}

      name={actor.name}
      role={actor.role}
    />
  ))

  return (
    <div>
      <h4>Title: {title}</h4>
      <p>Director: {director}</p>
      <div>
        <p>Starring:</p>
        <ul>
          {actorsJsx}
        </ul>
      </div>
    </div>
  )
}
```

Today, lets **rebuild** that `Movie` component. But we'll use a new technique called
**class components**.

### Building Class Components

#### Code Along: A Very Basic Component

In `src/Movie.js` delete the existing function component called `Movie`. We'll
replace it with a class component together.

```jsx
import React, { Component } from 'react'

class Movie extends Component {
  render () {
    return (
      <h1>My Favorite Movie</h1>
    )
  }
}

export default Movie
```

##### `import React, { Component } from 'react'`

This imports `React` and the *`Component`* class from the 'react' library.

##### `class Movie`

This is the component we're creating. In this example, we are creating a
component and calling it "Movie."

##### `extends Component`

We inherit from the `Component` React library class to create our component
definitions. Here, we are creating a new `Component` subclass called `Movie`.

Note: Because it extends (*inherits from*) `Component`, our `Movie` class gets
to reuse the **properties** and **methods** from `React.Component`.

##### `render()`

Every *class* component has a `render` method. The `render` method is what renders the
component to the screen, so it controls what is displayed for this component.
From this function, we return what we want to display.

- In our case, we are rendering a movie heading: `<h1>Movie!</h1>`.

> Note! That heading tag above looks like it's straight out of HTML, but it's
> actually a  language called JSX. For now, know that JSX will act like HTML
> when it's rendered to the screen.

##### Check it out

If you switch to your browser and navigate to `http://localhost:7165`, you can
see your movie heading. This app dynamically reloads each time you save, so you
can check your changes at any point.

#### Lab: Recreating The Movie Component

Now that we have the basic structure for our `Movie` class component it's your turn.

> **Note**: In a class component a **prop** is available on the object `this.props`. For example, to access the `director`, type `this.props.director`

In your team:
1. Map over the `cast` members and convert each into `Actor` elements like we did yesterday in class.
2. Render the movie's title, director, and cast to the screen

## State in React Components

> A component needs **state** when some data associated with it changes over
> time. - [React](https://reactjs.org/docs/glossary.html#state)

At this point, we know that we can pass data into a React component by providing
props. This allows data to flow "downwards", from parent component to child
component. Where does this data originate from, though? What if we need to
frequently update that data?

So far, that data has just been an array or object in the global scope of
`App.js`. This is not ideal for dynamic data -- if the data changes, every
component needs to know that, so that it can decide whether it needs to
re-render anything that's changed. To achieve this, React components keep track
of data in an object called "state".

## State vs. Props

`state` and `props` have a lot in common:

- Both are POJOs.
- Changes to a component's props or state cause the component's `render`
   method to be called.
- Neither should be modified directly. (e.g. no `this.props.foo = 'bar'`)
- Both are optional. A React component doesn't need props or state to render
   markup to the DOM (it wouldn't be very useful with neither, though).

They are also different in a few key ways:

- Props are passed into a component _from its parent_. State is determined
   _within_ a component.
- Props are initalized by adding attributes in JSX,
  e.g. `<MyComponent coolProp="radical!" />`. State is declared in a component's
  [`constructor`](https://reactjs.org/docs/react-component.html#constructor)
  method or as a local variable with `state = {...}`.
- Props can only be modified in the parent component. While, state can only be
  modified with a call to the special `this.setState` method.

### Annotate Along: A Simple Stateful Component

Let's take a look at a very simple example of a React component that keeps
track of its own state. You can follow along and add comments in
 `src/StateDemo.js`.

To render this component, instead of the contents of `App.js`, I'll just switch
out the `import` in `src/index.js`. Don't worry too much about this, it's just
a way to have multiple React apps in one repo for demonstration purposes.

I'll walk you through what's happening line by line, and show you the result
in the browser. Then, let's see if we can avoid having to use `.bind` on all
our component methods.

### Code Along: Adding State to the Movie Component

Now that we know how to update state in a component, let's modify our `Movie`
component to allow us to "like" a movie and keep track of our opinions.

To add this functionality, we'll need to do the following:

1. Give our `Movie` component a constructor, so that we can initialize a `state`
   object. The component should store just one property in its state: a boolean
   called `liked`.
1. Create a function that toggles that `liked` property on the state object.
1. Render a "like" button.
1. Give some visual indication when a `Movie` is liked.

There are a few things we'll need to keep in mind:

- `this.setState` is asynchronous, so any `this.setState` calls where the new
  state depends on the old state need to use [a slightly different syntax](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous).
- Event listeners in React are attached with the syntax
  `onChange={this.funcName}`. Note that this is different from the `onchange`
  attribute built into HTML.
- Similarly, classes are added to elements in React with the syntax
  `className="foo"`, **NOT** the familiar `class="foo"`.

### Lab: Toggle Actors Display

For some practice with state, add another method to our `Movie` component that
toggles a `showActors` boolean on the state object. Only display information
about actors when the `showActors` boolean is true.

**HINT:** You can use ternaries or `if` statements in JSX to display different
markup depending on whether a variable or expression is truthy.

## Additional Resources

### React Basics

- [React Crash Course Video](https://www.youtube.com/watch?v=sBws8MSXN7A)
- [ReactJS Koans](https://github.com/arkency/reactjs_koans)
- [React Developer Roadmap](https://github.com/adam-golab/react-developer-roadmap)
- [Thinking in React - Steps 1 and 2](https://reactjs.org/docs/thinking-in-react.html)

### JSX and the Virtual DOM

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Intro to JSX | Codecademy](https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro/exercises/why-react)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [React Internals: Virtual DOM](https://reactjs.org/docs/faq-internals.html)

### Components, Props, and State

- [React Components | Codecademy](https://www.codecademy.com/courses/react-101/lessons/your-first-react-component)
- [Intro to Components](https://generalassembly.wistia.com/medias/h64z7lp1ir)
- [Returning multiple elements from a single Component using React.Fragment](https://reactjs.org/docs/fragments.html)
- [React Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Component Props | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-props)
- [React Docs - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [CSS Tricks - React State From the Ground Up](https://css-tricks.com/react-state-from-the-ground-up/)
- [Component State | Codecademy](https://www.codecademy.com/courses/react-101/lessons/this-state)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
