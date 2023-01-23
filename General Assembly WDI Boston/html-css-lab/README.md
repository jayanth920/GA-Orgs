[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HTML & CSS Overview

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Create a new branch, `lab`, for your work.
1. Install dependencies with `npm install`.

### Best Practices: UI / Accessibility

Many website users have various disabilities and are neurodiverse. There are many
easy decisions you can make about your HTML and CSS that will help people use your
website, and these tips will also create a website that is easy to use for everyone.

- Use HTML5 elements - not just divs!
- Use high contrast between backgrounds and text.
- Caption your images in a relevant way.
- Don't use color or sound alone to show what an element does.
- Organize content with headings and subheadings.

### Debugging CSS

The best way to debug anything is to _be methodical_. This includes CSS! If your
elements are not behaving as you expect, here are the first steps. More
information about debugging CSS is in the additional resources section below.

1. Make sure your class names are exactly the same in HTML and CSS.
1. Double check that your selectors are selecting the correct element.
1. Do not ADD MORE to things that aren't working. Take out the code that doesn't
   work before adding something else.

#### Browser Template

At this point, it is probably helpful to introduce you to the Browser Template
that you will be using in many of your projects. There may be a few things
happening in here that you're not familiar with (and that's okay), but the most
important thing to understand about the Browser Template is how it is structured
in order to add styles to your HTML.

I know we just showed you three distinct ways to add CSS to a page, but things
are done a little bit differently in the Browser Template. This repo actually
relies on said template, so let's take a look at how we would add styling to the
example HTML page within. (Note, we will have to use `grunt serve` in order to
view this page in our browser). `grunt serve` spins up a local server via Grunt.
This local server allows us to work in a 'Development' environment to replicate
what the 'Deployed' environment will  be like.

### Lab: Create a cookie site

In teams, you're going to collaboratively create a new webpage using the raw
content found inside `index.html` (using semantic tags where possible).

To start, identify one member of your team to be the 'project lead'. This
person will create three new branches: `gh-pages`, `css`, and `html`; **CREATE
THESE BRANCHES FROM THE MASTER BRANCH**. The 'project lead' will be the only
team member to code during the lab, everyone else will advise them what to
code.

Next, check out the `html` branch to begin working there and run `grunt serve`
in the terminal.
  > Remember that `grunt serve`is just a tool in our tool box. We do not need to
  > fully understand how it works **yet**.

Once you finish writing your HTML, add the changes you've made to `index.html`
and make a commit. Then, run the following commands:

1. `git checkout master`
    > Move to the master branch

1. `git merge html`
    > Add the changes on the `html` branch to the `master` branch. Depending on
    > what you've done, you may get a warning about a 'merge conflict' - if that
    > happens, flag down one of the consultants.

1. `git push origin master`
    > Push your updated `master` branch up to GitHub

At this point, the `master` branch on your GitHub fork should include your new
HTML page.

Now checkout the `css` branch that you created earlier and style your site using
the `main.css` file in the `assets/styles/` directory as follows. Don't worry
about creating a link tag as the two script tags in the head of `index.html`
take care of that for you.

Take a look at your `index.html`, do you notice anything that seems off?

When we made the `css` branch from `master`, we did not have the html yet. In
order to get our updated `master` branch to our `css` branch, we need to do a
rebase. We will learn more about what a rebase does in unit 3, so don't worry
about _understanding_ it right now. To get our `css` branch up to date with
`master`:

- Confirm you've checked out the `css` branch with `git status`.
- Update the `css` branch with `git rebase master`.
- If you experience any issues, flag down a consultant.

Now, in your `main.css` file:

- Make the recipe title ("The Best Chocolate Chip Cookies") match
  [this shade of brown](http://en.wikipedia.org/wiki/Shades_of_brown#Chestnut),
  and make it larger than the rest of the text on the page.
- The font for the whole page should be 'arial', except for the recipe title
  (which should be in 'cursive').
- All text in the page should be centered.
- In the ingredients list, give each ingredient a unique color; any time that
  ingredient appears in the recipe, make it that same color.
- And feel free to experiment and add whatever else you want!

Once you are finished styling your site, commit your changes and merge it with
master like you did with your html branch

1. `git checkout master`

1. `git merge css`

1. `git push origin master`

#### GitHub Pages Deployment

The last thing we're going to do is **deploy** (i.e. host) this web page through
a service that GitHub provides called GitHub pages. To do this, follow the
 instructions given in the [GitHub Pages Deployment Guide](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide).

#### Bonus (Optional Section)

If you're feeling good about all of this, do some googling and see if you can
find a way to style the first letter of every step in the recipe using _only
CSS_ - no writing new HTML!

## Additional Resources

Here are some sites you might want to bookmark, if you haven't already.

- [HTML5 Element Flowchart](http://html5doctor.com/lets-talk-about-semantics/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com)
- [Using the browser to debug CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
