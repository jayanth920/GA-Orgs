
# Notes

## Inversion of Control

When discussing the difference between framework's and libraries. You could discuss the idea of inversion of control and show this diagram.

![inversion](https://media.git.generalassemb.ly/user/16320/files/ca954e80-b499-11ea-8862-fad2bbf2cb24)


## Solution code for code-alongs and labs below:

### Intro...

#### Code Along: A Very Basic Component
#### Annotate Along: A Very Basic Component Breakdown

```jsx
// bring in React from React
import React from 'react'

// define our Movie component
const Movie = () => (
  <h1>
    {/*add the name of your favorite movie here!*/}
    My Favorite Movie
  </h1>
)

export default Movie
```

#### Code Along: Displaying Data with JSX

`src/Movie.js`:

```jsx
import React from 'react'

// Define some local data our component can use
const movie = {
  title: 'My Favorite Movie'
}

const Movie = () => (
  <div>
    <h2>Movie Information:</h2>
    {/* Display data in JSX by surrounding the variable in curly brackets */}
    <h4>Title: {movie.title}</h4>
  </div>
)

export default Movie
```

#### Code along: Display Multiple Movies

`src/Movie.js`:

```jsx
import React from 'react'

const Movie = props => (
  <div>
    <h2>Movie Information:</h2>
    {/*We are accepting a "prop" called `title` to display*/}
    <h4>Title: {props.title}</h4>
  </div>
)

export default Movie
```

`src/App.js`:

```jsx
import React from 'react'

import Movie from './Movie'

const movies = [
  { title: 'Eraserhead', id: 1 },
  { title: 'Dr. Strangelove', id: 2 },
  { title: 'Fantastic Mr. Fox', id: 3 }
]

const App = () => (
  <div>
    <h1>Welcome to the movie app!</h1>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
      />
    ))}
  </div>
)

export default App
```

---

### Props Begins

#### Code-along: Passing multiple props to a component

`src/App.js`:

```jsx
const App = () => (
  <div>
    <h1>Welcome to React!</h1>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        cast={movie.cast}
        director={movie.director}
      />
    ))}
  </div>
)
```

`src/Movie.js`:

```jsx
import React from 'react'

const Movie = props => (
  <div>
    <h1>{props.title}</h1>
    <p>Directed by {props.director}</p>
    <p>Starring: {props.cast}</p>
  </div>
)

export default Movie
```

`src/Movie.js`:

```jsx
import React from 'react'

const Movie = ({ title, director, cast }) => (
  <div>
    <h1>{title}</h1>
    <p>Directed by {director}</p>
    <p>Starring: {cast}</p>
  </div>
)

export default Movie
```

#### Lab: Create an `Actor` component

`src/Actor.js`:

```js
import React from 'react'

const Actor = ({ name, role }) => (
  <p>{name} as {role}</p>
)

export default Actor
```

Movie.js:

```jsx
import React from 'react'
import Actor from 'Actor.js'

const Movie = ({ title, director, cast }) => (
  <div>
    <h1>{title}</h1>
    <p>Directed by {director}</p>
    <p>Starring: {cast.map(member => (
      <Actor
        name={member.name}
        role={member.role}
      />
    ))}
    </p>
  </div>
)

export default Movie
```
