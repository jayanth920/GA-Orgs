var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunr");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ArtistSchema = new Schema(
  {
    name: String,
    nationality: String,
    photoUrl: String,
    songs: [{type: ObjectId, ref: "Song"}]
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

ArtistSchema.virtual("id").get(function(){
  return this._id;
});

var SongSchema = new Schema({
  title: String,
  album: String,
  artist: {type: ObjectId, ref: "Artist"}
});

var ArtistModel = mongoose.model("Artist", ArtistSchema);
var SongModel = mongoose.model("Song", SongSchema);
