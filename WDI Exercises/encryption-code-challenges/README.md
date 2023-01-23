# Encryption Code Challenges

----

## Maskify

For security purposes, you rarely want to show somebody's full credit card or social security number online. Instead, you usually display only the last four digits and hide the rest (e.g., `************1234`).

Define a method that takes in a string. It should return a string which leaves the final four characters untouched, while the rest are converted to asterisks.

```rb
maskify("12345678")
# => "****5678"

maskify("18240981253")
# => "*******1253"

maskify("my dog's name is fido")
# => "*****************fido"
```

If the method is fed a string shorter than 4 characters, return the string as is.

```rb
maskify("123")
# => "123"
```

----

## Caesar Cipher II

Define a method that, given a string (`str`), returns a string in which each letter is incremented by some number (`num`). So, if `num = 2`, "a" turns into "c" and "x" turns into "z").

```rb
caesar("abcd", 5)
# => "fghi"

caesar("hello", 2)
# => "jgnnq"
```

### Bonus

The method should ignore any character that is not a letter.

```rb
caesar("hello, world.", 2)
# => "jgnnq, yqtnf."
```

----

## Atbash Cipher

Define a method that, given a string (`str`), returns a string in which each character is converted to its inverse. For example, "c" (the third letter in the alphabet) should be converted to "x" (third-to-last letter). Or "y" (second-to-last) should be converted to "b" (second).

```rb
atbash("abcd")
# => "zyxw"

atbash("hello")
# => "svool"
```

It might help to include the following somewhere in your code...

```rb
alphabet = "abcdefghijklmnopqrstuvwxyz".to_a
```

> You can learn more about the Atbash Cipher [here](https://en.wikipedia.org/wiki/Atbash).
