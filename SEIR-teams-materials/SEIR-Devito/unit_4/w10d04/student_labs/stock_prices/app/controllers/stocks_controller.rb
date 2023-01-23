class StocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Stock.all
  end

  def show
    render json: Stock.find(params["id"])
  end

  def create
    render json: Stock.create(params["stock"])
  end

  def delete
    render json: Stock.delete(params["id"])
  end

  def update
    render json: Stock.update(params["id"], params["stock"])
  end
end
