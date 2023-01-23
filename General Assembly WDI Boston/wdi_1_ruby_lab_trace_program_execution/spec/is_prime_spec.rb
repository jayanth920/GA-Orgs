require_relative '../lib/is_prime'

RSpec.describe "is_prime?" do
  it 'returns false for positive Fixnums that are not prime' do
    expect(is_prime?(4)).to be false
    expect(is_prime?(8)).to be false
    expect(is_prime?(10)).to be false
    expect(is_prime?(64)).to be false
    expect(is_prime?(100)).to be false
    expect(is_prime?(1000)).to be false
  end

  # Testing for all primes under 100
  it 'returns true for numbers that are prime' do
    expect(is_prime?(2)).to be true
    expect(is_prime?(3)).to be true
    expect(is_prime?(5)).to be true
    expect(is_prime?(7)).to be true
    expect(is_prime?(11)).to be true
    expect(is_prime?(13)).to be true
    expect(is_prime?(17)).to be true
    expect(is_prime?(19)).to be true
    expect(is_prime?(29)).to be true
    expect(is_prime?(31)).to be true
    expect(is_prime?(37)).to be true
    expect(is_prime?(41)).to be true
    expect(is_prime?(43)).to be true
    expect(is_prime?(47)).to be true
    expect(is_prime?(53)).to be true
    expect(is_prime?(59)).to be true
    expect(is_prime?(61)).to be true
    expect(is_prime?(67)).to be true
    expect(is_prime?(71)).to be true
    expect(is_prime?(73)).to be true
    expect(is_prime?(79)).to be true
    expect(is_prime?(83)).to be true
    expect(is_prime?(89)).to be true
    expect(is_prime?(97)).to be true
  end
end
