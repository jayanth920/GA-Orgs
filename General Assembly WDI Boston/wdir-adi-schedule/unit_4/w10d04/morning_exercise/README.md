![](/ga_cog.png)

---
Title: Ruby Exercises<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator: Mark De May<br>
Competencies: Ruby Basics, Arrays, Loops, Breaking down a problem into smaller steps<br>
Prerequisites: Ruby Fundamentals<br>

---

# Ruby Exercises

You can do these in any order you'd like.

## CLOCK HAND ANGLE CALCULATOR

![clock](http://orpheogroup.com/wp-content/uploads/2014/10/grand-central-clock-crop.jpg)


Write a function `clock` that takes two integers, `hour` and `minute`. The function should calculate the two angles in degrees between the **hour hand** and **minute hand** on a twelve-hour analog clock face.

Note that the hour hand has 'drift'. If the time is **6:30**, the hour hand will be halfway through its travel between **6** and **7**. If the time is **9:45**, the hour hand will be three quarters of the way between **9** and **10**.

Return an "out of range" message if an input is greater than the clock's range.


##### Expected output:

```
clock(6, 00)
=> [180, 180]
clock(12, 00)
=> [360, 0]
clock(12, 15)
=> [277.5, 82.5]
clock(9, 45)
=> [22.5, 337.5]
clock(1, 59)
=> [294.5, 65.5]
clock(500, 34)
=> “out of range”
```

## Strings with repeating sequences

Write the function `hasRepeats?` that takes a string and interger `n` and returns true if the first `n` characters are repeated anywhere in the string.

##### Expected output:

```
hasRepeats? "This returns true because This happens twice", 4
=> true
hasRepeats? "This returns false."
=> false
```

Now change `hasRepeats?` to look for repeated sequences anywhere within the string.

##### Expected output:
```
hasRepeats? "This returns true because true happens twice", 4
=> true
hasRepeats? "This still returns false."
=> false
```

Crazy time. Change `hasRepeats` to return an array of all repeated sequences in the string that are 3 charaters or longer.

##### Expected output:
```
hasRepeats "one two three four three two one"
=> ["one two three"]
```

## Make Change

Write the function `makeChange` that takes how much your coffee costs and how much you gave the barista and prints out your change using the fewest number of coins.

##### Expected output:

```
makeChange 5.00, 4.42
=> "Your change is $0.58. 2 quarters, 1 nickel, and 3 pennies."
```

## Alphabet Soup

Write the function `sortString` that takes a string and returns a string with the characters in alphabetical order.

##### Expected output
```
sortString "This is a string"
=> "aghiiinrssstt"
```

## Anagrams

Write the function `isAnagram?` that takes two strings and returns true if they're anagrams, if not return false. Hint: maybe use `sortString`?

##### Expected output

```
isAnagram? "anagram", "nag a ram"
=> true
isAnagram? "this", "that"
=> false
```

## Balanced Brackets

Write the function `isBalanced?` that takes a string of brackets and returns true if they are balanced. The sequence is balanced if:
  - It contains no unmatched brackets.
  - The subset of brackets enclosed within a matched pair is also balanced.

##### Expected output

```
isBalanced? "{[()]}"
=> true
isBalanced? "[()]{}"
=> true
isBalanced? "[(])"
=> false
```

## Hungry For More?

Head over to [hackerrank](https://www.hackerrank.com) and try a few problems. Companies use hackerrank for code challenges during their interview process so it's good to be familiar with how it works.
