# The Component Lifecycle

React components have a number of "lifecycle" methods that allow us to run
certain code as various things happen to our components. For instance, we
might want to run some validation every time our components receive new props,
or perhaps we want to fetch some data from an external API everytime a certain
component first appears in the DOM. Component lifecycle methods let us do just
that.

## Lifecycle methods

### Mount methods

These methods will run in order when a component mounts (first appears in the
DOM):

-  `constructor`
-  `componentWillMount`
-  `render`
-  `componentDidMount`

Two of those should be familiar to us already: `constructor` and `render`.
We've been using these all along, without knowing they were component lifecycle
methods. We should be pretty familiar with those, so let's take a look at the
other two.

#### `componentWillMount`

This is the first true lifecycle method. It will run once in the lifetime of a
component, just after the `constructor` method is called. Note that `render`
will not have been called yet, so we won't have any access to the DOM in this
component. We could call `setState` here if we wanted to, but setting up
initial state is the entire purpose of the constructor, so we probably don't
want to do that here. In fact, the React documentation warns us that there are
few good use cases for this method.

We won't use this one at all.

#### `componentDidMount`

This one will run just after `render`, and is the recommended place to make
AJAX calls to interact with APIs, so we'll use this frequently. Also, at this
point, the component will be fully rendered in the DOM, so any
actions that require a access to a native (non-virtual) DOM element can happen
here. 

We mostly try to avoid adding event listeners in React, preferring to use
`onChange`, `onClick`, and company, but if we did need to add event listeners
for some reason, we could do it here.

### Update methods

The following methods will run when the `props` or `state` of a component
change:

-  `componentWillRecieveProps`
-  `shouldComponentUpdate`
-  `componentWillUpdate`
-  `render`
-  `componentDidUpdate`

Here, the `render` method is the same one we're familiar with -- it gets called
both on the initial mount, and whenever `props` or `state` change.

#### `componentWillRecieveProps`

Whenever any of a component's `props` are going to change, this method will run
first. This method provides a parameter, conventionally called `nextProps`,
which will represent the new set of `props`. At this point, `this.props` will
not have changed, so you're free to do things like:

```js
componentWillRecieveProps(nextProps) {
  if (this.props.velocity !== nextProps.velocity) {
    // do some calculations
  }
}
```

This method is generally only used if you need to make some calculations that
depend on multiple `props`, some of which may have changed while others have
not changed.

#### `shouldComponentUpdate`

This method is a bit different from the others in that it doesn't run by
default. If we provide it though, it gives us a chance to tell React to stop
the update cycle and not re-render a component. Returning `false` from this
function will cause `render` to not run.

We would only use this in cases where we notice a serious performance problem
with one of our components, and even then, we could easily make the performance
issue **worse** if we're not careful here.

We won't use this one.

#### `componentWillUpdate`

This is a bit like `componentWillMount` but it's only triggered when `props` or
`state` change, and not on the initial mount. We can't call `setState` here,
and we want to be sure not to take any actions that could cause a re-render
here, because we could get stuck in a loop of re-renders. 

There aren't a ton of use cases for this one, but it is sometimes used to set
local variables based on `state` changes that happened in
`componentRecieveProps`.

#### `componentDidUpdate`

This method will be called after a component has received new `props` or
`state`, and after that component's `render` method has been called. This means
that the DOM will be up-to-date with our new `props` and `state`, so we're free
to write code here that accesses native DOM nodes directly. 

This is also a good place to make AJAX requests, but we **only** want to do
that if some data that we transmit to the API has actually changed. We
absolutely don't want to be spamming the AJAX request every time some unrelated
bit of `props` changes. We can prevent that by making any API requests here
dependent on a `state` property that we set in `componentWillRecieveProps`.

There's just one more lifecycle method. We're almost to the fun part!

### Unmount method

#### `componentWillUnmount`

This method is triggered when a component is about to leave the DOM. We can use
this method to "clean up" anything created by this component that won't be
reset automatically by the component un-rendering. Some examples of things we
might want to do here:

-  Remove event listeners.
-  Unset timers that we created in this component
-  Cancel ongoing network requests or Websocket connections that won't be
needed once this component is gone.

## Using these methods

### AJAX

<!-- TODO -->

