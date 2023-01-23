[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Introduction to JavaScript

## Learning Objectives

- Learn to connect a JS file to an HTML file,
- Start using JavaScript and use developer tools.
- Introduce the syntax of the JavaScript language.

## Intro

Today we are going to get started with our first real programming language of
the course! We've learned about HTML + CSS in previous classes this week, so we
know how to make static webpages where there isn't much user interaction. Today
we are going to move towards making our pages interactive and dynamic.

But first, we must start with the basics.

## Linking a JavaScript file

We'll start by creating a new directory with HTML and JS files. From the command
line:

```zsh
cd sandbox
mkdir js-data-types
cd js-data-types
touch index.html script.js
code .
```

Go into the HTML file and enter HTML boilerplate code. If you're using VS Code
you can just type `!` and hit tab, or you can enter all the boilerplate
below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Next, we will link the JS file into the HTML file, by adding a script element
into the bottom of the `body`, as follows:

In index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

Once the file is linked, we can go into our JS file and begin coding. In
`script.js`, add the following line of code:

```js
console.log("hello world")
```

Back at the command line run:

```sh
open index.html
```

Your default browser will open (we ask for this class you use Chrome but other
browsers will have similar tools you should definitely explore).

You can bring up the Development Tools (DevTools) with the command **Command +
Option + J** (`⌘ + ⌥ + J`) and should see something that looks like this:

![DevTools Console says 'Hello World!'](https://user-images.githubusercontent.com/7882341/27314092-830ea8ac-553f-11e7-954f-c8502b382d6d.png)

Again, back at the command line run:

```zsh
touch script2.js
```

In script2.js add:

```js
console.log("hello world, from script2")
```

In index.html, in the head, add:

```html
<script defer src="script2.js"></script>
```

Now let's do it a third time!

Create a `script3.js` and include it in head, this time without a `defer`
attribute.

```html
<script src="script3.js"></script>
```

Go back to the browser and refresh the page.

### Many ways to link a file

Placing the script at the bottom of the `body` allows your HTML to load first,
then it downloads and executes your JS file.

Putting `defer` on your script tag in the head executes it after the entire page
has loaded.

Placing a plain old script tag in the head, that doesn't have any attributes on
it, runs the script before html loads. If you do this make sure that your script
doesn't depend on HTML already being there.

**Bonus Reading:**
[async and defer attributes in a script tag](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

It is also possible to write JavaScript directly into your HTML file within the
`script` tags, but keeping all JS in a separate file makes it easier to edit and
more efficient when loading the page.

## Developer Tools

### `console.log`

We have seen `console.log` frequently in the pre-work and we will see it much
more. The most difficult aspect of programming is not having insight into the
exact value of things in a running program. `console.log` provides us this
insight.

![REPL 42](https://user-images.githubusercontent.com/7882341/27314489-4275c7b4-5542-11e7-8c16-6b6431f9cc42.png)

The console is also known as a REPL (Read-Eval-Print-Loop). When you hit
**Enter**, you tell the computer:

1. **R**ead the JavaScript I just wrote (`42`).
2. **E**valuate it (calculate its value, `42`).
3. **P**rint the value that was evaluated (`42`).
4. **L**oop, returning control to the user and wait to be asked to read the next
   line.

Let's try it out. In your script.js file:

```js
const number = 9

console.log(number)
```

Go back to the browser, and refresh the page. Type `number` into the console. It
will read, evaluate, and print `9`.

Another example of a REPL is: [https://repl.it/](https://repl.it/). This may be
a helpful tool to use throughout class to test code.

Keyboard shortcut: Highlight code and press **Command + /** (`⌘ + /`)

-----

## Next: [Variables](variables.md)