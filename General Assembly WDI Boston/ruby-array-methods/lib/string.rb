# frozen_string_literal: true

# Methods to do text analysis
module TextAnalysis
  #
  # The word list normalized (all uppercase with punctuation removed)
  def normalize_words
    # your code here
  end

  def unique_words
    # your code here
  end

  def word_count(unique)
    # your code here
  end

  def word_frequencies
    # your code here
  end

  def longest_word
    # your code here
  end
end

# The Ruby String class
class String
  # Add our TextAnalysis methods to the String class
  include TextAnalysis
end
