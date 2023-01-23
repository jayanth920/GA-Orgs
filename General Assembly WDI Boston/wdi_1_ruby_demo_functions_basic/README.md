![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## What does a program do?

A *program* is a set of *instructions*, written to perform a *task* with a computer. The first *language* we work with in WDI is *Ruby*.

This task may be made up of several sub-tasks that together can be used to complete the larger task.

### Real Life: Tasks

Your task is to make an apple pie. What subtasks might be involved?

Let's use [this Serious Eats](http://www.seriouseats.com/recipes/2011/10/perfect-apple-pie-recipe-double-crusted-thanksgiving-dessert.html) recipe as an example.

There are lots of sub-tasks in making the pie, but the first ones might be:

- Adjust oven rack to lower middle position
- Place heavy rimmed baking sheet on oven rack
- Preheat oven to 425
- Peel apples
- Cut apples into slices
- Places apple slices in large bowl
- Turn on stove
- Fill pot with 3 quarts of water
- Boil 3 quart pot of water on stove
- Pour boiling water on top of apples slices
- etc...

Together, these subtasks will make an apple pie. You don't start making an apple pie by just "making the pie" all at once, but by completing each task in order.

### Expectations

How do you know if *each* task has been completed properly? Sure, you could just try to make all together and see if you have an edible apple pie at the end, but that's going to make a lot of bad pies and figuring out which step you did wrong is going to be tricky.

What if for each sub-task you had a set of expectations that would be true afterward?

After you preheat the over to 425, you should be able to measure the temperature of the oven and find the temperature. When you peel the apples, you should then have peeled apples. This might sound incredibly basic, but it ensures with some degree of confidence that the task has been properly completed.

### Sample Task 1

Computers are better at math than pie. Let's say we have a task to add two numbers together. You might already know how to do this, but let's talk about our expectations around adding two numbers.

A quick math test:

```
2 + 2 = ?
10 + 2 = ?
-10 + 10 = ?
```

We know the answers are 4, 12 and 0 respectively. We *expect* that if we add `2 + 2` then we expect `4` to be the answer.

In a moment we're going to write a *function* to complete this task. But before we even write that we want to know if we've got it right.

To do this we use a tool called *rSpec*. We've already setup the rSpec tool for you in this repo, and we'll talk more about it in detail later. The point now is that we want to learn to write out our expectations and then write the code to fulfill them.

In the `/spec/math_spec.rb` file, you'll see the following:

```ruby
RSpec.describe "#add" do
  it "sums two numbers" do
    expect(add(2, 2)).to eq(4)
    expect(add(10, 2)).to eq(12)
    expect(add(-10, 10)).to eq(0)
  end
end
```

We run this *test* by running `rspec spec` from the *bash prompt* or *terminal*. This test passes, because the code to make it work is already in the `lib/math.rb` file.

```ruby
def add(a, b)
  a + b
end
```

Here we can see that we've written the *function* named `add`. It takes two *arguments* of `a` and `b`. It then returns the sum of `a` and `b` using the `+` method.

The process we've used here is called *test driven development* (TDD). The steps we'll follow initially for TDD are as follows:

1. For a *small task*, on paper write down your expectations about that task, as we did above for our `add` task.
2. Write a test in *rspec* that expresses these expectations.
3. Write the code that allows for the test to pass
4. Once the test passes, see if you can improve or *refactor* your code to make it work even more clear and concise.
5. Check that the tests still pass
6. Move onto the next small task

Let's look back at the rspec test to make sure we understand the syntax. I've added some comments above each line.

```ruby

# RSpec.describe is a method that takes two arguments, a string with the name of the method we're describing,
# and a block (the do/end code).
# By convention, we use the name of the function we're describing in the string.
RSpec.describe "#add" do

  # `it` is another method. It also takes a string and a block.
  # The string is just a human-readable description of what you're saying the `add` method will do.
  it "sums two numbers" do

    # Below we have three expectations. We could have had more or less.
    # You don't want to test every possibility under the sun, but testing different types of possibilities is a good idea.
    # The syntax of these is `expect(your_method(method_args)).to eq(expected_result)`
    # Only use `eq` for numbers and boolean values
    expect(add(2, 2)).to eq(4)
    expect(add(10, 2)).to eq(12)
    expect(add(-10, 10)).to eq(0)
  end
end
```

#### Your Turn: Mini lab

For the following tasks, write the expectations, test and code. Put tests in `spec/math_spec.rb` and code in `lib/math.rb`. Run `rspec spec` to ensure the tests pass.

1. A method called `difference` that returns the difference between two numbers
2. A method called `product` that returns the product of two numbers
3. A method called `absolute_value` that returns the absolute value of a number
4. A method called `square` that returns the number multiplied by itself

## Methods/Functions

We've just written several functions. You may also hear us refer to them as methods. For the moment, don't worry about the difference between the two.

What is a function? A function is a small task. It may call other functions inside of it. A function maps an input to an output.

Let's consider our `square(x)` function from above, which should be equivalent to the mathematical function of `f(x) = x^2`

| Input | function   | Output |
|-------|------------|--------|
| 2     | f(x) = x^2 | 4      |
| 4     | f(x) = x^2 | 16     |
| 5     | f(x) = x^2 | 25     |
| 10    | f(x) = x^2 | 100    |


### How to write a function

Writing a function is easy.

First, consider what you want the function to do, and write this down. If you find yourself saying **and** at any point while describing a function, it might be doing too much already and you need to write two or more functions.

What *datatypes* will your function take as an input, and what *datatype* do you expect as an output? For the `square(x)` function I expect to have a numerical input and a numerical output.

Write down a set of inputs that will map to outputs, as I have done above for the `square(x)` function. These are your expectations of the results a function should have.

Then write a set of rspec tests that express these expectations. You don't need to go overboard here, but testing a few different scenarios is important.

```ruby
RSpec.describe "#double_me" do
  it "doubles a number" do
    expect(double_me(2)).to eq(4)
    expect(double_me(10)).to eq(20)
    expect(double_me(-10)).to eq(-20)
  end
end
```

Now you can write your function!

```ruby
  # We define a function with the `def` keyword
  # Then we write the name of the function in snake_case. In this example we're calling it double_me
  # Your name should be descriptive and clear
  # The function can take one or more *arguments*, which are the names for the local variables in the function
  # The order of arguments is significant
  # Its a good idea to have a set of comments above the function, as I do on the next three lines
  # Input: number:Fixnum || Float
  # Output: Fixnum || Float
  # Description: Doubles an input number
  def double_me(number)

    # Here we do some computation
    # Since this is the last (and only) line, it will be the return value of the function
    number * 2

    # We must mark that the function definition is completed with the `end` keyword
  end

```

Run your tests and consider if the code could be improved.

### Writing better functions

You can put anything inside the definition of a function, but that doesn't make it right. What makes a good function?

- Have a clear input via one or more *arguments*
- Have a clear output that is returned. In Ruby, the value of the last line of a function is automatically its *return value*
- Can be run multiple times without changing the output. No matter how many times you run square(2), the answer will always be 4.
- Have tests to document the expectations of the function
- Use no global variables, and as few external objects as possible
- Does not use `puts` or `gets`

The most reliable functions are called [*pure functions*](http://en.wikipedia.org/wiki/Pure_function). When possible, try to write pure functions. What is a pure function? One that follows the following rules:

1. The function always evaluates the same result value given the same argument value(s).
2. The function result value cannot depend on any hidden information or state that may change as program execution proceeds or between different executions of the program
3. The function cannot depend on any external input from I/O methods such as `gets`.
4. Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices.

#### Pure Function examples:

- `sin(90)`
- `add(1, 2)`

#### Impure function examples:

- `prompt_user_for_input()`
- `rand()`

### Composition

Function composition is the combination of one or more functions to create a more complex function. The result of each function is returned as an argument to the next one.

Consider the following

```ruby
def reverse_string(string)
  string.reverse
end

def uppercase_string(string)
  string.upcase
end

def reverse_and_uppercase_string(example)
  reverse_string(uppercase_string(example))
end
```

The `reverse_and_uppercase_string` is composed of the two prior functions. Its results are predictable and reusable.

#### Question:

How might you test the above functions?

### Summary on Functions

While there is some computational cost to creating functions, we will generally consider having more functions to be a good thing. It is far better to have two dozen tiny functions than it is to have 3 giant functions.

### Wait a minute!

> But, all of the programs I wrote before this class used a done of input and output! How will I know if its working? Users don't just run tests! There's no way to write a program like this!

Yes, in reality you will eventually need to write some functions that handle input and output in order for users to have any benefit from your program. However, it is important to keep these functions separate from the rest of your functions. What might be wrong with the following implementation of `double_me()`?

```ruby
def double_me
  puts "What number would you like to double?"
  x = gets.chomp.to_i
  puts (x * 2).to_s
end
```

Answer: This function is very hard to test. Its doing several things at once. Finding a bug is going to be hard. Also this code isn't reusable at all! What if you wanted to use `double_me()` in a website, Google Glass or a spaceship? Perhaps Google Glass doesn't have a keyboard for input!

But yes, you might want `double_me()` to actually do something for a user. So instead do it like this:

```ruby
def prompt_user
  puts "What number would you like to double"
end

def user_input
  gets.chomp.to_i
end

def double_me(x)
  x * 2
end

def print_results(result)
  puts "The number doubled is: " + result
end

def prompt_user_and_double
  prompt_user
  print_results(double_me(user_input))
end
```

## Additional Resources

- [Official Ruby 2.2 documentation on Methods](http://ruby-doc.org/core-2.2.0/doc/syntax/methods_rdoc.html)
