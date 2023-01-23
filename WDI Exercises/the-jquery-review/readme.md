# JS Review

This review exercise is built around accessing data contained in various data structures, and then taking that data and writing to the DOM using jQuery.

This exercise reviews and builds on concepts from the first two weeks of WDI.

## Instructions

Clone down this repository. Your task is to write code in `js/script.js` that accomplishes the tasks listed below.

**Do not modify `index.html`.**

### General Note on Exercises

Each task will involve targeting a certain DOM element using jQuery and doing something with that element such as changing its text, changing its CSS properties, adding an event listener (bonus exercise), and combinations thereof.

Each task will involve steps like these...
  1. Identify where the element is in the HTML document.

  2. Choose an appropriate selector to target the element.
  > For example, `div.fancy` to select only `<div>`s with attribute `class="fancy"`.

  3. Use the selector in a **string** as an *argument* to jQuery's `$()` function. Store the return (what the function `$()` *returns*) in a reference.
  > `const $fancyDivs = $('div.fancy')`

  4. Identify the right jQuery **method** to complete the task at hand.

    > Remember that ***methods*** are functions that are invoked with a dot preceding them. A more technical way of putting that might be that a function can be the value of a property on an object.

    >Some example of jQuery methods are `.css()`, `.val()`, `attr()`, `.on()`.

The first step will be to figure out how to select the element based on how it appears in the DOM. Is it an `<article>` inside a `<div>`. Think back to CSS diner and your CSS homework.

### Writing the Staff Members to the DOM

The goal of this section is show how to get data from a javascript data-structure and place that onto a specific place on the **DOM** (document object model), using jQuery.

1. Populate the Header with Staff Member Names

  2.  For testing purposes, `console.log()` each element in the `staff` array in `js/script.js` using a for-loop.

    - `$ open index.html`, refresh in browser, and then open the console (`CMD+OPT+J`) to check your work.

  3. Next, use the jQuery function `$()` to create `<span>` tags inside the `<header>` that is directly in the `<main>` tag. The text of each `<span></span>` should be each item in the `staff` array, respectively.
    > In the for loop you just wrote, do the following:

    - Use **the** jQuery function `$()` to create a new `<span>`, then store the newly created element in a variable (`newSpan` would be a good variable name).
      > Refer back to [pixart](https://github.com/ga-wdi-exercises/pixart_js/) if needed
    - Change `newSpan`'s text to equal the current staff member being iterated over in the for-loop, using `.text()`. The current staff member in the array that the loop is iterating over will be passed in as an argument to `.text()`.
    - Use `$()` to select the `<header>` directly inside of `<main>`, then store this in a variable (named `mainHeader`, for example).
    - Append the new spans to `mainHeadr` using `.append()`. You'll have to pass in the newSpan as an argument to `.append()`.

  The end result should be 6 `<span>`s inside the main header, where there is one name from the `staff` array in each `<span>`.


### Populating Article Content

1. Populating Content for the First Article

  1. Create a new paragraph element using `$()` and store it in a variable (`newPara`). Change the text (using `.text()`) of `newPara` to equal the value of the `text` property of the first object in the JavaScript array `articlesData` and ***append*** it to the `<section>` inside of the first `<article>`.
    > Example breakdown
      1. Use `$()` to select all article elements.
      2. Then use `.eq()` to target the first article.
      3. Finally, store this reference to the first `<article>` in a variable (a `const` is a good choice).
      4. Access the `text` property *first* item in the `articlesData` array and store it in a variable.
      5. Lastly, set the text of the `<article>` to to the variable you created in the last step.

  2. In the first `<article>`, set the text of the `<h3>` inside `<header>` to the `title` property of the first object in `articlesData`.

    > Repeat the process of breaking down this step like in the previous step.

  3. Modify the `byline` property of the first item in `articlesData` by concatenating its current value (`by `) with the 1st item in the `staff` array.
  > The `byline` property should have a new value of `by Richard Fineman`. ***Do not*** manually hard-code this by `articlesData[0].byline = "by Richard Feynman"`.

  4. Take the new value of the `byline` property and add it to the text of the `<header>` within the first `<article>`.

  5. Add an `editor` property to the first object in `articlesData` and give it the value of the 2nd item in the `staff` array.

  6. Create and ***append*** a `<span>` inside the `<header>` of the first `<article>`, where the new `<span>`'s text is the value of the `editor` property you just created.

  7. Render the image, from the `body` property of the first object in `articlesData`, to the `<figure>` element in the first `<article>`.

2. Using a loop to populate content for each article

  1. Adapt the code you wrote in the previous section to work with a for-loop that iterates over the objects in `articlesData`.

    > If the math involved for converting steps 4 and 5 is confusing, skip over making work and comeback to that later, after completing step 2. The loop is more important.

  2. Use a `forEach` on the `articlesData` array to refactor the approach above.

3. Hovering the cursor over a paragraph changes its background color to `lightgrey`. When the mouse exits the paragraph, the color should revert back to its previous value.

  1. Store the default background-color value in a reference, `const DEFAULT_BG_COLOR`, for example. Do this at the beginning of the
  > use the appropriate jQuery method for **getting/reading** a CSS property's value.

  2. Change the background color to lightgrey when the mouse hovers over the paragraph.
  > You'll need to add event listeners to paragraphs, and then use the same jQuery method from the previous step to set the background

  3. Determine the event that corresponds to the mouse exiting the area of a DOM element.

  4. Add event listeners to listen for this type of event, and have the background color revert to its default value when this event occurs.

## Bonuses

1. Use jQuery animate to have the staff names slide and fade into view. Check out [http://api.jquery.com/animate/](http://api.jquery.com/animate/)

2. Add infinite scroll by re-appending the same articles when the user scrolls to a certain close to the bottom of the scrollbar.
> Use a counter with the modulus `%` operator.

## Hints

> Write a little bit of code, and then test it--work methodically.

> use $ in variable names that refer to jQuery objects/collections (this is a recommended convention, and will not have an impact on code function).
```js
const $body = $("body");
```

>  Store references to each part of the DOM you need to interact with. Example:
```js
const $paragraphs = $("p");
const $smallestHeaders = $("h6");   
```
