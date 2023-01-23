[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Bootstrap and Sass

## Prerequisites

- [ga-wdi-boston/html-css-layout](https://git.generalassemb.ly/ga-wdi-boston/html-css-layout)

## Objectives

By the end of this, developers should be able to:

- Create mobile-first, responsive site layouts using
    [Bootstrap](http://getbootstrap.com).
- Reference Bootstrap documentation.
- Add Bootstrap components to front end projects.
- Use Sass nested selectors and variables.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.
2. Install dependencies with `npm install`.
3. Use `grunt serve` to start the application.

## Bootstrap

Bootstrap is the "world’s most popular front-end component library" for
developing responsive, mobile first projects on the web. It's the tenth
most-starred project on [GitHub](https://github.com/twbs/bootstrap) according
to the [Bootstrap wiki](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)).

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. It
allows you to quickly prototype your ideas or build an entire app using Sass
variables and mixins; a responsive grid system; and, an extensive collection
of prebuilt components and powerful plugins built on jQuery.

Checkout some of the [award-winning sites](https://www.awwwards.com/websites/bootstrap/)
built on Bootstrap.

### Bootstrap's Grid System

Bootstrap is built on a grid that consists of rows and columns, much like
a table. Bootstrap utilizes a 12-column grid system that allows us to combine
different size columns to make custom responsive layouts.

![Bootstrap Grid Example](https://media.git.generalassemb.ly/user/16103/files/96713700-03a5-11e9-8eb8-9323ad08acbf)

## Bootstrap Documentation

For components and jQuery plugins always reference the [Bootstrap documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/).
Let's take a look at some of the areas within the documentation that will be
helpful for us:

- [Grid](https://getbootstrap.com/docs/5.0/layout/grid/)
  - Describes how to use the Bootstrap grid.
- [Reboot](https://getbootstrap.com/docs/5.0/content/reboot/)
  - Provides an overview of typography, images and tables.
- [Components](https://getbootstrap.com/docs/5.0/components/accordion/)
  - Explains how to use each of the Bootstrap components,
  such as buttons, forms, modals, navbars, alerts and much more.
- [Utilities](https://getbootstrap.com/docs/5.0/utilities/api/)
  - Demonstrates how to use Bootstrap's many utility classes.

## Working with the Bootstrap Grid

### Containers

Containers are essential to creating layouts with Bootstrap. These are often
just `div` or `section` elements with a `container` or `container-fluid` class.

The `container` class will be a fixed-width, so it will keep your content
centered and stop it from extending to the edge of the screen. It's max-width
will change at screen size breakpoints, so as you change the size of the
browser, the margins will adjust as well.

Use `.container` for a responsive, fixed-width container.

```html
<div class="container">
  ...
</div>
```

The `container-fluid` class, on the other hand, will expand to fit 100% of the
width of it's parent element, which is often the body itself. Use this
container class if you don't want any margins on the side of your content.

Use `.container-fluid` for a full width container, spanning the entire width of
your viewport.

```html
<div class="container-fluid">
  ...
</div>
```

### Rows

Rows are wrappers for Bootstrap columns. Each container should have
**at least** one child element with the `row` class, and all columns should
be child elements of a row.

Rows counteract the horizontal padding added to columns with negative
margins. This way, all the content in your columns is visually aligned.

### Columns

Bootstrap's 12-column grid system is based on elements with different `col-*`
classes. These classes specify the width of the column (`1` through `12`) at
a specific breakpoint (blank, `sm`, `md`, `lg`, or `xl`).
Breakpoints are set pixel boundaries within the media queries for our page or
site. Bootstrap has 5 built-in breakpoints.

Here is a breakdown of the available classes and when we should use them:

![col-breakdown](https://media.git.generalassemb.ly/user/16103/files/a89deb80-a0e8-11ea-8e45-c4c8c4e284d6)

## Demo: Mobile-first Layout

Let's get some firsthand experience with Bootstrap. In the `index.html` file
located in this repo, there is a simple grid that's been created with the
col-#, col-sm-#, col-md-#, and col-lg-# classes. Before we look at the
demo in the browser, let's open up the file in Atom and examine the HTML
and CSS classes that have been added to it.

## Lab: Mobile-first Layout

Now try it on your own, keeping in mind mobile-first practices.

- Make an evenly spaced 3x3 grid on mobile (small) screens or smaller
- Once this works, have your grid stay 3x3 on medium screens
- Finally, have your columns be 4x1, followed by 2x2, followed by one
full-width column on large sized screens or larger

Don't forget to:

- Place your columns within a row.
- Place your row within a container.

## Code-along: Modals and More

Modals are streamlined, but flexible dialog prompts powered by JavaScript. They
support a number of use cases from user notification to completely custom
content and feature a handful of helpful sub-components, sizes, and more.

Bootstrap provides numerous custom JavaScript methods for us to use with modals.
It's important that we use the provided JavaScript methods as
described in the documentation. For example, using jQuery's `.hide` method
will not work the way you expect it to with a modal. Instead, use the
preferred Bootstrap `.modal('hide')`. Check out
[the Bootstrap docs](https://getbootstrap.com/docs/5.0/components/modal/#methods)
for further explanation.

Follow along as we add a Bootstrap modal to our current sandbox page.

## Sass

[Sass](http://sass-lang.com) (Syntactically Awesome Style Sheets) is a powerful
[CSS preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor).
CSS preprocessor use programming languages like Ruby, C, or JavaScript to add
features to your stylesheets that are absent from native CSS.
Some examples include:

- Variables
- Conditionals and Loops
- Functions

> Note: The `browser-template` you've been using and will use for your projects is already
> set up to work with Sass. You'll work in a stylesheet named something like `index.scss`.
> That `.scss` ending means we can write Sass code in that file. When your server runs, it
> will convert the Sass code you write into CSS that the browser can understand.

Bootstrap uses Sass in it's own stylesheets. Let's take a look at how Sass works
so we can use it along with our regular CSS and Bootstrap styles.

### Code Along: Nested Selectors

This should feel natural. Using [Sassmeister](https://www.sassmeister.com/),
a tool that converts our Sass styles into CSS styles, let's go from:

```css
.box {
  align-items: center;
  display: flex;
  height: 50vmin;
  justify-content: center;
  transition: .25s ease-in;
  width: 50vmin;
}

.box.dark {
  background: #222;
  color: #fff;
}

.box.dark:hover {
  background: #ff1493;
}

.box > h1 {
  font-family: sans-serif;
  text-align: center;
  user-select: none;
}
```

To:

```scss
.box {
  align-items: center;
  display: flex;
  height: 50vmin;
  justify-content: center;
  transition: .25s ease-in;
  width: 50vmin;

  &.dark {
    background: #222;
    color: #fff;

    &:hover {
      background: #ff1493;
    }
  }

  > h1 {
    font-family: sans-serif;
    text-align: center;
    user-select: none;
  }
}
```

With HTML that looks like this:

```html
<section class="box dark">
  <h1>Hello!</h1>
</section>
```

Why might we want to use nesting?

## Using Variables in Sass

Let's start by seeing how variables are defined.

Make sure your server is running with `grunt serve`. Now, open the
[`app/styles/index.scss`](app/styles/index.scss) file to see what the
styles look like.

By now, you've probably heard that you want your code to be DRY. This is a good
rule to apply in all of our coding practices. Where can we apply that practice
here?

Let's have a look at the declarations where `font-family` is applied. It's
pretty repetitive. By storing the font-family value in a variable instead,
it'll make it easier for us to apply and update the value in the future.

Variables in Sass are defined like this:

```scss
$variableName: value;
```

As with any variables, we'll want to name them so they are intuitive and
**reuseable**. We could name this variable `$playfair` after the name of the
font family, but what if we want to use a different font in the future? Instead,
if we call it `$accent-font-family`, it will always make sense no matter what font
family we choose.

_Best Practice: Save repetitive styles in variables so they can be easily
reused._

### Code Along: Using Variables

Let's work on creating a couple of variables and using them in our stylesheet.

First, let's define and set the `$accent-font-family: 'Playfair Display', serif;`.
Next, anywhere the Playfair font is used, we can replace it with the variable
name.

Stylesheets can grow to be very large making it difficult to maintain them.  One
technique that can help make things more manageable is to modularize them, just
like we do with our JavaScript code.  Let's create a separate file called
`app/styles/variables.scss` and move our variable there.  Next, we
can import this file into our `app/styles/index.scss` file
at the top of the page with `@import 'variables';`.

### Demo: Bootstrap's Color System

Bootstrap has a [color system](https://getbootstrap.com/docs/4.0/getting-started/theming/#color) that is used consistently throughout all of the
components and utilities. This makes it easy for us to theme our sites and
applications using these built in classes and the underlying Sass variables.

For example, to update all of the components which have Bootstrap's primary
color applied, we can simply change one variable:

```scss
/* Add BEFORE Bootstrap is imported */
$primary: #ff1493;
```

We can also use these variables to style our application! Instead of using the
color keywords in our code like `white`, `grey`, and `cyan`, we can use Bootstrap's
color variable names, or even create our own variables based on those names!

```scss
$body-bg-color: $grey-200;
$box-bg-color: $secondary;
$font-color: $light;
$alt-color: $cyan;
...
color: $white;
```

## Bonus: Put It All Together

On your own:

- Referencing the Bootstrap documentation add a form to your
    modal.
- Using your knowledge of get-form-fields write a function so that when "save changes"
    is clicked the input in the input field is logged to the browser's console.
- Referencing the Bootstrap documentation add a navbar to your page which
    has the `navbar-dark` and `bg-primary` [color scheme](https://getbootstrap.com/docs/4.3/components/navbar/#color-schemes) classes and fix it to the top of
    the screen with the `fixed-top` [placement](https://getbootstrap.com/docs/4.3/components/navbar/#placement) class.
- Move the button that opens up the modal to the navbar and change the
    [button color](https://getbootstrap.com/docs/4.3/components/buttons/#outline-buttons) by swapping the `btn-primary` class to `btn-outline-light`.
- Use Sass variables to change the "primary" color to be `#73628A`

## Useful Resources

- [Sitepoint Sass Mixins](http://www.sitepoint.com/5-useful-sass-mixins-bootstrap/)
- [Bootstrap Grid Tricks](http://willschenk.com/bootstrap-advanced-grid-tricks/)
- [Hongkait Grid Tricks](http://www.hongkiat.com/blog/bootstrap-and-sass/)
- [Bootstrap Documentation](http://getbootstrap.com/)
- [Semantic HTML](http://stackoverflow.com/a/24765186/402618/)
- [Improve Your Markup by Extending Classes](https://coderwall.com/p/wixovg/bootstrap-without-all-the-debt)
- [Bootstrap Overview Container](https://getbootstrap.com/docs/4.1/layout/overview/#containers)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
