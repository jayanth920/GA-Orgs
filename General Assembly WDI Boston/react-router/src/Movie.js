import React, { Component } from 'react'
import Actor from './Actor'

class Movie extends Component {
  constructor () {
    super()

    this.state = {
      liked: false,
      hideActors: false
    }
  }

  toggleLike = () => this.setState(prevState => {
    console.log('liked is currently', prevState.liked)
    return { liked: !prevState.liked }
  })

  toggleActors = () => this.setState(prevState => {
    return { hideActors: !prevState.hideActors }
  })

  render () {
    const actorHtml = (
      <div>
        <p>Starring:</p>
        <ul>
          {this.props.cast.map(actor => (
            <Actor
              key={actor.name}
              name={actor.name}
              role={actor.role}
            />
          ))}
        </ul>
      </div>
    )

    return (
      <div>
        <h4 className={this.state.liked ? 'liked' : ''}>Title: {this.props.title}</h4>
        <p>Director: {this.props.director}</p>
        {this.state.hideActors ? '' : actorHtml}
        <button onClick={this.toggleActors}>
          {this.state.hideActors ? 'Show Actors' : 'Hide Actors'}
        </button>
        <button onClick={this.toggleLike}>
          {this.state.liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    )
  }
}

export default Movie
