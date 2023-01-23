import React from 'react'

import Actor from './Actor'

const Movie = ({ title, director, cast }) => {
  const actorsJsx = cast.map(actor => (
    <Actor
      key={actor.id}
      name={actor.name}
      role={actor.role}
    />
  ))

  return (
    <div>
      <h4>Title: {title}</h4>
      <p>Director: {director}</p>
      <div>
        <p>Starring:</p>
        <ul>
          {actorsJsx}
        </ul>
      </div>
    </div>
  )
}

export default Movie
