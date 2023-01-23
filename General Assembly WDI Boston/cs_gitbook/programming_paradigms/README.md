# Programming Paradigms

A *[programming paradigm](http://en.wikipedia.org/wiki/Programming_paradigm)* describes a fundamental style and way of building the structure and elements of computer programs. We can describe a language by saying it uses elements of one or more paradigms. Languages that make heavy use of more than one paradigm can be described as *multi-paradigm* languages.


While there are dozens of programming paradigms, there are four primary paradigms that we will cover:

- *[Imperative](http://en.wikipedia.org/wiki/Imperative_programming)*
- *[Functional](http://en.wikipedia.org/wiki/Functional_programming)*
- *[Object-Oriented](http://en.wikipedia.org/wiki/Object-oriented_programming)*
- *[Declarative](http://en.wikipedia.org/wiki/Declarative_programming)*


## Imperative

Imperative programming is focused on how a program operates. In it there are a series of [statements](http://en.wikipedia.org/wiki/Statement_(computer_science)) that change the program [state](http://en.wikipedia.org/wiki/State_(computer_science). This is the opposite of *declarative programming* (discussed below), which focuses on what the program should accomplish without prescribing how it will be done.

Overall, this is one of the most basic paradigms as it is one that most programmers are exposed to early-on.

### Procedural Programming and more

One form of imperative programming is known as *procedural programming*, in which the program is built from one or more *functions*. Heavily-procedural programming, with state changes restricted to functions, is known as *structured programming*. When these functions are separated into one or more independent modules, it is known as *modular programming*.

### Imperative Examples

Imperative programming is one of the primary paradigms of Ruby, C and JavaScript.

A basic imperative example follows:

```ruby
puts 'enter a number to square'
number = gets.chomp.to_i
squared_number = number * number
puts "#{number} squared is #{squared_number}"
```

Note that the order of the statements is critical to the proper execution of the program, but we haven't enclosed any of our code in a *function* to create reusable code. Doing such would be an example of procedural programming:

```ruby
def square(x)
  return x * x
end

def get_input
  puts 'enter a number to square'
  gets.chomp.to_i
end

def print_output(result)
  puts result
end

print_output(square(get_input))
```

Wrapping these functions in a module would be an example of modular programming:

```ruby
module Math
  def self.square(x)
    x * x
  end
end

module InputOutput
  def self.get_input
    puts 'enter a number to square'
    gets.chomp.to_i
  end

  def self.print_output(result)
    puts result
  end
end

num = InputOutput.get_input
InputOutput.print_output Math.square(num)
```


## Object Oriented (OO)

This paradigm is based on the concept of *object* data structures which contain data with *attributes*, and procedures with *methods*. This is the core paradigm of Ruby.

#### Advantages

- Mirror how people think about the world

#### Disadvantages

- Reliability and testing is more difficult due to potential side-effects (below) and dependancies on other classes

#### Class Based

```ruby
class Pet
  attr_accessor :age

  def initialize
    @age = 0
  end

  def eat(food)
    "Ated all the #{food}"
  end

  def have_birthday
    @age = @age + 1
  end
end

class Cat < Pet
  attr_accessor :fur_color

  def meow
    "meow"
  end
end

my_cat = Cat.new
puts my_cat.meow
puts my_cat.eat('tuna')
puts my_cat.have_birthday #=> 1
puts my_cat.have_birthday #=> 2
puts my_cat.have_birthday #=> 3
```

Ruby, seen above, support single class inheritance meaning that each class can only have one parent class. The `Cat` class inherits behavior from the `Pet` class

#### Prototypical

Languages like JavaScript and IO use prototypical inheritance, where instead of classes objects inherit their behavior from other objects.

## Declarative

This paradigm expressess the logic of computation without describing its control flow. Declarative programming is done with *expressions* . It focuses on what the program should accomplish, rather than how it should be accomplished as a series of steps. SQL is an excellent example of declarative programming (although many SQLs do support some procedural styling):

```sql
SELECT * FROM users WHERE id = 2;
```

This *expression* is asking for the user with an id of 2. But note that we haven't told it *how* this task should be accomplished or used any *control flow* primitives such as if/else/while.

#### Expressions

Regular Expressions are another example of declarative programming. In Ruby:

```ruby
"My number is: 555-123-2314".match(/\d{3}-\d{3}-\d{4}/).to_s
#=> "555-123-2314"
```
The regex (regular *expression*) here asks to match data in the string, but doesn't tell *how* it should be done. It doesn't say "*if you've seen this.. do this*", but rather just "*match this pattern*".

##### Side Effects

A *side effect* is when a function or expression interacts with something outside of the function, potentially modifiying a global variable, modifying an argument, raising an exception, reading or writing data to a file or database, or call another function that causes a side effect.

Side effects are a common way to interact with input/output in your program, but may cause your programs behavior to vary depending on the order of expressions/functions.

The absense of side effects is one component of (but doesn't not gurantee) referential transprency.

##### Referential Transparency

Expressions are *referentially transparent* if they can be replaced with their value without altering the behavior of the program. The following is not  referentially transparent:

```ruby
y = 1
x = ((y += 1) + 2)
#=> y: 2, x: 4
x = ((y += 1) + 2)
#=> y: 3, x: 5
```

The statement of `((y += 1) + 2)` alters the value of y every time it is executed. If we simply replaced this expression with its first value and then executed it again and again it wouldn't be the same.

Things that aren't transparent:

- Variable assignment
- Use of global variables

Things that are transparent:

- Pure functions
- Arithmetic operations

Transparent:

```ruby
def plus_one(x)
  return x + 1
end
```

Not transparent:

```ruby
x = 2
x += 1
```

### Functional

This paradigm treats computation as the evaluation of mathematical functions, and *avoids changing state* and *mutable data*. It is a type of declarative programming. Pure functions are referentially transparent and given an input will always return the same output.

Imperative programming's *functions* are really subroutines (code to be executed at a later time), but in functional programming functions are mathmatical statements and computations.

#### Concepts

- Higher Order Functions: functions that can take other functions as arguments and return them as results.
- Pure functions: functions with no side effects (input/output or global alterations)
- Recursion: looping is generally accomplished with recursion

##### Eager vs Lazy evaluation

Consider the following statement, which is intended to return the length of an array:

```
length([2+1, 3*2, 1/0, 5-4])
```

In eager (strict) evaluation, inner terms will evaluate first and the first failing term will cause a failure. In this example, we would have a division by zero failure.

In lazy evaluation, we will simply get a result of `4` as there is no need to evaluate the inner terms. It does not evaluate the function arguments unless they are needed for computation.

Lazy evaluation is used in many purely functional languages such as Haskell to speed up computation and allow computation on otherwise invalid sets (infinite series, etc). Ruby, JavaScript and C use eager evaluation of terms.

## Language Paradigm Comparison

In this course, we're learning Ruby, JavaScript, C and SQL. This chart describes the primary paradigms of each. Note that some languages are multi-paradigm such as Ruby and JavaScript. Consider how Ruby and JavaScript are actually rather alike!

| Language | Functional | Imperative | Object-Oriented | Declarative |
| -- | -- | -- | -- | -- | -- |
| Ruby | YES | YES | YES | NO |
| JavaScript | YES | YES | YES* | NO |
| C | NO | YES | NO | NO |
| SQL | NO | NO | NO | YES |

**prototypical inheritance instead of standard class inheritance*
