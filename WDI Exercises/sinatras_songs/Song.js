function Song(title, artist, desc) {
  this.title = title;
  this.artist = artist;
  this.desc = desc;

  this.toString() {
    return "" + this.title + " written ";
  }

  this.toObject() {
    return {
      title: this.title,
      artist: this.artist,
      desc: this.desc
    }
  }
}

var flyMeToTheMoon = new Song('Fly Me to the moon', 'Frank Sinatra', ':)');
