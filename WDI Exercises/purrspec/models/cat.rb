require_relative "animal"

class Cat < Animal

  attr_reader :feeling, :saying

  def initialize
    @belly_rubs = 0
  end

  def possible_emotions
    ["happy", "angry"]
  end

  def is_asleep_at time
    if time == 4
      @saying = "meow"
      return false
    else
      return true
    end
  end

  def rub_belly
    @belly_rubs = @belly_rubs + 1
    if @belly_rubs > 3
      @feeling = "angry"
      @saying = "hiss"
    else
      @feeling = "happy"
      @saying = "purr"
    end
  end

end
