require './spec/spec_helper'
require_relative '../lib/temperature_conversion'

RSpec.describe "fahrenheit_to_celsius" do
  it 'converts a temperature in fahrenheit to celsius' do
    expect(fahrenheit_to_celsius(32)).to eq 0
    expect(fahrenheit_to_celsius(212)).to eq 100
  end
end

RSpec.describe "celsius_to_fahrenheit" do
  it 'converts a temperature in celsius to fahrenheit' do
    expect(celsius_to_fahrenheit(0)).to eq 32
    expect(celsius_to_fahrenheit(100)).to eq 212
  end
end

RSpec.describe "celsius_to_kelvin" do
  it 'converts a temperature in celsius to kelvin' do
    expect(celsius_to_kelvin(0)).to eq 273.15
    expect(celsius_to_kelvin(100)).to eq 373.15
    expect(celsius_to_kelvin(-273.15)).to eq 0
  end
end

RSpec.describe "kelvin_to_celsius" do
  it 'converts a temperature in celsius to kelvin' do
    expect(kelvin_to_celsius(0)).to eq -273.15
    expect(kelvin_to_celsius(273.15)).to eq 0
    expect(kelvin_to_celsius(546.3)).to eq 273.15
  end
end

RSpec.describe "kelvin_to_fahrenheit" do
  it 'converts a temperature in celsius to kelvin' do
    expect(kelvin_to_fahrenheit(0)).to be_within(0.1).of(-459.6)
    expect(kelvin_to_fahrenheit(100)).to be_within(0.1).of(-279.6)
    expect(kelvin_to_fahrenheit(500)).to be_within(0.1).of(440.3)
  end
end

RSpec.describe "fahrenheit_to_kelvin" do
  it 'converts a temperature in celsius to kelvin' do
    expect(fahrenheit_to_kelvin(0)).to be_within(0.1).of(255.3)
    expect(fahrenheit_to_kelvin(32)).to eq 273.15
    expect(fahrenheit_to_kelvin(212)).to eq 373.15
  end
end
