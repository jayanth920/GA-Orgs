// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react';

// ===================
// COMPONENT
// ===================
class Song extends Component {
  constructor() {
    super()
    this.state = {
      liked: false
    }
    this.toggleLike = this.toggleLike.bind(this);
  }

  // toggle the state of liked between true and false
  toggleLike() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    return (
      <div className="song" onClick={this.toggleLike}>
        <h1>{this.props.song.title}</h1>
        <h2>{this.props.song.artist}</h2>
        <h3>{this.props.song.time}</h3>
        { this.state.liked ? <h4>&hearts;</h4> : null }
      </div>
    )
  }
}

// ===================
// EXPORT
// ===================
export default Song;
