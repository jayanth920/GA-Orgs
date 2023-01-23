# Alice Analysis

*"Curiouser and curiouser!"*

This assignment is an exercise in writing and combining your own methods, and looking up documentation on some of Ruby's built-in methods. In `sample.txt` you will find the first chapter of [Alice's Adventures in Wonderland](http://www.literature.org/authors/carroll-lewis/alices-adventures-in-wonderland/) in plain text format &ndash; your goal is to write several methods to analyze this text. `analysis.rb` contains a line that will load the text into a Ruby string to get you started.

## Specifications

These methods are listed in the order we suggest you write them, but it's possible to skip around a bit.

1. Method that splits a string (e.g. the text from `sample.txt`) into an array of normalized words. "Normalized" here means that the words should be all lowercase and scrubbed of any punctuation such as periods or parentheses.
2. Method that takes a string and returns an array of all *unique* words in it, ignoring punctuation and capitalization differences.
3. Method that counts how many words are in a string. This method should also provide the *option* to count unique words instead of total words.
4. Method that takes a string and returns a hash where the keys are normalized words, and the values are integers representing how many times that word occurs in the string.
5. Method that finds the most common word in a string that is longer than a particular "length threshold". The threshold should be optional, and default to 3 characters (i.e. words of 3 characters or less will not be considered). It's up to you how to handle multiple words being "tied" for most common.

**Make sure you are combining methods wherever possible** to avoid duplication of code! Your methods should also be named appropriately based on the data they return. And of course, your code should use correct indentation/style and descriptive variable names.

### Extra Challenges

* Write a method that finds the length of the longest word in a string, and returns an array of all unique words in the string that are that length.
