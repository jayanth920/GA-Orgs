# frozen_string_literal: true

require_relative '../lib/pets.rb'

pets = Pets.new('data/pets.csv').pets

p pets.count
