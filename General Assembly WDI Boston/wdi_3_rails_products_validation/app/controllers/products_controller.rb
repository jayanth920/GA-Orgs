class ProductsController < ApplicationController

  # GET /products
  def index
    # Get a collection of all the products 
    # in the DB.
    # Behaves like an Array. 
    # SELECT * FROM products;
    @products = Product.all

    # By Default render the view with the 
    # same name as the action.
    # render :index
  end

  # GET /products/:id
  def show
    @product = Product.find(params[:id])
  end

  private

  def set_title
    @title = "Awesome Products!"
  end
end
