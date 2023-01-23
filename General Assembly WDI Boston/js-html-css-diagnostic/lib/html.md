## Question 1

Between the comments below, write HTML to create a basic web page.
The page should have a title in the head and an unordered list (with three items) 
inside the body.

```html
<!-- your answer starts here -->

<!-- your answer ends here -->
```

## Question 2

How would we reference each of the following categories of elements?

- All elements that belong to the _class_ `big`
- The element matching _ID_ `contentPane`
- Only those elements belonging to both the `important` and `red` _classes_
- All `p` elements whose direct parent elements are `div`s

```css
/* your answer starts here

your answer ends here */
```

## Question 3

Consider the following HTML and CSS code. What text color and font-family values
will the div labeled `specialDiv` have?

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
  </head>
  <body>
    <div class="things">
      <div class="specialDiv" style="font-family: cursive">
        Blah blah blah.
      </div>
    </div>
  </body>
</html>
```

### main.css

```css
* {
  color: black;
}
div {
  color: blue;
}
.specialDiv {
  color: yellow;
  font-family: sans-serif;
}
.things {
  font-family: arial;
  color: red;
  font-size: 16px;
}
```

```md
<!-- your answer starts here -->

<!-- your answer ends here -->
```

## Question 4

Order the following parts of the _box model_ from **'innermost'** to
**'outermost'**.

content, border, margin, padding

```md
<!-- your answer starts here -->

<!-- your answer ends here -->
```

## Question 5

Consider the following HTML and CSS. Assuming that the window is much larger
than the dimensions of any of the `div`s given below, how will each `div` be
arranged on the page?

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  </head>
  <body>
    <div class="parentDiv">
      <div class="divOne">divOne</div>
      <div class="divTwo">divTwo</div>
      <div class="divThree">divThree</div>
      <div class="divFour">divFour</div>
      <div class="divFive">divFive</div>
    </div>
  </body>
</html>
```

### style.css

```css
div {
  /* ... */
  /* Some other specifications, e.g. dimensions. */
  /* ... */
  display: flex;
  flex-direction: column;
}

.divOne {
  align-self: flex-end;
}

.divFour {
  /*
    HINT: Flex items have a default order value of 0
          (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#The_order_property)
  */
  order: 1;
}
```

```md
<!-- your answer starts here -->

<!-- your answer ends here -->
```

## Question 6

Consider the following media queries. We have an class of `.stretch` that has a default
`width` of 100px. How wide would an element with the class of `.stretch` be if
the screen had the _width_ of 550px?


A) The element would be 30% of 100px
B) The element would be 15% of 100px
C) The element would be 25% of 100px
D) The element would be 66% of 100px

```css
.stretch {
  width: 100px;
}

@media (min-width: 400px) {
  .stretch {
    width: 25%;
  }
}

@media (min-width: 800px) {
  .stretch {
    width: 30%;
  }
}
```

```md
<!-- your answer starts here -->

<!-- your answer ends here -->
```