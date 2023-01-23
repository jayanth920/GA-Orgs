require_relative '../lib/primes_between'

RSpec.describe "#primes_between" do
  let(:small_primes) do
    [2, 3, 5, 7, 11]
  end

  let(:large_primes) do
    [999883, 999907, 999917, 999931, 999953, 999959, 999961, 999979, 999983]
  end

  it "should have a method defined named primes_between" do
    expect(method(:primes_between))
  end

  it "should have one parameter called prime_range" do
    parameters = method(:primes_between).parameters
    expect(parameters[0]).to include(:prime_range)
  end

  it "should return an array of the spiral unwrapped" do
    expect(primes_between(1..12)).to eq(small_primes)
    expect(primes_between(999882..999984)).to eq(large_primes)
  end
end
