---
---
# Handlebars

## Learning Objectives
- Explain what templating is and why we use it
- Link handlebars dependency to your html file
- create handlebars templates
- pass objects to handlebar's templates

## Framing
In web applications of today, there is a significant amount of duplication of HTML. That is not to say that we as developers need to hard code or write any of this duplication. Merely, that it exists. When we think about the principles of DRY, it's not in the lens of what we SEE on the webpage. We duplicate stuff all the time! Checkout any current webpage, there are multiples of everything! But it's in the lens of implementation of this duplication. As developers, we need the ability to generate HTML multiple times and only change small things about it, but not have to rewrite HTML a million times.

## Not so DRY HTML

Let's take a look at this [web page](https://github.com/ga-wdi-exercises/star-wars-with-hbs/blob/master/undry.html). It looks fine, but there seems to be lots of duplication. All the `<div>`s, `<h2>`s, `<p>`s look identical barring the content inside of them. Currently we don't know of a way to abstract this markup to prevent duplication. Enter templating.

## Handlebars

Handlebars provides the power necessary to let you build semantic templates. We'll learn about other ways to do templating moving forward in this class, handlebars is just one way.

### Setup
Let's create two files we'll be needing for this application `index.html` and `script.js`.

In the `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>hbs!</title>
</head>
<body>
  <h1>Intro To Handlebars</h1>
  <div class="mainContent"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

> All we've done is grabbed a CDN for the handlebars dependency and add it as a source in our HTML. Additionally we've linked our empty `script.js` file. You'll note there's also an empty div with the class `mainContent`

The next thing we need to do is add our template. We'll be doing this in our `index.html` file. Once we've learned about AJAX, we can abstract our templates into different files. For now, we have to code our templates in the `index.html`.

## Our first template
Put the following code above `<script src="script.js"></script>`

```html
<script id="demoTemplate" type="text/x-handlebars-template">
  <h2>This is coming from a template</h2>
  <p>This is a paragraph from the template</p>
</script>
```

If we reload the page, we still just see `Intro To Handlebars` the `<h1>` from the `index.html` and nothing from the template. We need to update our `script.js` in order to actually leverage our new tempalte.

In `script.js`:

```js
var template = Handlebars.compile(document.querySelector("#demoTemplate").innerHTML)
```

In this line of code we've compiled the template. What's being stored in the variable `template` is a function that has a return value of a string that is HTML(the html that we coded into the template in the `index.html`).

> notice the query selector targets the element that has the id of the template in the `index.html`. `Handlebars.compile` is a function given to us by handlebars, the dependency we added in our `index.html`. We're passing in the contents of that script tag, into the compile function.

If we refresh the page.. still nothing. Let's add this code to our `script.js`:

```js
console.log(template())
```

What is being logged? How can we leverage this value thats being logged?

```js
document.querySelector(".mainContent").innerHTML = template()
```

If we refresh the page now, we can see all the contents of our template being rendered, success!

## Using objects in Handlebars
This next bit of functionality is where handlebars gets its name sake from `{{}}`. Remember the not-so-dry html? What we've learned is great, but the content in the first example was changing based on the character.

Well, we can actually pass objects into our templates. Lets create a demo object in our `script.js`:

```js
var demoObj = {
  pizza: "PIZZA is FUN",
  anotherProperty: "SHAZAM"
}
```

Then let's add an argument to our `template()` function. Our whole `script.js` should look like this:

```js
var demoObj = {
  pizza: "PIZZA is FUN",
  anotherProperty: "SHAZAM"
};
var template = Handlebars.compile(document.querySelector("#demoTemplate").innerHTML);
document.querySelector(".mainContent").innerHTML = template(demoObj);
```

If we refresh the page, we'll see that nothings changed. Let's now use this object in our template. Back in the `index.html` let's rewrite our template to look like this:

```html
<script id="demoTemplate" type="text/x-handlebars-template">
  <h2>This is coming from a template</h2>
  <p>Pizza property: {{pizza}}</p>
  <p>other property: {{anotherProperty}}</p>
</script>
```

If we refresh the browser now, we'll see the `demoObj` two properties show up in our browser.

> notice that we did not have to put demoObj inside of the `{{}}`, and only had to put the properties name.

## I do - Star Wars Templating

https://github.com/ga-wdi-exercises/star-wars-with-hbs

Leia Organa

## You do - Star Wars Templating
Luke Skywalker

### Bonus

Loop through the characters to render the html using a template

http://handlebarsjs.com/builtin_helpers.html#iteration

