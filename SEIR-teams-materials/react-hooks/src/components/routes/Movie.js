import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

class Movie extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/movies/${this.props.match.params.id}`)
      .then(res => this.setState({ movie: res.data.movie }))
      .catch(console.error)
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/movies/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { movie, deleted } = this.state

    if (!movie) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Movie succesfully deleted!' } }
      } />
    }

    return (
      <Layout>
        <h4>{movie.title}</h4>
        <p>Date relased: {movie.year}</p>
        <p>Directed by: {movie.director}</p>
        <button onClick={this.destroy}>Delete Movie</button>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/movies">Back to all movies</Link>
      </Layout>
    )
  }
}

export default Movie
