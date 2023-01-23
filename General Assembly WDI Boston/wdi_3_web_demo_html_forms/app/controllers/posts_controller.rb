class PostsController < ApplicationController
  def create
  	@post = Post.new(request_data: params.to_s)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render action: 'show', status: :created, location: @post }
      else
        format.html { render action: 'new' }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
  	@post = Post.find(params[:id])
  end

  def index
  	@posts = Post.all
  end

end
