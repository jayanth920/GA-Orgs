
Title: Ruby I<br>
Type: Homework<br>
Creator: Thom Page<br>
Modified by: Kristyn Bryan, David Fisher, Karolin Rafalski, Mark De May<br>
Competencies: Basic Ruby<br>

---

# RUBY I

## Reps and problem solving with Ruby

You'll complete this assignment by coding the answers in `student_solution.rb`.  You can run your code with `ruby student_solution.rb` from the terminal.

### Ruby Docs:

The Ruby documentation is excellent. Take advantage of it!

Load the following pages in your browser so that you can search for any useful Ruby methods to help you solve the problems (look through the 'methods' column on the left):

* [Arrays](http://ruby-doc.org/core-2.4.1/Array.html)
* [Strings](http://ruby-doc.org/core-2.4.1/String.html)
* [Enumerables](http://ruby-doc.org/core-2.4.1/Enumerator.html)
* [Hashes](http://ruby-doc.org/core-2.4.1/Hash.html)

<br>
<hr>

# REPS

## Hello World

1. Print "Hello World" to the console

After you have printed Hello World:

```ruby
adjective = "Big Bad"
```

2. Interpolate the `adjective` variable into the Hello World string using `#{}`

Expected output:

```ruby
=> Hello Big Bad World
```

3. Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to uppercased letters.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Hello World".
<hr>

## Arrays

### Nums Array
With the following array:

```ruby
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
```

1. Use `.uniq` to print the array with all duplicate entries removed

2. Next, use `.push` and `.pop` , `.shift` `.unshift` and `.length` on the array as you would with javaScript (if you need to add a number, add 5)

3. Use `.include?` to check if the array contains the number 8

4. Use `.find_all` to find all the numbers greater than 10

5. use `.count` to let you know how many numbers are greater than 4

6. use `.each_with_index` to print each item times its index

7. `.find` the number that is divisible by 7 and 5 and is greater than 0

8. `.find_index` of the number that is divisible by 5 and 7 and is greater than 0

9. return the `.first` 3 numbers

10. return the `.last` 5 numbers

11. `.group_by` the modulo of 3 ( `% 3` )

12. use `minmax` to return the smallest and largest number



<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Arrays".
<hr>

### Enumerables

Continue using the nums array.

1. use `.all?` to check if all the numbers are greater than 0?

2. use `any?` to check if there are any numbers that are divisible by 8

3. use `.reject` to return all the numbers that are NOT divisible by 3

14. use `.select` to return all the numbers divisible by 5

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Enumerables".
<hr>

### Color Array

With the following array:

```ruby
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
```

1. Print out a random color.

2. Print out the `colors` array in reverse order.

3. Print out all of the colors in the array with all capital letters.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Color Array".
<hr>

## Methods

* Write a method that finds the area of a rectangle given values for width and height
	* Remember, the keyword 'return' is implied and can be omitted

```ruby
def find_area height, width

end
```

* Write a method that will loop over the `nums` array and print each number multiplied by 5


```ruby
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
```

```ruby
def multiply_each_by_five arr

end
```

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
" Methods".
<hr>

## Methods with a Hash

Use the following hashes to answer the questions below.

```ruby
# Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}
```

1. Write a method that will take in any hash and return the price of the item.

```ruby
# Compete this method:

def print_price

end
```

2. Write a method that will take in two hashes and will return the sum of the prices for the items in the hashes.

```ruby
# Compete this method:

def print_item_sums

end
```

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Methods with a Hash".
<hr>

# PROBLEMS

## EULER PROBLEM 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Euler problem 1".
<hr>


## PRIMES

* Write a method called `check_prime?` that will test whether a number is Prime. The method will return true if Prime, false if not.

* Write another method called `get_primes` that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with `get_primes 100`, it will print all the Prime numbers up to and including 100.

This method can call on the previous `check_prime?` method.


> A Prime number is a number that is not evenly divisible by another number except 1 and itself.

> To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

Check out Ruby's `Prime` class: http://ruby-doc.org/stdlib-2.4.1/libdoc/prime/rdoc/Prime.html

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Primes".
<hr>


# Hungry For More?


## PANDIGITAL NUMBERS

A number of length n is _1-to-n pandigital_ if it makes use of all the digits 1 to n exactly once.

- The number `15234` is _1-to-n pandigital_.

- The number `333` is **not** _1-to-n pandigital_.

- The number `0` is **not** _1-to-n pandigital_.
- The number `10` is **not** _1-to-n pandigital_.

- The number `987654321` is _1-to-n pandigital_.

Write a method that checks if a number is _1-to-n pandigital_.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Pandigital Numbers".
<hr>


## WORD FREQUENCY

Find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result.

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Work Frequency".
<hr>

## Still Hungry?

- Finish the labs from today.
- Solve this problem in both Ruby & JavaScript: https://projecteuler.net/problem=13. You can sign in to Project Euler to submit your answer and check if it's correct.
