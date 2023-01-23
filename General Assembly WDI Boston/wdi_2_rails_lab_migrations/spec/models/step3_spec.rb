require 'rails_helper'

RSpec.describe Location do
  subject(:location) { Location.create }

  describe '#create' do
    it 'creates a new Location and saves it to the database' do
      expect(location).to be_a Location
      expect(location.persisted?).to be true
    end
  end

  describe 'columns in database' do
    it 'has a column called lat' do
      expect(location).to respond_to(:lat)
    end

    it 'has a column called long' do
      expect(location).to respond_to(:long)
    end

    it 'has a column called created_at' do
      expect(location).to respond_to(:created_at)
    end

    it 'has a column called updated_at' do
      expect(location).to respond_to(:updated_at)
    end

    it 'has a column called name' do
      expect(location).to respond_to(:name)
    end

    it 'has a column called city' do
      expect(location).to respond_to(:city)
    end

    it 'has a column called state' do
      expect(location).to respond_to(:state)
    end

    it 'has a column called color' do
      expect(location).to respond_to(:color)
    end
  end
end
