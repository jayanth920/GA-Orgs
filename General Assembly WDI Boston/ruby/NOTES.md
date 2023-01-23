## Framing
What is ruby?
- it’s a cross-platform, open source, interpreted object oriented language, suitable for scripting and full-scale applications.
- Designed by Matz in the mid 90s, it really increased in popularity when DHH released Rails in 2004.
- It has been designed on the principle of least surprise. Designed "to be productive, and to enjoy programming, and to be happy."


### Hello world
- we already have Ruby installed from installfest
[current version of ruby](https://www.ruby-lang.org/en/downloads/releases/)
- How to manage versions? Rbenv (or maybe rvm)

- It's a scripting language, similar to javascript executes from top to bottom, suitable for small scripts and large applications.

- What are the conventions of the language? As we go through the talk, we’ll note the conventions we notice in ruby.
how to use it? REPL, write ruby file, execute file similar to node...
(good opportunity to write first script, puts "hello world!", and execute it from command line)


### REPL
How do we access the REPL in JS?
in Ruby —> Pry
Pry is also a debugger and is a critical tool to know about
how did we debug JS?
with ruby, we say `binding.pry` in our code
(how do you exit? ‘exit’. How do you continue? `continue`.)

### Methods
- What is a method? It’s a function. There are two types: instance methods (defined on an object, or in ruby an instance of a class) and class method (defined on the class itself, similar to defining methods on the prototype in Javascript).
- We will get into this more when we talk about inheritance in ruby

- Methods return something, but unlike most JS functions, ruby returns implicitly.
- The value of the last expression is what is returned. Return keyword also exists. Same as JS? Try it out! [Gist of combining `upto()` and various flavors of `return`](https://gist.github.com/danman01/ba59c826fd54b3084102939497138a66)

### Ruby conventions
You already know the basics of programming since we started with javascript. When going to a new language like ruby, think about how do you “speak” ruby? write code like a rubyist?

- parens are optional, as are semicolons. You can use them but…who decides? The community has general guidelines.
- The more you look at other people’s code, the more ruby conventions you will pick up.
- Reading the style guide can explain how something is generally done by the community: https://github.com/bbatsov/ruby-style-guide

- We use rubocop to catch bad style too. bin/rake will run rubocop.

### Common Gotchas
- [Difference between `==` & `.eql?`](http://batsov.com/articles/2011/11/28/ruby-tip-number-1-demystifying-the-difference-between-equals-equals-and-eql/)
- `==` Value comparison

  ```ruby
  1.0 == 1
    # true

  blue = 1
  blue == 1
    # true
  ```

- `.eql?` Stricter value comparison
    - `eql?` is meant to be used as a stricter version of `==,` if there is a need for such stricter version, `.eql?` most prominent usage is probably in the Hash class, where it’s used to test members for equality.
    - Do `obj` & `other` refer to the same Hash key?
    - Are `obj` & `other` of the same class type?

  ```ruby
  1.eql?(1)
    # true

  1.eql?(1.0)
    # false

  blue = 1
  1.eql?(blue)
    # true

  white = {:one => 1, :two => 2}
  black = {:one => 1, :two => 2}
  white.eql?(black)
    # true
  ```

- `.equal?` Object identity
    - Is `a` the *exact* same object as `b`?
    - Are the two objects identical

  ```ruby
  white = {:one => 1, :two => 2}
  black = {:one => 1, :two => 2}
  white.equal?(black)
    # false
  ```
