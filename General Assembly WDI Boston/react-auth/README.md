[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Auth

## Prerequisites 
- [react](https://git.generalassemb.ly/ga-wdi-boston/react)
- [react-router](https://git.generalassemb.ly/ga-wdi-boston/react-router)
- [react-crud](https://git.generalassemb.ly/ga-wdi-boston/react-crud)

## Objectives

By the end of this, developers should be able to:
- Make HTTP requests to an API from within a React app using [axios](https://www.npmjs.com/package/axios):
  - Access an authenticated API.

## Preparation

1. Fork and clone this repository. [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
2. Create a new branch, training, for your work.
3. Checkout to the training branch.
4. Install dependencies with npm install.

## React Auth Template

## About

This template is derived from GA Boston's [react-template](https://git.generalassemb.ly/ga-wdi-boston/react-template).
Most of the development dependencies, such as linters, SCSS compiler, Webpack
config, NPM scripts, etc in this repo come from there.

It includes all the components and routes needed to sign up, sign in, change
passwords, and sign out of an API built with either template linked above, with
no need for modification.

**NOTE**: You should customize the included components to suit you app! They're
provided as a guide and a bare minimum of functionality and style. Consider
changing the provided SCSS styles, modifying the auth code, improving the flash
messages, etc.

## Structure

The top-level `App` component stores the currently authenticated
user in state, as well as data related to the flash messages. `App` renders the
`Header` component, and a list of routes, each of which render a component from
`src/components`. The `src/api` directory has a component file, `auth.js`, which
contains all the needed `axios` calls pertaining to authentication.

You can follow this pattern in your app as well. For instance, if you are making
an app that keeps track of books, you might want a `src/api/books.js`, which
contains its own `axios` call pertaining to your books resource CRUD actions.
Using a separate directory within `components` for each individual component you
add makes it easy to locate and update components and has the added benefit of
making it easy to create custom styles that apply to that specific component.
To apply component specific styles, add a file to the component's directory such
as `ComponentName.scss` and then import it directly into the component with
`import './ComponentName.scss'`.  This will keep your styles modularized and
make it easier to make changes at the component level.

### Included Routes

This template comes with a handful of front-end routes that display
different components for user actions.

| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |

There is no HTTP verb listed because these are all front-end routes handled by
React. Some of these routes should not be available unless a user is signed in,
so they will use the `AuthenticatedRoute` component instead of the regular
`Route`. This custom component is provided as part of the template, and is not
a part of the React library (see more below).

## Features

### `<AuthenticatedRoute />`

This template contains a handy component for creating routes that require a
user to be authenticated before visiting. This component lives in
`src/auth/components/AuthenticatedRoute.js` and is already required in `App`.
It's a thin wrapper around React Router's `<Route />` component. The only
difference is that it expects a prop called `user`, and if that prop is falsy,
it will render a `<Redirect />` that takes the user to `/`. **To use
it, you must pass it the user as a prop!**

It supports both the `component=` and `render=` attributes, but like `<Route />`
it will not forward props to the component if you use `component=`.

### `<AutoDismissAlert />` Component

This template also already contains a component that displays user messages.
Messages are configurable via redux actions.  This component can be found in
`src/components/AutoDismissAlert/AutoDismissAlert.js`. **There is no need to add
this component to your app. It is already required in `App`.**  A single
component instance is used to manage all alerts application-wide.

The alert can be used by passing the `alertMsg` method to a rendered route.  The
`alertMsg` method expects an object with a `heading`, `message`, and a `variant` property.

Use this component in conjunction with the `messages.js` file in the same
directory to create and manage all of your application messages in one place.

The `variant` property must be a Bootstrap alert variant, as this component is merely a
wrapper around the [react-bootstrap Alert
component](https://react-bootstrap.github.io/components/alerts/).  The types it
will accept are: 'primary', 'secondary', 'success', 'danger', 'warning', 'info',
'light', and 'dark'.

 To change the duration of the message, replace `5000` with a value of your
 choice (in milliseconds) in this component's `componentDidMount` method.

### `src/apiConfig.js`

Just like in
[browser-template](https://git.generalassemb.ly/ga-wdi-boston/browser-template),
this file will determine whether you're in a production or development
environment and choose an API URL accordingly. Don't forget to replace the
`production` URL with your deployed API's URL.

### Bootstrap

This template includes two different implementations of the classic Bootstrap
library we know and love.

#### `bootstrap`

The first implementation of Bootstrap comes from the `bootstrap` npm package,
and provides all of the normal Bootstrap classes and styling we were able to
use with the `browser-template`. This package is included in the
`src/index.scss` file at the very top of the file. That means JSX in this
template can utilize Bootstrap classes like `btn`, `container`, `row`, etc.

See an example below:

```jsx
import React from 'react'

const AboutPage = () => (
  <div className="card">
    <div className="card-body">
      <h1 className="card-title">About Page</h1>
      <p className="card-text">There is a Bootstrap card on this page!</p>
    </div>
  </div>
)

export default AboutPage
```

> Note: Remember to use `className` not `class` in your JSX!

#### `react-bootstrap`

In addition to the classic Bootstrap classes we can plug into our JSX, this
template also comes with a special package called [`react-bootstrap`](https://react-bootstrap.github.io/).
This package allows us to use special React components that have been pre-built
according to the Bootstrap library.

Import components from the `react-bootstrap` library, then use them just like
regular components in your JSX!

See an example below:

```jsx
import React from 'react'
import Card from 'react-bootstrap/Card'

const AboutPage = () => (
  <Card>
    <Card.Body>
      <Card.Title>The About Page</Card.Title>
      <Card.Text>There is a Bootstrap card on this page!</Card.Text>
    </Card.Body>
  </Card>
)

export default AboutPage
```

### Annotate Along: Authentication in a React app

Let's take a look at how we are doing authentication in this React app. You can follow along and add comments as we go through the directories: 

- `components/auth`
- `components/AuthenticatedRoute`
- `components/AutoDismissAlert`

## React Auth CRUD

Now that we have gone through this template let's start to learn our CRUD actions. The api we are going to be using is the [library-api](https://git.generalassemb.ly/ga-wdi-boston/library-api). We are going to be using the protected resources [movies](https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/main/docs/movies.md).

We are going to be following a methodical approach as we work through this lesson: 

1. Test API with CURL script or Postman
2. Add feature to React application
   1. Add authenticated route to `src/App.js` 
   2. Create Component to render for route
      1. Add component constructor
      2. Add component render
      3. Add component event
      4. Add component `axios` call

### Code Along: Create

#### Test with curl script or Postman
#### Add feature to React application:

1. Add authenticated route to `src/App.js`
  
```js
<AuthenticatedRoute
  user={user}
  path='/create-movie'
  render={() => (
    <CreateMovie msgAlert={this.msgAlert} user={user}/>
  )}
/>
```

- `user` - `user` is being passed to the `AuthenticatedRoute` so only signed in users are able to view this route.
- `path` - The front end route for this path is going to be `/create-movie`. Remember this is different than the api path.
- `render` - This is the component that we are going to render if a user is signed in.
- `CreateMovie` - This component is being passed any massage alerts and the `user`. 

2. Create Component to render for route
   
- Create a `movies` directory and inside that create a `CreateMovie.js` file.

- Add component constructor

```js
class CreateMovie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      director: ''
    }
  }
  render () {}
}
```

- Add component render

```js
render () {
    return (
      <>
        <h3>Create Movie</h3>
        <MovieForm
          movie={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    )
  }
```

- Add component event
```js
handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history } = this.props
}
```

- Add component `axios` call

Create a `movies.js` file inside the `api` directory and add:
```js
export const createMovie = (data, user) => {
  return axios({
    url: apiUrl + '/movies',
    method: 'post',
    data: { movie: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
```

Import and use api call in the `handleSubmit` method:
```js
handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history } = this.props

  createMovie(this.state, user)
    .then(res => history.push('/movies/' + res.data.movie._id))
    .then(() => msgAlert({ heading: 'Movie Created!', message: 'Nice work, go check out your movie.', variant: 'success' }))
    .catch(err => {
      msgAlert({
        heading: 'Movie creation failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    })
}
```

### Code Along: Index

#### Test with curl script or Postman
#### Add feature to React application:

1. Add authenticated route to `src/App.js`

```js
<AuthenticatedRoute
  user={user}
  exact
  path='/movies'
  render={() => <IndexMovies msgAlert={this.msgAlert} user={user}/>}
/>
```
- `user` - `user` is being passed to the `AuthenticatedRoute` so only signed in users are able to view this route.
- `path` - The front end route for this path is going to be `/movies`. Remember this is different than the api path.
- `render` - This is the component that we are going to render if a user is signed in.
- `IndexMovies` - This component is being passed any massage alerts and the `user`. 

2. Create Component to render for route
   
- Create a `movies` directory and inside that create a `IndexMovies.js` file.

- Add component constructor

```js
class IndexMovies extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: null
    }
  }
  render () {}
}
```

- Add component render

```js
render () {
    const { movies } = this.state
    if (movies === null) {
      return 'Loading...'
    }

    let movieJsx
    if (movies.length === 0) {
      movieJsx = 'No movies, go create some'
    } else {
      movieJsx = movies.map(movie => (
        <li key={movie._id}>
          {movie.title}
        </li>
      ))
    }

    return (
      <>
        <h3>All The Movies:</h3>
        {movieJsx}
      </>
    )
  }
```

- Add component event

```js
componentDidMount () {
  const { user, msgAlert } = this.props
}
```

- Add component `axios` call

Add api call to the `movies.js` file inside the `api` directory:
```js
export const indexMovies = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
```
Import and use api call in the `componentDidMount` method:
```js
componentDidMount () {
  const { user, msgAlert } = this.props
  indexMovies(user)
    .then(res => this.setState({ movies: res.data.movies }))
    .then(() => msgAlert({ heading: 'Index success', message: 'Here\'s the movies', variant: 'success' }))
    .catch(err => msgAlert({ heading: 'Index failed :(', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
}
```

### Code Along: Show

#### Test with curl script or Postman
#### Add feature to React application:

1. Add authenticated route to `src/App.js`

```js
<AuthenticatedRoute
  user={user}
  exact
  path='/movies/:id'
  render={() => (
  <ShowMovie user={user} msgAlert={this.msgAlert}/>
  )}
/>
```

- `user` - `user` is being passed to the `AuthenticatedRoute` so only signed in users are able to view this route.
- `path` - The front end route for this path is going to be `/movies/:id`. Remember this is different than the api path.
- `render` - This is the component that we are going to render if a user is signed in.
- `ShowMovie` - This component is being passed any massage alerts and the `user`.

2. Create Component to render for route
   
- Create a `movies` directory and inside that create a `ShowMovie.js` file.

- Add component constructor

```js
class ShowMovie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: null
    }
  }
  render () {}
}
```

- Add component render

```js
render () {
  if (this.state.movie === null) {
    return 'Loading...'
  }

  const { title, director, owner } = this.state.movie
  const { history, match, user } = this.props

  return (
    <>
      <h3>Show One Movie Page</h3>
      <h5>{title}</h5>
      <p>Directed by: {director}</p>
      </>
    )
  }
```

- Add component event

```js
componentDidMount () {
  const { match, user, msgAlert } = this.props
}
```

- Add component `axios` call

Add api call to the `movies.js` file inside the `api` directory:

```js
export const showMovie = (id, user) => {
  return axios({
    url: apiUrl + '/movies/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
```

Import and use api call in the `componentDidMount` method:
```js
componentDidMount () {
  const { match, user, msgAlert } = this.props

  showMovie(match.params.id, user)
    .then(res => this.setState({ movie: res.data.movie }))
    .then(() => msgAlert({
      heading: 'Show movie success',
      message: 'Check out the movie',
      variant: 'success'
      }))
    .catch(err => msgAlert({
      heading: 'Show movie failed :(',
      message: 'Something went wrong: ' + err.message,
      variant: 'danger'
    }))
}
```

Let's now add in a link on the `IndexMovies` component so we can get to this component. Over in our `render` inside our `IndexMovies` lets add:

```js
<Link to={`/movies/${movie._id}`}>{movie.title}</Link>
```

### Lab: Update & Delete

Now it's time for you to tackle update and delete. Try to stick with the same flow that we have been doing. 

## Tasks

Developers should run these often!

- `npm run nag`: runs code quality analysis tools on your code and complains.
- `npm run make-standard`: reformats all your code in the JavaScript Standard
  Style.
- `npm run start`: generates bundles, watches, and livereloads.
- `npm run build`: place bundled styles and scripts where `index.html` can find
    them
- `npm run deploy`: builds and deploys main branch

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
