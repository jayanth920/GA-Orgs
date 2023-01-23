class CommentsController < ApplicationController

  # before filter to get the movie that this comment belongs.
  before_action :get_movie

  def index
    if !@movie
      @comments = Comment.all
    else
      @comments = @movie.comments      
    end
  end

  def show
  end

  def new
    @comment = Comment.new
  end

  def create
    @movie.comments << Comment.create!(comments_params)
    redirect_to movie_path(@movie.id)    
  end

  private

  def comments_params
    params.require(:comment).permit(:body)
  end

  def get_movie
    @movie = Movie.find(params[:movie_id]) if params.key?(:movie_id)
  end
end
