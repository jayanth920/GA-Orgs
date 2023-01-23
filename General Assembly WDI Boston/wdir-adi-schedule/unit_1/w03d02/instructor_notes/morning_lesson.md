# Programmatic DOM manipulation with functions and loops

## Lesson objectives

_After this lesson students will be able to:_

1. Explain how traditional Javascript ties in with jQuery
1. Add to the DOM with a function
1. Execute code once the DOM has loaded
1. Edit the DOM with a function
1. Add to the DOM with a loop
1. Use data to populate the DOM

## Explain how traditional Javascript ties in with jQuery

jQuery **is** JavaScript, it just looks different to the regular JS.

We can use JavaScript control flow patterns with jQuery. That means **functions**, **loops**, and **conditionals**. Using control flow with our DOM manipulation patterns, we can create some interesting things.

## Add to the DOM with a function

Write a function that will add an `h2` with the text "Just getting started" to the body of the page.

```javascript
  const addH2 = () => {
    let $h2 = $('<h2>').text("Just getting started");
    $('body').append($h2);
  }

  addH2();
```

## Execute code once the DOM has loaded

If nothing shows up when you run the function, why might that be? Hint: has the DOM loaded before the script runs?

```javascript
$(() => {
  const addH2 = () => {
    $h2 = $('<h2>').text("Just getting started");
    $('body').append($h2);
  }

  addH2();
});
```

We can move the `addh2` function outside of the window onload function. Question: does the following code work? Why or why not:

```javascript
// Code is loaded before DOM loaded
console.log('hi');

const addh2 = () => {
  $newH2 = $('<h2>').text('GOOD MORNING!');
  $('body').append($newH2);
}

// Code is loaded after DOM loaded                                                            
$(() => {

  addh2();

});
```

## Edit the DOM with a function

Write another function that will change the first existing `h2` in the DOM tree (on the page) to have the text "Getting warmed up"

```javascript
const addH2 = () => {
	$h2 = $('<h2>').text("Just getting started");
	$('body').append($h2);
}

const changeH2 = () => {
	$('h2').text("Getting warmed up");
}

$(() => {
	addH2();
	changeH2();
});
```

### Activity

* Write a function that will change the text of the existing H2
* Write a function that will remove the H2, and replace it with an image of "Oyster Smiling"

