![](/ga_cog.png)

# Angular Basics

#### Learning Objectives

- Getting comfortable with basic angular

#### Prerequisites

- JavaScript
- Angular
- AJAX

---

## Getting Started

- In your `homework` directory for tonight, create an `index.html` file.
- Create an `app.js` file.
- In your `index.html` file, add the boilerplate tags, attach your `app.js` file, add a script tag for [Angular](https://angularjs.org/).
`<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"></script>`
- Test that your app.js is connected and that Angular is connected 
  - How to test if Angular works: After you've set your app up with angular, in your HTML body put `{{2+2}}`. When you open your index.html in your browser, `4` should show on your page if Angular is properly connected. If you see `{{2+2}}` instead, you're probably missing something so go back and double check you've added everything necessary!

> NOTE: You can either use this single file setup to solve all of your homework OR you can create individual folders and files (html and js file) for each section. It's up to you, but just make sure that you work inside the homework folder.

---

# Part 1: Warm Up

## Life in the Fast Lane

1. Create a controller called `CarsController`.
1. The following array should be stored as `types` in the CarsController:
```js
 ["Honda", "Toyota", "Mazda", "Chevy", "Tesla", "Volvo", "Saab", "Fiat"];
```
3. The following array should be stored as `colors` in the CarsController:

```js
  ["mistyrose", "cornflowerblue", "lemonchiffon", "tomato", "azure", "snow", "orchid", "blanchedalmond", "papayawhip" ,"thistle"]
```
4. Make a single page application that displays:
    - An unordered list of the types of cars.
    - A separate unordered list of the colors of the cars.
    - Give each of these lists a heading with the name of the section.

<details><summary>Sample of what it should look like at this point</summary><p>
  
  ![car information displayed](https://i.imgur.com/UCeyiNr.png)
  
</p></details>

5. Add on an additional controller called `DriversController`.
6. The following data should be stored in the `DriversController`:
    - `name` should be your name
    - `driverImg` should be a picture of your (or whatever you want for your image)
    - `isShy` should be set to false
7. Display the name and image in your application below the car information.

<details><summary>Sample of what it should look like at this point</summary><p>
  
  ![name and image](https://i.imgur.com/mM78vyc.pngg)
  
</p></details>

8. Use what you've learned to hide your image if `isShy` were to be set to `true`.

### Fast Lane Hungry for More:
Finshed this portion in under an hour? Choose any or go to the next section and come back to this if you get through the next portion quickly too:
- Consider adding a button toggle whether or not the driver is shy (will reveal/hide the image)
- On click of a car color, change the background color of body of the html using `ng-style` or `ng-css` (remember, there are only 140 named colors [html color codes](https://htmlcolorcodes.com/color-names/) - be sure to limit the colors to this list. 
- Add a form that takes a car type and adds it to the car types array, which will update the list in the browser immediately
- Add another form that takes an html web color and adds it to the array, which will update the list in the browser immediately

---

# Part 2: AJAX and Angular

## jService API

jService is an API that has Jeopardy trivia questions and answered available to the public. Let's make a Jeopardy Trivia App using it!

> http://jservice.io/

![Sample Jeopardy Trivia App appearance](https://i.imgur.com/gw3cvyD.png)

1. Create a new folder and files for this section. Alternatively, as a stretch, make a second controller in fast lane and test out how having two controllers work. 

1. In your html, make a button labeled "Random Trivia Question" or "Get Question" or something descriptive. 

1. Connect this button to an `ng-click` that will call on a function in your controller that will make a `GET` request to get random trivia data. Because you're still new to APIs, let's start you off with a win by giving you the URL: `http://jservice.io/api/random`

1. Store the data that is returned in a variable inside your controller.

1. Make an html element like a  `div` in your HTML where you display the **question** only. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).

1. Make a `div` in your HTML where you display the **answer**

1. Add an ng-click that has a function that will toggle whether or not you can see the answer. 

1. Add other elements to your page to make it make sense and look good (see attatched image)

1. Make a div that has an h2 and two buttons

1. Inside the h2 keep score, start at 0 (default scoring should be one point for a correct answer, and minus one point for a wrong answer)

1. Make one button add the points to the score and the other to subtract points from the score

1. Add a little style and color to your app

### jService Hungry for More:

- Use the points provided for the question to add and subtract from the score
- Create a third button that resets the score to 0
- Make another button titled `Get 10 Questions`.
- Make a request to get random trivia data that returns 10 items:
ex: `'http://jservice.io/api/random?count=10'`
- Use what you learned today to display all 10 of the questions.
- Include a button with each of the questions to reveal that will reveal the answer when clicked. (You may find it easy to reveal ALL the answers, revealing just the answer of one question is challenging!) 
- Use the documentation to look at the categories that are available with jService. Choose 1. Make a request to get the trivia information for that category. Display them on your page in the same way as before (a question with an answer button);

---

# Part 3: myGA Modules for the Week 

In addition to this homework and the homework you'll have throughout the week, you will also have a few myGA modules to work through. You'll have the entire week to work through these modules in your own pace, just keep in mind that on Monday morning you'll be going over quick sort, Wednesday morning bucket sort, and Friday morning searcg sort. So, if time permits, it's in your best interest to get to the relevant module before then!

The modules to complete this week:

- Distribution Sorting
- Search Algorithms

---

## Other Hungry for More

1. Go back to the day's lab and finish one or all
1. Research other APIs! Find one that looks interesting and make a "GET" request for some data.

---

## Submission Guidelines

- Submit your homework via github issues before the next class starts at 10AM and please don't forget to fill out the form!
