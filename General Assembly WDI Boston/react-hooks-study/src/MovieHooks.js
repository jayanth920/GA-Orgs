import React, { useState } from 'react'
import Actor from './Actor'

const MovieHooks = (props) => {
  const [liked, setLiked] = useState(false)
  const [hideActors, setHideActors] = useState(true)

  const toggleActors = () => {
    setHideActors(prevState => {
      console.log('Hide Actors is currently: ', prevState)
      return !prevState
    })
  }

  const toggleLike = (event) => {
    setLiked(prevState => {
      console.log('liked is currently: ', prevState)
      return !prevState
    })
  }

  let actorsHtml = ''

  if (!hideActors) {
    actorsHtml = (
      <div>
        <p>Starring:</p>
        <ul>
          {props.cast.map(actor => (
            <Actor
              key={actor.name}
              name={actor.name}
              role={actor.role}
            />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h4 className={liked ? 'liked' : ''}>Title: {props.title}</h4>
      <p>Director: {props.director}</p>
      <button onClick={toggleLike}>{liked ? 'Unlike' : 'Like'}</button>
      <button onClick={toggleActors}>
        {hideActors ? 'Show Actors' : 'Hide Actors'}
      </button>
      {actorsHtml}
    </div>
  )
}

export default MovieHooks
