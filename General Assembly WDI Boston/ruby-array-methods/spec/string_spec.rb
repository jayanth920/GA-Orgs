# frozen_string_literal: true

require 'spec_helper'
require 'string'
require 'pry'

describe 'TextAnalysis' do
  let(:string) { 'This is a String! A String!' }

  describe 'normalize_words' do
    let(:normalized_string) { 'THIS IS A STRING A STRING' }
    it 'removes all punctuation and upcases each word' do
      expect(string.normalize_words).to eq normalized_string
    end
  end

  describe 'unique_words' do
    it 'counts all unique words in the string' do
      expect(string.unique_words).to eq %w[THIS IS A STRING]
    end
  end

  describe 'word_count' do
    it 'counts all unique words' do
      expect(string.word_count(string.unique_words)).to eq 4
    end
  end

  describe 'word_frequencies' do
    it 'returns a hash with the word as a key and frequency as a value' do
      expect(string.word_frequencies).to eq(
        'THIS' => 1,
        'IS' =>  1,
        'A' => 2,
        'STRING' => 2
      )
    end
  end

  describe 'longest_word' do
    it 'returns the longest word' do
      expect(string.longest_word).to eq 'STRING'
    end
  end
end
