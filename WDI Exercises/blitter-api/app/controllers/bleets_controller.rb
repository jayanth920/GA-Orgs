class BleetsController < ApplicationController
  before_action :set_bleet, only: [:show, :update, :destroy]

  # GET /bleets
  def index
    @bleets = Bleet.all

    render json: @bleets
  end

  # GET /bleets/1
  def show
    render json: @bleet
  end

  # POST /bleets
  def create
    @bleet = Bleet.new(bleet_params)

    if @bleet.save
      render json: @bleet, status: :created, location: @bleet
    else
      render json: @bleet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bleets/1
  def update
    if @bleet.update(bleet_params)
      render json: @bleet
    else
      render json: @bleet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bleets/1
  def destroy
    @bleet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bleet
      @bleet = Bleet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bleet_params
      params.require(:bleet).permit(:content, :likes)
    end
end
