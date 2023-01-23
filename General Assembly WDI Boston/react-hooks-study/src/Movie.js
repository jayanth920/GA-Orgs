import React, { Component } from 'react'
import Actor from './Actor'

class Movie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      liked: false,
      hideActors: true
    }
  }

  toggleActors = () => {
    this.setState(prevState => {
      console.log('Hide Actors is currently: ', prevState.hideActors)
      return { hideActors: !prevState.hideActors }
    })
  }

  toggleLike = (event) => {
    this.setState(prevState => {
      console.log('liked is currently: ', prevState.liked)
      return { liked: !prevState.liked }
    })
  }

  render () {
    let actorsHtml = ''

    if (!this.state.hideActors) {
      actorsHtml = (
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
    }

    return (
      <div>
        <h4 className={this.state.liked ? 'liked' : ''}>
          Title: {this.props.title}
        </h4>
        <p>Director: {this.props.director}</p>
        <button onClick={this.toggleLike}>
          {this.state.liked ? 'Unlike' : 'Like'}
        </button>
        <button onClick={this.toggleActors}>
          {this.state.hideActors ? 'Show Actors' : 'Hide Actors'}
        </button>
        {actorsHtml}
      </div>
    )
  }
}

export default Movie
