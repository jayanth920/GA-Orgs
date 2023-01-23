RCApp.ArtistList = {};
alert('loading artist_list.js');

RCApp.ArtistList.init = function(artistListEl, newArtistForm, newArtistName, newArtistDesc){
  this.listEl = artistListEl;
  this.newArtistForm = newArtistForm;
  this.newArtistNameEl = newArtistName;
  this.newArtistDescEl = newArtistDesc;
  this.newArtistForm.addEventListener('submit', this.addArtist.bind(this), false);

  this.listEl.addEventListener('click', this.artistHandler.bind(this), false);

  this.artists = {};
  this.albums = {};

  // Seed Albums
  RCApp.ArtistList.albumSeed();
  // Seed Artists
  RCApp.ArtistList.artistSeed();

  this.actionDispatcher = {
      'show': this.showArtist.bind(this),
      'delete': this.deleteArtist.bind(this),
      'save': this.saveArtist.bind(this),
      'cancel': this.cancelArtist.bind(this)
      };
};

// Seed Albums
RCApp.ArtistList.albumSeed = function(){
  this.albums[0] = new RCApp.Album('Let It Be');
  this.albums[1] = new RCApp.Album('AquaLung');  
  this.albums[2] = new RCApp.Album('Desperado');
};

// Seed Artists
RCApp.ArtistList.artistSeed = function(){
  var i;

  this.artists[0] = new RCApp.Album('John Lennon');
  this.artists[1] = new RCApp.Album('Ian Anderson');  
  this.artists[2] = new RCApp.Album('Glen Fry');

  for(0 = 1; i < 3; i++){
    this.listEl.appendChild(this.artist[i].view());
  }
};

RCApp.ArtistList.artistHandler = function(event){
  var targetValues = event.target.getAttribute('id').split('-'),
    targetID = targetValues.pop(),
    targetAction = targetValues.shift(),
    action = this.actionDispatcher[targetAction];
    event.preventDefault();
    if(action){
      action(targetID);
    }
};

RCApp.ArtistList.showArtist = function(id){
  var artist = this.artists[id];
  artist.show();
};

RCApp.ArtistList.saveArtist = function(id){
  var artist = this.artists[id];
  artist.save();
};

RCApp.ArtistList.cancelArtist = function(id){
  var artist = this.artists[id];
  artist.cancel();
};

RCApp.ArtistList.deleteArtist = function(id){
  // this.artists[id].show();
};  

RCApp.ArtistList.addArtist = function(event){
  var artist = new RCApp.Artist(this.newArtistNameEl.value, this.newArtistDescEl.value);
  this.artists[artist.id] = artist;
  this.listEl.appendChild(artist.view());
  this.newArtistNameEl.value= '';
  this.newArtistDescEl.value = ''; 
  event.preventDefault(); 
};




