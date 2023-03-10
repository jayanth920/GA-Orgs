# Ruby Iteration & Enumerables

<!-- [![Build Status](https://travis-ci.org/ga-wdi-lessons/ruby-enumerables.svg?branch=master)](https://travis-ci.org/ga-wdi-lessons/ruby-enumerables) -->

## Learning Objectives

- Review Ruby arrays and hashes.
- Use Ruby loops to iterate over code blocks.
- Define what a Ruby enumerable method is.
- Use enumerables to traverse, sort and modify collections.
- Identify useful Ruby enumerables, including `.each`, `.map` and `.select`.

## Framing (15 / 0:15)

One of the most common things we do as developers is to iterate through data structures.

Whenever we talk about data in Ruby, its important to review how Ruby handles groups of data.

We learned how to iterate over collections in Javascript first using loops and then using higher order functions.
Now we're going to learn the same in Ruby.

## Review: Ruby Collections

<details>
<summary>What are the different types of collections we've learned about in Ruby?</summary>
Arrays <code>[]</code> and hashes <code>{}</code>
</details>

### [Arrays](http://ruby-doc.org/core-2.3.0/Array.html)

Consider:

```rb
users = ["Alice", "Bob", "Carol"]
```

#### What do each of the following do?

- `users.length`
- `users.push("David")`
- `users[0]`
- `users[2]`
- `users.join(" ")`
- `users.join(", ")`
- `users.join(" and ")`

<details>
<summary>What are two ways of adding an item to the end of an array of unknown length in Ruby?</summary>
<code>.push</code> and <code><<</code>
</details>

<!-- Specifying "unknown length" because users[n] should not be one of the methods. -->

### [Hashes](http://ruby-doc.org/core-2.3.0/Hash.html)

Hashes are like Javascript object literals, but with a somewhat different syntax.

Consider:

```ruby
user = {
  name: "Alice",
  age: 30,
  skills: ["development", "public speaking", "physics"]
}
```

#### What do each of the following do?

- `user[:name]`
- `user[:age]`
- `user[:name] = "Bob"`
- `user[:zip] = 55408`
- `user[:skills].last`
- `user[:skills] << "design"`

### Quick Quiz

1.  What's another "rubyist" way to add items to an array?
2.  What is one main difference between Ruby's **hashes** and Javascript's **object literals**?
3.  What are some useful methods we can call on collections?
4.  Where would I go look if I wanted to find more methods?

<details>
  <summary>
    Answers
  </summary>
  <ol>
    <li> <code> [1,2,3] + [4,5] </code></li>
    <li> The syntax for referencing properties differs.
      <ul>
        <li>JS: <code>user.name</code> or <code>user["name"]</code> </li>
        <li>Ruby: <code>user[:name]</code> </li>
      </ul>
    </li>
    <li><code>.push</code>, <code>.pop</code>, <code>.join</code></li>
    <li> <a href="https://ruby-doc.org/core-2.2.3/Enumerable.html">Ruby Docs!</a> </li>
  </ol>
</details>

## Loops (15 / 0:30)

Another similarity Ruby shares with Javascript is base support for various types of loops.

### Review JS Loops

<details>
<summary>What loops did we use in Javascript?</summary>
<code>while</code>, <code>for</code>, <code>for...in</code>, <code>.forEach</code>
</details>

### Looping with Ruby

The closest equivalent to Javascript's `for` loop is Ruby's `for...in` loop

```rb
users = ["Alice", "Bob", "Carol"]
for user in users do
  puts user
end
```

<details>
<summary>What happens if you change it to <code>for person in users do</code>? What other change will you need to make?</summary>
<code>puts person</code> instead of <code>puts user</code>
</details>

#### Practice with Loops
Set up your development environment for testing out the different types of loops found in the code snippets below...

1. Create a new file in your "sandbox" directory called `loops.rb`
2. Copy and paste **one** of the snippets into the file
3. Run the file with `$ ruby loops.rb`
4. Observe the result
5. Delete the contents of the file
6. Replace the contents with the next snippet
7. Repeat


#### [while](https://ruby-doc.org/core-2.2.0/doc/syntax/control_expressions_rdoc.html#label-while+Loop)

```rb
input = ""
puts "You must guess the Magic Words to exit the while loop!"
while input != "Magic Words" do
  puts "What are the Magic Words?"
  input = gets.chomp
end
puts "You made it out! Congrats!"
```

#### [until](https://ruby-doc.org/core-2.2.0/doc/syntax/control_expressions_rdoc.html#label-until+Loop)


```rb
input = ""
puts "You must guess the Magic Words to exit the until loop!"
until input == "Magic Words" do
  puts "What are the Magic Words?"
  input = gets.chomp
end
puts "You made it out! Congrats!"
```

#### [loop](https://ruby-doc.org/core-2.2.0/Kernel.html#method-i-loop)

```rb
puts "You must guess the Magic Words to exit the loop!"
loop do
  puts "What are the Magic Words?"
  input = gets.chomp
  break if input == "Magic Words"
end
puts "You made it out! Congrats!"
```

#### [.times](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-times)

```rb
users = ["Alice", "Bob", "Carol"]
users.length.times do |index|
  puts users[index]  
end
```

<details>
<summary>If we change <code>puts users[index]</code> to <code>puts index</code>, what will the result be?</summary>
<code>0 1 2</code>
</details>

<details>
<summary>What is the purpose of <code>break</code>? What loops can you use it inside?</summary>
<code>break</code> exits a loop. It can be used with any loop.
</details>

#### next

Try this code:

```rb
10.times do |i|
  if i % 2 == 0
    next
  end
  puts i
end
```

<details>
<summary>What is <code>next</code>, and how is it different from <code>break</code>?</summary>
<code>next</code> tells the computer to skip the rest of the code inside the loop for this iteration, and go to the next iteration of the loop. <code>break</code> stops the loop iterating altogether.
</details>

<br />

> [Further Reading on Ruby loops](http://www.tutorialspoint.com/ruby/ruby_loops.htm)

## Exercise: [Club Ruby](https://git.generalassemb.ly/ga-wdi-exercises/club_ruby) (20 / 0:50)

## Break (10 / 0:60)

## Enumerables

### What Are Enumerables? (10 / 1:10)

Loops execute a certain block of code a certain number of times.

**Enumerables** are loops *used specifically to do something to or with each item in an collection.*

Enumerables are great at traversing, searching, filtering, and modifying collections of data in Ruby.

Ruby enumerables are **higher order functions**. They're similar to the ones we've already seen [in Javascript](https://www.sitepoint.com/higher-order-functions-javascript/), but with a slightly different syntax. In Ruby, there are **many** more enumerables available to us. A list of them can be found in the [Ruby Docs](http://ruby-doc.org/core-2.2.3/Enumerable.html).

Enumerables **DRY** up your code considerably and enhance readability. Consider:

#### `while` is a loop

```rb
users = ["Alice", "Bob", "Carol"]
index = 0
while index < users.length
  puts users[index]
  index += 1
end
```

#### `each` is an enumberable

```rb
users = ["Alice", "Bob", "Carol"]
users.each do |user|
  puts user
end
```

> [Enumerable Documentation](http://ruby-doc.org/core-2.2.3/Enumerable.html)

### Syntax

Try running these two code snippets:

> This one is same as above

```rb
users = ["Alice", "Bob", "Carol"]
users.each do |user|
  puts user
end
```

```rb
users = ["Alice", "Bob", "Carol"]
users.each{ |user| puts user }
```

<details>
<summary>What is the difference between these two snippets?</summary>
They are equivalent, though the <code>do</code> <code>end</code> is said to be more semantic and closer to natural language.
</details>

<details>
<summary>What happens if you change <code>users.each do |user|</code> to <code>users.each do |person|</code>? What else needs to change?</summary>
<code>puts user</code> needs to become <code>puts person</code>.
</details>

### Exercise: Practice Each (10 / 1:20)

Use `each` to do the following...

- Say hello to everybody in the below array of names (sample output: `Hello Donald!`).

  ```ruby
  names = [ "Donald", "Daisy", "Huey", "Duey", "Luey" ]
  ```

- Print out the squared values of every number in this numbers array.

  ```ruby
  numbers = [ 1, 3, 9, 11, 100]
  ```

- Print out the Celsius values for an array containing Fahrenheit values.

  > Hint: `C = (F - 32) * (5 / 9)`

  ```ruby
  fahrenheit_temps = [ -128.6, 0, 32, 140, 212 ]
  ```

- Insert all the values in the `artists` array into the `ninja_turtles` array.

  ```ruby
  artists = [ "Leonardo", "Donatello", "Raphael", "Michelangelo" ]
  ninja_turtles = []
  ```

- **Bonus:** Print out every possible combination of the below ice cream flavors and toppings.

  ```ruby
  flavors = [ "vanilla", "chocolate", "strawberry", "butter pecan", "cookies and cream", "rainbow" ]
  toppings = [ "gummy bears", "hot fudge", "butterscotch", "rainbow sprinkles", "chocolate sprinkles" ]
  ```
<details>
  <summary>
    Hint
  </summary>
  Use nested enumerable methods or check out <a href="http://apidock.com/ruby/Array/product">product</a>.
</details>

### Map (10 / 1:30)

#### Explore 1

Run these two snippets separately:

```rb
cart = ["shoes", "watch", "computer"]
uppercase = cart.each do |product|
  caps_product = product.upcase
  puts caps_product
  caps_product
end
puts uppercase.join(", ")
```

```rb
cart = ["shoes", "watch", "computer"]
uppercase = cart.map do |product|
  caps_product = product.upcase
  puts caps_product
  caps_product
end
puts uppercase.join(", ")
```

<details>
<summary>How would you explain the difference in the result?</summary>
<ul>
  <li><code>.each</code> executes the code block for each item in the original array and returns the original array regardless of what the block returns.</li>
  <li><code>.map</code> returns a new array with the changes in the block applied to each element.</li>
</ul>
</details>

#### Explore 2

Consider:

```ruby
cart = ["shoes", "watch", "computer"]
uppercase = []
cart.each{|product| uppercase.push(product.upcase) }
puts uppercase.join(", ")
```

```rb
cart = ["shoes", "watch", "computer"]
uppercase = cart.map{|product| product.upcase }
puts uppercase.join(", ")
```

<details>
<summary>What is the difference in the result of these two snippets?</summary>
Nothing: they have the same result. They are two ways of doing the same thing.
</details>

#### Explore 3: Bang

Consider:

```rb
cart = ["shoes", "watch", "computer"]
uppercase = cart.map{|product| product.upcase }
puts cart
puts uppercase
```

Below is the same snippet, but with `.map!` instead of `.map`.

What does <code>!</code> often indicate in Ruby?

That this method is "dangerous", usually because it will modify, or <strong>mutate</strong> the object upon which it was called.
</details>

```rb
cart = ["shoes", "watch", "computer"]
uppercase = cart.map!{|product| product.upcase }
puts cart
puts uppercase
```

<details>
<summary>What's the difference between <code>.map</code> and <code>.map!</code>?</summary>
<code>.map</code> leaves the original array alone, whereas <code>.map!</code> changes it.
</details>

> More on ! (bang method) [here](http://ruby-for-beginners.rubymonstas.org/objects/bangs.html)

### Exercise: Practice Map (15 / 1:45)

Use `map` to do the following...  

1. Create an array that appends "Duck" to everybody in this array of first names

  ```ruby
  first_names = [ "Donald", "Daisy", "Daffy" ]

  #= ["Donald Duck", "Daisy Duck", "Daffy Duck"]
  ```

2. Create an array containing the squared values of every number in this array.

  ```ruby
  numbers = [ 1, 3, 9, 11, 100 ]

  # => [1, 9, 81, 121, 10000]
  ```

3. Create an array with the Celsius values for these Fahrenheit values.

  > Hint: `C = (F - 32) * (5 / 9)`

  ```ruby
  fahrenheit_temps = [ -128.6, 0, 32, 140, 212 ]

  #=> [-89.2, -17.8, 0, 60, 100]
  ```

## Break (10 / 1:55)

## Group Exercise: Documentation Dive (35 / 2:30)

Instructions: Each group will spend **10 minutes** using Ruby documentation to look up an assigned enumerable. Prepare the following for your demo:

- Your own definition of what it does
- An example
- At a high level, try to find/think of a use case of this enumerable in the wild. It doesn't have to be the actual code, just conceptually similar.

The enumerables are:

- **[Each With Index](http://ruby-doc.org/core-2.4.0/Enumerable.html#method-i-each_with_index)**
- **[Reject](http://ruby-doc.org/core-2.4.0/Enumerable.html#method-i-reject)**
- **[Find](http://ruby-doc.org/core-2.4.0/Enumerable.html#method-i-find)**
- **[Select](http://ruby-doc.org/core-2.4.0/Enumerable.html#method-i-select)**
- **[Sort By](http://ruby-doc.org/core-2.4.0/Enumerable.html#method-i-sort_by)**
- **[Inject/Reduce](http://ruby-doc.org/core-2.4.0/Enumerable.html#method-i-inject)**

**Bonus:** If you find yourself with extra time, please:

- Pick out another enumerable that wasn't assigned to a group.
- and/or think of another example for your assigned enumerable.


## Sample quiz questions

1. What is the difference between `loops` and `enumerables` in Ruby?
2. What are some examples of enumerables in Ruby that are not in JS?
3. Differentiate between Ruby's `each` and `map` methods
4. List 5 useful Ruby enumerable methods

## Homework: [High Card](https://git.generalassemb.ly/ga-wdi-exercises/high_card)

Combine your knowledge of Ruby basics and enumerables to make a simple card game.

## Resources

- [Intro to Ruby Enumerables](http://jamesgolick.com/2008/1/5/an-introduction-to-ruby-s-enumerable-module.html)
- [Ruby Monk on Enumerables](https://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/44-collections/lessons/96-enumerators-and-enumerables)
- [Ruby Explained: Awesome Enumerables](http://www.eriktrautman.com/posts/ruby-explained-map-select-and-other-enumerable-methods)
- [Ruby Magic](http://ruby.bastardsbook.com/chapters/enumerables/)
- [Ruby Loops and Iterators](https://launchschool.com/books/ruby/read/loops_iterators)
