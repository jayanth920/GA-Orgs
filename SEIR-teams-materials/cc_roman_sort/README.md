[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

---
Title: Roman Sort <br>
Type: Coding Challenge <br>
Duration: "~:45" <br>
Creator: Kenneth Cruz <br>
Source: Code Wars <br>
PreReq: JavaScript Fundamentals


![.](https://media.tenor.com/images/f6452676b8ebe26bbac383ba74ab22af/tenor.gif)

--- 

## WeIrD StRiNg CaSe 

Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased. <br>

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' '). <br>

```
toWeirdCase( "String" ) // returns "StRiNg"
toWeirdCase( "Weird string case" )// returns "WeIrD StRiNg CaSe"
```

## Sort the odd

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places. <br>

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it. <br>

Example: <br>

```
sortArray([5, 3, 2, 8, 1, 4]) // expected return: [1, 3, 2, 8, 5, 4]

```

## Roman Numerals Decoder

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral. <br>

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order. <br>

Example: <br>
```
solution('XXI'); // should return 21
```
<br>
Help: <br>

```
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
```



