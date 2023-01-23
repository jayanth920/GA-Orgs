class BlogpostsController < ApplicationController
  before_action :set_blogpost, only: [:show, :update, :destroy]

  # GET /blogposts
  # GET /blogposts.json
  def index
    @blogposts = Blogpost.all

    render json: @blogposts
  end

  # GET /blogposts/1
  # GET /blogposts/1.json
  def show
    render json: @blogpost
  end

  # POST /blogposts
  # POST /blogposts.json
  def create
    @blogpost = Blogpost.new(blogpost_params)

    if @blogpost.save
      render json: @blogpost, status: :created, location: @blogpost
    else
      render json: @blogpost.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogposts/1
  # PATCH/PUT /blogposts/1.json
  def update
    @blogpost = Blogpost.find(params[:id])

    if @blogpost.update(blogpost_params)
      head :no_content
    else
      render json: @blogpost.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogposts/1
  # DELETE /blogposts/1.json
  def destroy
    @blogpost.destroy

    head :no_content
  end

  private

    def set_blogpost
      @blogpost = Blogpost.find(params[:id])
    end

    def blogpost_params
      params[:blogpost].permit(:title, :body, :mood)
    end
end
