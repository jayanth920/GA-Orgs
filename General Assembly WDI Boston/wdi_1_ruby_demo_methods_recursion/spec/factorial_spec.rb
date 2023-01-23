require_relative '../lib/factorial'

RSpec.describe 'factorial' do
  it 'returns the factorial of n using recursion' do
    expect(factorial(1)).to be 1
    expect(factorial(2)).to be 2
    expect(factorial(3)).to be 6
    expect(factorial(4)).to be 24
    expect(factorial(5)).to be 120
    expect(factorial(6)).to be 720
    expect(factorial(7)).to be 5040
    expect(factorial(8)).to be 40320
    expect(factorial(9)).to be 362880
    expect(factorial(10)).to be 3628800
  end
end

RSpec.describe 'ternary_factorial' do
  it 'returns the factorial of n using recursion and a ternary operator' do
    expect(ternary_factorial(2)).to be 2
    expect(ternary_factorial(3)).to be 6
    expect(ternary_factorial(4)).to be 24
    expect(ternary_factorial(5)).to be 120
    expect(ternary_factorial(6)).to be 720
    expect(ternary_factorial(7)).to be 5040
    expect(ternary_factorial(8)).to be 40320
    expect(ternary_factorial(9)).to be 362880
    expect(ternary_factorial(10)).to be 3628800
  end
end
