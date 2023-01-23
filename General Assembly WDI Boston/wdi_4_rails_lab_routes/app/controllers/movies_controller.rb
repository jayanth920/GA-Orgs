class MoviesController < ApplicationController
  # before filter
  # before_action :show_controller_action

  # GET /movies
  def index
  # All the movies
  @movies = Movie.all  
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def new
    @movie = Movie.new
  end

  def create
    @movie = Movie.new(params[:movie])
    @movie.save!    
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def movie_params

  end
  # def show_controller_action
  #   render text: "#{params[:controller]}##{params[:action]}"
  # end

end
