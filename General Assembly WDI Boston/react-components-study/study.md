# React Components Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. _Please do not respond with direct quotes from source
material._ Instead, digest what you've read and repeat it in your own voice.

## React Basics

The React framework was built to solve one problem: building large applications
with data that changes over time.

Without React, re-rendering one thing on the page causes everything to
re-render. This can produce a less than desirable user experience with
[janky](https://en.oxforddictionaries.com/definition/janky) and lagging
renders, especially on lower powered processors.

Let's take a look at how React solves this problem with its Virtual DOM and
Components...

## Virtual DOM

The **Virtual DOM** gives us a JavaScript representation of the actual DOM.
When changes are made to the view we want to show, React updates the Virtual
DOM first. It then compares those changes against what is currently rendered,
and changes ONLY the pieces that need to be changed, rather than re-rendering
the entire page. You can think of the Virtual DOM as a staging area for changes
that will eventually be implemented.

## Components

The basic unit you'll be working with in ReactJS is called a **component**.
Components are pieces of our application that we can define once and reuse all
over the place. They're a way to modularize or compartmentalize features of our
applications.

With components, we modularize our code at the component level.
Instead of creating a few large HTML, CSS and JS files, you will organize your
web app into small, reusable components that encompass their own content,
presentation, and behavior.

### Identifying Components

Take a look at [CraigsList](https://boston.craigslist.org/search/aap) (note:
right click to open in a new tab!). Notice how listings look identical in their
structure, and are only distinguished by their content. These are the hallmark
features we look for when deciding what elements might comprise a component.

Components can also be nested inside of other elements. In the case of the
listing, the image carousel would be a good example of where we might use a
nested component.

Now, go to [Amtrak.com](https://www.amtrak.com/home) (note: right click to open
in a new tab!). We want to look at the listing page, so put in any "From" (for
example, New York - Penn Station), any "To" (for example, Boston - South
Station), and pick any date. Hit "Find Trains". Now look at the listing page:

![Amtrak](https://git.generalassemb.ly/storage/user/5747/files/754db814-30fb-11e8-88c2-04ed98ab1834)

Scrolling down it, identify the visual "components" the website is comprised
of. We suggest drawing this out on paper!

As you're drawing this out, think about the following questions...

- Where do you see "nested components" that is, where are there components
  inside another component? Where do you see just one "layer" instead?
- Are there any components that share the same structure?
- For components that share the same structure, what is different about them?

## Required Readings

- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [React Components](https://reactjs.org/docs/react-component.html)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

## Define Components

In your own words, define what a React component is. How can they make our
development process easier?

```md
<!-- your answer here -->
```

## React Building Blocks

Fill in the `<blank>`s:

```md
React considers everything to be a <blank>.
Components are like Javascript <blank> that take <blank> and return <blank>.
```

## Pure Components

Explain what the following means in your own words:
"All React components must act like pure functions with respect to their props."

```md
<!-- your answer here -->
```

## Component Life Cycle

There are a handful of methods designated for handling component life cycle.
Put the following in order of when they are called and define what they do:

Mounting:

```js
componentDidMount()
constructor()
render()
```

Updating:

```js
componentDidUpdate()
render()
setState()
```

## State

We can use the `setState()` method to update our components, but it's easy to
use it incorrectly. Refactor the following *bad* code to use `setState()`
properly.

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
