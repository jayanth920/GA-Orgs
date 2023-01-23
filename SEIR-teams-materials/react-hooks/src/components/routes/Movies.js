import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

class Movies extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/movies`)
      .then(res => this.setState({ movies: res.data.movies }))
      .catch(console.error)
  }

  render () {
    const movies = this.state.movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </li>
    ))

    return (
      <Layout>
        <h4>Movies</h4>
        <ul>
          {movies}
        </ul>
      </Layout>
    )
  }
}

export default Movies
