# HTML Review

## Learning Objectives

- Differentiate between semantics and style, and explain how that relates to HTML and CSS.
- Identify best practices in HTML.
- List commonly-used HTML elements.

## Anatomy of HTML

This is "on paper" so you can refer back to it if need be. Usually, the only thing people have trouble remembering is *attributes*.

```html
<div class="bio">
  <p style="color:red;">My name is Yon Yonson. I come from Wisconsin.</p>
  <img src="me.jpg" alt="Hello" />
</div>
```
- `<div class="bio">My name...</div>`: Element
- `<div>`, `</div>`: Tags
- `<div>`: Open-tag
- `</div>`: Close-tag
- `<img />`: Self-closing tag
- `class=""`: Attribute
- `style="color:red;"`: Inline styling. (**Bad**. See below.)
- `My name is Yon Yonson...`: Content

## Semantics

HTML is all about grouping bits of text by their semantic value, which we define as "the function of words beyond their dictionary definition." For instance: a paragraph in a newspaper has a different semantic value from a headline. A list of bullet points has a different semantic value than the disclaimer at the bottom of a page.

Every HTML element meant to contain text tells you a bit about the function of the words inside that element.

## Robin's Rules of HTML

These are called "Robin's Rules" rather than just "Rules" because there really isn't a "right" way to do HTML. There are, however, commonly-accepted best practices.

1. Your HTML [**must always validate**](https://validator.w3.org/#validate_by_input).
  - That is: It should follow the standards established by the W3, or the World Wide Web Consortium.
  - Simply copy and paste your page's *complete* HTML into that form and it'll list all the errors for you.
    - **Note:** Fixing one error may actually fix multiple!
- The **bare minimum** HTML you need on any webpage is:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Page</title>
    </head>
    <body>

    </body>
  </html>
  ```
- Elements have to nest.
  ```html
  Wrong: <tagOne><tagTwo></tagOne></tagTwo>

  Right: <tagOne><tagTwo></tagTwo></tagOne>
  ```
- Every open tag needs an end tag, except for `<img />`, `<link />`, and a few others.
  - Those "others" include `<meta />` and `<input />`, which will be used much more later on, and some elements you're discouraged from using (see below).
- The first HTML file you make for any website should be `index.html`.
  - Notice that if you go to `amazon.com` and `amazon.com/index.html`, it's the same page. If you don't put a file name and extension at the end of a URL, servers always look for and display `index.html`.
- Indentation is **really important** for readability (and employability).
  ```html
  <body>
  <main>
  <h1>This is wrong.</h1>
  </main>
  </body>

  <body>
    <main>
      <h1>This is right.</h1>
    </main>
  </body>
  ```
- Everything you **see on the page itself** goes in the `<body>`. Everything you **don't see on the page itself, but that somehow affects it** goes in the `<head>`.
  - The `head` generally includes `<title>` and any stylesheets and Javascript.
- Your `class` names should always be semantic:
  ```html
  <div class="centered">This is bad.</div>

  <div class="heading">This is good.</div>

  <header>This is better.</header>
  ```
  - `centered`, `blue-text`, and `comic-sans` would be **stylistic** class names: they don't tell you the function of words, just what they look like. `heading`, `disclaimer`, and `user-info` are **semantic** class names.

## HTML You Are Not Allowed To Use Under Any Circumstances

This HTML is all stylistic -- that is, it has no semantic value.

All your styling should be done by CSS. If you use the tags below your page will still work, but:
- It may not look as good
- It will be harder to manage
- It will be very unimpressive to any seasoned developers and employers who look at it

```
<hr />
<small>
<big>
<b>
<i>
<u>
<center>
<font>
<blink>
<marquee>
color=""
border=""
bgcolor=""
align=""
width=""
height=""
```

## HTML You're Allowed To Use Only If You Know What You're Doing

This HTML is really easy for junior designers to abuse, and can make your code look poorly-written. Only break the rules if you know them!

For example: `iframe` is very useful for embedding YouTube videos and other media. It can also be used to, say, give your page a sidebar. This should be done by Javascript or a server-side process, which we'll study later on.

[Here's an example of frames being used inappropriately](http://www.warnerbros.com/archive/spacejam/movie/cmp/bball/bballframes.html)... (although it was perfectly fine for 1996).

```
<br />
<pre>
<code>
<kbd>
<iframe />
<table>
<style>*
style=""
```

> \* Use external stylesheets instead: `<link rel="stylesheet" href="myStylesheet.css" />`

## You Do

Please pair up and take 10 minutes to tackle:

[Fix This HTML](https://github.com/ga-wdi-exercises/html_fixit)

Then, we'll answer questions.

If you finish, move on to:

[Match the Tags](https://github.com/ga-wdi-exercises/html_tag_matching)

## Resources

- References ("HTML Dictionaries")
  - [W3Schools: More concise](http://www.w3schools.com/tags/tag_iframe.asp)
  - [Mozilla: More detailed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [A more detailed HTML lesson plan](https://github.com/ga-wdi-lessons/html-intro/blob/master/02_html.md#now-were-ready-to-learn-html)
