class ArtistsController < ApplicationController
  def index
    @artists = Artist.all.order(:id).reverse
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def new
    @artist = Artist.new
  end

  def create
    @artist = Artist.new(params[:artist])
    if @artist.save
      redirect_to "/artists/#{@artist.id}"
    else
      redirect_to "/posts/new"
    end
  end

  def edit
    @artist = Artist.find(params[:id])
  end

  def update
    @artist = Artist.find(params[:id])
    @artist.update(params[:artist])
    redirect_to "/artists/#{@artist.id}"
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to "/"
  end


end
