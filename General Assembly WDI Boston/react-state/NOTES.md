# Notes

#### Code Along: A Very Basic Component

```jsx
import React, { Component } from 'react';

class Movie extends Component {

  render () {
    return (
      <h1>My Favorite Movie</h1>
    )
  }
}

export default Movie
```

#### Lab: Recreating The Movie Component

```jsx
import React, { Component } from 'react'

import Actor from './Actor'

class Movie extends Component {
  render () {
    const actorsJsx = this.props.cast.map(actor => (
      <Actor
        key={actor.id}
        name={actor.name}
        role={actor.role}
      />
    ))

    return (
      <div>
        <h4>Title: {this.props.title}</h4>
        <p>Director: {this.props.director}</p>
        <div>
          <p>Starring:</p>
          <ul>
            {actorsJsx}
          </ul>
        </div>
      </div>
    )
  }
}

export default Movie
```

### State Begins

#### Annotate Along: A Simple Stateful Component

Annotated solution files are on the `solution` branch.

#### Code Along: Adding State to the Movie Component

```js
import React, { Component } from 'react'
import Actor from './Actor'

class Movie extends Component {
  constructor () {
    super()

    this.state = {
      liked: false
    }
  }

  toggleLike = () => this.setState(prevState => {
    console.log('liked is currently', prevState.liked)
    return { liked: !prevState.liked }
  })

  render () {
    return (
      <div>
        <h4 className={this.state.liked ? 'liked' : ''}>Title: {this.props.title}</h4>
        <p>Director: {this.props.director}</p>
        <p>Starring: {this.props.cast.map(member => (
          <Actor
            name=member.name
            role=member.role
          />
        ))}</p>
        <button onClick={this.toggleLike}>
          {this.state.liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    )
  }
}

export default Movie
```

#### Lab: Toggle Actors Display

Solution code for the lab can be found in the `solution` branch.
