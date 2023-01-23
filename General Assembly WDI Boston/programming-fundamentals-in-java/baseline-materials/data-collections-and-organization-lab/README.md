---
title: Organizing Information - Challenge Questions
type: lab
duration: "1:30"
creator:
    name: Drew Mahrt
    city: NYC
---

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Organizing Information - Challenge Questions

## Introduction

> ***Note:*** _This should be completed independently._

This is a two part Lab:

**Part I**

In this lab, you will be completing a series of 3 challenge questions that involve data collections. These questions are very similar to what you would see in an interview, so this is great practice. Think through each problem before you start creating code, possibly writing out pseudocode if it will help you. Run your code against the included test cases when you are finished. **Feel free to look up any Java documentation to help you (ie arrays, Lists, etc.)**

**Although you can find answers to these on the internet, it would be to your benefit to try them on your own**

**Part II**

Write 10 functions that accept parameters that use combinations of control flow and multiple conditionals. Some of these functions will also require you to iterate over data collections (Arrays, ArrayLists, LinkedLists, Hash Maps). When a function is created, please call it and test all the cases including edge ones (e.g. empty strings, null values, big and small values). It is of high importance to practice and master Java fundamentals.

## Exercise

#### Requirements

- Complete each question in its own provided method
- Your methods must pass all of the included test cases

**Bonus:**
- Complete the bonus question (Marked as Bonus)
- Optimize your methods to be more efficient

#### Starter code
- Part I
  - An **intelliJ project** called ChallengeQuestions has been provided for you that includes a Main.java file. Each method has a comment above it that contains the problem. Complete each problem in that method (although you can write additional methods if it will help in your solution). Run your code against the test cases when you are done.

- Part II
  - No Starter Code needed.

#### Deliverable

- PART I
  - The completed Java file with solutions to the questions.

- PART II
  - You are expected to create a Java file with 10 functions and run them testing all cases.


#### Test your code

Use the included JUnit test cases. Right click the file MainTest.java, and choose 'Run MainTest'.

#### Part II

1. Write a function that takes in a word. This function should return true if the word is a palindrome and false if it is not. A string is considered a palindrome if it remains unchanged when reversed. For example, "dad" is a palindrome as reverse of "dad" is "dad", whereas "program" is not a palindrome. Note: palindromes are case insensitive ("Dad" and "dad" are both palindromes).

2. Write a function that accepts no parameters and creates a list of any characters and returns a string, which
contains every other element in the list. Thus, if the list has 'a', 'b', 'c', 'd', the output should be "bd".

3. Write a function that takes in an array of integers and returns the max value in that array. Please do not sort the array.

4. Write a function that takes in a month of the year and returns the number of days in this month. If the input is not a
valid month, return 0.

5. Write a function that takes in an array of integers, sums the integers that are greater than 1, and subtracts 3 if the number is greater than 20. The function returns the result of the operations on the array.

6. Write a function that takes in a list of names, filters the list removing all duplicate names and returns a list with
unique names.

7. Write a function that takes in a string, omits all vowels and returns a new string that contains only consonants.
Make sure to catch the edge cases (e.g. empty string, upper/lower case).

8. Write in a function that takes in a positive integer, creates a linked list with integers in the range from 1 to the input number
and returns a middle element of the linked list if the length of the linked list is an odd number, otherwise -1.

9. Write a function that creates the right data structure to keep the names of your family members and their age. The
function asks the user to type in a family member's name and returns his/her age if the name exists or the string
"Such family member does not exist!" if such a member does not exit.

10. Write a function that takes in a list of countries, swaps the first country with the last one in the list and prints
out each of them following the new order. Choose the best collection that gives you access to the first and last element.
