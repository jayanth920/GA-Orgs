# Mini Project: Character Generator and Game

As you approach the end of your first week, consider the vast array of tools that you have been working with this week, including: 

* Executing Ruby programs
* Flow control (if/while) statements
* Assignment of variables
* Basic datatypes (String, Float, Integer, Boolean)
* Collection datatypes (Array, Hash)
* Writing methods, scope
* Writing and inheriting classes (Object Oriented Programming)
* Using pry to debug code
* Print to the screen and accepting user input
* Performing calculations on data
* Using Git for basic version control

Now is the time to put it all together with something fun: a game, or at least part of a game. Much of this exercise is left up to your imagination, but there are some suggestions and guidelines. 

## Instructions

This project has 2 parts - building a character generator (required) and writing a game that uses the character generator (optional). 

For both parts, you are required to comment your code. See below for detailed instructions on commenting. 

This is due *Monday morning*. Fork and clone this repo, create your own files, then submit a Pull Request on GitHub when you're done.

Make sure to make many (20-50) Git commits along the way to save your progress! 

You may reference any materials at your disposal and talk with each other about your problems and progress. 

### Part 1: Character Generator (Required)

Build a "character generator" using Ruby making use of the majority of topics above, especially classes, arrays/hashes, and methods. You may base your inspiration on any game, including Nethack, World of Warcraft, D20 system, GURPs or Dungeons and Dragons (Basic rulebook from latest edition is [http://dnd.wizards.com/articles/features/basicrules?x=dnd/basicrules]). 

For example (only an example, yours will vary), I may want to be able to create an object that is a Character, who is a Human Wizard named "Harry". The code should be flexible enough that I can also create an Elven Thief named "Locke" and have them both stored in memory. 

For all methods, you will comment 3 things: what the method does, the expected datatype/class of each input argument, and the expected datatype/class of the return value. If using a class, make note of where you're using 'self' (implied or explict) to refer to the instance of the class itself. For example:

```ruby

# 
# Input args: x; FixNum or Float 
# Return datatype: FixNum or Float
def square(x)
  x * x
end

class String
  # Input args: none. Referring to instance of String with .self
  # Return datatype: String
  def my_reverse
    self.reverse
  end
end

```

### Part 2: Game (Optional)

A character generator is only the first step of your adventure. If you choose, try to make a relatively simple game out of it. 

Perhaps your character can fight a monster, and take turns attacking each other! Go as far as you'd like with this, and the sky is the limit. 

Perhaps you are able to help run a Dungeon and Dragaons gaming session smoother with your tool, or simply keep track of your character sheet with updates as the game progresses. 

A simple option might be to write a small fixed "story" using the code that you've built for a character, to execute various methods on the Character class. 

You could even try building an(Interactive Fiction)[http://en.wikipedia.org/wiki/Interactive_fiction] (also known as a Text Adventure Game) with your character generator or rule-set as the basis of the functionality. Writing a good text parser here will be a *big* challenge. 

You could also try (I haven't done this... beware it might be a timesink and even installing the gem might be hard) using a (2d graphic library)[https://www.ruby-toolbox.com/categories/game_libraries] like (Gosu)[https://github.com/jlnr/gosu/wiki/Getting-Started-on-OS-X] or (Chingu)[http://ippa.se/chingu] to make it somewhat graphical. 

Remember to comment your code here too! 
