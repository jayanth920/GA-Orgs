[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Likes

Create a likes component in React. Your final product should function similarly to
[this deployed version](https://react-likes.surge.sh/) of the component.

## Prerequisites

- React
- Components
- State and props

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies with `npm i`.
1. Switch to a new `dev` branch.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

Create a new component called **Likes** in the `src` directory and add functionality to it so that when the render component it records the number of clicks in state and displays the total clicks.

## Steps to Take

1. Use the `useState` hook to add state called `totalLikes` to the component to store the current number of clicks on the component.
1. Initialize the `totalLikes` state as `0`.
1. In your JSX, render a `button` element with it's text set to the value of `totalLikes`.
1. Include an `onClick` attribute on the start button which calls a function that increments the value of `totalLikes`.
1. Make a commit with a message that reads "Add MVP functionality"!

## Homework / Bonus

1. Change the increment button to have a `+` as its text.
1. Add another button that decrements the `totalLikes` and has a `-` as its text.
1. Render the `totalLikes` to the page in a `p` element.
1. Once you have the `totalLikes` displaying on the page, move just the display paragraph into its own component called **LikeTotal** and have the Likes component you built render it (hint: use props to pass the value of `totalLikes` to your new LikeTotal component).
1. Make another commit with a message that reads "Add decrement button".
1. Make it so that the `totalLikes` can never display a value less than `0`.
1. Add and commit your final changes, push them and open a pull request!

## Resources

- [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
