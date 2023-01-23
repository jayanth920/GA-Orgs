class ProductsController < ApplicationController
  def index
    # Put your string of SQL in the blank string argument here
    @products = Product.find_by_sql ''
  end

  def show
    # Put your string of SQL in the blank string argument here
    # You may want to use string interpolation
    # Remember that you can get the id of the incoming product with params[:id]
    @product = Product.find_by_sql("").first
  end
end
