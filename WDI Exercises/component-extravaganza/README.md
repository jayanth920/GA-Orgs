# Component Extravaganza

Let's build some components to put those newly formed React skills to the test!

## Submission

This lab is a hybrid HW and lab. You must complete all 3 of these exercises by next week. Doing the exercises in order will is strongly recommended. Fork and clone each repository. Also in the submission, please include your overall *comfort* and *completion* as well as any questions or specific areas designated for feedback.

## Components

### [Password Validator](https://git.generalassemb.ly/ga-wdi-exercises/react-password-validator)
> *Deployed App: http://excellent-tail.surge.sh/*

Build a Sign Up Form component that:

  - Prompts the user to enter their **email**, **password** and **password confirmation**
  - When the user submits the form:
    - Notify the user of whether or not their submission was valid

### [Stopwatch](https://git.generalassemb.ly/ga-wdi-exercises/react-stopwatch)
> *Deployed App: http://scary-religion.surge.sh/*

Build a Stopwatch component that:

- Allows the user to press a button "Start" to start the stopwatch
  - While the stopwatch is started, the incrementing time should be displayed
- Allows the user to press a button "Pause" to pause the stopwatch at the current time
  - Re-clicking the "Pause" button should resume the stopwatch
- Allows the user to press a button "Reset" to stop the stopwatch and reset the time to `0`

### [Shopping Cart](https://git.generalassemb.ly/ga-wdi-exercises/react-shopping-cart)
> *Deployed App: http://shopping-cart-react.surge.sh/*


Build a Shopping Cart component that:

- Allows the user to add a new **item** to the cart
  - Each item has a **name**, **cost** and **quantity**
- Displays each item in the cart, as well as the calculated **total** of all items cost
- Allows the user to update the quantity of each item in the cart
- Allows the user to remove an item from the cart
- Allows the user to wrap an item as a gift for an incurred cost
- Calculates the sales tax and adds it to the subtotal of the items to be purchased


## Tips / Resources

- Plan first!
  - Sketch a quick wireframe of what your component will look like
  - Make a mental list of all necessary data attributes to be tracked by your component
  - Think of the types of user actions and how each action changes the component
- [Forms in React](https://facebook.github.io/react/docs/forms.html#controlled-components)
- [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
- [Adding State to a Component](https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
