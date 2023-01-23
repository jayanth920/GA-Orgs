class DoughnutsController < ApplicationController
  def index
    @doughnuts = Doughnut.all
  end
  def show
    @doughnut = Doughnut.find(params[:id])
  end
  def destroy
    @doughnut = Doughnut.find(params[:id])
    @doughnut.destroy
    redirect_to doughnuts_path
  end
  def new
    @doughnut = Doughnut.new
  end
  def create
    @doughnut = Doughnut.create(doughnut_params)
    redirect_to @doughnut
  end
  def edit
    @doughnut = Doughnut.find(params[:id])
  end
  def update
    @doughnut = Doughnut.find(params[:id])
    @doughnut.update(doughnut_params)
    redirect_to @doughnut
  end
  private
  def doughnut_params
    params.require(:doughnut).permit(:flavor, :tastiness, :image_url)
  end
end
