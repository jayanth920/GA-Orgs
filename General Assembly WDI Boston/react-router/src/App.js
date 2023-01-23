import React from 'react'
import { Route } from 'react-router-dom'

import Movie from './Movie.js'
import Nav from './Nav'

import movies from './data/movies'

const App = () => (
  <div>
    <Route path='/' component={Nav} />
    <Route exact path='/' render={() => (<h4>Welcome! Click a link.</h4>)} />
    <Route path='/movies' render={() => (
      <div>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            director={movie.director}
            cast={movie.cast}
          />
        ))}
      </div>
    )}
    />
  </div>
)

export default App
