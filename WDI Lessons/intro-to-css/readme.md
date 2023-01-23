# Intro to CSS

## Learning Objectives
* Introduce CSS and what it can do.
* Style HTML pages using CSS.
* Use RGB and Hexdecimal Colors to add color to sites.
* Use built in and external fonts.

## What is CSS?
![](https://qph.ec.quoracdn.net/main-qimg-1f99b9ce08edd2309efff97b710ffcbe)

* CSS focuses on the styling of a web page -- or what it looks like. We could make a page red, the font comic sans, or center content using CSS.
* JavaScript brings the interactivity to websites. You can add pop ups, allow the user to draw a picture, or write a game using JavaScript.
* HTML contains the content for our sites. We could have a header, a paragraph of text, or a link to another website in HTML.

Today, we are going to start looking more in depth at CSS.

* **C** - Cascading
* **S** - Style
* **S** - Sheets

Style sheets means that we are using plain text files to adjust the presentation of our HTML code. Cascading refers to the hierarchical manner in which styles are applied.

Instead of styling each element individually, we style groups of elements. It would become pretty unmaintainable pretty fast if we styled each element independently! Think about how many similar looking buttons there might be on just one webpage.

## CSS Syntax

CSS allows us to apply styles across files and elements. CSS rules look like the following:

```css
selector {
    property: value;
}
```

The selector will be an HTML tag type (like h1), a class, or an id -- we will look at those attributes in a bit. The property will be the property or style we want to change, and the value will be how we want to change that property.

For example:
```css
h1 {
    color: blue;
    background-color: yellow;
}
```

The above code will style all of our elements in `h1` tags with blue text and yellow highlighting. Let's try it out!

### We Do: Creating 
* Change into your working directory:
```bash
$ cd wdi/sandbox
```

* create HTML and CSS files
```bash
$ touch index.html style.css
```

* Open the project in your text editor
```bash
$ code .
```

* Add the styles to the `style.css` file
```css
h1 {
    color: blue;
    background-color: yellow;
}
```

* Add an HTML template and a header to your HTML file.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Intro to CSS</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
```
Note: our link tag has three attributes
* rel - relationship between linked file and current file
* type - what type of file is being linked
* href - path to the file

### Discussion Questions
* Why is it important to create separate HTML and CSS documents?

* Can you explain separation of concerns in greater detail?

## Adding Color
In the previous example, we used CSS's named colors to style our header. There are only [140](https://www.w3schools.com/cssref/css_colors.asp) named colors in CSS, but there are way more than 140 colors! 

RGB and Hex colors give you millions of colors you can use. These both use letters and numbers to code which color to use. Deciding between RGB and hexadecimal colors is mainly personal preference, though some libraries only represent one or the other.

Both are based off of the way light is mixed to create different colors.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/AdditiveColor.svg/2000px-AdditiveColor.svg.png)

Let's use [this site](https://www.w3schools.com/colors/colors_rgb.asp) to play around with these color scales.

Both of these are built on a system of entering values for the colors red, green, and blue.

By mixing different intensities of these three colors, you can create millions of different colors and shades. Intensity values range from 0 (no intensity) to 255 (full intensity) in the RGB system.

In a decimal (10) system, the values each digit can have run from 0 up to 9. In a hexadecimal (16) system, we use the letters A through F to extend that range; A is 10, B is 11, C is 12, and so on. For example, the number sixty-three is written in decimal as 63 (6 x 10 + 3 x 1); in hexadecimal, it's written as 3F (3 x 16 + F x 1, where F is 15).

Coming back to RGB, each pair of characters in an RGB hex code (e.g., #46A529 -> 46, A5, 29) represents a color level between 0 (00) and 255 (FF) for red, green, or blue, respectively.

Let's try some hexes and RGBs in our code!

> [Color Wheel](https://color.adobe.com/create/color-wheel/)

These three pieces of code all do the same thing!
```css
p { color: red; }

p { color: rgb(255,0,0); }

p { color: #FF0000; }
```

#### Opacity and RGBA

Opacity and RGBA

RGBA color values are similar to RGB color values with an additional parameter - "alpha" - that specifies the opacity of the element or elements being styled.

The alpha parameter can take any number between 0.0 (totally transparent) and 1.0 (completely opaque).

![](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-4/rgb.png)

## Your Turn: Editing CSS
Use the following starting code in your text editor. Try to edit the css in order to fulfil the requirements.

index.html
```html
<!DOCTYPE html>
<html>

<head>
	<link ref="stylesheet" type="text/css" src="style.css">
</head>

<body>
	<div id="name"></div>
	<div id="hex"></div>
	<div id="rgb"></div>
</body>

</html>
```

style.css
```css
div {
	width: 150px;
	height: 150px;
	border: 2px solid black;
	display: inline-block;
	margin: 20px;
}

#name {
	background: white;
}

#hex {
	background: #ffffff;
}

