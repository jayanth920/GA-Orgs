class ProductsController < ApplicationController
  respond_to :json, :html

	def index
		@products = Product.all
    respond_with(@products) do |format|
      format.html
      format.json { render :json => @products, :root => false }
    end 
	end

	def show
		@product = Product.find(params[:id])
    respond_with(@product) do |format|
      format.html
      format.json { render :json => @product}
    end 
	end

  def create
    new_product = Product.new
    new_product.name = params[:new_product][:name]
    new_product.description = params[:new_product][:description]
    new_product.price = params[:new_product][:price]

    if(new_product.valid?) 
      new_product.save!
    else
      render 'public/422', :status => 422
      return
    end

    respond_with(new_product) do |format|
      format.json {render :json => new_product}
    end

  end
end
