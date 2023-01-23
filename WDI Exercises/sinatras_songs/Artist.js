function Artist(name, genre, albumsArray) {

  this.props = {};
  this.props.name = name;
  this.props.genre = genre;
  this.props.albums = albumsArray;

  this.toObject() {
    return this.props;
  }

}

var sinatra = new Artist('Frank Sinatra', 'Classic', 'Youtube');
