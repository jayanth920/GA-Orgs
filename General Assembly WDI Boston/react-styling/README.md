[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Styling

## Prerequisites

- [react](https://git.generalassemb.ly/ga-wdi-boston/react)
- [react-components-props](https://git.generalassemb.ly/ga-wdi-boston/react-components-props)
- [react-components-state](https://git.generalassemb.ly/ga-wdi-boston/react-components-state)

## Objectives

By the end of this, developers should be able to:

- Compare and contrast four ways to style in React
- Use objects to add dynamic inline styles
- Identify the ES6 tagged template literal syntax
- Create a component with styled components

## Preparation

1. Fork and clone this repository. [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Introduction

Why would styling be different in React?

It's not really.  We can still use the method that we've used in the past:
add our styles in a separate CSS (or Sass) file and add it to our page
manually or by leveraging some tools to automatically bundle it into our page.

With that in mind, you might be asking the perennial question:
_why fix it if it ain't broke_?

## Motivation for Change

Back in 2014, Christopher Chedeau, a frontend dev at Facebook, and now,
co-creator of React Native and Prettier, introduced us to the challenges of
[working with CSS at scale](https://vimeo.com/116209150):

1. **Global Namespacing:** Best practices say don't use global namespacing! So,
     why do we use them in CSS?
1. **Dependencies:** CSS files can be too big when consolidated into a single file.
     Code-splitting is how we solve this in JS. In CSS, dependencies are not clear
     making it hard to statically analyze it. :disappointed:
1. **Dead Code Elimination:**  We have all sorts of tools that help with
     _tree shaking_ and dead code elimination in JS.  Since JS is statically
     analyzable, we can determine which bits are really being used. In CSS,
     not so much...
1. **Minification:** Minification and (perhaps more importantly) _uglification_
     are really hard since we often do things like add/remove CSS classes using
     JS.  When both are handled by the same tooling the process is more reliable.
1. **Sharing Constants:** Sharing values between JS and CSS is a nightmare at
     scale, and can be a headache even on small projects during maintenance
     phases.  Trying to keep multiple values in sync goes against the principles
     of writing DRY code!
1. **Non-deterministic Resolution:**  Due to the nature of CSS specificity rules
     and cascading, your results can vary greatly depending on the order in
     which the bundler combines files.  Managing all of this is largely left to
     the developers to determine the correct order.  Further, testing can be
     difficult, expensive and unreliable.
1. **Isolation:** How do we handle one-off styling?  What will the consequences
     be of making a "small  tweak" to a base component?  There's no real way to
     know what the implications will be in the short or long term.  Even more
     challenging is that there's not really a way to write linter rules to
     prevent devs from making these kinds of changes.

### Today

Today, because of the evolution of our frameworks, toolchains and even the changes
in developer roles in many organizations, many of these problems can surface even
when we're not working at scale.

Additionally, and importantly, components are meant to be **self-contained**
and **reusable**.  They can't live up to their potential if they have
dependencies built-in!

Controlling behaviors internally is what the promise of components offers.
When our CSS _behaviors_ are an integrated part of our code, we can use `props`
and `state` to thoroughly control the view in a declarative fashion, versus the
imperative way we do it with jQuery  (for example) by swapping out classes.
This can take some time to get used to, but once you do, you never want to
go back!

Fortunately, lots of techniques, frameworks, tooling and other open source
projects have been built and popularized to fill the gaps.  Four popular ways
that you'll likely encounter are:

## CSS Stylesheet

Out of the box, create-react-app supports importing CSS files directly into our
components.  The GA react-template(s) supports also importing scss files.  This
gives us the ability to have **something akin to** local scoping of our styles,
while still being able to access all features of the CSS specification plus the
ability to use Sass functionality.

We can also still _sort of_ have access to dynamically styled components by
adding and removing classes.

### Benefits

:white_check_mark: Familiarity

:white_check_mark: Access to full CSS specification

:white_check_mark: Limited access to `props` and `state`

:white_check_mark: Component level styles stay with the component

### Drawbacks

:x: **All the reasons above!**

### Demo: Stylesheet Cascading Buttons

We'll look at the benefits and drawbacks of styling with stylesheets in
[`StylesheetBlueButton.js`](src/components/shared/StylesheetBlueButton.js) and
[`StylesheetPinkButton.js`](src/components/shared/StylesheetPinkButton.js)

## Inline Styles

The term "separation of concerns" is a design principle in CS that refers to
separating programs into distinct sections to make it modular.  Under SoC, it's
logical that since our CSS, HTML, and JS all do different jobs, they should be
separate and independent of one another, and for many years the web dev
community preached this approach (vociferously :smiley:).  As a result,
[inline styles were considered bad practice](https://stackoverflow.com/questions/2612483/whats-so-bad-about-in-line-css).

Inline styles, particularly in the context of components, make a lot of sense
though and follow the principle of
[LoD](https://en.wikipedia.org/wiki/Law_of_Demeter), which says:
_what goes together should stay together_, and it does solve some of the
problems that external CSS files create.

### Inline Styles Example

#### InlineStyleExample.js

```jsx
import React from 'react'

// A styles object. Notice how properties are in camelCase.
const containerStyles = {
  backgroundColor: '#FD5F00',
  color: 'white'
}

const InlineStyleExample = () => (
  // To use inline styles, pass the `style` attribute your styles object (containerStyles)
  <div style={containerStyles}>
    Inline Styles!
  </div>
)

export default InlineStyleExample
```

Using inline styles this way requires no special tooling or knowledge beyond
how to work with plain old Javascript objects (POJOs).

#### Benefits of Inline Styles

:white_check_mark: No special tools and takes advantage of an existing toolchain

:white_check_mark: Access to `props` and `state`

:white_check_mark: Component level styles stay with the component

:white_check_mark: Locally scoped with access to external values

:white_check_mark: Statically analyzable (more testable, tree shakeable,
 lintable, etc.)

#### Drawbacks of Inline Styles

:x: Limited support of CSS specification (no animations, pseudo-classes,
pseudo-elements, etc.)

:x: Hard to read

:x: Hard to document and maintain

##### Special Considerations

:question: Easy overrides (can be good :white_check_mark: or bad :x:,
but are hard to prevent)

### Code Along: Inline Hero Image

Let's use inline styles to make our [`Home`](src/components/routes/Home.js)
component pop by adding a hero image!

### Lab: Inline Hero Gradient

Now it's your turn! Style the
[`HeroGradient`](src/components/shared/HeroGradient.js) exactly like the
previous hero image, but use a gradient for a background instead!

Use this online [css gradient generator](https://cssgradient.io/) to generate
the CSS for a gradient you like. **Note:** This cite will generate two lines of
CSS. The first line is used as a backup if the gradient cannot be shown. You
will need to use the second line for your inline style, since you can only
have one background property.

## CSS in JS with Styled Components

CSS-in-JS is supported in various forms through many open source projects.
One of the most popular and advanced is
[Styled Components](https://www.styled-components.com/).

Styled Components does a great job of taking advantage of a feature in JS called
a _Tagged Template Literal_ that was introduced in ES6. Essentially, the weird
syntax seen below is similar to calling a function with the ` `` ` (backticks)
substituting for `()` (parens). :scream:

### Styled Components Example

First install styled components with:

```bash
npm install styled-components
```

Then use it...

```jsx
import React from 'react'
import styled from 'styled-components'

// Create a new styled-components `button` with custom styling
const HotPinkButton = styled.button`
  border-radius: 25px;
  border: 2px solid;
  color: white;

  /* Accessing the 'primaryColor' prop for the background */
  background: ${(props) => props.primaryColor};
`

const HotPinkComponent = (props) => (
  <div>
    <HotPinkButton primaryColor='HotPink'>Click this button!</HotPinkButton>
  </div>
)

export default HotPinkComponent

```

#### Benefits of Styled Components

:white_check_mark: True locally scoped CSS

:white_check_mark: Full access to `props` and `state`

:white_check_mark: Component level styles stay with the component

:white_check_mark: Access to full CSS specification including support of
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
for variable support

:white_check_mark: Statically analyzable!

:white_check_mark: Sass-like features (such as nesting) and much more if you
add [Polished](https://polished.js.org/)

#### Drawbacks of Styled Components

:x: Syntax is weird

:x: npm package required

:x: It's totally addictive :joy:

### Code Along: Styled Solid Button

Let's use styled components to create a stylish call to action button over in
[`SolidButton.js`](src/components/shared/SolidButton.js)!

### Lab: Styled Outline Button

One of styled component's greatest benefits is the ability to make one-off changes.
Using the
[extending styles docs](https://styled-components.com/docs/basics#extending-styles)
extend the SolidButton to create an
[`OutlineButton.js`](src/components/shared/OutlineButton.js)!

The OutlineButton should have a transparent background and use the same color
for the text and border.
When the OutlineButton is hovered over, it should resemble the SolidButton.

See the react bootstrap
[outline Button](https://react-bootstrap.github.io/components/buttons/#outline-buttons)
as an example.

## Bootstrap Components

Bootstrap has a number of components built and ready for you to use and customize
as you please. You can view the [React Bootstrap Components here](https://react-bootstrap.github.io/components/alerts/)!
Everything you need to use Bootstrap components is in the documentation,
complete with examples of how to implement each one of them!

Just like other libraries, if you want to use react-bootstrap you'll need to
install it in your project. **We have already included react-bootstrap in this
repo, as well as our react template, so you do not currently need to do this.**
If you want to include react-bootstrap in a new project, take a look at the
[getting started](https://react-bootstrap.github.io/getting-started/introduction)
page, and in your terminal you'll run the following command:

```sh
npm install react-bootstrap bootstrap
```

**Again, you don't need to run this right now, only when you start a new
 project from scratch!**
in case you're wondering if you need to install this, look at your
[package.json](https://git.generalassemb.ly/ga-wdi-boston/react-styling/blob/master/package.json),
if you see `"react-bootstrap"` in your dependencies, and you've already run
`npm install`, then bootstrap is loaded up and ready to go!

### Code Along: Bootstrap Cards

For our example we'll be mapping over the
[team members](https://git.generalassemb.ly/ga-wdi-boston/react-styling/blob/donuts/training/src/data/team-members.js)
and producing a [Bootstrap Card](https://react-bootstrap.github.io/components/cards/)
component for each one. Then, we'll combine those with some inline styles
for the layout!

Let's start in the file called `TeamMemberCards.js`,
at the very top of the file, we'll need to import the react-bootstrap `Card`.

```js
import Card from 'react-bootstrap/Card'
```

Now, we have the bootstrap component we'll be using!

We're provided an array of jsx elements, which we will style into bootstrap cards,
that we return from our functional component inside of a div.


```jsx
const TeamMemberCards = () => {
  const teamCards = teamMembers.map(member => {
    return (
      <div key={member.id}>
        <img src={member.backgroundUrl} />
        <div>
          <div>{member.name}</div>
          <div>{member.description}</div>
        </div>
      </div>
    )
  })
  return (
    <div>
      { teamCards }
    </div>
  )
}
```

Note that we've given each Card a key using each element in the array's unique
id. This is important because react needs to be able to refer to each of these
elements.

Now, we'll use the react-bootstrap docs to style our existing HTML into bootstrap cards.

```jsx
const TeamMemberCards = () => {
  const teamCards = teamMembers.map(member => {
    return (
      <Card key={member.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={member.backgroundUrl} />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Text>{member.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  })
  return (
    <div>
      { teamCards }
    </div>
  )
}

export default TeamMemberCards
```

 We've also added `style={{ width: '18rem' }}` to each card in order
to keep them all the same size. Tags like `<Card.Img>`, `<Card.Body>`, and
`<Card.Text>` are built into the Cards by the bootstrap team so that you only
need to require the main component.

Those cards are looking good already, but let's add some layout using inline
styles to really make this component do what we want it to.
First, we'll add `const cardContainerLayout` styles between our imports and
the line where we initially create our function component

```js
const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap'
}
```

Now we'll adjust our return a little bit so that our component uses our layout.

```js
return (
  <div style={cardContainerLayout}>
    { teamCards }
  </div>
)
```

Now THAT's looking good!

Bootstrap's component library is _far from_ the only pre-built react component
library out there. Have fun exploring documentation for other component
libraries, they all function basically the same and have their own unique
styles, variations, and options. Best practice would be to pick one and only
one and run with it. Whether it's Bootstrap, Material UI, Semantic, or one of
the dozens of other component libraries out there, they're a great way to
make an app look stylish and professional in no time at all!

## Bonus: Demo: Custom Google Fonts

We'll use [Google Fonts](https://fonts.google.com/) to add the incredibly
popular font Roboto in [`index.scss`](src/css/index.scss).

## Additional Resources

- [4 Ways to Style React Components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)
- [React: CSS in JS | The motivation behind the movement](https://speakerdeck.com/vjeux/react-css-in-js)
- [Building a reusable Component System with React.js and styled-components](https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c)
- [CSS-in-JS Libraries](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
