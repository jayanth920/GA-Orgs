import React, {Component} from 'react';
import './App.css';
import MovieInfo from './components/MovieInfo'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'http://www.omdbapi.com/?',
      apikey: 'apikey=' + '98e3fb1f',
      query: '&t=',
      movieTitle: '',
      searchURL: '',
      movie: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle
    }, () => {
      fetch(this.state.searchURL)
        .then(response => {
          console.log('this is json', response)
          return response.json()
        }).then(json => this.setState({
          movie: json,
          movieTitle:''
        }),
            err => console.log('this is error', err))
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render () {
    console.log('this is state', this.state)
    // higher order components...<Comp></Comp>
    return (
      <React.Fragment>
       <form onSubmit={this.handleSubmit}>
        <label htmlFor='movieTitle'>Title</label>
        <input
          id='movieTitle'
          type='text'
          value={this.state.movieTitle}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Find Movie Info'
        />
       </form>
       <a href={this.state.searchURL}>{this.state.searchURL}</a>
       {(this.state.movie)
         ? <MovieInfo movie={this.state.movie} />
         : ''
       }
      </React.Fragment>
    );
    }
}

export default App;
