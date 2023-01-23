# CSS Review

## Learning Objectives

- Describe what on a webpage can be modified with CSS, and what cannot
- Identify CSS methods that can replace bad habits in HTML
- Properly separate the concerns of semantics and style
- Identify the components of the box model
- Differentiate between border-box and content-box values for box-sizing

## Framing (5 minutes / 0:05)

### What Is CSS?

> Cascading stylesheets (CSS) are what make webpages look like more than just words on a page. HTML's only purpose is to say what purpose chunks of content serve. CSS's only purpose is to say what a chunk with a certain purpose should look like.

You can accomplish [a lot with very little](http://jgthms.com/web-design-in-4-minutes/) using CSS. If you want to go the extra mile, you can accomplish some [seriously amazing things](http://codepen.io/). Oftentimes when dealing with CSS, [it can be a pain](http://i.imgur.com/Q3cUg29.gif).

No matter how you look at it, however, a working knowledge of CSS is absolutely essential. When it comes time to show off your projects at the Student Spotlight after this course, the first thing most prospective employers will see is your styling. And as we all know, first impressions are incredibly important.

This afternoon is going to be almost entirely you working through some exercises we have prepared for you. You will not turn in these exercises.

This is a step towards building that working knowledge of CSS and solidifying what you learned in the pre-work. Your goal isn't to memorize all the 500+ CSS properties that are out there. That's impossible. Your goal is to just get an idea of what you can accomplish with CSS, and then know what to Google.

### Tools That Can Help

**[The CSS Validator](http://jigsaw.w3.org/css-validator/#validate_by_input)** is a tool into which you can copy and paste your CSS, and it'll tell you precisely what's wrong with it. We'll be expecting you to validate your CSS during this course.

**[The Chrome Element Inspector](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/?hl=en)** lets you look at a specific element on a page, see exactly which CSS rules are being applied to it, and turn those rules on and off and modify them. It doesn't change your file; refresh the page, and the changes are gone.

### What Should You Do If Something Is Unfamiliar?

> 1. Read it like English. CSS is intended to be readable, although sometimes it's more successful than at other times.
> 2. Look it up. If you don't know what `box-sizing` means, Google `css box-sizing`.

The purpose of this class isn't for you to walk away being an expert in all things CSS. That takes months, and tolerating many unexpected, sometimes counter-intuitive results. Rather, it's for you to be exposed to all the things that can be accomplished with CSS. If they're on your radar, you can always look them up later.

## Scavenger Hunt

For the rest of class, we're going to do a series of CSS exercises. The best way to get better at something is to practice. We will review the CSS you've already learned, while refining and adding to your understanding.

Identify different ways of writing ***selectors*** as you progress through the exercises. There's a checklist below to outline important takeaways from the exercises.

> Note: The checkboxes are not clickable. In your own notes, you can copy and paste the below items into a text editor and write the appropriate CSS rules & selector below.

Write a ***selector*** that will select and apply a style to:
 - [ ] any element
 - [ ] an element of type E
 - [ ] any element of type E and any element with type F
 - [ ] any element with ID equal to "myid"
 - [ ] any element with class equal to "myclass"
 - [ ] an E element with ID equal to "myid"
 - [ ] an E element with class equal to "myclass"
 - [ ] an F element child of an E element
 - [ ] an F element that is a direct child of an E element

## You Do: [CSS Diner](http://flukeout.github.io/) (10 minutes / 0:15)

Please complete this exercise on your own. It's an interactive walkthrough on the different ways you can select elements in CSS. Don't worry if you don't get to the end. The important part is that you get through the earlier basic CSS selectors and, if you have time, give the more advanced selectors and pseudo-selectors a spin.

## You Do: [CSS Review](https://github.com/ga-wdi-exercises/css-review) (30 minutes / 0:45)

You will be working in pairs to complete this exercise. Please count off from 1 to `[class size / 2]`.

This exercise is divided into multiple sections. Complete them in the following order...
  1. Selectors   
  2. Sizing  
  3. Positioning  

### A Note About `width` and `box-sizing`

![](https://dl.dropbox.com/s/d1fk9mu23q0byhh/Screenshot%202016-05-25%2009.08.53.png?dl=0)

The **box model** explains how CSS `width` is calculated. By default, how wide an element is on the page is a combination of `width` + `padding` + `border` and the rendered `height` = `height` + `padding` + `border`. This can be problematic when trying to create a layout or position things logically on the page.

The [box-sizing: border-box;](http://codepen.io/team/css-tricks/pen/970f26f621cfa3ae3eec7e2a6b0e8c97) property incorporates the size of the border and padding into the rendered width.

> If I say the width is 200px, gosh darn it, it’s gonna be a 200px wide box even if I have 20px of padding. - Paul Irish on box-sizing

### Questions (10 minutes / 0:55)

## Break (10 minutes / 1:05)

## You Do: [eCardly](https://github.com/ga-wdi-exercises/ecardly) (30 minutes / 1:35)

In this exercise you will be given an image of a website. It's your task to use the CSS properties you know -- or have yet to learn! -- to recreate it using HTML and CSS.

> If you'd like to add a webfont, take a look at [Lato on Google Fonts](https://fonts.google.com/specimen/Lato?query=lato).

### Questions (10 minutes / 1:45)

## You Do: [Moonrise Kingdom](https://github.com/ga-wdi-exercises/moonrise_kingdom) (30 Minutes / 2:15)

Again, you will be recreating an image -- albeit a different one -- using code.

## Closing / Questions (10 minutes / 2:30)

There are over 500 CSS properties. It's impossible to memorize them. The key is to just get an idea of what you can accomplish with CSS, and then know what to Google.

-----

## Homework: [Wendy Bite](https://github.com/ga-wdi-exercises/wendy_bite)

-----

## Appendix

### Review Slides

[HTML & CSS Review](html_css_review.pdf)

### The Three Places CSS Can Go (5 minutes / 0:15)

#### Inline Styles (Bad)

```html
<section>
  <article style='border-bottom: 1px solid black;'>
     ...
  </article>
</section>
```

#### Internal Styles (Better)

```html
<!doctype html>
<html>
  <head>
    <style>
      article {
        border-bottom: 1px solid black;
      }
    </style>
  </head>
  <body>
    <section>
      <article>
	 ...
      </article>
    </section>
  </body>
</html>
```

#### External Styles (Best)

```html
<!doctype html>
<html>
  <head>
    <link rel='stylesheet' type='text/css' href='styles.css'>
  </head>
  <body>
    <section>
      <article>
	 ...
      </article>
    </section>
  </body>
</html>
```

```css
/* styles.css */

article {
  border-bottom: 1px solid black;
}
```

### Selectors

| Pattern   | Meaning                                             |
|:----------|:----------------------------------------------------|
| `*`         | any element                                         |
| `E`         | an element of type E                                |
| `E, F`      | any element of type E and any element with type F   |
| `#myid`     | any element with ID equal to "myid"                 |
| `.myclass`  | any element with class equal to "myclass"           |
| `E#myid`    | an E element with ID equal to "myid"                |
| `E.myclass` | an E element with class equal to "myclass"          |
| `E F`       | an F element child of an E element                  |
| `E > F`     | an F element that is a direct child of an E element |

> [And many more!](https://www.w3.org/TR/css3-selectors/#selectors)

[Children vs. Descendants](https://css-tricks.com/child-and-sibling-selectors/)

### Units

| Unit | Description                                                                                                                                                                                                                                            |
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `px`   | Relative to the viewing device. For screen display, typically one device pixel (dot) of the display. For printers and very high resolution screens one CSS pixel implies multiple device pixels, so that the number of pixel per inch stays around 96. |
| `%`    | Relative to the containing block                                                                                                                                                                                                                       |
| `em`   | Relative to the font-size of the element (2em means 2 times the size of the current font)                                                                                                                                                              |
| `rem`  | Relative to font-size of the root element                                                                                                                                                                                                              |
| `vw`   | Relative to 1% of the width of the viewport                                                                                                                                                                                                            |
| `vh`   | Relative to 1% of the height of the viewport                                                                                                                                                                                                           |

> [More Units](http://www.w3schools.com/cssref/css_units.asp)  
> [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/length)  

### The `position` Property

[CSS Tricks Guide to Position](https://css-tricks.com/almanac/properties/p/position/)

-----

## Quiz Questions

- What does `*` select?
- What does `box-sizing: border-box` do?
- What's the difference between borders, margins, and padding?
- What's the difference between an outline and a border?
- What's the difference between `position:relative`, `position:absolute`, and `position:fixed`?

## Further Reading

- [Shay Howe's HTML/CSS Guide](http://learn.shayhowe.com)
- [LearnLayout.com](http://learnlayout.com/)
  - An great interactive tutorial that details CSS' many properties and quirks.
- [W3Schools CSS Reference](http://www.w3schools.com/cssref/default.asp)
  - Almost every CSS property ever.
- [Mozilla Developer Network CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - Like W3Schools, but in *much* more detail.
- [CanIUse.com](http://caniuse.com/)
  - Search for a CSS property (or HTML, or JS), and it'll tell you on which web browsers it functions.
- [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
  - Copy and paste your CSS in here and it tells you what's wrong with it.
- [CSS Tricks Almanac](https://css-tricks.com/almanac/)
  - A list of css selectors and properties
- [CSS Units - em vs px etc](http://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/)

## Additional Resources

- [Codrops](http://tympanus.net/codrops/)
- [Codyhouse](https://codyhouse.co/library/)
