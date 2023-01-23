[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Doctor Who's Police Box

![10th Doctors Box](https://www.bigchiefstudios.co.uk/media/product/feature/doctor-who/product-feature-10th-doctor-tardis.jpg)

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. `npm install` to add dependencies.
1. `npm start` to launch the live server.
1. Fulfill the listed requirements.


## Requirements

Run through the prompts below to build out your T.A.R.D.I.S.

When you're finished, make a pull request to submit.

## Objectives

Learn about Thinking in React, use the activity to apply what you've learned.

Doctor Who's Police Box is a T.A.R.D.I.S (Time and Relative Dimension In Space),
a fantastical space ship that can fly through time and space and other
mind-bending-ly impossible situations. It can go _anywhere_.

Today, you're going to help the T.A.R.D.I.S. navigate through a React App in the
form of an object

```js
tardis = {
  name: "Time and Relative Dimension in Space",
  caps: false
};
```

## Thinking in React

- Take a few minutes to read over
  [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- Do the activity and reread this article and try to figure out how the pieces
  go together.

## Set Up

To aid in visualization there is some already included css.

Every div has a blue border and some space around it for easy distinction
between divs.

![css visual](https://i.imgur.com/3e0aPea.png)

## Top Level

- One `div`, which is included in the index.html file. It's where we attach our
  react app to.

## App Level

- open `App.js`
- Set initial state by using a constructor and passing in props. Make the state
  object look like the following:

```js
tardis: {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}
```

- render a `div`
- inside the `div`, put an `h3` that will render the `name` property from
  `this.state`

Check your State in React Dev Tools: ![](https://i.imgur.com/MXGaT1M.png)

- Add the function below to your App component.
- Set up the function so that it gets called on click and changes the text in
  the `h3`
- What do you have to do in the constructor to ensure this function works?

```js
changeIt (text) {
  if (this.state.tardis.caps) {
    this.setState({
      tardis: {
        name: text.toLowerCase(),
        caps: false
      }
    })
  } else {
    this.setState({
      tardis: {
        name: text.toUpperCase(),
        caps: true
      }
    })
  }
}
```

## Create a Component `DivOne`

- have it render a div
- move the h3 from `App` to inside the div in this component
- pass the data from state down
- add click functionality to this div

## Create a new Component `DivTwo`

- have it render a div
- move the h3 from `DivOne` to inside the div in this component
- pass the data from state down
- add click functionality to this div

## Create a new Component `DivThree`

- have it render a div
- move the h3 from `DivTwo` to inside the div in this component
- pass the data from state down
- add click functionality to this div

## Create another Component Inside `DivTwo` called `DivFour`

- how should it render?
- will the function affect one or both DivThree and DivFour?
- should it affect one or both?

<details><summary>Hint</summary>

```
The Data Flows Down
Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:
```

[Thinking in React: The Data Flows Down](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)

</details>

- Thinking in React: where should state go? Topmost component possible? Bottom
  Most component possible? What is the best practice
- refactor your code so that each tardis is updating independent of the other
  one, if it isn't already

![nearly finished](https://i.imgur.com/efZ6fZG.png)

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
