require 'rails_helper'

RSpec.describe Product, type: :model do
  subject(:product) { Product.create(name: "iPhone", price: 299.99) }
  describe '#create' do
    it 'creates a new product, saving them to the DB' do
      product = Product.create
      expect(product).to be_a Product
      expect(product.persisted?).to be true
    end
  end

  describe '#new' do
    it 'creates a new product without saving to DB' do
      product = Product.new
      expect(product).to be_a Product
      expect(product.persisted?).to be false
    end
  end

  describe 'attributes from schema' do
    it 'responds to name' do
      expect(product.name).to be_a String
    end

    it 'responds to price' do
      expect(product.price).to be_a BigDecimal
    end
  end
end
