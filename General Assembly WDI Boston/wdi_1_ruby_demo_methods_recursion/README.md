![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Introduction to Recursion with Functions/Methods

## Objectives

By the end of this, students should be able to:

- Understand the purpose of recursion
- Write methods that use recursion to solve a problem
- Manually trace the flow of a program that uses recursion

## Demo

> Recursion is a method where the solution to a problem depends on solutions to many smaller instances of the problem (as opposed to iteration) - Wikipedia

Most computer languages (such as Ruby, JavaScript and C) allow us to call a function from within itself. The use of this to solve a problem is called *recursion* and is a central idea in computer science. In *functional programming* it is frequently used instead of iteration, depending on the structure of the language.

One such problem that we can solve recursively is for the [factorial](http://en.wikipedia.org/wiki/Factorial) of a number, which is the product of all positive integers less than or equal to n.

Look at the code in `lib/factorial.rb` and the tests in `spec/factorial_spec.rb` (which you can run with `rspec spec`). As you can see, the factorial method is calling itself!

#### All About that Base (case)

If we simply had a method that called itself, it would setup an infinite series of calls that would never return a value, and the computer would have an error (called a *stack overflow*).

We need to tell it to stop somehow, and return a trivial value (often an integer like 0 or 1), which it can then start resolving back up the *stack*.

As you can see with our factorial method, we have a condition to check if `number > 1`, and if it is false, we return the *base case* result of 1 that will be used to solve the other method calls.

## Tracing out a recursive function call

On the board, let's trace out the values of `number` for various scopes of `factorial`, and how we resolve to get an answer for the call of `factorial(3)`

## Your Turn (solo):

In your notebook, trace out all the values of `number` for different scope levels of `factorial(5)`. This will take the greater part of a page, and you should be able to step through every stage of the process.

## Your Turn (pairs): Discuss/Research

With your partner discuss and research the following:

- What other problems could be solved recursively?
- What is the difference between iteration and recursion?
- Is solving something recursively always the best way? What are the potential downsides?
- Can some problems be solved recursively *and* iteratively?

## Notes

Without a 'base case', you will get a *stack overflow*, which is an error that means you tried to put too many things on the system *stack*.

## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- [Recursion (video), Harvard CS50](https://www.youtube.com/watch?v=t4MSwiqfLaY)
- [Recursion (Computer Science), Wikipedia](http://en.wikipedia.org/wiki/Recursion_(computer_science))
- [Introduction to Recursion, Stanford CS106b](http://cs.stanford.edu/people/eroberts/courses/cs106b/chapters/05-intro-to-recursion.pdf)
- [Understanding Recursion, Stack Overflow](http://stackoverflow.com/questions/717725/understanding-recursion)
