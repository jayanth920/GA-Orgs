#!/usr/bin/env ruby
# frozen_string_literal: true

module Algorithms
  # Perform binary search given a collection
  # to search through for a specific item.
  # Optional debug argument to print some extra information
  class BinarySearch
    def initialize(debug = false)
      @n = 0
      @debug = debug
    end

    def start_search(haystack, needle)
      raise 'out of bounds' if needle >= haystack[-1] || needle <= haystack[0]
      do_search(haystack, needle, haystack[0], haystack[-1])
    end

    private

    # BinarySearch#do_search should return the item from the array
    # as well as the number of times do_search was called
    def do_search(haystack, needle, first, last)
      @n += 1

      debug_messages

      # Your code here

      return []
    end

    def debug_messages
      return false unless @debug
      puts " try #{@n} "
      puts " first is #{first} and last is #{last}"
      puts " midpoint index is #{midpoint} "
      puts " element is #{element} "
    end
  end
end