![](http://i.imgur.com/k6y31P8.png)

## Add to the DOM with a loop

Here is a nice quilt:

![](https://i.imgur.com/vBwqImN.png)

Let's build a digital quilt! It's not going to be too easy on the eyes. In fact, it's going to be a horrible quilt.

What we are aiming at is this:

![](https://i.imgur.com/QZjQHT3.png)

Eventually, we would like to invoke a function `generateQuilt()` that will build the quilt on the page. We would like to specify how many squares the quilt has: `generateQuilt(1000)` would build a quilt with 1000 randomly-colored squares.

First goal: add 1000 divs to the DOM

* Write a for loop that counts from 1 to 1000

```javascript
for (let i=1; i <= 1000; i++) {
	console.log(i);
}
```

* Make a square with jQuery - add a class that gives it shape

```javascript
$(()=>{
	const $square = $('<div>').addClass('square');
	$('body').append($square);
});
```

```css
.square {
  height: 50px;
  width: 50px;
  border: 1px solid grey;
  border-radius: 10px;
	display: inline-block;
}
```

* Combine the two and generate many squares, appended to the body each time the loop runs

```javascript
$(()=>{
	for (let i=1; i <= 1000; i++) {
		console.log(i);
		const $square = $('<div>').addClass('square');
		$('body').append($square);
	}
});
```

This is a DRY way to make a grid of 1000 divs.

### Activity - Make your own quilt

* Generate 1000 square divs (inline-block) using a loop, appending each to the body
* Your squares won't be visible unless you give them a background color or border

### Add to the DOM using a function that runs a loop

I would like a convenient way to generate more squares.

We can wrap this process in a function:

```javascript
const generateSquares = () => {
  for (let i=1; i <= 1000; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }
}

$(()=>{
	generateSquares();
});
```

Run it multiple times for fun:

```javascript
$(()=>{
	generateSquares();
	generateSquares();
	generateSquares();
	generateSquares();
});
```

### Activity

* Put the loop into a function - when you invoke the function, the loop will run

### Give the function an argument

* Provide the function with a parameter and argument, and run the loop that many times:

```javascript
const generateSquares = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }
}

$(()=>{
	generateSquares(1000);
});
```

### Activity

* When you invoke the function with the number of desired squares as an argument, the loop will generate the desired number of squares.

### Color the squares

We can use rgb values for our colors

```css
.square {
	background-color: rgb(25, 241, 84);
}
```

`rgb` stands for **red**, **green**, and **blue**. Each number is between 0 and 255, and says how much red, how much, green, and how much blue to blend.

`rgb(0, 0, 0)` is **black**.

`rgb(255, 255, 255)` is **white**.

[rgb color values](https://www.w3schools.com/colors/colors_rgb.asp)

Let's use it in the loop with `.css()` jquery method:

```javascript
const generateSquares = (numberOfSquares) => {
  for (let i=1; i <= numberOfSquares; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $square.css('background-color', 'rgb(23, 240, 83)');
    $('body').append($square);
  }
}
```

The **rgb** value is a **string** within the `.css()` method.

### Activity

* Give the squares an rgb color

## Color each square with a random color

Let's make a function that will return a **string** with **random rgb values**.

We will generate random values for red, green, and blue, and concatenate them into a return string.

```javascript
const randColorRGB = () => {
	 const red = Math.floor( Math.random() * 256 );
    const green = Math.floor( Math.random() * 256 );
    const blue = Math.floor( Math.random() * 256 );
    return "rgb(" + red + "," + green + "," + blue + ")";
}
```

```javascript
console.log(randColorRGB());
```

Now we can use the return value of this function in our `.css()` method:

```javascript
$square.css('background-color', randColorRGB());
```

Since it is inside a loop, it will run each time the loop runs, giving us a random color each time.

### Activity

* Give each square a random rgb color

### Add text to each square

The quilt is not quite ugly enough. Let's put some numbers in each square.

* Display the number in each square from 1 to 1000 with `$square.text(i)`

```javascript
const generateSquares = () => {
  for (let i=1; i <= 1000; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
		$square.css('background-color', randColorRGB());
    $square.text(i);
    $('body').append($square);
  }
}
```

### Activity

* Make each square display a number according to its place in the loop

### For fun, give each square an id, the same as its number


```javascript
$square.attr('id', 'square' + i);
```

### Activity

* Make each square display a number according to its place in the loop. In Elements tab: `id="square1"` etc.

## Use data to populate the DOM

Here is a rolodex with people's names and addresses:

![](https://i.imgur.com/TtermqB.png)

We would like to run a function that will populate our page with names and addresses from an **array of objects**

### Data

* Add the **array of objects**

```javascript
const data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "I simply do not know" },
  { name: "Jem", address: "Starlight Music" }
];
```

What we want to do is **populate** our page with data from the array. If, in the future, we change the data in the array, the page can be **re-populated**.

* Write a loop that iterates over the array

```javascript
for (let i=0; i < data.length; i++) {
	console.log(data[i]);
}
```

* We will now be interacting with the DOM so wrap the code in jQuery's DOM on-load function.

* Create a container that will house each name and address. Give it a class we can adjust later

```javascript
$(() => {

  for (let i=0; i < data.length; i++) {
    console.log(data[i]);
    const $infoContainer = $('<div>').addClass('info-container');
  }

});
```

* Add in the name div, whose text comes from the array. Give it a class we can adjust later.

```javascript
const $nameDiv = $('<div>').addClass('name').text(data[i].name);
```

And the address div, whose text comes from the array. Give it a class we can adjust later.

```javascript
const $addressDiv = $('<div>').addClass('address').text(data[i].address);
```

* Append the divs to the container div

Finished result

```javascript
$(() => {

  for (let i=0; i < data.length; i++) {
    console.log(data[i]);
    const $infoContainer = $('<div>').addClass('info-container');
    const $nameDiv = $('<div>').addClass('name').text(data[i].name);
    const $addressDiv = $('<div>').addClass('address').text(data[i].address);
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $('body').append($infoContainer);
  }

});
```

### CSS

Give the body a nicer font

```css
body {
  font-family: Verdana;
}
```

Give the info container some color, border, margin, padding

```css
.info-container {
  background-color: azure;
  border: 1px solid grey;
  margin-bottom: 5px;
  padding: 20px;
}
```

Last, give each name and address classes a display of inline-block, some margin, padding, and a border

```css
.name, .address {
  border: 1px solid grey;
  display: inline-block;
  margin-right: 20px;
  padding: 5px;
}
```

### Write in a function that will 'populate' the page

```javascript
const populateData = () => {
  for (let i=0; i < data.length; i++) {
    console.log(data[i]);
    const $infoContainer = $('<div>').addClass('info-container');
    const $nameDiv = $('<div>').addClass('name').text(data[i].name);
    const $addressDiv = $('<div>').addClass('address').text(data[i].address);
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $('body').append($infoContainer);
  }
}
```

Now we can move the function out of the window onload, and just invoke the function within the window onload.

```javascript
$(() => {

  populateData();

});
```

### Adding data

* Write a function that will push new data in to the array.
* The function should take `name` and `address` as parameters
* The function should then run the 'populateData' function


```javascript
const addData = (name, address) => {
  data.push({ name: name, address: address });
  populateData();
}

$(() => {
    populateData();
    addData('Karolin', 'NY');
});
```

The function 'doubles' the information. To fix this, we should clear out the old information before it populates. `$('body').empty();`

```javascript
const addData = (name, address) => {
  data.push({ name: name, address: address });
  $('body').empty();
  populateData();
}

$(() => {
    populateData();
    addData('Karolin', 'NY');
});
```

### Activity

See if you can figure out how to create a removeData function that takes a name of a person you want to remove, removes them from the `data` array, then refreshes the rolodex.
