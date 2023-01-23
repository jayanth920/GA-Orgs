def has_vowel? word
  # This fails because ruby will evaluate "aeiou" > 0 first, then pass the
  # result to count. count is expecting a string, not a truthy value
  # word.count "aeiou" > 0

  # This fails for the same reason. Ruby doesn't think ("aeiou") is a parameter to count because of the space between count and ("aeiou")
  # word.count ("aeiou") > 0

  # This works!
  word.count("aeiou") > 0

  # This also works! Ruby will evaluate what's inside () before performing the
  # > operation
  (word.count "aeiou") > 0
end

p has_vowel? "hello, world"
