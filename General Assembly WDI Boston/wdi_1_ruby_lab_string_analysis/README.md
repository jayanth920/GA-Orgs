![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ruby Lab String Analysis

The goal of this homework is to add four methods to the `String` class so we can do text analysis on a string. The methods are as follows:

- word_count
- unique_words
- unique_word_count
- word_frequencies

### word_count

Returns the number of words in a string.

### unique_words

Returns an array of unique words present in the string.

### unique_word_count

Returns the number of unique words present in the string.

### word_frequencies

Returns a hash of the unique words and their frequencies present in the string. We haven't used hashes much yet, so this will be tricky

## Assignment

Fork and clone this assignment. When you're finished, make a pull request.

Four empty methods have been created for you in `lib/string_analysis.rb`. These are *instance methods* and allow us to call the methods directly on an instance of a string, just like `'foo'.reverse` we can call `'foo'.word_count`

You should edit the `lib/string_analysis.rb` file to make the tests pass. Run `rspec spec` to ensure that your methods properly return results.
