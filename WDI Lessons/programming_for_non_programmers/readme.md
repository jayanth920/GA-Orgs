# Programming For Non-Programmers

HTML, CSS, Javascript, and an intro to the Web

# Warm-Up (CSS)

## Intro (5 min)

We're going to start with a warm-up to get in the mindset of thinking about code.

I'm going to show you a website that has all of its HTML and CSS written. No more code needs to be written. The only problem is the CSS is all out of order. Your job is to put the CSS in order so that the site matches a photo of the completed site.

### Don't know CSS?

No problem! Here's a quick run-down:

CSS is a way of applying stylistic rules to different parts of a webpage. When I say "stylistic rule", I mean something like, "This paragraph should be bold, and this one should be red."

The format always looks like this:

```css
.name_of_a_part_of_the_page{
  background-color:orange;
  font-style:italic;
}
```

If it looks totally unfamiliar, just breathe and read what the words in the code are saying.

### Please do not move the lines that are mostly asterisks (`*****`)

## [You Do: CSS Practice](http://play.magnetichtml.com/css_practice_start) (20 min)

## Review (10 min)

- What does `line-height:30px` do?
- What's the difference between...
  - `color:purple` and `background-color:purple`?
  - `border-style:dashed` and `border-style:solid`?
  - `padding` and `margin`?
  - `font-family:cursive` and `font-family:serif`?

# CSS (5 min)

There are about [482 different CSS *properties*](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference), or rules.

Q. What's the best way to memorize all of them?
---
> Don't! That's what Google is for. Most web designers and programmers memorize very little. If they do memorize something, it's by accident.

Q. What might you Google if you...
---
- ...wanted to make a paragraph red?
  > "css paragraph color"
- ...wanted to center an image horizontally?
  > "css center image"
- ...wanted to change how your webpage looks when it's viewed on a mobile device?
  > "css change webpage for mobile"

# HTML

- https://github.com/ga-dc/html_fixit/blob/master/readme.md
- http://ga-dc.github.io/html_tag_matching/
```
body:   "page",
h1:     "headline",
p:      "paragraph",
a:      "link",
strong: "important",
em:     "emphasis",
img:    "image",
ol:     "list",
li:     "list-item"
```

# JS

https://github.com/ga-wdi-exercises/js_order_practice

```
document.body.style.backgroundColor = prompt("Enter a color!");
```

- Robot can
  - Add
  - Subtract
  - Multiply
  - Divide
  - Find the remainder of one number divided by another
  - Remember a number ("Number A is 42")
  - Say something
  - "If Number A equals 42, do this. Otherwise, do that."
  - Go back to an earlier step

- https://github.com/ga-dc/pixart_js_mini
