![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Lab - Variable Assignment & Predicting Program Output

Understanding the flow of a program, expressions and variable assignment is an essential skill for success as a developer. To practice this, we must learn to think about the code in a manner similar to the computer/Ruby interpeter.

Don't expect that you will get 100% of the questions right. It's okay if you don't know an answer - just write that you don't know or are unsure. It's very helpful if you explain which part you're unclear about. Don't overthink it - spend about 2-3 minutes on each question, and if you're not sure, just write that and move on to the next one.

## Objectives

This exercise aims to practice the following:

- Variable assignment
- Reading code
- Using git
- `if` statements and logic

## Instructions

Please answer each of the following questions to the best of your ability.

- Fork and clone this repo, change into the `wdi_1_ruby_lab_variable_assignment` directory.
- edit `README.md` to fulfill to answer the questions. Do not execute any code!
- stage changes for commit `git add README.m`
- create a git commit `git commit -m "YOUR MESSAGE"`
- Push changes to your Github repo `git push origin master`
- On Github, initiate a Pull Request to turn in your assessment

**This is a closed-book test. Please don't google the answer, don't ask a friend, don't look at past projects. Absolutely DO NOT RUN THE CODE to see if it works. If you do any of these things, your results will be invalid.**

Estimated time: about 30 minutes.

## Question 1

```ruby
a = 2
b = 3
a = b
```

At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.

## Question 2

```ruby
c = 5
d = 2
c = c + d
```

At the end of this program, what is the value of c?
Try to explain, in plain English, what the last line of this program (``c = c + d``) means.

## Question 3

```ruby
e = 4
f = 6
g = e + f
e = 1
```

At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.


## Question 4

```ruby
x = 4
y = 3
x = y
y = 10
```

At the end of this program, what are the values of x and y? Try to explain, in plain English, how you got your answer for each one.

## Question 5

Imagine that you take the code from Question 4, save it to a file called `test.rb`, and run `ruby test.rb` in your Terminal.

What would be the output?  Explain your answer.

## Question 6

```ruby
weather = "sunny"
weather == "sunny"
```

What is the difference between these two statements? Explain your answer.

## Question 7

```ruby
x = 4

if x == 3
  puts "sushi is tasty"
end

if x > 0
  puts "sushi is delicious"
end
```

Imagine that you take the code from this question, save it to a file called `food.rb`, and run `ruby food.rb` in your Terminal.

What would be the output? Explain your answer.

## Question 8

```ruby
x = 3

if x > 0
  puts "sushi is tasty"
elsif x == 3
  puts "sushi is delicious"
end
```

Imagine that you take the code from this question, save it to a file called `sushi.rb`, and run `ruby sushi.rb` in your Terminal.

What would be the output?) Explain your answer.

## Question 9

```ruby
x = 2

if x > 0
  puts "Chuck Norris can do a wheelie on a unicycle"
  x = x + 1
end

puts x
```

Imagine that you take the code from this question, save it to a file called `huzzah.rb`, and run `ruby huzzah.rb` in your Terminal.

What would be the output? Explain your answer.

## Question 10

```ruby
kitty = "lolcat"

if kitty == "lolcat"
  puts "i can has cheezburger?"
else
  puts "im in ur code fixin ur bugz"
end
```

Imagine that you take the code from this question, save it to a file called `kitty.rb`, and run `ruby kitty.rb` in your Terminal.

What would be the output? Explain your answer.

## Question 11

```ruby
fruit = "tomato"

if fruit == "banana"
  puts "yum"
end
```

Imagine that you take the code from this question, save it to a file called `fruit.rb`, and run `ruby fruit.rb` in your Terminal.

What would be the output? Explain your answer.

## Question 12

What is the value of ``fruit`` at the end of the code in Question 11? Try to explain, in plain English, how you got your answer.

## Question 13

```ruby
wizard = "harry potter"

if wizard
  puts "alohomora"
end
```

Imagine that you take the code from this question, save it to a file called `spell.rb`, and run `ruby spell.rb` in your Terminal.

What would be the output? Explain your answer.


## Question 14

```ruby
x = 9/10

puts x
puts x.to_i
puts x.to_f
```

Imagine that you take the code from this question, save it to a file called `numbers.rb`, and run `ruby numbers.rb` in your Terminal.

What would be the output? Explain your answer.

# Additional Resources

- [Ruby Official documentation on Assignment](http://ruby-doc.org/core-2.2.0/doc/syntax/assignment_rdoc.html)
