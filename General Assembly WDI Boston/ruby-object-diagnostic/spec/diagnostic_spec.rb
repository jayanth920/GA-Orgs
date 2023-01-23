# frozen_string_literal: true

require_relative '../lib/diagnostic.rb'

RSpec.describe 'Person' do
  let(:name) { 'Jeff' }
  let(:age) { 29 }
  let(:location) { 'Boston' }

  subject(:jeff) { Person.new(name, age, location) }

  it 'is a person' do
    expect(subject).to be_a(Person)
  end

  it 'has required attributes' do
    expect(subject.instance_variables).to include(:@name)
    expect(subject.instance_variables).to include(:@age)
    expect(subject.instance_variables).to include(:@location)
  end

  it 'has getters for name and age' do
    expect { subject.name }.not_to raise_error
    expect { subject.age }.not_to raise_error
  end

  it 'has setters for name and location' do
    expect { subject.name = 'Matt' }.not_to raise_error
    expect { subject.location = 'Cambridge' }.not_to raise_error
  end

  it 'has no setter for age' do
    expect { subject.age = 30 }.to raise_error(NoMethodError)
  end

  it 'has no getter for location' do
    expect { subject.location }.to raise_error(NoMethodError)
  end
end

RSpec.describe 'Developer' do
  let(:name) { 'Jeff' }
  let(:age) { 29 }
  let(:location) { 'Boston' }

  subject(:jeff) { Developer.new(name, age, location) }

  it 'is a person' do
    expect(subject).to be_a(Developer)
    expect(subject).to be_a(Person)
  end

  it 'has required attributes' do
    expect(subject.instance_variables).to include(:@name)
    expect(subject.instance_variables).to include(:@age)
    expect(subject.instance_variables).to include(:@location)
  end

  it 'has .solve_problems' do
    expect { subject.solve_problems }.not_to raise_error
  end

  describe '.solve_problems' do
    it 'returns "think think think"' do
      expect(subject.solve_problems).to eq('think think think')
    end
  end
end

RSpec.describe 'Lion' do
  subject(:leo) { Lion.new }

  it 'has .groom' do
    expect { subject.groom }.not_to raise_error
  end

  it 'has .can_eat_meat?' do
    expect { subject.can_eat_meat? }.not_to raise_error
  end

  it 'has .groom' do
    expect { subject.groom }.not_to raise_error
  end

  describe '.roar' do
    it 'prints out "ROAR"' do
      expect { subject.roar }.to output("ROAR!\n").to_stdout
    end
  end
end

RSpec.describe 'ComboAttack' do
  it 'can chain punching, moving, and kicking' do
    expect { ComboAttack.new.punch.move('left').kick }.not_to raise_error
    expect { ComboAttack.new.kick.move('right').punch }.not_to raise_error
    expect { ComboAttack.new.kick.punch.kick }.not_to raise_error
  end

  it 'has ::possible_moves' do
    expect { ComboAttack.possible_moves }.not_to raise_error
  end

  describe '::possible_moves' do
    it 'returns the string "kick, move, punch"' do
      expect(ComboAttack.possible_moves).to eq('kick, move, punch')
    end
  end
end

RSpec.describe 'Response' do
  it 'has dave' do
    expect(Response.dave).to be_a(Person)
    expect(Response.dave.instance_variable_get(:@name)).to eq('Dave')
    expect(Response.dave.instance_variable_get(:@age)).to eq(32)
    expect(Response.dave.instance_variable_get(:@location)).to eq('Somerville')
  end

  it 'has housecat_noise' do
    expect(Response.housecat_noise).to be_a(String)
    expect(Response.housecat_noise).to eq("I am a HouseCat, and I go 'meow'")
  end
end
