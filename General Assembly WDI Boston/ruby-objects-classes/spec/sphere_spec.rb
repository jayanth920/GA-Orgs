require_relative '../lib/sphere'

RSpec.describe Sphere do
  let(:radius) { 10 }

  subject(:sphere) { Sphere.new(radius) }

  describe '#initialize' do
    it 'creates a new instance of a Sphere with a radius' do
      expect(sphere).to be_a Sphere
    end
  end

  ### IMPLEMENT YOUR OWN TESTS HERE

  #radius

  #diameter

  #surface_area

  #volume

  #great_circle_area
  # http://en.wikipedia.org/wiki/Great_circle
end
