class PostsController < ApplicationController
  def index
    @posts = Post.all


    render json: @posts.to_json, status: :ok
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post.to_json, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post.to_json, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: {message: "success"}, status: :ok
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:author, :body)
    end
end
