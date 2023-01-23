import React from 'react'

import Movie from './Movie'

import movies from './data/moviesCast'

const App = () => (
  <div>
    <h1>MyMDB</h1>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        director={movie.director}
        cast={movie.cast}
      />
    ))}
  </div>
)

export default App
