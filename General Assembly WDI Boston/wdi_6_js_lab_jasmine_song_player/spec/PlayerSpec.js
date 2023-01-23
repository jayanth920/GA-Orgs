describe("Player", function() {
  // `this` is reset to an empty object before each spec, so we can stash things
  // there using beforeEach (exercise: why can't we just do `var player = ...`?)
  beforeEach(function() {
    this.player = new Player();
    this.song = new Song("New Shoes");
  });

  describe("#play", function(){
    it("plays a song", function() {
      this.player.play(this.song);

      expect(this.player.isPlaying).toBe(true);
      expect(this.player.currentSong).toEqual(this.song);
    });
  });

  describe("#pause", function(){
    it("pauses the current song", function() {
      this.player.play(this.song);
      this.player.pause();

      expect(this.player.isPlaying).toBe(false);
    });
  });

  describe("#resume", function() {
    beforeEach(function() {
      this.player.play(this.song);
      this.player.pause();
    });

    it("resumes after pausing", function() {
      this.player.resume();

      expect(this.player.isPlaying).toBe(true);
    });

    // Demonstrates expecting that a function call will throw an error
    it("throws an error if not paused", function() {
      this.player.resume();

      // Exercise: Why can't we just call `this.player` inside the function?
      var player = this.player;
      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });

  // Demonstrates use of spies to intercept and test function calls
  // (note your Song will need a `persistFavoriteStatus` function on it
  // to pass this test, but it doesn't have to actually do anything!)
  describe("#makeFavorite", function(){
    it("tells the current song to persist its favorite status", function() {
      spyOn(this.song, 'persistFavoriteStatus');

      this.player.play(this.song);
      this.player.makeFavorite();

      expect(this.song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
  });
});
