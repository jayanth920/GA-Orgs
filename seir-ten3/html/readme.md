[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# HTML

## Learning Objectives

- Review the roles of HTML and CSS in web pages
- Identify the parts of an HTML element
- Identify the parts and roles of HTML boiler plate

## Overview

This lesson will be a refresher on the fundamentals of HTML. All
material is review from the pre-work, so we will move quickly and potentially
glosses over material. For a much more robust treatment, see [the Mozilla
Developer Network Learning
Area](https://developer.mozilla.org/en-US/docs/Learn).

### Discussion Questions

- What are the only 3 languages that browsers can understand?  
- What are their general roles in how a webpage displays information?

## HTML (Hyper Text Markup Language)

HTML exists to solve the problem of how a rich document can be expressed in
plain text. That is to say what are the parts of the document, what role does
each part serve (e.g. heading, image, list, emphasized text, link etc.), and how
do they relate to one another.

HTML expresses the **structure and semantics** of a document in plain text.

### Elements: I do 

![Parts of an
Element](https://developer.mozilla.org/en-US/docs/Glossary/Element/anatomy-of-an-html-element.png)

The parts of an HTML document are called **elements** and they are denoted with
**tags**. Tags come at the beginning and end of an element's content.

![Attributes](https://i.imgur.com/YOal32l.png)

Extra information about elements can be added using **attributes** which are
added to the _opening tag_. A ubiquitous element which always needs an attribute
is the `a` (for *anchor*) element. The `a` element creates a link to another
location, frequently another page.

We express the structure of an HTML document by nesting. For example, we can
take a paragraph:

```html
<p>The easiest way to learn HTML is to use it!</p>
```

and we can emphasize part of the text using `em` tags:

```html
<p>The easiest way to learn HTML <em>is to use it!</em></p>
```

We can add a link to the word `HTML` that goes to the MDN HTML page
(https://developer.mozilla.org/en-US/docs/Web/HTML)

```html
<p>
  The easiest way to learn
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
  <em>is to use it!</em>
</p>
```

Notice the use of whitespace (line-breaks and indentation) here. Any amount of
whitespace is understood as a single space to the browser which lets us spread
our content out for readability.

An element can be the child of another element (contained within its parent's
tags) but can never straddle another element.

```html
<!-- Don't do this! -->
<p>The easiest way to learn HTML <em>is to use it!</p></em>
```

Similarly, do not omit closing tags. Every element needs a closing tag (with the
exception of **empty elements**).

```html
<!-- Also, don't do this! -->
<p>The easiest way to learn HTML <em>is to use it!</em>
```

Browsers try to correct our mistakes, and this is often unhelpful because they don't provide us with informative errors. [HTML validators](https://validator.w3.org/nu/#textarea) and our linter can help us out though. Even our
valid example above (with the anchor tag) won't validate just yet as we are
missing some required boiler plate.

### HTML Boilerplate

When a client's browser gets an HTML file from the server, it begins building a
document that will be displayed to the user.

The following HTML boilerplate tells the browser how to construct the page:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>This is the title</title>
  </head>
  <body>

  </body>
</html>
```

The first line `<!DOCTYPE html>` declares that the document is an HTML document and specifically, this doctype declaration tells the browser that the page should be interpreted using the HTML5 specification.

Every webpage is enclosed in `html` tag defining the start and end of the
document. The closing `html` tag should always be the last line of the page.

The `html` element has **two children**, `head` and `body`. Both `head` and `body`
are required and they are the only two valid children of `html`.

#### Head

The `head` element holds **metadata** about the document; metadata meaning extra
information about the document beyond the content of the document.

One required piece of metadata is the `title` element. Every page is required to
have a title; without one the HTML document is invalid. The `title` element
defines what shows up in the browser window, what the page is called when added
to favorites/bookmarks, and what the page is titled in search-engine results.

The `meta` element declares that the *charset* or set of characters used in this
document is **utf-8** which includes most characters from all known human
languages. This is not required but can avoid some problems you might run into
if you use special characters.  The charset declaration should fit completely within the first 1024 bytes at the start of the file, so it's best to put it immediately after the opening head tag.

Two other meta tags that may autofill into HTML5 boilerplate:

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 
  - This sets the width of the area in which the content renders (the viewport)
    to the width of the device and sets the scale to 1. You can read more about
    this
    [here](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW26).

Other examples of metadata include links to external stylesheets (more later)
and scripts to run on the page.

> There are MANY options for the meta tag. So many that there's probably not an exhaustive list anywhere.

#### Body

The `body` element contains the information actually presented to the user; it
represents the content of the document.

### Valid HTML in a file: We Do

Before we start adding content to the body lets create a file locally for our
work so we can open it.

> Note: All code for this lesson is available in [this repo](https://github.com/ga-wdi-exercises/html-css-in-class/tree/master) with branches for each step.

Create a directory in your sandbox called `html-and-css`

```bash
cd ~/sei/sandbox
mkdir html-and-css
cd html-and-css
```

Create a file `index.html` and open it with Visual Studio Code

```bash
touch index.html
code .
```

We'll be using [Emmet](https://code.visualstudio.com/docs/editor/emmet) which gives us tools to write our html code more quickly and accurately. To create our HTML boilerplate, type `!` inside an empty document that has a `.html` extension and press the tab key.

> In programming we often refer to the exclamation point as a _bang_.

Next, use the tab key to navigate to the title and replace its contents.  Now you can move your cursor in between the body tags and type `p`, then press the tab key.

Inside the `<p></p>` tags that were generated, type: `The easiest way to learn HTML is to use it!`.  Select the word `HTML` in the text you added and press command <kbd>⌘</kbd> + shift <kbd>shift</kbd> + <kbd>P</kbd> (or Ctrl + Shift + P on Windows machines) to bring up the command palette.   Start typing: `emmet wrap individ` and select the option that reads:  `Emmet: Wrap Individual Lines with Abbrevation`.  After you've selected this option just type `a` and press enter.   Do the same to wrap the text `is to use it!` with an `em` tag.


<img src="https://media.git.generalassemb.ly/user/17300/files/baeb7700-6e64-11ea-9796-39b2002845ea" width="300" alt="VS Code command palette" />


Now, `index.html` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML &amp; CSS</title>
</head>
<body>
  <p>
    The easiest way to learn
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
    <em>is to use it!</em>
  </p>
</body>
</html>
```

Cool, let's fire up a local web server and see this file in the browser.   You may have previously opened up a html file in. the browser by simply double-clicking it or dragging it into the browser.  That technique will **not** work as we start to use features in JavaScript that are only supported on a web server.  So from this point forward, we'll be running **all** of our code using a local server.  One additional benefit of doing this is that the local server we'll be using includes _live reload_ features, so any of the changes that you make in the editor will automatically appear in the browser!

At the bottom of the VS Code editor, toward the right side of the screen click the text that reads:  `Go Live`.  If you do not see the `Go Live` text at the bottom of the editor,  click the gear icon on the bottom left side of the editor or press command <kbd>⌘</kbd> + shift <kbd>shift</kbd> + <kbd>P</kbd> again to open the command palette and type: `open with live` then select the `Live Server: Open with Live Server` option from the palette. 

This is valid HTML. We can confirm this by copying and pasting the code into an
[HTML validator](https://validator.w3.org/nu/#textarea).

*(Note: in the title we are using an [HTML
entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity) for the
ampersand.)*

### Exercise: You Do [HTML Fixit](../../../html-fix-it)

- 10 minutes working / 5 minutes review
- Work with a partner and write out plain English answers
- If you finish early, add additional HTML trying to provoke various error
  messages

## More Elements

There are tons of different HTML elements and memorizing them is impractical.
Instead, it is better to start using the 20 percent of the building blocks that
get you 80 percent of the way there. Among these are headings, paragraphs,
lists, and images.

### Headings

The `h1` - `h6` tags are for headings and subheadings. It's rare to use past 3
or 4.

```html
<h1>I'm most important! There should really only be one of me on a page.</h1>
<h2>I'm still quite important! I'm fine being on the page a few times though</h2>
<h3>I'm pretty common!</h3>
<h4>I'm quite detailed</h4>
<h5>I'm probably deep in a menu</h5>
<h6>Wow, that's very detailed</h6>
```

### Lists

People love lists. There are two types of HTML lists, ordered and unordered.

```html
<!-- ordered list -->
<ol>
  <li>I'm first</li>
  <li>I'm second</li>
  <li>I'm third</li>
</ol>
<!-- unordered list -->
<ul>
  <li>red</li>
  <li>green</li>
  <li>blue</li>
</ul>
```

### Images

If there's anything people like more than lists, it's images.

Images are **empty elements** meaning that they cannot logically have children.
They are represented in HTML with a single, self-closing element.

Some people put a slash at the end of empty elements but it is unnecessary.

```html
<img src="" alt="" />
<!-- is the same as -->
<img src="" alt="">
```

Images require a `src` with a URL for an image.  You should also include an
`alt` tag for screen readers, and when something breaks and the image doesn't
show up.

The url can be any address but generally we want to manage our own assets.

Right click the picture and click **"Save image as..."**, give the file a
shorter name, and make sure you save it to Downloads. I've gone with
`html5logo.png`.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="html5 logo" width="300" />

Move the file from your Downloads folder to the `html-and-css` directory.

```bash
mv ~/Downloads/html5logo.png ~/sei/sandbox/html-and-css/
```

We tell the browser to request an image and load it into the page by giving an
image tag's source attribute a path to the image.

```html
<img src="html5logo.png" alt="html5 logo" >
```

### Semantic HTML

Besides the basic elements, there are some semantic HTML elements that are important to learn to use as professional developers.  These semantic elements will improve the structure of our pages and make it easier for the more than 285 million people around the world who cannot experience our pages visually to navigate through our content.

[MDN's Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)*

These include elements like:
```html
<section>
<header>
<footer>
<nav>
<main>

```

[Reference to help you with semantic HTML](./reference/h5d-sectioning-flowchart.pdf)

#### Resources:

```
Good Strategies
===============
Imitation
Repetition
Inspection
Reflection

Good Links
==========
MDN HTML Tutorials (https://developer.mozilla.org/en-US/docs/Learn/HTML)
MDN list of inline HTML elements (https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
MDN list of block level HTML elements (https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
```

