# Create a Ruby module
module GAGame
  module Talker
    def talk(msg)
      # Run a command in the OS. 
      %x{ say "#{msg}"}
     end
  end
end