# jQuery Cheat sheet

## `.find`

> <!--replace with your answer-->

### `.find( selector )`

### `.find( element )`

HTML:

```html
<button><p></p></button>
```

jQuery:

```js
// replace with example
```

## `.hide`

> <!--replace with your answer-->

### `.hide( [duration], [complete] )`

```html
<p id="my-paragraph"></p>
```

```js
// replace with example without callback funtion

// replace with example with callback funtion
```

## `.show`

> <!--replace with your answer-->

### `.show()`

### `.show( [duration], [complete] )`

```html
<p id="my-paragraph"></p>
```

```js
// replace with example without callback funtion

// replace with example with callback funtion
```

## `.html`

> <!--replace with your answer-->

### `.html()` - Getter

> <!--replace with your answer-->


```html
<body>
  <p>Words</p>
</body>
```

```js
// replace with GETTER example
```

### `.html( function )` or `.html( htmlString )` - Setter

> <!--replace with your answer-->


```html
<body>
</body>
```

```js
// replace with SETTER example
```

## `.text`

> <!--replace with your answer-->

### `.text( text )` - Setter

### `.text()` - Getter

```html
<p>Some text</p>
```

```js
// replace with GETTER example

// replace with SETTER example
```

## `.val`

> <!--replace with your answer-->

### `.val( value )` - Setter

> <!--replace with your answer-->

### `.val()` - Getter

> <!--replace with your answer-->

```html
<input id="name" type="text">
```

```js
// replace with GETTER example

// replace with SETTER example
```

## `.append`
> <!--replace with your answer-->

### `.append( content [, content ] )`
We can send just one item to be appended or multiple (the optional `content` param).

```html
<p id="prefilled">Text</p>
<p id="empty"></p>
```

```js
// Use .append to add the string of " add to end" to the end of the p element with an id of "prefilled"
// Use .append to add some text to the empty p element with the id of "empty"
```

Output HTML:

```html
<p id="prefilled">Text add to end</p>
<p id="empty">Some Text</p>
```

## `.prepend`
> <!--replace with your answer-->

### `.prepend( content [, content ] )`
We can send just one item to be prepended or multiple (the optional `content` param).

```html
<p id="prefilled">Some text</p>
<p id="empty"></p>
```

```js
// Use .prepend to add some text to the beginning of the p element with an id of "prefilled"
// Use .prepend to add some text to the empty p element with an id "empty"
```
Output HTML:

```html
<p id="prefilled">Add to beginning Some text</p>
<p id="empty">Some Text</p>
```

## `.css`

> <!--replace with your answer-->

### `.css( propertyName )` - Getter!

```css
p {
  color: green;
}
```

```html
<p></p>
```

```js
// replace with GETTER example
```

### `.css( propertyName, value )` - Setter!

```html
<p style="color: green"></p>
```

```js
// replace with SETTER example
```

## `.attr`

> <!--replace with your answer-->

### `.attr( attributeName )` - Getter

> <!--replace with your answer-->

### `.attr( attributeName, value )` - Setter

> <!--replace with your answer-->

```html
<p id="test"></p>
```

```js
// replace with GETTER example for getting the attribute of "test"

// replace with SETTER example for setter a new id attribute of "a-new-value"
```

## `.data`

> <!--replace with your answer-->

### `.data( key, value )` - Setter!

### `.data( key> )` - Getter!

```html
<p data-thing="some stuff"></p>
```

```js
// replace with GETTER example for getting the data attribute of "thing"

// replace with SETTER example for setting the value of the data attribute "thing" to a new value
```

## `.on` - Event Listener!!!

> <!--replace with your answer-->

### `.on( events [, selector ] [, data ], handler )`

`events` - Name of event(s) to listen for.
`[, selector]` - Targeted element inside the selected element.
`[, data]` - Optional data to be passed to handler.
`handler` - A function to execute when the event is triggered. ALWAYS GETS EVENT OBJECT AS PARAM!!!

```html
<p id="clickable"></p>
```

```js
// replace with example for an event listener .on that will 'listen' for a click on the p element with an 
// id of 'clickable' and console.log the string of 'we clicked the p tag!'
```

## `.off`

> <!--replace with your answer-->

### `.off( events [, selector ] [, handler ] )`

```html
<p id="clickable"></p>
```

```js
// replace with example for an event listener .off that will 'listen' for a click on the p element with an 
// id of 'clickable' and console.log the string of 'we STOPPED the click on the p tag!'
```

**NOTE:** For `.on` if you use an anonymous function for the handler, `.off` will not know what to turn off!
Instead, use named functions :)

## `.each`

> <!--replace with your answer-->

### `.each( function )`

```html
<div></div>
<div></div>
<div></div>
```

```js
// replace with an example of .each that would give 'each' of the divs above the css color of blue
```
