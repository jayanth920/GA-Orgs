class PostsController < ApplicationController
  def index
    @post = Post.new
    @posts = Post.all.reverse
  end
  def create
    @post = Post.create(post_params)
    redirect_to posts_path
  end
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_path
  end
  private
  def post_params
    params.require(:post).permit(:image)
  end
end
