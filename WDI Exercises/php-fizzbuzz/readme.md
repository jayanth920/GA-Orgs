# FizzBuzz in PHP

## 1. Try writing FizzBuzz in PHP

Remember the rules:

> Write a script that, for the numbers 1 to 100, prints "Fizz" if the number is divisible by 3, "Buzz" if by 5, "FizzBuzz" if by both, and the number if none of the above.

Hint: It's literally exactly the same as in Javascript, except variable names have to begin with `$` and you don't use `var`, and you write `echo` instead of `console.log`.

## 2. Make the output go into a file

Try copying, pasting, and running this line in your script:

```php
file_put_contents("hello.txt", "Hello, world!", FILE_APPEND);
```

- Run it multiple times. What happens?
- Run it without `FILE_APPEND`. What's different?
- Try changing `hello.txt` to another string. What happens?

Now, change this line so that it writes the output of your FizzBuzz program -- "1 2 Fizz 4 Buzz..." and so forth -- to a file. The file can be named anything.

## 3. Instead of always using 100, GET the number

That is: if the user goes to a URL like `localhost/script.php?mynumber=29`, FizzBuzz will run for the numbers 1 - 29.

Hint: GET parameters come from the URL. If your URL is `localhost/foo.php?myname=john`, it creates a GET parameter called `myname` with the value of `john`.

Hint 2: All the GET parameters are in an array called `$_GET`. You retrieve values from an array just like you would in Javascript.
