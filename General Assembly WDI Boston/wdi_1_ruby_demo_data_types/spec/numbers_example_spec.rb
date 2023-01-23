require_relative '../lib/numbers_example'

# http://www.ruby-doc.org/core-2.2.0/Fixnum.html
# http://www.ruby-doc.org/core-2.2.0/Float.html
RSpec.describe '#add_numbers' do
  it 'sums two Fixnums' do
    expect(add_numbers(2, 2)).to eq(4)
    expect(add_numbers(10, 2)).to eq(12)
    expect(add_numbers(-10, 10)).to eq(0)
  end

  it 'sums two Floats' do
    expect(add_numbers(2.0, 2.0)).to eq(4.0)
    expect(add_numbers(10.0, 2.0)).to eq(12.0)
    expect(add_numbers(-10.0, 10.0)).to eq(0.0)
  end
end

RSpec.describe '#subtract_numbers' do
  it 'returns difference of two Fixnums' do
    expect(subtract_numbers(2, 2)).to eq(0)
    expect(subtract_numbers(10, 2)).to eq(8)
    expect(subtract_numbers(-10, 10)).to eq(-20)
  end

  it 'returns difference of two Floats' do
    expect(subtract_numbers(2.0, 2.0)).to eq(0.0)
    expect(subtract_numbers(10.0, 2.0)).to eq(8.0)
    expect(subtract_numbers(-10.0, 10.0)).to eq(-20.0)
  end
end

RSpec.describe '#multiply_numbers' do
  it 'returns product of two Fixnums' do
    expect(multiply_numbers(2, 2)).to eq(4)
    expect(multiply_numbers(10, 2)).to eq(20)
    expect(multiply_numbers(-10, 10)).to eq(-100)
  end

  it 'returns product of two Floats' do
    expect(multiply_numbers(2.0, 2.0)).to eq(4.0)
    expect(multiply_numbers(10.0, 2.0)).to eq(20.0)
    expect(multiply_numbers(-10.0, 10.0)).to eq(-100.0)
  end
end

RSpec.describe '#divide_with_slash' do
  it 'returns quotient of two Fixnums' do
    expect(divide_with_slash(2, 2)).to eq(1)
    expect(divide_with_slash(10, 2)).to eq(5)

    # Note, this doesn't divide like you'd think!
    # 10 / 3 == 3
    expect(divide_with_slash(10, 3)).to eq(3)
  end

  it 'returns quotient of two Floats' do
    expect(divide_with_slash(2.0, 2.0)).to eq(1.0)
    expect(divide_with_slash(10.0, 2.0)).to eq(5.0)

    # We have to use be_within() because it returns an irrational number
    expect(divide_with_slash(10.0, 3.0)).to be_within(0.1).of(3.33)
  end
end

RSpec.describe '#modulo_division' do
  it 'returns remainder of dividing two Fixnums' do
    expect(modulo_division(2, 2)).to eq(0)
    expect(modulo_division(10, 2)).to eq(0)

    # Essentially, how many are left when you divide?
    expect(modulo_division(10, 3)).to eq(1)
  end

  it 'returns remainder of dividing two Floats' do
    expect(modulo_division(2.0, 2.0)).to eq(0.0)
    expect(modulo_division(10.0, 2.0)).to eq(0.0)
    expect(modulo_division(10.0, 3.0)).to eq(1.0)
  end
end


RSpec.describe '#a_greater_than_b?' do
  it 'returns true if a is greater than b' do
    expect(a_greater_than_b?(2, 2)).to be false
    expect(a_greater_than_b?(10, 2)).to be true
    expect(a_greater_than_b?(-10, 10)).to be false

    expect(a_greater_than_b?(2.0, 2.0)).to be false
    expect(a_greater_than_b?(10.0, 2.0)).to be true
    expect(a_greater_than_b?(-10.0, 10.0)).to be false
  end
end

RSpec.describe '#a_equals_b?' do
  it 'returns true if a equals b' do
    expect(a_equals_b?(2, 2)).to be true
    expect(a_equals_b?(10, 2)).to be false
    expect(a_equals_b?(-10, 10)).to be false

    expect(a_equals_b?(2.0, 2.0)).to be true
    expect(a_equals_b?(10.0, 2.0)).to be false
    expect(a_equals_b?(-10.0, 10.0)).to be false
  end
end

RSpec.describe '#as_a_float' do
  it 'returns true if a equals b' do
    expect(as_a_float(2)).to be_a Float
    expect(as_a_float(2)).to be 2.0

    expect(as_a_float(2.0)).to be_a Float
    expect(as_a_float(2.0)).to be 2.0
  end
end


RSpec.describe '#as_a_fixnum' do
  it 'returns true if a equals b' do
    expect(as_a_fixnum(2)).to be_a Fixnum
    expect(as_a_fixnum(2)).to be 2

    expect(as_a_fixnum(2.0)).to be_a Fixnum
    expect(as_a_fixnum(2.0)).to be 2
  end
end
