# Sketchpad

## LESSON OBJECTIVES

_after this lesson, students will be able to:_

1. Generate DOM elements in a _for_ loop
1. Set a single click listener on each element generated inside the _for_ loop
1. Write a single click handler outside the loop
1. Use `currentTarget` to target an element within the handler

## Generate DOM elements in a _for_ loop

Let's say we want to have **ONE THOUSAND** square divs on our page. We _could_ write out or copy/paste 1000 divs, **or** we could use a _for_ loop and do it once. Keepin' it DRY.

We are going to make 1000 square divs for our sketchpad. Each div will have the same event handler.

### Activity (10 mins)

FIGURE IT OUT

The goal is to generate 1000 divs in a _for_ loop and append them to the body

* Write a loop that counts up to 1000
* Inside the loop, create a div
* Give the div a class of `square` (just for display purposes)
* Append the div to the `body`
* Check in the Elements tab in your console to see if you have 1000 divs with class 'square'
* In your css, set the size of each square to 20px x 20px, and display to inline-block. Give them a background-color of ivory. * Temporarily, you could give them a border of 1px solid grey to see them better.

### Class Walkthrough and Code Along(15 min)

```javascript
for (let i = 0; i < 1000; i++) {
  let $div = $('<div>');
  $div.addClass('square');
  $('body').append($div);
}
```

### Watch (15 min)

Now, we can add an eventListener to the div within the loop. For our sketchpad, we don't want a 'click'. Instead, we can use a 'mouseover'.

* set an event listener one time within the loop. The first argument for the listener should be `mouseover` instead of `click`. For the second argument, use a named handler function called `changeColor`
* Write the `changeColor` function above and outside the loop.
* The handler function will add a class `pink` that will make the _target_ element pink. To locate the target element, use `$(event.target)`.

Even though we set the _same_ click listener and handler on each div, we can target each individual div with `$(event.target)`.

```javascript
$(() => {

  const changeColor = (event) => {
    console.log('moused over');
    $(event.target).addClass('pink');
  }

  for (let i = 0; i < 1000; i++) {
    let $div = $('<div>');
    $div.addClass('square');
    $('body').append($div);
    $div.on('mouseover', changeColor);
  }
});
```

## SKETCHPAD ACTIVITY

### Activity in groups

* Make it so your sketchpad works: when you mouseover a square its color will change to pink

### Activity in groups (20 mins)

FIGURE IT OUT

* Using an input field, make it so that the user can decide how many divs there are!

* There will be an input box and a button. When the button is clicked, it will grab the user's input from the input box.

* The value from the input box can be used in the control panel of your for loop

STEPS:

Add an input box and a button to the html:

```html
<input id="inputBox" type="text" placeholder="grid size"/>
<button id="inputButton">SUBMIT</button>
```

* Above your for loop (NOT inside the loop) Grab both the input box and button in your js
* Set an event listener on the button.
* When it is clicked, inside the handler capture the input with `inputBox.val()`. `console.log(inputBox.val())`

Where should the code that generates your divs reside? Inside the button's click handler? What is the sequence of events?

How can you change your for loop to generate the number of divs that you grabbed from the input box? Do you need to change the input from a string to a number?

### Activity in groups (20 mins)

SUPER FIGURE IT OUT

* Make it so that when the user mouses over a square, a _random_ color will appear, not just pink. There are many different ways to solve this problem. The important thing is that you try to tackle it rather than solve it.

### Activity in groups (20 mins)

SUPER FIGURE IT OUT

* Make it so that the square divs are contained inside a container div of fixed height and width. Depending on how many divs the user decides to make, the divs should alter their _size_ to fit the container!

### Review (10 mins)

What are the steps involved in setting a single click listener and handler on multiple elements?

Come up with your own custom example to do the following: 

1. Make a loop that runs x amount of times
2. Generate an element and append it to the page
3. Give the element some css if necessary
4. Set an event listener on the element
5. Write an event handler for the event listener (either anonymous or named)
6. Use the `$(event.target)` to refer to the target element within the event handler

### Show (5 mins)

Show your sketchpad!

## JQUERY COMMANDS

- window.onload

```javascript
$(() => {
	// code inside jQuery window onload
});
```

- target element: `$(event.target)`

- create element: `$('<div>')`, `$('<p>')`, etc.

- select all elements of type: `$('div')`, `$('p')`, etc.

- ^^ The two commands above are very similar but they do completely different things!

- you can get the body of the document with: `$('body')`

- get element by id: `$('#idName')`

- get elements by class: `$('.className')`

- set id on element: `jQueryElement.attr('id', 'idName')`

- set class on element: `jQueryElement.addClass('className')`

- get the parent of an element: `jQueryElement.parent()`

- get child elements: `jQueryElement.children()`

- set an event listener: `jQueryElement.on('click', function() {} )`

- click listener: `jQueryElement.click( function() {} )`

- get value from input box after click: `$('#idName').val()`

- append elements: `jQueryElement.append( jQueryElement )`

- prepend elements: `jQueryElement.prepend( jQueryElement )`

- remove elements: `jQueryElement.remove()`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`

- check if element has a class: `jQueryElement.hasClass('someClass')`

- remove a class from an element: `jQueryElement.removeClass('someClass');`

- set a css property on an element: `jQueryElement.css('property', 'value')`

- clone an element: `jQueryElement.clone()`

- append an element with the order reversed: `jQueryElement.appendTo( jQueryElement )`

- get a specific jQuery element from a list: `jQueryCollection.eq( indexNum )`

- empty an element of content:
`jQueryElement.empty()`
