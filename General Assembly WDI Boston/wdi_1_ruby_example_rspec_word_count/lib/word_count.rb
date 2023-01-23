class String
  def word_count
    self.split.length
  end

  def word_frequency
    frequency = Hash.new(0)

    self.split.each do |word|
      frequency[word] += 1
    end

    return frequency
  end
end
