module Game
  class << self
    def run
      deck = Deck.new
      players = new_players(3)
      deal_cards(players, deck)
      winning_player(players)
    end

    private

    def winning_player(players)
      players.reject {|player| player.hand.total > 21 }
             .sort {|player_a, player_b| player_a.hand.total <=> player_b.hand.total }
             .first
    end

    def new_players(number_players)
      players = []
      number_players.times { players << Player.new }
      players
    end

    def deal_cards(players, deck)
      2.times do
        players.each do |player|
          player.draw_card(deck)
        end
      end
    end
  end
end
