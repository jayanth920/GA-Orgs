class ScientistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Scientist.all
  end

  def show
    render json: Scientist.find(params["id"])
  end

  def create
    render json: Scientist.create(params["scientist"])
  end

  def delete
    render json: Scientist.delete(params["id"])
  end

  def update
    render json: Scientist.update(params["id"], params["scientist"])
  end
end
