class SongsController < ApplicationController
  # index
  def index
    @songs = Song.all
  end

  # new
  def new
    @song = Song.new
  end

  # create
  def create
    @song = Song.create(song_params)

    redirect_to "/songs/#{@song.id}"
  end

  #show
  def show
    @song = Song.find(params[:id])
  end

  # edit
  def edit
    @song = Song.find(params[:id])
  end

  # update
  def update
    @song = Song.find(params[:id])
    @song.update(song_params)

    redirect_to "/songs/#{@song.id}"
  end

  # destroy
  def destroy
    @song = Song.find(params[:id])
    @song.destroy

    redirect_to "/songs"
  end

  private
  def song_params
    params.require(:song).permit(:title, :album, :preview_url, :artist_id)
  end
end
