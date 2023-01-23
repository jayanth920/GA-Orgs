[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HTML, CSS, & Sass

## Prerequisites

- [ga-wdi-boston/html-css](https://git.generalassemb.ly/ga-wdi-boston/html-css)
- [ga-wdi-boston/html-css-layout](https://git.generalassemb.ly/ga-wdi-boston/html-css-layout)

## Objectives

By the end of this, developers should be able to:

- Explain nested SCSS rules.
- Store style rules in variables.
- Use built-in Sass color functions.

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.
1. Run with `grunt serve`.

## Sass

[Sass](http://sass-lang.com) (Syntactically Awesome Style Sheets) is a powerful
[CSS preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
. CSS preprocessors use programming languages like Ruby, C, or JavaScript to add
features to your stylesheets that are absent from native CSS.
Some examples include:

- Variables
- Conditionals and Loops
- Functions

Examples of how you can use a preprocessor like Sass:

- [Recreating the Twitter Heart Animation](https://css-tricks.com/recreating-the-twitter-heart-animation/)
- [How to Create a Dark Mode in Sass](https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995)
- [Sass Color Schemes Demo](https://codepen.io/SitePoint/pen/czixa)

## Code Along: Nested Selectors

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
[`assets/styles/index.scss`](assets/styles/index.scss) file to see what the
styles look like.

By now, you've probably heard that you want your code to be DRY. This is a good
rule to apply in all of our coding practices. Where can we apply that practice
here?

Let's have a look at the declarations where `font-family` is applied.  It's
pretty repetitive. By storing the font-family value in a variable instead,
it'll make it easier for us to apply and update the value in the future.

Variables in Sass are defined like this:

```scss
$variableName: value;
```

As with any variables, we'll want to name them so they are intuitive
**reuseable**.  We could name this variable `$playfair` after the name of the
font family, but what if we want to use a different font in the future?  Instead,
if we call it `$accent-font-family`, it will always make sense no matter what font
family we choose.

_Best Practice: Save repetitive styles in variables so they can be easily
reused._

## Code Along: Using Variables

Let's work on creating a couple of variables and using them in our stylesheet.

First, let's define and set the `$accent-font-family: 'Playfair Display', serif;`.
Next, anywhere the Playfair font is used, we can replace it with the variable
name.

Stylesheets can grow to be very large making it difficult to maintain them.  One
technique that can help make things more manageable is to modularize them, just
like we do with our JavaScript code.  Let's create a separate file called
`assets/styles/variables.scss` and move our variable there.  Next, we
can import this file into our `assets/styles/index.scss` file
at the top of the page with `@import 'variables';`.

## Lab: Color Variables

Another value that is used more than once is the blue color that appears in the
title and borders.  Did you also notice that the linter displays a warning on
any lines where colors are specified?

Spend a few minutes as a team discussing the following:

- What is the linter warning?
- Why do you think the warning appears?
- How can you fix the warning?
- If you were to use a variable for the color values, how might you name them so
  they are intuitive and generic?

Once you've decided as a team, create the variables with the names you chose
inside the `variables.scss` file and use them to replace the hex code colors
in the `index.scss`.

<p>
  <details>
    <summary><strong>Note:</strong> Here are the warnings if you don't see them in Atom.</summary>

```scss
blockquote {
  // Warning: Color literals such as '#ececff' should only be used in variable declarations
  background-color: #ececff;
  // Warning: Color literals such as '#000080' should only be used in variable declarations
  color: #000080;
  ...
}

header {
  ...
  h1 {
    // Warning: Color literals such as '#000080' should only be used in variable declarations
    color: #000080;
  }
  ...
}


@media (min-width: 1000px) {
  ...

  main {
    ...

    header {
      ...
      // Warning: Color literals such as '#000080' should only be used in variable declarations
      border-right: 2px solid #000080;
      ...
    }
  }
}
```

  </details>
</p>



## Using Color Functions FTW

All of this is great, except that if we want to try out a different color
instead of the blue accent color, we have to change the lighter blue
color as well.  This can be laborious to figure out what shade of color would
look good.  Fortunately, Sass has some features that can do this for us
automatically.

Sass [color functions](https://sass-lang.com/documentation/functions/color)
provide us with the ability to use functions to calculate things like:

- A tint of a color
- A shade of a color
- A complementary color
- Adding transparency to a color

These can be especially powerful when you want to change the color of a button
on hover, for example, or to add a focus ring in a color that matches your theme
instead of the default blue.

## Code Along: Using Color Functions

There are many color functions that can create a tint of a color in Sass.  The
`scale-color()` function is one option.

In our variables file, let's automatically calculate the tint used for the
background of the pull quote in our file.

```scss

$accent-color: $blue;
$accent-color-tint: scale-color($accent-color, $lightness: 95%);

```

Now, try changing the color of the accent color to one of your choice.

## Best Practices

You'll notice that the Sass linter yells at you for a lot of things that might
seem silly. Follow the advice anyway. These simple rules, while annoying at
first, will lead to DRYer rules declarations and prevent accidental surprises
when developing your own custom CSS.

Best practice include, but are not limited to:

- Do not use HTML `id` attributes to select elements for styling.
- Always save color literals in meaningful variable names, defined as
    hexadecimal values.
- Instead of hard-coding size units, give them a good name and use arithmetic
    to adjust as necessary.
- Re-used calculations should be stored in a variable.
- Sort rule declarations by property name in alphabetical order.

For more best practices, see [Sass Guidelines](http://sass-guidelin.es/), a
community-maintained list of best practices and explanations.

## Additional Resources

- [Organizing Sass files and folders](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)
- [Color-Hex - Explore Colors and Color Palattes](http://www.color-hex.com)
- [Controlling color with Sass color functions](https://robots.thoughtbot.com/controlling-color-with-sass-color-functions)
- [Sassmeister](https://www.sassmeister.com/)
- [Sass cheatsheet](https://devhints.io/sass)
- [Sass Mixins & Operators](http://sass-lang.com/guide)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
