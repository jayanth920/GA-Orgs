# frozen_string_literal: true

# rubocop:disable LineLength

require 'spec_helper'
require_relative '../lib/binary_search.rb'

RSpec.describe 'BinarySearch' do
  describe '#new' do
    it 'sets up a counter and initializes with value 0' do
      @binary_search = Algorithms::BinarySearch.new
      expect(@binary_search.instance_variable_get('@n')).to eq 0
    end
  end

  describe '#start_search' do
    before do
      @binary_search = Algorithms::BinarySearch.new
    end
    context 'with correct arguments' do
      let(:haystack) { (0..10).to_a }
      let(:needle) { 5 }
      it 'calls do_search with appropriate args' do
        expect(@binary_search).to receive(:do_search).with(haystack, needle, haystack[0], haystack[-1])
        @binary_search.start_search(haystack, needle)
      end
    end
    context 'out of bounds' do
      let(:haystack) { (0..10).to_a }
      let(:needle) { 11 }
      it 'raises error when value is not between first and last array value' do
        expect do
          @binary_search.start_search(haystack, needle)
        end.to raise_error(RuntimeError)
      end
    end

    context 'running with correct complexity' do
      before do
        @complexity = Math.log2(array.length).ceil
      end
      context 'when value is 8' do
        let(:val) { 8 }
        let(:array) { [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] }
        it 'returns the correct value' do
          expect(@binary_search.start_search(array, val)[0]).to eq 8
        end
        it 'performs a binary search the appropriate amount of times' do
          expect(@binary_search.start_search(array, val)[1]).to be <= @complexity
        end
      end

      context 'Binary Search for 18 in even numbers 2 through 20' do
        let(:array) { [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] }
        let(:val) { 18 }

        it 'returns the correct value' do
          expect(@binary_search.start_search(array, val)[0]).to eq 18
        end
        it 'performs a binary search the appropriate amount of times' do
          expect(@binary_search.start_search(array, val)[1]).to be <= @complexity
        end
      end

      context 'Binary Search for 7 in odd numbers 1 through 19' do
        let(:array) { [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] }
        let(:val) { 7 }

        it 'returns the correct value' do
          expect(@binary_search.start_search(array, val)[0]).to eq 7
        end
        it 'performs a binary search the appropriate amount of times' do
          expect(@binary_search.start_search(array, val)[1]).to be <= @complexity
        end
      end

      context 'Binary Search for 17 in odd numbers 1 through 19' do
        let(:array) { [1, 3, 5, 7, 9, 11, 13, 15, 17, 19] }
        let(:val) { 17 }
        it 'returns the correct value' do
          expect(@binary_search.start_search(array, val)[0]).to eq 17
        end
        it 'performs a binary search the appropriate amount of times' do
          expect(@binary_search.start_search(array, val)[1]).to be <= @complexity
        end
      end
      context 'Number 29 in numbers 1 through 31' do
        let(:array) { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] }
        let(:val) { 29 }
        it 'returns the correct value' do
          expect(@binary_search.start_search(array, val)[0]).to eq 29
        end
        it 'performs a binary search the appropriate amount of times' do
          expect(@binary_search.start_search(array, val)[1]).to be <= @complexity
        end
      end

      context 'number 4 in numbers 1 through 30' do
        let(:array) { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] }

        let(:val) { 4 }
        it 'returns the correct value' do
          expect(@binary_search.start_search(array, val)[0]).to eq 4
        end
        it 'performs a binary search the appropriate amount of times' do
          expect(@binary_search.start_search(array, val)[1]).to be <= @complexity
        end
      end
    end
  end
end
