class GuitarsController < ApplicationController
  def index
    @guitars = Guitar.all
    @name = "David"
  end

  # GET /guitars/1
  def show
    # guitar_id = params[:id]
    # @guitar = Guitar.find(guitar_id)
    @guitar = Guitar.find(params[:id])
  end

  # has nothing to do with the database
  # gives an empty form with a submit button
  # the submit button will then trigger the create action
  def new
    @guitar = Guitar.new
  end

  # when the form is submitted, Rails creates the new guitar in the database
  # POST /guitars
  def create
    guitar = Guitar.create(guitar_params)
    redirect_to guitar
  end

  private
  def guitar_params
    # params = {guitar: {make: 'foo', model: 'bar'}}
    params.require(:guitar).permit(:make, :model, :color, :price, :string_number, :year)
  end
end
