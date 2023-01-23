require 'rails_helper'

RSpec.describe Person, type: :model do
  subject(:person) { Person.create(first_name: 'David', last_name: 'Fisher', age: 32)}
  describe '#create' do
    it 'creates a new person, saving them to the DB' do
      person = Person.create
      expect(person).to be_a Person
      expect(person.persisted?).to be true
    end
  end

  describe '#new' do
    it 'creates a new person without saving to DB' do
      person = Person.new
      expect(person).to be_a Person
      expect(person.persisted?).to be false
    end
  end

  describe 'attributes from schema' do
    it 'responds to first_name' do
      expect(person.first_name).to be_a String
    end

    it 'responds to last_name' do
      expect(person.last_name).to be_a String
    end

    it 'responds to age' do
      expect(person.age).to be_a Fixnum
    end
  end
end
