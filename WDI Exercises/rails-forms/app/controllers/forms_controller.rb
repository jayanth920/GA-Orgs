class FormsController < ApplicationController

  def post
    # handle post requests here
  end

  def index
    @cats = Cat.all
  end
end
