# Instructor Notes

## Selectors

* `*`
* `element`
* `.class`
* `#id`
* `selector1, selector2`
* `ancestor descendant`
* `parent > child`

## Tree Traversal

* `.first()`
* `.last()`
* `.children()`
* `.find()`
* `.parent()`
* `.parents()`

## Manipulation

* `.attr()`
* `.addClass()`
* `.removeClass()`
* `.hasClass()`
* `.toggleClass()`
* `.text()`
* `.html()`
* `.append()`
* `.appendTo()`
* Mention prepend, after, before

## Effects

* `.show()`
* `.hide()`
* `.toggle()`
* Mention fading, sliding

## Miscellaneous

* `.each()`
* `.data()`

## Events

1. Have the "Click me!" button pop up an alert saying "You did it!" Attach the event handler as an inline anonymous function.

2. Have the "Click me too!" button change to a random text color when clicked. Define the random-color function as a property on `DemoApp`, and attach the event handler as a reference to this function.

3. Have all the elements with class `color-changing` change to a random text color when clicked. Reuse the same event handler function, making it generic by using `this` to refer to the event target.

4. Have the "DISORIENT" text mirror itself when clicked, and change back when clicked again. Use another function on DemoApp (using `this` so the function is reusable) and the `mirror` class defined in `home.css`.

5. When the `word-form` is submitted, add a new item to the `words-list` containing the text that was in the input box, and clear it. Be sure to use the `submit` event on the form rather than a `click` on the button.

6. Create a button alongside each new item added to the `word-list`. Right now it won't do anything, but give it the class `randomize-color`.

7. Use a filtered event handler to have the buttons on each `word-list` item randomize that word's color (but not the button's color). This will require extracting the random color generator to a separate function, and that in turn will require attaching the event handler using `$.proxy` so `this` in the event handler will refer to `DemoApp` and not the event target.

8. Have the color-randomizing buttons in the word list remove themselves when clicked. This will require referring to `event.target` since `this` is no longer the event target.

9. Have the "Randomize all!" button randomize the colors of all the words in the word list, using `.each` to apply the color-changing event handler to all the list items.
