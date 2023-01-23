class SongsController < ApplicationController
  def index
    @songs = Song.all.order(:id).reverse
  end

  def show
    @song = Song.find(params[:id])
  end

  def new
    @song = Song.new
  end

  def create
    @song = Song.new(params[:song])
    if @song.save
      redirect_to "/songs/#{@song.id}"
    else
      redirect_to "/posts/new"
    end
  end

  def edit
    @song = Song.find(params[:id])
  end

  def update
    @song = Song.find(params[:id])
    @song.update(params[:song])
    redirect_to "/songs/#{@song.id}"
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    redirect_to "/"
  end


end
