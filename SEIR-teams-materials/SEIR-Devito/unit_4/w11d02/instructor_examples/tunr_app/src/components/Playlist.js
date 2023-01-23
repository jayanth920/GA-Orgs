// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react';

// components
import Song from './Song';

// ===================
// COMPONENT
// ===================
class Playlist extends Component {
  render() {
    return(
      <div className="playlist">
        <h1>{this.props.playlist.title}</h1>
        <div className="songs">
        {this.props.playlist.songs.map ((song, index) => {
          return (
            <Song
              song={song}
              key={index}
              playlistTitle={this.props.playlist.title}
            />
          )
        })}
        </div>
      </div>
    )
  }
}

// ===================
// EXPORT
// ===================
export default Playlist;
