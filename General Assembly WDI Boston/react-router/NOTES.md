# Delivery Notes

### Dicussion Notes:

#### React Router

Is React Router built in to react?
- no, but it is the standard

What components (in the React sense) are involved in React Router?
- `Route`, `Switch`, `Link` .... almost everything!

What is "dynamic" routing? How is it different from "static" routing?
- static: you define routes before app listens for them
- dynamic: routing that takes place as your app renders

Can you find a <BrowserRouter> anywhere in this app?
- No, because we are using `HashRouter`

Why does the `Nav` component show up on every route?
- Because the route for `Nav` is not an exact route, and uses `'/'`, which every
path will match, no matter if we go to `'/:user'`, `'/movies'`, etc.

Why does the message "Welcome! Click a link." not show up when we click /movies?
- Because that route is an `exact` path, so `/movies` will not match that route

#### Persistant State

Have you noticed that if you like a movie, then travel to the Home route and back to the Movies route, your movie is no longer liked?

Why do you think that is?
- State gets re-defined every time the component gets mounted (because we define it in the constructor)
- so when the component is unmounted the state is gone, then you go back to the route that mounts the component and its created again

How could we solve this problem?
- We could define state higher up (not on the movie component)

What would be different about this problem if we were receiving our data from an API?
- We would partially rely on the database to set the state - if we were updating the
"likes" then this would mean consistency throughout the components

----

# Old README

The following is the README from an older version of this lesson. It's got way too much writing and not enough we do/you do, which is why
it was changed. Still it's got some useful info for instructors.

## Begin old README

At this point, we know about React props and how they relate to our component's data.
* The thing is, `props` represent data that will be the same every time our component is rendered. What about data in our application that may change depending on user action?
* That's where `state` comes in.

What's state?

We can get a quick idea by taking a look at [this codepen](https://codepen.io/susir/pen/GWONLp).

Values stored in a component's `state` are mutable attributes.
* `State` is similar to `props`, but *is meant to be changed*.
* Like props, which we access with `this.props.val`, we can access state values using `this.state.val`
* Setting up and modifying `state` is not as straightforward as working with props. Instead, it requires multiple methods - explicitly declaring the mutation and then defining methods to define how to update our state.

Let's modify our `Movie` component to allow us to "like" a movie and keep track of our opinions.

### Initial State

First, now that we're going to have a state, we're going to have an initial value. When working with classes, a good way to make initial values is by creating a constructor: `constructor (props) {}`. Constructors say, "When you create an instance of this class, do this." Without a constructor explicitly defined by us, our components will use the default constructor inherited from the `Component` class. That's why we didn't need a constructor before - we weren't doing anything differently than the normal default for every component.

Like `render`, our constructor will be a method on or `Movie` class.
The first thing we always put in a constructor is a call to `super()`, which says "You should still do the default initialization for this class."

```js
class Movie extends Component {
  constructor (props) {
    super()
  }

  render () {

    const actorJsx = this.props.actors.map(actor => <Actor name={actor} />)

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Directed By: {this.props.director}</p>
        <ul>Starring:
          {actorJsx}
        </ul>
      </div>
    )
  }
}
```

Right now, that constructor doesn't actually do anything. What we need to do is
add some initial state to keep track of whether we like this movie.

```js
class Movie extends Component {
  constructor (props) {
    super()

    this.liked = false
  }

  render () {

    const actorJsx = this.props.actors.map(actor => <Actor name={actor} />)

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Directed By: {this.props.director}</p>
        <ul>Starring:
          {actorJsx}
        </ul>
      </div>
    )
  }
}
```

Let's make sure that initial state is actually working by logging `this.state`
in our `render` method.

Great! Except... nothing has changed. To make this functionality work, we'll
need some way to update the state of our component, and some way to display
whether or not we "like" a movie.

Let's start by adding a "You like this movie!" message to any movie component
where `this.state.liked === true`. To test this message, we could just hard
code `liked` to `true` in the constructor.

### Code-along: Changing State

Ok, we set an initial state, and added some UI to reflect that state. Now,
we'll make that `state` useful and add some dynamic functionality.

We need to set up some sort of **trigger event** to change the `liked` state.

We will create a button that the user can click, which will toggle that
property between `true` and `false`. First, let's create a method on `Movie`
called `toggleLiked`.

```js
toggleLiked () {
  this.setState({ liked: !this.state.liked })
}
```

What's this `this.setState` business? Take a couple minutes to skim [the docs](https://reactjs.org/docs/react-component.html#setstate).

Whenever we run `.setState`, our component calculates the difference or "diff" between the current DOM and the virtual DOM node. Then, it figures out how to update the state of the DOM in as few manipulations as possible; it only replaces the current DOM with parts that have changed.

This is super important! Using React, **we only change parts of the DOM that need to be changed.**

* This has implications for performance.
* We do not re-render the entire component like we have been so far.
* This is one of React's core advantages.

#### Challenge: Count to 10

After 10 clicks, the user should see the counter reset to 1.

*If you're interested in reading more in depth about this, here is more on what [should & shouldn't go in state](https://facebook.github.io/react/docs/state-and-lifecycle.html). This link is also in the Further Reading page at the end of the React module.*
