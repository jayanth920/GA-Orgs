# Anagram Detector

Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

What makes something an anagram? The two words have the same letters, in a different order.

In other words, given: `"listen"` and `["enlists", "google", "inlets", "banana"]` the program should return "inlets".

Think about: What are some scenarios we should test for?

Note: Don't worry about user interaction.  Just create the methods and show them working using `puts` (or similar).

- Is "Clint Eastwood" really an anagram of "Old West Action"?
- Is "Eleven plus two" = "Twelve plus one"?
- Is "Western Union" an anagram of "No Wire Unsent"?
- Does "The Morse Code" have the same letters as "Here come dots"?
- How about "The Great New York Rapid Transit Tunnel" and "Giant work in street, partly underneath"?

You tell us.

## Specs

Specs have been provided, for your convenience.

1. Install dependencies
```
$ bundle Install
```
2. Run specs
```
$ rspec
```

## Hint

Want a hint? Try the "hint" branch.

## Bonus:

- Ask the user for two words and compare
- Ask the user for the base word and the list of possible anagrams.
- Rewrite this in javascript
- Write a method that checks if a phrase is a palindrome.
