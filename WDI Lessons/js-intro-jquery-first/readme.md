# Intro to Javascript

## Learning Objectives
* List and describe the primitive data types.
* Define and use complex data types.
* Explain the difference between `prompt` and `console.log`
* Practice proper JS syntax and semantic variable naming.
* Differentiate between `true`, `false`, "truthy", and "falsey"
* Write an if, else if, and else statement in JS
* Write a for loop and while loop in JS and differentiate between them
* Utilize loops to iterate through complex data types

## Framing

The source code of [Lights Out](http://ga-wdi-exercises.github.io/lights_out/) and [Tic Tac Toe](http://ga-wdi-exercises.github.io/tic_tac_toe/) works, but is "bad".

- What is inefficient in this code?
- **DRY** is a programming acronym for "Don't Repeat Yourself". What repeats here?

## Variables

A variable is a bucket. You can put data in it. Then you can re-use it as many times as you want.

"Data" just doesn't mean numbers -- it means literally anything in Javascript.

### Reusability

```js
var player = $('#player');
```

Now instead of having to write `$('#player')` everywhere, we can write `player`.

### Ease of changing

- If we decide to use colors other than red and blue, what has to be changed?

```js
var p1Color = 'skyblue';
var p2Color = 'pink';
```

Now anywhere we have 'skyblue' we can use `p1Color`, and same for 'pink'. If I want to change the color, I need only change those two lines.

## Functions

A function is a machine. You can re-use it as many times as you want.

### Reusability

```js
function changePlayer(){
  if(player.text() == p1Color){
    player.text(p2Color)
  }else{
    player.text(p1Color)
  }
}
```

Now this:

```js
if($('#player').text() == 'skyblue'){$('#player').text('pink')}else{$('#player').text('skyblue')}
```

...can be replaced with `changePlayer()`.

### Arguments

You can pass data into function. This is called an "argument" or a "parameter".

```js
function setBackground(id){
  $(id).css('background-color', player.text());
}
```

Now we can replace `$('#a').css('background-color', $('#player').text());` with `setBackground('#a')`.

### Functions calling functions

```js
function move(id){
  if($(id).hasClass('played')){
    
  }else{
    $(id).addClass('played');
    setBackground(id);
    changePlayer();
  }
}
```

Now the whole `onclick` becomes simply `onclick="move('#a')"`.

## Salvage Lights Out

- What could you do to the source code of [Lights Out](http://ga-wdi-exercises.github.io/lights_out/) to make it more efficient?

## Writing Javascript

### Console

Open the Chrome console (Command + Option + J). This is a REPL (`Read-Eval-Print Loop`), like repl.it. You will **never use repl.it again**. Use this instead.

**You should always have this open** whenever you are doing work that involves front-end Javascript. It will show you any errors.

- Use jQuery to change the color of all paragraphs to red.

### Script files

Clone down this lesson plan, and open the folder in Atom (`atom .`). Look at `script.js`.

- Use jQuery to change the color of all paragraphs to blue.


## Practicing Javascript

- [JS Order Practice](https://github.com/ga-wdi-exercises/js_order_practice/tree/jquery)
    - Individual
    - Checkout the `jquery` branch
- [JS Fizzbuzz](https://github.com/ga-wdi-exercises/fizzbuzz_js)
    - In Groups
- [JS Data Types](https://github.com/ga-wdi-exercises/js-data-types)

## JS Concepts

### Getting user input

At any point in our JS code, if we write `prompt()` a pop up box will open in our browser for a user to enter in text.

```js
// Prompts user and stores value in the variable
var age = prompt("What's your age?");
```

### Console logging

`console.log` simply prints out some text into your Chrome console. This is the easiest way to debug your apps.

```js
// Logs value stored
console.log('I wish I looked that good when I was ' + age);
```

`console.log` should not be confused with `alert` which makes a box pop up.

### Javascript in your HTML vs. in a separate file

Both work. Having your JS in a separate file is considered better practice for the same reason having CSS in a separate file is considered better practice: it's much neater, and *separates your concerns*.

## Practicing Javascript

- [Pixel Art Mini](https://github.com/ga-wdi-exercises/pixart_js_mini)
- [Temperature Converter](https://github.com/ga-wdi-exercises/temperature_converter)
    - You do not need jQuery for this

## Review Questions

- What role does Javascript play on a website?
- What are the five primitive data types?
- When would you use an array over an object? And vice-versa?

### Advanced

- What is the difference between `undefined` and `null`?
- What is an example of type coercion?
- What are the two composite data types? When would you use each?
- Provide an example of a semantically-named variable. Explain your choice.

<script src="jquery.min.js"></script>
<script src="script.js"></script>
