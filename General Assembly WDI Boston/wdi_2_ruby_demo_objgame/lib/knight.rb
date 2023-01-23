require_relative 'player'

module GAGame
  class Knight < Player
    # CONSTANTS DON'T CHANGE!!!
    DEFAULT_HEALTH = 50
    DEFAULT_STRENGTH = 15

    attr_reader :health, :strength

    def initialize(first_name, last_name)
      # Shortcut
      super
      @health = DEFAULT_HEALTH
      @strength = DEFAULT_STRENGTH
    end
  end
end