class Card
  include Comparable

  def <=> other
    [ RANKS.index(rank), SUITS.index(suit) ] <=> [ RANKS.index(other.rank), SUITS.index(other.suit) ]
  end

  SUITS = [ 'S', 'H', 'D', 'C' ]
  RANKS = [ (2..10).to_a, 'J', 'Q', 'K', 'A', ].flatten

  attr_reader :suit, :rank

  def initialize(suit, rank)
    raise ArgumentError.new("Suit: '#{suit}' invald, must be one of #{SUITS}") unless SUITS.include? suit
    raise ArgumentError.new("Rank: '#{rank}' invald, must be one of #{RANKS}") unless RANKS.include? rank

    @suit = suit
    @rank = rank
  end

end
