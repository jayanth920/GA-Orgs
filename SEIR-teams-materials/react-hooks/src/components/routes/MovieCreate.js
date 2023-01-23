import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import MovieForm from '../shared/MovieForm'
import Layout from '../shared/Layout'

class MovieCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: {
        title: '',
        director: '',
        year: ''
      },
      createdMovieId: null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedMovie = Object.assign(this.state.movie, updatedField)

    this.setState({ movie: editedMovie })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/movies`,
      method: 'POST',
      data: { movie: this.state.movie }
    })
      .then(res => this.setState({ createdMovieId: res.data.movie.id }))
      .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdMovieId, movie } = this.state

    if (createdMovieId) {
      return <Redirect to={`/movies/${createdMovieId}`} />
    }

    return (
      <Layout>
        <MovieForm
          movie={movie}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    )
  }
}

export default MovieCreate
