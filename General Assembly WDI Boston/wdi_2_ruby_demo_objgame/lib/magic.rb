
module GAGame
  module Magic
    def cast_spell(opponent)
      puts "Casting spell on #{opponent.last_name}"
    end

    def say_spell(opponent)
      cast_spell(opponent)
      %x{ say "Casting spell on #{opponent.last_name}" }
    end
  end
end