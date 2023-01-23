# Python vs. JavaScript: Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Required Readings

- [From JavaScript to Python](https://dev.to/aveb/from-javascript-to-python-1b1m)

## Python vs. JavaScript: Compare and Contrast

Describe three examples of differences between Python and JavaScript.

```md
<!-- your answer here -->
```

## Python vs. JavaScript: Type Conversion

Type conversion in Python is invoked by calling methods like `int()` (convert
to integer), `float()` (convert to float), and `str()` (convert to string).
Here is some Python code that declares two variables `left_operand` and
`right_operand` with the values `'1'` and `'2'`, respectively. It then
declares a variable called `sum` that converts both `left_operand` and
`right_operand` to integers in order to add them together

```py
left_operand = '1'
right_operand = '2'

sum = int(left_operand) + int(right_operand)
# sum: 3
```

Write some JavaScript code that duplicates this functionality.

```javascript
// your answer here
```

## Python vs. JavaScript: String Interpolation

String interpolation in JavaScript is performed by wrapping a string with
backticks (\`) rather than single quotation marks (') or double quotation marks
("). For example:

```javascript
const beverage = 'tea'

console.log(`Many people drink ${beverage}.`)
// Output: Many people like to drink tea.
```

Write some Python code to duplicate this functionality.

```py
# your answer here
```

## Python vs. JavaScript: Array and String Methods

Use what you know about Python to do some string manipulation.  If you need to
look up Python's array and string methods, then check the
[Array](https://py-doc.org/core-2.3.1/Array.html) and
[String](https://py-doc.org/core-2.3.1/String.html) articles on
[Python-Doc.org](https://py-doc.org).

1. Open the python REPL with `python3` in your terminal and set a variable,
  `txt`, to `"eeffoc"`.
1. Reverse the string so it reads `"coffee"` and store it in a variable `reverse`.
1. Change the string into a list of characters `chars` so that the output reads
  `["c", "o", "f", "f", "e", "e"]`.
1. Change your new list back into a string `hyphens` with hyphens in between
  characters so that your result is `"c-o-f-f-e-e"`.

```py
# your answer here
```

## Python vs. JavaScript: Slice Notation vs Slice Method

```py
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
first_half_by_twos = my_list[0:5:2]
# [1, 3, 5]
```

Write some JavaScript code that duplicates this functionality.

```javascript
// your answer here
```

## Python vs. JavaScript: Methods and Functions, Part I

In Python and JavaScript we have similar notions of callback functions.

Here is some Python code that takes a list of numbers and
filters out the ones that are not multiples of 3.

```py
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

filtered_numbers = list(filter(lambda num: num % 3 == 0, numbers))
# filtered_numbers: [3, 6, 9]
```

Write some JavaScript code that uses the array iteration method `filter()`
and an anonymous callback function to duplicate this functionality.

```javascript
// your answer here
```

## Python vs. JavaScript: Methods and Functions, Part II

Here is some JavaScript code that takes an array of numbers and uses
`map()` to create a new array containing the squares of `numbers`.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const square = function (number) {
  return number ** 2
}
const squares = numbers.map(square)

// squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

Write some Python code that uses the Python iteration method `map` and a
named function `square` to duplicate this functionality.

```py
# your answer here
```
