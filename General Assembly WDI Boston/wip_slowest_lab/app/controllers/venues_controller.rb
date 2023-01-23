class VenuesController < ApplicationController
  def show
    @venue = Venue.find(params[:id])
  end
  def index
    @venues = Venue.all
  end
end