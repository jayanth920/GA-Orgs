# Intro to p5.js

[p5.js](https://p5js.org/) is a JavaScript library that aims to "make coding more accessible for artists, designers, educators, and beginners."

## What is a Library?
- A collection of Javascript functions and methods that make writing Javascript an easier, smoother and ultimately shorter experience.
- Under the hood, all Javascript libraries are written using Javascript. So technically, there is nothing you can do using a library that can't already be done using Vanilla JS.
- There are [tons](https://www.javascripting.com/) of them:
  - Some suited for particular uses like data visualization(D3.js), 3D imaging (Three.js), charts (Chart.js), autocomplete functionality (Typeahead.js) and many more...

## HTML5 Canvas

The HTML5 `canvas` element is used to draw graphics using JavaScript. The canvas is the empty slate, then the developer writes JavaScript code to add drawings on top of it. p5 adds additional functionality to make creating a canvas and drawing on it easier.

## p5 Setup

Let's first create empty HTML, CSS, and JavaScript files to use for today's lesson.

```js
$ cd ~/sandbox/wdi
$ mkdir p5-intro && cd p5-intro
$ touch index.html script.js style.css
```

Let's also generate a HTML boilerplate in the html file and include the JavaScript and CSS files.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

First, we will have to load in p5 in order to use it. There are two ways to do this: one is downloading the library and using the local version, the second is to use a CDN or content delivery network to host the JavaScript online and still incorporate it locally. Either way, we will use a `script` tag to use the JavaScript file. For this class, we will use the CDN option.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
```

The library needs to be loaded in before our own `script.js`.

## Hello, p5

Let's create a simple p5 sketch and walk through what it is doing. All of the functions in the example below **are not built into JavaScript** itself, but are rather functions defined in the library. That is to say 'Vanilla' JavaScript **does not** have functions called `setup`, `createCanvas`, `draw`, `fill`, and `ellipse`--the p5 library defines these instead.

```js
// setup is called automatically when the page loads
function setup () {
  // create an html canvas that is 640px x 480px
  createCanvas(640, 480)
}

// draw is called continuously after the setup function runs
function draw () {
  // mouseIsPressed is a boolean variable that tracks whether the mouse is clicked or not
  if (mouseIsPressed) {
    // fill sets the color of whatever shapes come after it
    fill(0)
  } else {
    fill(255)
  }
  // ellipse creates a circle or oval on the page,
    // the first 2 arguments to ellipse are the starting x and y position
    // the 3rd and 4th arguments are the height and width of the oval (80, 80)
  // p5 has special variables: mouseX and mouseY track where the mouse is on the page
  ellipse(mouseX, mouseY, 80, 80)
}
```

[From the p5 documentation](https://p5js.org/get-started/)

## How to do more with p5

The documentation is awesome! The [reference](https://p5js.org/reference/) has the full documentation (similar to documentation on MDN). The [examples](https://p5js.org/examples/) page has a bunch of awesome examples you can play around with, learn from, and extend. Also, one of the core contributors to p5, Dan Shiffman, has a bunch of [YouTube Videos](https://www.youtube.com/watch?v=8j0UDiN7my4) on p5!

## Examples

* [escher pasta](https://codepen.io/superbuggy/pen/OvxgNg)
* [Random Shapes](https://www.alispit.tel/#/)
  * [Code](https://github.com/aspittel/aspittel.github.io/blob/vanilla-js/script.js)
  * [Re-implemented with Emojis](https://codepen.io/aspittel/pen/RQKMgL)
* [Loops demo](https://codepen.io/aspittel/pen/mxExBE)
* [If statement demo](https://codepen.io/aspittel/pen/aYZYOQ)

## Really Cool Advanced Examples

* [Sarah Drasner's Codepen](https://codepen.io/sdras/pen/EgmOKV?limit=all&page=2&q=p5)
* [Wikipedia Audiovisualizer](https://codepen.io/halvves/pen/rrxakW?q=p5&limit=all&type=type-pens)
* [Rainbolt](https://codepen.io/brettmitchell/pen/oexpXp?q=p5&limit=all&type=type-pens)
