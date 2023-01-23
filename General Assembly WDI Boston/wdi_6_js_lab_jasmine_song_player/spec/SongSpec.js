describe("Song", function(){
  describe("initializer", function(){
    it("accepts a song title", function(){
      var song = new Song("New Shoes");

      expect(song.title).toEqual("New Shoes");
    });
  });
});
