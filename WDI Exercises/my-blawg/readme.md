# My Blawg: JS Selectors Practice

Open the included `index.html` in your browser. 

# Part One: Vanilla JS

Write down how you would select the following DOM objects on "My Blawg". Use only the following methods or attributes:

- `querySelector`
- `querySelectorAll`
- `getElementById`
- `innerHTML`

---

1. The first `<a>` element on the page
- All `<a>` elements on the page
- Using its ID, the `<h1>` at the top of the page
- All elements with class `post`
- The first element with class `post`
- The second element with class `post`
- The HTML content of the first `<p>` element on the page

# Part Two: jQuery

First, use a `<script>` tag in `index.html` to include the minified jQuery file in the `js` folder.

Then, write down how you would select the following DOM objects on "My Blawg". Use only the following methods or attributes: 

- `$`
- `eq`
- `html`

---

1. All `<a>` elements on the page
- The first `<a>` element on the page
- Using an ID, the `<h1>` at the top of the page
- All elements with class `post`
- The first element with class `post`
- The second element with class `post`
- The HTML content of the first `<a>` element on the page

Bonus:
- Using a CSS pseudo-selector, the third element with class `post`
- Using one of its HTML attributes, the fourth `<img>` on the page

# Part Three: Getting and Setting

Using these jQuery methods or attributes, follow the instructions below:

- `$`
- `eq`
- `html`
- `css`
- `prop`

Things to consider:
- What's the difference between `$("body").html()` and `$("body").html("hello")`? 
- `$("p")` selects all `<p>` elements on the page.
  - If you run `$("p").html()`, how many elements' HTML does it return?
  - If you run `$("p").html('hello')`, how many elements does it affect?
  - What about the other methods?

---

1. Get the HTML content of the second `<p>` element on the page
- Set the HTML content of the second `<p>` to something else weird
- Get the background color of the body
- Set the background color of the body to "burlywood"
- Get the `alt` value of the fourth `<img>` on the page
- Set the `alt` value of the fourth `<img>` on the page to "Why is my boat upside down?"

