![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Demo - Data Types

## Objectives

By the end of this, students should be able to:

- Select proper data type to represent information
- Create objects using basic data types in Ruby
- Describe differences between different data types

## Data Types

Are represented by classes that are 'built into' a language.

We'll look at Fixnum, Float, Boolean, String, Symbol and ranges
today. We'll look at the Array and Hash data types tomorrow.

#### Fixnum and Floats

Some Fixnum objects, aka integers, are 10, 238, 1099, 87243956 and
87_243_956.

Some Float objects are 1.2, 0.5, .5 12.10487, 12.5e1, 12.5e-1 and 0.67982e6.

Some methods, aka operator, for integers and floats are + addition, -
subtraction, * multiplication, \ division, % modulus.

These operators have precedence. When ruby sees mulitple operators,
(==, <, >, &&, ||, ...), it will follow a set of evalation rules.

[Operator Precedence](http://www.techotopia.com/index.php/Ruby_Operator_Precedence)

See code in `lib/numbers_example.rb` and `spec/numbers_example_spec.rb`

#### Booleans
There are only two boolean objects, 'true' and 'false'. Only 'false'
and nil are falsey. Every other object in Ruby is 'true'. We'll see more later.

[Ruby Truthy or Falsy](https://gist.github.com/jfarmer/2647362)

Some operators 'evaluate to' true or false. For example, Equal (==), Not Equal
(!=), Less than (<), More than (>), Less than or equal to (<=), More
than or equal to (>=), Negation (!), OR (||), AND (&&).

See code in and `spec/boolean_example_spec.rb`

#### Strings
A sequence of characters enclosed in a single quote or double quote.

'simple string'
'another simple string'
'third simple string with single quotes'

#### Special Characters
A string may have one or more special characters.
`'\n'  # newline`
`'\t'  # tab`


## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- [Official Ruby String documentation](http://ruby-doc.org/core-2.2.0/String.html)
- [Official Ruby Symbol documentation](http://ruby-doc.org/core-2.2.0/Symbol.html)
- [Official Ruby Rational Numbers documentation](http://ruby-doc.org/core-2.2.0/Rational.html)
- [Official Random number documentation](http://ruby-doc.org/core-2.2.0/Random.html)
- [Official Ruby Range documentation](http://ruby-doc.org/core-2.2.0/Range.html)
- [Official Float number documentation](http://ruby-doc.org/core-2.2.0/Float.html)
- [Official Fixnum number documentation](http://ruby-doc.org/core-2.2.0/Fixnum.html)
- [Official Literals documentation](http://ruby-doc.org/core-2.2.0/doc/syntax/literals_rdoc.html)
- [Ruby Koans](https://github.com/ga-wdi-boston/wdi_1_ruby_exercise_ruby_koans)
