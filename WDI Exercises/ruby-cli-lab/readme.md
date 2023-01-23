# Ruby CLI Lab

Today is _your_ chance to practice Ruby. You'll have the option to choose one of
three prompts (ranked by difficulty):

1. [Flash Cards](./flash_cards.md)
1. [Personal Finance](./personal_finance.md)
1. [Battleship](./battleship.md)

## Getting Started

Think about how you want to structure your application. Creating pseudocode to implement the requirements is an excellent way to break down a project or app idea into manageable chucks.

For example, it could be useful to have a `Menu` class...

```rb
class Menu
  def self.display
    loop do
      puts "Choose one of the following:"
      puts "1 - Option 1"
      puts "2 - Option 2"
      puts "3 - Option 3"
      input = gets.chomp
      if ["1","2","3"].include? input
        Menu.select input
        break
      else
        puts "Invalid option."
      end
    end
  end
  def self.select number
    puts "You selected #{number}"
    # add conditional handling here
      # Option 1 could be to create a new Flashcard, for instance
      # You could then use additional class methods, for example,
      # Menu.create_flash_card, to get user input and create a new
      # instance of a Flashcard with the user-inputted information
  end
end

Menu.display
```

A Flashcard class could look something like this...

```rb
class Flashcard
  attr_accessor :front, :back
  def initialize front, back
    @front = front
    @back = back
  end
end

Flashcard.new "Buenos Dias", "Good morning"
```
