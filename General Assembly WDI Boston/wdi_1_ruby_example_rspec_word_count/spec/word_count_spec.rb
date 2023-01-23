require 'spec_helper'
require_relative '../lib/word_count'

describe String do
  describe '#word_count' do
    it 'returns 0 if the string is empty' do
      expect(''.word_count).to eq 0
    end

    it 'returns 0 if the string contains no words' do
      expect('    '.word_count).to eq 0
    end

    it 'returns 1 if the string contains one word' do
      expect('okay'.word_count).to eq 1
    end

    it 'returns 3 if the string contains three words' do
      expect('David is cool'.word_count).to eq 3
    end

    it 'returns 6 if the string contains six words' do
      expect('my hovercraft is full of eels'.word_count).to eq 6
    end
  end

  describe '#word_frequency' do
    it 'returns an empty hash if the string is empty' do
      expect(''.word_frequency).to eq({})
    end

    it 'returns a correct hash of word counts when no words are repeated' do
      sentence = 'peter piper picked a peck'
      expected_hash = {
        'peter' => 1,
        'piper' => 1,
        'picked' => 1,
        'a' => 1,
        'peck' => 1
      }

      expect(sentence.word_frequency).to eq expected_hash
    end

    it 'returns a correct hash of word counts when there are repeated words' do
      sentence = 'peter piper picked a peck and a peck'
      expected_hash = {
        'peter' => 1,
        'piper' => 1,
        'picked' => 1,
        'a' => 2,
        'peck' => 2,
        'and' => 1
      }

      expect(sentence.word_frequency).to eq expected_hash
    end
  end
end
