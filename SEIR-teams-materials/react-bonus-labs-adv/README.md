# Additional Bonus Labs

## Bonus - React Cities

Convert the following [CodePen](https://codepen.io/jkeohan/pen/850f8454693590e9772f8d0f6c2f44c8) into a React app. Additionally, your app should have a form for the user to add their own image.

1. Create the following Components and organize based on the below hierarchy:
    - App
      - Form (this is not in the CodePen)
      - SmallImage
      - LargeImage

1. Make a state variable in App that holds an array of image urls, call it `images`. Use the `images` array to generate a list of SmallImage components. Build out the SmallImage component, so it displays the image passed to it through a prop called `image`.

1. Make a state variable in App that holds the current image url, call it `currentImage`. Build out the LargeImage component, so it displays the `currentImage`.

1. Add an onClick event to SmallImage that updates `currentImage` to match the SmallImage that is clicked. You will need to pass `currentImage`'s update function to each SmallImage component through props.

1. Build out the Form component with a form that has a text input.

1. Make a state variable in Form to track what the user types in the text input. Add an onChange function to the input to update that state variable.

1. Build a function in App that will handle when the form submits, call it `handleSubmit`. `handleSubmit` should add an image to the `images` array. Pass `handleSubmit` to the Form component and connect it to the form's onSubmit event.

## Bonus - ColorSwitcher

Convert the following [CodePen](https://codepen.io/jkeohan/pen/abvjvpr?editors=1010) into a React app.

1. Create the following Components and organize based on the below hierarchy:
    - App
      - Form
      - ColorList
        - ColorListItem

1. Make two state variables in App. One will hold an array of colors. The other will hold the current background color.

1. Use the array of colors to generate the ColorList.

1. Add an onClick event to each ColorListIttem that lifts state to App and updates the background color of the app to be the color of the ColorListIttem that was clicked.

1. Add an onChange event to the Form that allows the user to add a color. The Form will pass that url to App which will then render it as an additional ColorListItem.

## Bonus - Traffic Light

Convert the following [CodePen](https://codepen.io/jkeohan/pen/MWYEyMV?editors=1010) into a React app.

1. Create the following Components and and organize based on the below hierarchy:
    - App
      - Bulbs
      - Buttons

1. Make a state variable in App the represents the currently selected color.

1. You may create additional data structures to make generating the Bulbs and Buttons easier. But you only need one state variable in this App.

1. Add a click event to Buttons that lifts state to App and updates the Bulbs so that only the chosen Bulb is on and all other Bulbs are set to black.

## Bonus - Memory Game

Convert the following [CodePen](https://codepen.io/jkeohan/pen/opvVGN?editors=0010) into a React App.

1. Create the following Components and and organize based on the below hierarchy:
    - App
      - Card

1. Add a click event to the Card components that assigns the card its card image and lifts state to the App Component that is used to determine the winning/loosing logic (the exact game logic is up to you!)

# API Specific

- [Random Taco](https://git.generalassemb.ly/SEIR-526/react-random-taco-app)
- [News Api](https://git.generalassemb.ly/SEIR-526/react-news)

# React Router / API

- [Pokedex](https://git.generalassemb.ly/SEIR-526/pokedex-lab)
- [Audobon](https://git.generalassemb.ly/SEIR-526/audubon-website)

 
