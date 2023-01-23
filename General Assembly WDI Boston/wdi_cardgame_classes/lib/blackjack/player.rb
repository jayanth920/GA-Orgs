class Player
  def initialize
    @hand = Hand.new
  end

  def draw_card(deck)
    @hand.push(deck.pop)
  end

  def hand
    @hand
  end
end
