Title: Luhn Algorithm <br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator: Thom Page <br>
Competencies: Arrays, Loops, Breaking down a problem into smaller steps<br>
Prerequisites: JavaScript or Ruby Fundamentals<br>



# The Luhn Algorithm

Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

1. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.

2. Sum all digits in the altered number.

3. If that total is a multiple of 10, the number is valid.

For example, given the card number 4408 0412 3456 7893:

```
Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
Step 3:  70 % 10 == 0
```

[Luhn Algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm)

### Code

Write a function `valid_card?` that takes a number as an argument and returns true for a valid number and false for an invalid number.

```
valid_card?(1234567890123456) #should be false
valid_card?(4408041234567893) #should be true
valid_card?(38520000023237) #should be true
valid_card?(4222222222222) #should be true
```

### Bonus
Test to see if it is a valid Mastercard, Visa, or American Express (use google to find out)

### Bonus Bonus

##### Spiral Path

Write a function called "spiral" that takes an NxM array as input and returns a "spiral" path through the array, starting in the upper-left corner and moving clockwise.  

For example (in Ruby), if

```ruby
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
```

then

```ruby
spiral(array) # => [1,2,3,4,5,6,7,8,9]
```

It should work on any NxM array, so don't assume the input is a square array.  However, every row will have the same number of elements.

<details><summary> More Test Cases </summary>

```ruby         
a =
  [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]

b = [
      [ 1,  2,  3,  4,  5,  6],
      [18, 19, 20, 21, 22,  7],
      [17, 28, 29, 30, 23,  8],
      [16, 27, 26, 25, 24,  9],
      [15, 14, 13, 12, 11, 10]
    ]

c = [
      [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10],
      [36, 37, 38, 39, 40, 41, 42, 43, 44, 11],
      [35, 64, 65, 66, 67, 68, 69, 70, 45, 12],
      [34, 63, 84, 85, 86, 87, 88, 71, 46, 13],
      [33, 62, 83, 96, 97, 98, 89, 72, 47, 14],
      [32, 61, 82, 95, 100, 99, 90, 73, 48, 15],
      [31, 60, 81, 94, 93, 92, 91, 74, 49, 16],
      [30, 59, 80, 79, 78, 77, 76, 75, 50, 17],
      [29, 58, 57, 56, 55 ,54, 53, 52, 51, 18],
      [28, 27, 26, 25, 24, 23, 22, 21, 20, 19]
   ]

e = [
      [1,2],
      [4,3]
    ]

f = [
      [1,2,3,4],
      [8,7,6,5]
    ]

g = [
      [1, 2],
      [10,3],
      [9, 4],
      [8, 5],
      [7, 6]
    ]

h = [
      [1,2,3,4]
    ]
```

</details>
