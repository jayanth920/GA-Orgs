require_relative '../lib/rectangle'

# Note: We put the name of the class here instead of a string
RSpec.describe Rectangle do
  # We use `let` for setting local variables
  let(:length) { 10 }
  let(:width) { 20 }

  # Similarly, we use `subject` to create an instance
  # of the main object we are testing
  subject(:rectangle) { Rectangle.new(length, width) }

  # Testing the initialize method
  # For this one, we mostly check that it creates a Rectangle
  describe '#initialize' do
    it 'creates a new instance of a Rectangle with a length and width' do
      expect(rectangle).to be_a Rectangle
    end
  end

  # Testing the instance method of length
  describe '#length' do
    it 'returns the value of @length' do
      expect(rectangle.length).to be length
    end
  end

  # Testing the instance method of width
  describe '#width' do
    it 'returns the value of @width' do
      expect(rectangle.width).to be width
    end
  end


  # Testing the instance method of perimeter
  describe '#perimeter?' do
    it 'returns perimeter of rectangle' do
      expect(rectangle.perimeter).to be 60
    end
  end

  # Testing the instance method of square?
  describe '#square?' do
    subject(:square) { Rectangle.new(20, 20) }
    it 'returns if a rectangle is a square' do
      expect(rectangle.square?).to be false
      expect(square.square?).to be true
    end
  end

  # Testing the instance method of area
  describe '#area' do
    it 'returns the value of @width' do
      expect(rectangle.area).to be (length * width)
    end
  end
end
