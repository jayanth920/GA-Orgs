require_relative '../lib/circle'

# Note: We put the name of the class here instead of a string
RSpec.describe Circle do
  # We use `let` for setting local variables
  let(:radius) { 10 }

  # Similarly, we use `subject` to create an instance
  # of the main object we are testing
  subject(:circle) { Circle.new(radius) }

  # Testing the initialize method
  # For this one, we mostly check that it creates a Circle
  describe '#initialize' do
    it 'creates a new instance of a Circle with a radius' do
      expect(circle).to be_a Circle
    end
  end

  # Testing the instance method of length
  describe '#length' do
    it 'returns the value of @length' do
      expect(circle.radius).to be radius
    end
  end

  # Testing the instance method of radius
  describe '#diameter' do
    it 'returns the diameter of the circle' do
      expect(circle.diameter).to be 20
    end
  end

  # Testing the instance method of area
  # Area of circle is pi * radius ** 2
  # pi is accessed with Math::PI
  describe '#area' do
    it 'returns area of the circle' do
      expect(circle.area).to be_within(0.1).of(98.69604)
    end
  end

  # Testing the instance method of circumference
  # Circumference of circle is 2 * pi * radius
  # pi is accessed with Math::PI
  describe '#circumference' do
    it 'returns circumference of the circle' do
      expect(circle.circumference).to be_within(0.1).of(62.83185307179586)
    end
  end

end
