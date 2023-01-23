import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import MovieForm from '../shared/MovieForm'
import Layout from '../shared/Layout'

class MovieEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: {
        title: '',
        director: '',
        year: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/movies/${this.props.match.params.id}`)
      .then(res => this.setState({ movie: res.data.movie }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedMovie = Object.assign(this.state.movie, updatedField)

    this.setState({ movie: editedMovie })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/movies/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { movie: this.state.movie }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { movie, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/movies/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        <MovieForm
          movie={movie}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/movies/${this.props.match.params.id}`}
        />
      </Layout>
    )
  }
}

export default MovieEdit
