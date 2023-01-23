require_relative 'card'

class Deck
  include Enumerable

  def each
    block_given? ? @cards.each {|e| yield e } : @cards.each
  end

  def initialize
    @cards = Card::SUITS.collect {|s| Card::RANKS.collect {|r| Card.new(s, r)}}.flatten
  end

  def shuffle
    @cards.shuffle!
  end

  #swap front and back somewhere in the middle third.
  def cut
    count = @cards.count
    rnd = Random.rand(count/3)
    cut_point = (count/3 + rnd)
    @cards = @cards.slice(cut_point, count - cut_point) + @cards.slice(0, cut_point)
  end

  def draw
    @cards.shift
  end

end
