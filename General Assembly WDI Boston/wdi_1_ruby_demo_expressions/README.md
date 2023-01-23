![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Interpreting Ruby Expressions

## Objectives

By the end of this, students should be able to:

- Given a Ruby expression, draw up an 'expression tree' showing the operands and operations.
- Read an arbitrary Ruby expression and determine both (a) the order of operations, and (b) the final evaluated result.

## Expressions

You've probably picked up a scientific calculator at some point in the past and started playing around with it.

![A Calculator](/images/38-big.jpg)

You punch in a big number (for example, 9876435), then `*`, and then another big number (say, 373848221), hit the `=` button, and the calculator spits back a result (in this case, 3692287654572135).

That thing that we type into the calculator (at least everything before the `=`) is called an **expression** : a collection of operations and values. This process of reducing this expression down to a single value is called **evaluation**.

How does the calculator know how to evaluate the expression we punch in? Well, first let's consider how a *person* evaluates an expression. Consider the following:
  ```ruby
  (2+3)*(9-8)
  ```
In order to perform the `*` operation, we have to know the values of both of the inputs, called *arguments*. But each of these arguments are also expressions! We need to evaluate both of them in order to evaluate the entire expression.

We can represent this expression using a logical structure called a *tree*. See below.

![Expression Tree](/images/Expression_Tree.png)

Each operation in our expression takes two inputs, so every *node* in this tree has two *child nodes*. To evaluate any given node in the tree, you must first evaluate each of its child nodes, from left to right. In the case of the tree above, we would first evaluate (2+3) to get 5, then evaluate (9-8) to get 1, and finally evaluate (5*1) to get 5.

Suppose we now wanted to look at the expression `1 + 2 + 3 + 4 + 5`. What would the tree for this expression look like? *(Hint: Operations at the same 'tier', like addition & subtraction or multiplication & division, are always performed from left to right. In other words, 30-5+3 is (30-5)+3 and not 30-(5+3))*

## Expressions in Ruby
The Ruby interpreter works very similarly to our simple calculator - it reads one line of code at a time and attempts to evaluate it. And it works with many of the same operations, along with a few others (e.g. `%`, `=`). Let's consider the `=` operator for a minute.

When you first look at a line of code like `x = 5`, it's common to just think about it as assigning the value `5` to the variable `x`. But this is also an expression: `=` is the operator, and `x` and `5` are its inputs. And it also evaluates; the rule for `=` is that it will evaluate to whatever value is on the right side. In other words, `x = 5` evaluates to 5 (in addition to assigning a value).

```ruby
x = 4
(x = 10)*2
```
Take a look at the Ruby code above. What would the tree look like for that last expression?
What would the expression evaluate to? And what would the final value of `x` be?


## Bonus (Optional Section)

Try evaluating the following expression. What does the expression evaluate to? What is the final value of `x`?

`(x = 3) * (x = 5) + (x = 1)`

## Closing Thoughts

How might this extend to other types of data, like booleans?

## Additional Resources

- [Binary Expression Tree on Wikipedia](http://en.wikipedia.org/wiki/Binary_expression_tree)
