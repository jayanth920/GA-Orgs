require_relative 'player'
require_relative 'magic'

module GAGame
  class Wizard < Player

    # Class variable 
    @@total_wizards = 0

    # Create a class method that will return the 
    # class variable @@total_wizards
    # Wizard.total_wizards
    def self.total_wizards
      @@total_wizards
    end

    include Magic

    # CONSTANTS DON'T CHANGE!!!
    DEFAULT_HEALTH = 20
    DEFAULT_STRENGTH = 75

    attr_reader :health, :strength

    def initialize(first_name, last_name)
      # Shortcut
      super
      @health = DEFAULT_HEALTH
      @strength = DEFAULT_STRENGTH

      @@total_wizards += 1
      talk "Created Wizard #{full_name}"
    end

  end # end class
end # end module