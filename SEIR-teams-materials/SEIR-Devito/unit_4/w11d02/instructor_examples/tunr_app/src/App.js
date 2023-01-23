// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react';

// data
import playlist from './data.js';

// components
import Playlist from './components/Playlist';

// ===================
// COMPONENT
// ===================
class App extends Component {
  // constructor
  constructor() {
    // state
    super()
    this.state = {
      playlist: playlist,
      title: '',
      artist: '',
      time: ''
    }
    // binding methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handles input change
  handleChange(e) {
    this.setState( { [e.target.id]: e.target.value } );
  }

  // handles submit of form
  handleSubmit(e) {
    e.preventDefault();
    // create the new song object based off user input
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }
    // creating a new array of songs based on the newSong and the current playlist song array
    const newSongArray = [newSong, ...this.state.playlist.songs]
    this.setState({
      playlist: {
        songs: newSongArray,
        created: this.state.playlist.created,
        title: this.state.playlist.title
      },
      title: '',
      artist: '',
      time: ''
    })
  }

  // render
  render() {
    return (
      <div className="tunr-container">
        <header>
          <h1>Tunr.</h1>
          <h2>For all your playlist needs</h2>
        </header>
        <Playlist
          playlist={this.state.playlist}
        />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>title</label>
          <input type="text" value={this.state.title} onChange={this.handleChange} id="title"/>
          <label htmlFor='artist'>artist</label>
          <input type="text" value={this.state.artist} onChange={this.handleChange} id="artist"/>
          <label htmlFor='time'>time</label>
          <input type="text" value={this.state.time} onChange={this.handleChange} id="time"/>
          <input type="submit" value="add new song"/>
        </form>
      </div>
    )
  }
}

// ===================
// EXPORT
// ===================
export default App;
