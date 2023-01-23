# React Review

## Review React Questions

<details>
  <summary>What is React's primary role in helping us to build web applications?</summary>

  It's role is just to use data to render a UI or View(s)

</details>

<details>
  <summary>What dependencies do we need to get started building a React Application?</summary>

  `react`, `react-dom`, `webpack`, `webpack-dev-server`, `babel-core`, `babel-loader`, `babel-preset-react`

</details>


<details>
  <summary>What are 3 things we need to account for when defining our Webpack configuration?</summary>

  1. entry: The location of the app's root javascript file (specifying the app's point of entry).

  2. output: Where we want the bundled up output to go.

  3. loaders: The specific transformations to apply to our code.

</details>

<details>
  <summary>What is Babel?</summary>

  JS Compiler

</details>

<details>
  <summary>What is JSX used for?</summary>

  JSX is an alternate Javascript syntax that allows us to write code that strongly resembles HTML. It is eventually transpiled to lightweight JavaScript objects. React then uses these objects to build out a "Virtual DOM"

</details>

<details>
  <summary>What is the Virtual DOM? How is that different from the usual DOM?</summary>

  The Virtual DOM is a Javascript representation of the actual DOM. React isolates the changes between old and new instances of the Virtual DOM and then only updates the actual DOM with the necessary changes.

</details>

<details>
  <summary>What does every component need at minimum?</summary>

  A render method! It generates a Virtual DOM node that will be added to the actual DOM.

</details>

<details>
  <summary>What are .props?</summary>

  Properties! Every component has .props, they are immutable and cannot be changed while your program is running.

</details>


<details>
  <summary>How do we display data that will change in our application?</summary>

  Through a component's state, in which values stored in the component are mutable attributes.

</details>


<details>
  <summary>What is .setState doing?</summary>

    Whenever we run .setState, our component "diff's" the current DOM, and compares the Virtual DOM node with the updated state to the current DOM.

    React only replaces the current DOM with parts that have changed.

</details>

## Building Components Exercise

**Instructions:**

Create a simple react application that has at least two components, for a Button and Image. The goal is to toggle the display of any image of your choosing when you click the button.

[See Solution](https://github.com/ga-wdi-exercises/react-component-review-exercise)

## React Tutorial

https://facebook.github.io/react/docs/tutorial.html