#rgb {
	background: rgb(255,255,255);
}
```
* Сhange the background color of the #name div from white to red.

* Turn the #hex div red by leaving the first two characters at their maximums of ff, and changing the last four characters to their minimums of 0.

* Turn the #rgb div red by leaving the red value at its maximum of 255, and changing both the green and blue values to their minimums of 0.

* What color do you think you'd get if you set all the RGB values to their minimum of 0? Can you set all three boxes to that color?

* Go ahead and set all the numbers in the RGB color model to 0.

    * Set all six characters in the #hex div to 0.

    * Then, use a named color to make all three boxes the same color.

## Fonts and Styling Text

As you learn to style your website, you'll want to get more creative with font families, as well as font size, style, and more. You'll also want to start aligning the text to suit your needs. Let's explore how to do that!

### Font

To adjust the font of your selected text element, use the font-family property. For the value, enter the name of the font you'd like apply to your text. To be safe, try putting a comma after your selected font and enter a generic family as a fallback. If the web browser doesn't support the font you selected, it will choose the fallback. For example:

```css
h1 { font-family: Arial, sans-serif; }
```
If your selected font is more than one word, capitalize both words and put them in quotation marks:

```css
h1 { font-family: "Courier New", monospace; }
```

### Size

To increase or decrease the spacial dimensions of your chosen text, use the font-size property. As a beginner, you'll want to enter pixel values for your font-size values, like so:

```css
h3 { font-size: 24px; }
```

As you become more advanced, try using percentages or ems instead of pixels. These can be pretty tricky, so you may want to hold off on using these for now.

### Weight

As a beginner, you can enter values like normal to make your text thin and bold to make your text thick. As these values are not very specific, different browsers may interpret their display with slightly different outputs.

```css
h1 { font-weight: normal; }

h2 { font-weight: bold; }
```

Once you get more practice, try using the numbers 100, 200, 300, 400, 500, 600, 700, 800, and 900 as values to gain more granular control. With this system, 400 is roughly equivalent to normal and 700 roughly equals bold.

```css
h1 { font-weight: 400; }

h2 { font-weight: 700; }
```

### Style and Alignment

To make normal text italic, use the property font-style and the value italic. To reverse this effect, use the value normal.

```css
a { font-style: italic; }

p { font-style: normal; }
```

To adjust the justification of a text element, use the property text-align and one of the following values: left, right, center, or justify.

```css
body { text-align: center; }
```

### Decoration

To add an underline to normal text, use the CSS property text-decoration and the value underline.

```css 
h1 { text-decoration: underline; }
```
To remove underlines, use the value none. This declaration is often applied to anchor tags.

```css
a { text-decoration: none; }
```

Less commonly used values include overline, which adds a line above text, and line-through, which strikes a line through your text.

### Transform

To adjust capitalization in a selected text element, use the text-transform property. Values for this property include uppercase to capitalize every letter, lowercase to uncapitalize every letter, and capitalize to make the first letter of every word in the selected text uppercase.

```css
h1 { text-transform: uppercase; }
```

### External Fonts

Did you know you can also link to external fonts in your HTML? Google Fonts is a popular, free service for adding fonts to our pages. Let's try it!

First you'll need to import the font. This link will look something like this:

```css
@import url('https://fonts.googleapis.com/css?family=Roboto');

h1 {
    font-family: 'Roboto', sans-serif;
}
```
Let's go to Google fonts and try to add another!

## Classes and IDs
Using CSS, you can reference and style your HTML by selecting the class and/or ID attributes of specific HTML elements.

What's the difference between the two? In short, using classes allows you to select and style groups of elements with a particular style, while using an ID only allows for an individual element to be styled. Using classes and IDs allows you to have flexibility in how you control the design of individual elements and groups of elements on the page.

These are just normal attributes on our HTML tags:
```html
<h1 id="name">Ali</h1>
<li class="pink-list-item">pink</li>
<li class="pink-list-item">light pink</li>
```

Then we can grab them in our css:
```css
#name {
    color: blue;
}

.pink-list-item {
    color: purple;
}
```
The `#` grabs an id and a `.` grabs a class.

### Best Practices

#### Use Element Selectors When Appropriate

Ask yourself if you can apply the style to the element selector instead of creating a class or ID. If so, use the element selector to style your elements. Think general and only get more specific if you need to!

```css
a {
    text-decoration: none;
    color: #00A6B3;
}
```

#### Use IDs Sparingly in CSS

You are technically allowed to use IDs to style elements in CSS, but they are almost never used by professional developers because of their specificity.

CSS classes give you the ability to reuse styles, and any style specified with an ID isn't reusable. Also, IDs can override classes, making a codebase more difficult to maintain when it gets larger.

In general, using classes in your CSS will help with the scalability of your design and help you write cleaner code.

#### Using IDs with JavaScript

When writing JavaScript, IDs are valuable to help you access and alter different elements on your page. This process is called DOM Manipulation. You'll learn more about manipulating the DOM once we dive deeper into JavaScript, but remember: when writing CSS, use classes to style and select!


## Additional Resources
* [CSS Cheat Sheet](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/studyguides/U4-studyguide.pdf)
* [Base CS: Hexes and Other Magical Numbers](https://medium.com/basecs/hexs-and-other-magical-numbers-9785bc26b7ee)
* [Color Picker](https://www.w3schools.com/colors/colors_picker.asp)
* [Color Palette Picker](https://www.materialpalette.com/light-blue/cyan)


## Bonus Info: Absolute vs. Relative Paths

A relative address/path is one defined with respect to one's own position within a filesystem (e.g. ./index.html, main.css).

An absolute address/path is a path to a website or file that includes a full web address (starting with "http") that the browser loads from the remote location.

A good rule of thumb to remember is that an absolute path always points to the same place, no matter where you might be in your filesystem.

