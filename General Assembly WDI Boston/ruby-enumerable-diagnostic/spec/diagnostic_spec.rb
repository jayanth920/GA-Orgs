# frozen_string_literal: true

require_relative '../lib/diagnostic.rb'
RSpec.describe Diagnostic do
  cusa_preamble = <<~PREAMBLE
    We the People of the United States, in Order to form a more
    perfect Union, establish Justice, insure domestic
    Tranquility, provide for the common defence, promote the
    general Welfare, and secure the Blessings of Liberty to
    ourselves and our Posterity, do ordain and establish this
    Constitution for the United States of America.
    PREAMBLE

  doi_preamble = <<~DOI
    When in the Course of human events, it becomes necessary for
    one people to dissolve the political bands which have
    connected them with another, and to assume among the powers
    of the earth, the separate and equal station to which the
    Laws of Nature and of Nature's God entitle them, a decent
    respect to the opinions of mankind requires that they should
    declare the causes which impel them to the separation.
    DOI

  before(:example) do
    @response = Diagnostic.new
  end

  context 'longest method' do
    it 'returns "separation" for DOI preamble' do
      doi_ary = doi_preamble.downcase.split.map { |w| w.gsub(/\W/, '') }
      expect(@response.longest(doi_ary)).to eq('separation')
    end
    it 'returns "constitution" for CUSA preamble' do
      cusa_ary = cusa_preamble.downcase.split.map { |w| w.gsub(/\W/, '') }
      expect(@response.longest(cusa_ary)).to eq('constitution')
    end
  end

  context 'sum method' do
    it 'returns 4950 for 1..99' do
      expect(@response.sum(1..99)).to eq(4950)
    end
    it 'returns 75 for first seven prime numbers' do
      expect(@response.sum([3, 5, 7, 11, 13, 17, 19])).to eq(75)
    end
    it 'returns CUSA preamble for `data/cusa-preamble.txt`' do
      expect(@response.sum(File.open('data/cusa-preamble.txt'))).to\
        eq(cusa_preamble)
    end
    it 'returns CUSA preamble for `data/cusa-preamble.txt`' do
      expect(@response.sum(File.open('data/doi-preamble.txt'))).to\
        eq(doi_preamble)
    end
  end

  context 'some_odd method' do
    it 'returns false when passed [0, 2, 4, 6]' do
      expect(@response.some_odd([0, 2, 4, 6])).to eq(false)
    end
    it 'returns true when passed [1, 2, 4, 6]' do
      expect(@response.some_odd([1, 2, 4, 6])).to eq(true)
    end
    it 'returns true when passed [0, 2, 4, 7]' do
      expect(@response.some_odd([0, 2, 4, 7])).to eq(true)
    end
    it 'returns true when passed [2, 3, 4, 6]' do
      expect(@response.some_odd([2, 3, 4, 6])).to eq(true)
    end
    it 'returns true when passed 2..6' do
      expect(@response.some_odd(2..6)).to eq(true)
    end
  end

  context 'every_even method' do
    it 'returns true when passed [0, 2, 4, 6]' do
      expect(@response.every_even([0, 2, 4, 6])).to eq(true)
    end
    it 'returns false when passed [1, 2, 4, 6]' do
      expect(@response.every_even([1, 2, 4, 6])).to eq(false)
    end
    it 'returns false when passed [0, 2, 4, 7]' do
      expect(@response.every_even([0, 2, 4, 7])).to eq(false)
    end
    it 'returns false when passed [2, 3, 4, 6]' do
      expect(@response.every_even([2, 3, 4, 6])).to eq(false)
    end
    it 'returns false when passed 2..6' do
      expect(@response.every_even(2..6)).to eq(false)
    end
  end

  context 'transform method' do
    it 'returns %w(All Caps Now) when passed %w(all Caps Now)' do
      expect(@response.transform(%w[all Caps Now])).to eq(%w[All Caps Now])
    end
  end
end
