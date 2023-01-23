# DOM Input

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

1. Capture text input from the browser
1. Use a form's submit event
1. Build a list from input
1. Try jQuery UI
1. Build a Static Trello Board

## Capture text input from the browser

Provide a means for the user to provide input, and capture that input with an event handler.

Make an input field and a button in index.html

```javascript

      <input type="text" id="input-box" />
      <input type="submit" id="submit-btn" />

```

Set an event on the submit

```javascript
$('#submit-btn').on('click', () => {
  console.log('clicked');
});
```


Make it so the handler grabs the value inside the input box (and logs it to check)

Use jQuery `.val()`

```javascript
$('#input-box').val()
```

```javascript
  $('#submit-btn').on('click', () => {
    console.log('clicked');  
    console.log( $('#input-box').val() );
  });
```

### You Do

* Make an input box and a button. The input should ask for the user's favorite TV show
* When you click the button, make it so that a message appears on the page: "Hi! Your favorite show is: _show name from input_"

**Extra**

* Instead of a TV show name, ask the user to input the url for an image that they like
* When the user clicks the submit button, add an `img` to the page and set the `src` attribute to the input value. Get the image to show on the page.

## Use a form's submit event

With a **form** tag you can hit the enter key to submit the form data.

```javascript
<form>
    <input type="text" placeholder="enter your name" id="input-box"/>
    <input type="submit">SUBMIT</button>
</form>
```

app.js

Set the handler on the form element instead of the submit.

```javascript
  $('form').on('submit', () => {
    console.log('clicked');  
    console.log( $('#input-box').val() );
  });
```

### Prevent default refresh

When you submit the form, the default action is to refresh the page. Let's prevent this default behavior using the freebie `event`.

```javascript
  $('form').on('submit', (event) => {
    console.log('clicked');  
    console.log( $('#input-box').val() );
    event.preventDefault();
  });
```

### Reset your input field

`.trigger()` can trigger events on elements (click, hover, etc).  The `reset` event clears a text input

```javascript
$(elem).trigger('reset');
```

```javascript
  $('form').on('submit', (event) => {
    console.log('clicked');  
    console.log( $('#input-box').val() );
    event.preventDefault();
    $(event.currentTarget).trigger('reset');
  });
```

## Build a list from input

Make a nonsense list to store any kind of nonsense

* Make a `list` array where nonsense data will be stored
* Push input into the list
* Run a function **render** that will render items in the list.

```javascript
const list = [];

$('form').on('submit', (event) => {
  console.log('clicked');  
  console.log( $('#input-box').val() );

  list.push( $('#input-box').val() );

  event.preventDefault();
  $(event.currentTarget).trigger('reset');

  render();
});
```

* Make **render** function to iterate over all items in the list

```javascript
const render = () => {
  console.log('render everything in the list');
  console.log('list: ', list);
  list.forEach((item) => {

    console.log(item);

  });
}
```

* Let's build in some `ul`s for the list items

  ```html
  <ul></ul>
  ```

* Make a list item for every item in the array

```javascript
const render = () => {
  console.log('render everything in the list');
  console.log('list: ', list);
  $('ul').empty();
  list.forEach((item) => {    
    $('ul').append('<li>' + item + '</li>');
  });
}
```

![](https://i.imgur.com/vjQ2Bu9.png)

* Add an event listener to each item that calls on one single event handler

```javascript
list.forEach((item) => {    
  const $li = $('<li>' + item + '</li>');
  $li.on('click', doNonsense);
  $('ul').append($li);      
});
```

```javascript
const doNonsense = (event) => {
  console.log('item clicked: ', event.currentTarget);
  $(event.currentTarget).css('background-color', 'red');
}
```

## Try jQuery UI

Main site: https://code.jquery.com/ui/

```javascript
const doNonsense = (event) => {
  console.log('item clicked: ', event.currentTarget);
  $(event.currentTarget).css('background-color', 'red');
  $(event.currentTarget).effect('shake');
}
```

[jQuery UI effects](http://api.jqueryui.com/1.10/category/effects/)

You do:

## Build a Static Trello Board

![trello](https://i.imgur.com/iNhPGLY.png)

This is an example of a Trello board for tracking health & fitness. Let's create one of our own! We won't put in the drag and drop functionality just yet.

### Lists

Let's focus on making a list (the grey portion of the board) in the HTML. This list will eventually hold our cards.

### Title

We'll hard-code a title onto each of our lists, but could think about dynamically adding these later.

### Set your card to take input & add a card

Let's create an input box where we can write the text for our card. When we click "Add", it should create a card in our list. If there's time, we can think about how we can adjust this to look more trello-like.

### A little bit of style

Let's add a little bit of CSS to make our board look more professional.

### jQuery UI

Use the **jQuery UI** library [from here](https://code.jquery.com/ui/) that lets you use all kind of effects, including dragging and dropping.

Use `.draggable()` to pick up a card and drag it around.
