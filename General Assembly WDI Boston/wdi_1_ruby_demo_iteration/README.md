![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Demo - Looping / Iteration

## Objectives

By the end of this, students should be able to:

- Use iteration to perform operations on collections
- Choose the right iteration operation
- Describe difference in types of iteration methods
- Predict the result of iterating over a block

## Demo

### Each

`each` takes a collection, and repeats over each element in the collection, making the element available to a block. Its returns value is the *original collection*

In the following example, we will use a range of `1..10` and print the number doubled.

```ruby
(1..10).each do |number|
  puts number * 2
end
```

The return result of this is the original range of `1..10`. That doesn't seem terribly useful does it?

We also know that we are avoiding the use of `puts` in this class! What if we wanted to return the results from a function? Well, we can use an array to store values. Let's try that:

```ruby
temp_array = []

(1..10).each do |number|
  temp_array << number * 2
end

temp_array
```

Awesome, now the last line of `temp_array` will return the value of an array of all the numbers doubled.

But we've had to *mutate* the data. Maybe that's ok, but it also encourages me to do several things within the block of the `each` method, and perhaps not focus on just a single task. For example:

```ruby
(1..10).each do |number|
  puts number * 2
  # Well, we're already here, let's get more done!
  # Go to Store
  # Ask about the news
  # Get a haircut
  # Return value of block doesn't matter...
end
```

This is all over the place. Hard to test. Doesn't focus well. Hmm. Seems sub-optimal. Let's come back to this.

### Map

`map` is very much like each, in that it loops over a collection and makes each element available to the block as a local variable. *But* it returns the value of each block as a new array! That temporary array we made before isn't needed at all. In fact, if the `map` is the last thing in a function we don't even have to assign the line to local variable.

I've wrapped the code below in a method definition, just so you can see this in action!

```ruby
def double_elements_with_map(collection)
  collection.map do |number|
    number * 2
  end
end
```

So if you want to loop over a collection, and so something with each element, and then have a set made up of these altered elements as the result, `map` is the *perfect* tool. This is a much better *pattern*

### Each vs Map

- `each` doesn't really *return* anything useful to us as a value.
- `map` returns the result of each block (the last line) as a new array without altering the original collection.

- `each` encourages mutation of data, and lets people get in the habit of doing multiple things in the block since the return value of the block doesn't matter.
- `map` makes you laser focus on one task, and discourages mutation of data. This will lead to fewer bugs in the long term.

- `each` is harder to test, since you might be doing multiple things in it, which probably have side-effects.
- `map` is really easy to test, making coding quicker and fewer bugs

- `each` is boring, but overused. Only really use it for outputting Rails Views next week.
- `map` has some neat tricks, and is a common pattern in *functional programming*

#### Neat Tricks with Map

##### Symbol to Proc

Let's say we wanted to take an array of strings, and reverse each element.

We could do this with a temporary array and each:

```ruby
temp_array = []
['beep', 'boop', 'buzz'].each do |element|
  temp_array << element.reverse
end
temp_array
```

But this is too long, so let's do it with map.
```ruby
['beep', 'boop', 'buzz'].map do |element|
  element.reverse
end
```

We can do it even better and shorter. We can do this nifty *symbol to proc* trick, which allows us to tell the name of a method that we'd like to call on every element in the collection.

```ruby
['beep', 'boop', 'buzz'].map(&:reverse)
```

This is a little weird to understand, but essentially we can use the `(&:reverse)` instead of writing out an entire block to just say *'run this method on everything in the collection'*

*You can also do this with other methods that take a block*

##### Chaining Maps

What if we wanted to do more than one thing to the set? Perhaps uppercase and also reverse the elements?

```ruby
['beep', 'boop', 'buzz'].map(&:upcase).map(&:reverse)
```

What would have been a *very* long and hard to test method with `each`, becomes a ninja-level one-liner by using `map`. There's also other really cool methods like `reduce` that can be chained with `map`. The power of these cannot be understated.

### While

We won't be using `while` frequently, so we don't go into it in great depth.

`while` will loop over a block until the conditional expression is false, due to some mutation of a variable inside the block. This requires mutation of a variable and can also get you stuck inside an *infinite loop* if the condition is never set to false.

It can be useful in game programming for the main game loop, but less so in web applications. Due to its mutation and potentially infinite state, it is more difficult to test from a TDD standpoint. A brief example however:

```ruby
x = 0
while(x < 10) do
  x = x + 2
  puts x
end
```

Question: How many times will the above loop execute, and what will the last value output be?

### Times

`times` is an occasionally used method on Fixnum, which can be used to repeat a block of code. It can optionally pass through how many times it has been done as a local variable, which starts at 0.

For example:

```ruby
5.times do |time|
  puts "#{time} time!"
end
```

Question: Why does the above example start with a 0 as the output of the string?

## Bonus (Optional Section)

Look a few days forward at the [Enumerable Exercise](https://github.com/ga-wdi-boston/wdi_10_ruby_enumerable) that we'll be doing Friday.

## Notes

There are many control structures that you *can* use in Ruby, but simply aren't idiomatic. When we get to Rails, we will almost never use `while`. `for` loops are possible in Ruby, but aren't idiomatic and you'll never see them. Case statements are almost never used in Rails.

You will frequently see `each` when rendering Rails View templates. `each` is over-used in other contexts however, and more often than not you actually want to use `map` or `reduce`. When possible, favor use of `map` over `each`.

## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- [Ruby Core Docs: Control Expressions](http://ruby-doc.org/core-2.2.0/doc/syntax/control_expressions_rdoc.html)
- [Ruby Core Docs: Enumerable Module](http://ruby-doc.org/core-2.2.0/Enumerable.html)
