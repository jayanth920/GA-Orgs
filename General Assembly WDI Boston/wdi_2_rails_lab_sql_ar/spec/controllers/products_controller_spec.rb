require 'rails_helper'

RSpec.describe ProductsController do

  describe "GET index" do
    it "assigns @products" do
      product = Product.create
      get :index
      expect(assigns(:products)).to eq([product])
    end
  end


  describe "GET show" do
    it "assigns @product" do
      product = Product.create
      get :show, id: product.id
      expect(assigns(:product)).to eq(product)
    end
  end
end
