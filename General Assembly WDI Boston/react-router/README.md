[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Router

## Prerequisites

- [react-components-and-state](https://git.generalassemb.ly/ga-wdi-boston/react-components-and-state)

## Objectives

By the end of this, developers should be able to:

- Understand front-end routing
- Understand the React Router model
- Create front-end routes
- Create routes with dynamic segments
- Create nested routes

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Discussion: Routing, Then and Now

In web development, "routing" is the concept of delivering different content
depending on the specific URL path that is accessed. For example, we'd expect
`https://cool-company.biz/products` to show us a different page than
`https://cool-company.biz/about`.

Before the advent of single-page applications, this was achieved by serving
up completely separate HTML documents at those two endpoints. Soon, frameworks
were built around the idea of making it easier for those two documents to share
back-end functionality, like a database and ORM. Before SPAs, this was the major
use case for Ruby-on-Rails and other back-end frameworks.

Fast forward a number of years where browsers are more advanced, the internet
is faster and users expect quick results. This round-trip to the server is
costly and slow. Instead of serving separate HTML documents (and thus requiring
a HTTP request and server response for each path), we can load our whole
application on the first page load, and use JS to change what gets rendered
depending on the current URL path. When new information is needed on the server,
an asynchronous request can be made to the server for any new information.

Changing routes is now nearly instantaneous!

## Demo: Front-end Routing

Let's run our server with `npm start` and click on "Home" and "Movies". What
happens to the DOM when we click these links? What happens to the URL bar?

Open the network tab in Chrome, and click the links again. Is the browser making
an HTTP request on each click?

## Discussion: React Router

Take a few minutes with your team to explore the code in this repo. Try to make
some educated guesses about how the behaviour we saw a minutes ago is achieved.
As you explore, refer to the [React Router docs](https://reacttraining.com/react-router/core/guides/philosophy/).
Stop reading before the "Nested Routes" section for now. Discuss answers to the
following questions:

- Is React Router built in to react?
- What components (in the React sense) are involved in React Router?
- What is "dynamic" routing? How is it different from "static" routing?
- Can you find a `<BrowserRouter>` anywhere in this app?
- Why does the `Nav` component show up on every route?
- Why does the message "Welcome! Click a link." not show up when we click
   `/movies`?

## Code-Along: Add an "About" Route

Let's add a simple route to our app together. Its path should be `/about`
and it should render a new component that displays some basic info about the
amazing `MyMDB` app.

## Lab: Add a "Team" Route

Add another route, `/team` and have it render a new `Team` component that
displays the following HTML:

```html
<h3> Our Team </h3>

<p> Our team is composed of the best folks around. </p>
```

## Code-Along: Add a route for individual movies

Right now, our app can show all the movies at once, but can't show just one
movie at a time. Our `Movie` component, though, does exactly that! Let's make it
so we can visit `/movies/1` to see just the movie with an ID of `1`.

Once that's working, we'll make it so that we click the title of each movie to
bring us to a page with just that movie.

## Lab: Add subroutes for team

Using [these docs](https://reacttraining.com/react-router/core/guides/philosophy/nested-routes),
Google, and some hacker determination, figure out how to render a nested routes.
Create two routes nested under `/team`: `/engineering` and `/legal`. Both of
these routes should display the content currently visible at `/team`, plus

```HTML
<h4>Engineering</h4>
<ul>
  <li>Toni Langley</li>
  <li>Jordan Allain</li>
  <li>Caleb Pearce</li>
</ul>
```

and

```HTML
<h4>Legal</h4>
<ul>
  <li>Atticus Finch</li>
  <li>Saul Goodman</li>
  <li>Sam Seaborn</li>
</ul>
```

respectively.

**If you can't get it working, don't worry!**
Once you've had a chance to attempt this, I'll demonstrate and discuss the
solution.

## Discussion - State Persistence

Have you noticed that if you like a movie, then travel to the Home route and
back to the Movies route, your movie is no longer liked?

Why do you think that is?

How could we solve this problem?

What would be different about this problem if we were receiving our data from
an API?

## React Router Tips

Here are some things to keep in mind when working with React Router:

- React routes are rendered _inclusively_, meaning that if we have routes for
  `/`, `/fruits`, and `/fruits/:id`, navigating to `/fruits/:id` will render
  the content from all three of those routes.

  ```jsx
  <Route path="/" component={Nav} />
  <Route path="/fruits" component={FruitList}/>
  <Route path="/fruits/:id" component={Fruit}/>
  ```
  
  To avoid this, we can use the Route component's `exact` prop. Adding the `exact` prop to the route for `/fruits` ensures
  that the `FruitList` component is only rendered at `/fruits` and not also at `/fruits/<some_id>`.

   ```jsx
  <Route path="/" component={Nav} />
  <Route exact path="/fruits" component={FruitList} />
  <Route path="/fruits/:id" component={Fruit} />
  ```

- If we want to avoid inclusive rendering altogether, we could use a
  [`<Switch />`](https://reacttraining.com/react-router/core/api/Switch).

  A Switch component renders routes _exclusively_ and will only render the first route that matches.

  ```jsx
  <Nav />
  <Switch>
    <Route path="/fruits" exact component={FruitList} />
    <Route path="/fruits/:id" component={Fruit} />
  </Switch>
  ```

  When using a `<Switch>` component, order matters. If the URL path is `/fruits/5`, the `FruitList` component would be rendered since `/fruits` is the **first** route that matches. 

- `<Route />`s can use either their `render` or `component` props to render JSX.

  The `render` prop is useful when you need to pass additional props to the component being rendered.
  The value of the `render` prop must be a function that returns the JSX you would like to render for that route.

  ```jsx
  <Route path="/" exact component={Nav}/>
  <Route path="/fruits" render={({ match }) => (
    /* assuming 'currentUser' is an object with information about the currently authenticated user */
    <FruitList match={match} user={currentUser} />
  )}/>
  ```

## Lab - Game of Thrones views

Let's get some more practice with routing in React. There is a large javascript
array for which you to work with located in [src/data/gameOfThrones.js](src/data/gameOfThrones.js).

The goal of the lab is to display this data with the following routes:

- `/families` -  show all family names as links to view that family.
- `/families/:id` - show a single family's data with links to view individual
  members of that family.
- `/families/:family_id/members/:id` -  show a single family member's data.

### Bonus

Create a new component named `WikiLink` that will accept a prop of `wikiSuffix`.
This new component should render an anchor tag that links to https://awoiaf.westeros.org/index.php/`:suffix` where `:suffix` is the value of the provided `wikiSuffix` prop.

## Additional Resources

- [React Router Training](https://reacttraining.com/react-router/)
- [A Simple React Router Tutorial - Paul Sherman](https://blog.pshrmn.com/simple-react-router-v4-tutorial/)
- [Why are we using `<HashRouter>` instea of `BrowserRouter`?](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
