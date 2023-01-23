# frozen_string_literal: true

require_relative '../lib/rectangle.rb'

describe 'Rectangle class' do
  subject(:rectangle) { Rectangle.new(4, 10) }

  it 'inherits from Shape' do
    expect(Rectangle).to be < Shape
  end

  it 'new instance is a Rectangle' do
    expect(subject).to be_a(Rectangle)
  end

  it 'has attr_reader for length' do
    expect(subject.length).to eq(4)
  end

  it 'has attr_reader for width' do
    expect(subject.width).to eq(10)
  end

  describe 'attributes' do
    it 'has required attributes' do
      expect(subject.instance_variables).to include(:@num_sides)
      expect(subject.instance_variables).to include(:@length)
      expect(subject.instance_variables).to include(:@width)
    end

    it 'attributes have expected values' do
      expect(subject.num_sides).to eq(4)
    end

    describe 'given Rectangle.new(3, 4)' do
      it 'length has correct value' do
        expect(Rectangle.new(3, 4).length).to eq(3)
      end
      it 'width has correct value' do
        expect(Rectangle.new(3, 4).width).to eq(4)
      end
    end
  end

  it 'has getters for @num_sides, @side_length' do
    expect { subject.num_sides }.not_to raise_error
    expect { subject.side_length }.not_to raise_error
  end

  it 'has no setter for @num_sides' do
    expect { subject.num_sides = 4 }.to raise_error(NoMethodError)
  end

  it 'has setters for @side_length' do
    expect { subject.side_length = 4 }.not_to raise_error
  end

  describe '@color' do
    it 'is not set on initialization' do
      expect(subject.instance_variables).not_to include(:@color)
    end

    it 'is set after assignment' do
      subject.color = 'red'
      expect(subject.instance_variables).to include(:@color)
    end
  end

  describe 'calculate_area' do
    it 'should calculate area for a given side length' do
      expect(Rectangle.new(4, 10).calculate_area.round(2)).to eq(40)
      expect(Rectangle.new(6, 5).calculate_area.round(2)).to eq(30)
      expect(Rectangle.new(9, 13).calculate_area.round(2)).to eq(117)
    end
  end
end
