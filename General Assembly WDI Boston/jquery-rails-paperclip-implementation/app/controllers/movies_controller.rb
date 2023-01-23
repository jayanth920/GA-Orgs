class MoviesController < ApplicationController

  def create
    movie = Movie.new(movie_params)
    if movie.save
      render json: movie
    else
      head :bad_request
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:poster, :title, :director)
  end
end
