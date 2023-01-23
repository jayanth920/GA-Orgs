# frozen_string_literal: true

require_relative '../lib/diagnostic.rb'

RSpec.describe 'Diagnostic' do
  subject(:diagnostic) { Diagnostic }

  describe '.variable' do
    it 'returns a string with the correct variable name' do
      expect(subject.variable).to eql('favorite_star_wars_movie')
    end
  end

  describe '.flow_control' do
    it 'returns a string with correct prediction' do
      expect(subject.flow_control).to eql('The Dark Knight')
    end
  end

  describe '.falsy' do
    it 'contains the correct values only' do
      expect(subject.falsy).to include(nil)
      expect(subject.falsy).to include(false)
      expect(subject.falsy.length).to eql(2)
    end
  end

  describe '.interpolation' do
    it 'returns a sentence' do
      expect(subject.interpolation)
        .to eql('Jar Jar Binks is really a Sith Lord.')
    end
  end

  describe '.message' do
    it 'returns the correct message' do
      expect(subject.message.length).to eql(10)
      expect(subject.message[1]).to eql('t')
      expect(subject.message[9]).to eql('t')
    end
  end

  describe '.else_if' do
    it 'returns a string with the correct keyword' do
      expect(subject.else_if).to eql('elsif')
    end
  end

  describe '.returns' do
    it 'returns a value which desribes whether returns are explicit' do
      expect(subject.returns).to equal(false)
    end
  end

  describe '.remove_from_array' do
    it 'contains the correct values only' do
      expect(subject.remove_from_array).to include(12)
      expect(subject.remove_from_array).to include(34)
      expect(subject.remove_from_array.length).to eql(2)
    end
  end

  describe '.array_add_to' do
    it 'contains the correct values' do
      expect(subject.array_add_to.length).to eql(4)
      expect(subject.array_add_to[3]).to eql(99)
    end
  end

  describe '.index_2' do
    it 'contains the correct value' do
      expect(subject.index_2).to eql(nil)
    end
  end

  describe '.person_hash' do
    it 'creates hash containing :favorite_number and :first_name symbols' do
      expect(subject.person_hash).to be_a(Hash)
      expect(subject.person_hash).to have_key(:first_name)
      expect(subject.person_hash).to have_key(:favorite_number)
    end
  end

  describe '.normalize' do
    it 'should return the correct values' do
      str1 = 'hello'
      str2 = 'racecar'
      str3 = 'wEiRd CapitalIZATION'
      expect(subject.normalize(str1)).to eql('OLLEH')
      expect(subject.normalize(str2)).to eql('RACECAR')
      expect(subject.normalize(str3)).to eql('NOITAZILATIPAC DRIEW')
    end
  end
end
