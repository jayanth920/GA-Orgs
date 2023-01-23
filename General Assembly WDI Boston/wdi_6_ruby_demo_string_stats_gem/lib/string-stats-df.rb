class String
  
  def word_count
    return self.split.length
  end

  def unique_words
    return self.split.uniq
  end

  def unique_word_count
    return self.split.uniq.length
  end

  def word_frequencies
    freq = Hash.new(0)
    self.split.each do |word|
      freq[word.to_sym] += 1
    end
    return freq
  end

end