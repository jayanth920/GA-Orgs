# frozen_string_literal: true

require_relative '../lib/fizzbuzz.rb'

RSpec.describe 'fizzbuzz method' do
  it 'puts values to stdout' do
    expect { fizzbuzz(1) }.to output.to_stdout
  end

  it "puts 'fizz' when number is divisible by 3" do
    expected_output = "1\n2\nfizz\n"
    expect { fizzbuzz(3) }.to output(expected_output).to_stdout
  end

  it "puts 'buzz' when number is divisible by 5" do
    expected_output = "1\n2\nfizz\n4\nbuzz\n"
    expect { fizzbuzz(5) }.to output(expected_output).to_stdout
  end

  it "puts 'fizzbuzz' when number is divisible by 3 and 5" do
    expected_output = "1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\
\n11\nfizz\n13\n14\nfizzbuzz\n"
    expect { fizzbuzz(15) }.to output(expected_output).to_stdout
  end
end
