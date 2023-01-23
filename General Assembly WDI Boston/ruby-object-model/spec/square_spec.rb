# frozen_string_literal: true

require_relative '../lib/square.rb'

describe 'Square class' do
  subject(:square) { Square.new(4) }

  it 'inherits from Rectangle' do
    expect(Square).to be < Rectangle
  end

  it 'new instance is a Square' do
    expect(subject).to be_a(Square)
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

    describe 'given Square.new(4)' do
      it 'length has correct value' do
        expect(Square.new(4).length).to eq(4)
      end
      it 'width has correct value' do
        expect(Square.new(4).width).to eq(4)
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

  describe 'calculate_area' do
    it 'should calculate area for a given side length' do
      expect(subject.calculate_area.round(2)).to eq(16)
      expect(Square.new(6).calculate_area.round(2)).to eq(36)
      expect(Square.new(9).calculate_area.round(2)).to eq(81)
    end
  end
end
