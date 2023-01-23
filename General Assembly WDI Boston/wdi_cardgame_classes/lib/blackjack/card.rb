class Card
  attr_reader :rank, :suit
  SUITS = [:diamonds, :hearts, :spades, :clubs]
  RANKS = {
            2 => 2,
            3 => 3,
            4 => 4,
            5 => 5,
            6 => 6,
            7 => 7,
            8 => 8,
            9 => 9,
            10 => 10,
            jack: 10,
            queen: 10,
            king: 10,
            ace: 11
          }

  def initialize(rank: ,suit:)
    @rank = rank
    @suit = suit
  end

  def to_s
    "#{rank} of #{suit}"
  end

end
