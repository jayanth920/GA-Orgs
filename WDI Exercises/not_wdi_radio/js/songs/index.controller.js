"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongsIndexController", [
      "SongFactory",
      "$sce",
      SongsIndexControllerFunction
    ])
    function SongsIndexControllerFunction (SongFactory, $sce){
      this.songs = SongFactory.query();
      this.newSong = new SongFactory();
      this.play = function(song){
        console.log("i was clicked", song);
        this.playSong = song
        // workaround for ng-src not allowing expression {{song.audio_url}}
        this.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url)
      }
    }
}())
