[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# jService - React Style

Recreate the jService app you built for homework during the Angular unit with React

#### Learning Objectives

- AJAX with React

#### Prerequisites

- React
- AJAX

---

## Getting Started

1. Create a react app in a directory named `jservice-react`
    - Whether you use the CDN links or use `create-react-app` is up to you, choose whatever you prefer!

## Recreate jService With React 

Recall that jService is an API that has jeopardy trivia questions and answers available to the public. Your goal is to create a basic trivia app using it. 

> http://jservice.io

![sample styling](https://i.imgur.com/RyzUN8v.png)

### MVP 

1. Your app should have a button labeled "Random Trivia Question" or something similarly descriptive 
    - When a user clicks on this button, your app should make a `GET` request to the jService API to retrieve random trivia  data
    - Use the following URL when making your fetch requests: `http://jservice.io/api/random`

1. When you get the data back, your app should display the **question** **category** amd **points** 
    - _NOTE:_ You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?)

1. Your app should also have a place to display the **answer**, but it _should not_ be showing whenever you get a new question.

1. Your app should have a button labeled "Show me the answer" or something similarly descriptive 
    - When a user clicks on this button, your app should then display the **answer** 
    - In other words, you should have some sort of onClick that calls on a function to toggle whether or not you can see the answer 
  
1. Your app should have a section to display points, on default have it equal to 0
    - Your app should also have three buttons that will allow the user to add or subtract from their points 
    - For now, make it so that it just adds or subtracts 1 point 
    - As a hungry for more goal, try to use the actual points value from the fetched jService data 
  
1. Once you're done with the basic functionality, try to add some styling and color to your app! It doesn't have to match the mockup given above, but try to add at least a little bit to get some CSS practice in! 

### Hungry for More? 

<details><summary><strong>Click to see the options</strong></summary><p>
    
1. As mentioned, instead of adding/subtracting points by just 1, try to use the actual jService point data 
1. Add a third point button that'll allow the user to reset their points 
1. Make another button that, when clicked, will make a request to get random trivia data that returns 10 items. Then, display all 10 trivia questions using `http://jservice.io/api/random?count=10` as your fetch URL
    - Make it so that all their answers are still hidden on fetch 
    - Make it so they each have a button  that'll toggle whether the answer shows or not. 
      - Make sure that it only toggles the answer for the one specific question the button belongs to, not all 10 of the answers! 
1. If you haven't already, go back to your labs and finish them up

</p></details>

---
  
## Deliverables

A jService based Jeopardy app that meets the above criteria outlined in the MVP section

## Technical Requirements
1. Your app must run on load with no errors. If you have any errors you can't figure out, comment them out with an explanation

## Submission Guidelines

- Must be submitted no later than **10 AM before the next class**

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
