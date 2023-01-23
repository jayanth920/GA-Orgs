class SuperherosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Superhero.all
  end

  def show
    render json: Superhero.find(params["id"])
  end

  def create
    render json: Superhero.create(params["superhero"])
  end

  def delete
    render json: Superhero.delete(params["id"])
  end

  def update
    render json: Superhero.update(params["id"], params["superhero"])
  end
end
