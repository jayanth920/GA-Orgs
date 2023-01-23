class TasksController < ApplicationController
  # index route
  def index
    render json: Task.all
  end

  #show route
  def show
    render json: Task.find(params["id"])
  end

  # create route
  def create
    render json: Task.create(params["task"])
  end

  # delete route
  def delete
    render json: Task.delete(params["id"])
  end

  # update route
  def update
    render json: Task.update(params["id"], params["task"])
  end
end
