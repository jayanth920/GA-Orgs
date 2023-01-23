# frozen_string_literal: true

# Country class initialized with a single variable, name
class Country
  def initialize(name)
    @name = name
  end

  def name
    @name
  end

  # 'getter' for @language
  def language
    @language
  end

  # 'setter' for @language
  def language=(lang)
    @language = lang
  end
end

england = Country.new('England')
england.language = 'english' # invoking the 'setter'
puts england.language # invoking the 'getter' => "english"
puts england.name
