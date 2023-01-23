
# Callbacks

---
Title: Callbacks<br>
Type: Lab <br>
Duration: 45 mins <br>
Creator: Matt Huntington<br>
Adapted by: Thom Page<br>

---

## Morning Lab

Follow the following steps:

1. Create a function that takes a parameter and logs it
1. Create a second function that logs 'hi'
1. Invoke the first function, passing in the second function as a parameter
1. You should see a function reference being logged
1. Alter the first function so that it invokes its parameter
1. If you did these steps correctly, you should get a log of 'hi'

See if you can guess what this will log:

```javascript
const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');
```

Run the code and see what happens.

See if you can guess what this will log:

```javascript
const foo = (param, param2) => {
    param(param2, 'hello');
}

const bar = (param, param2) => {
    console.log(param2);
}

foo(bar, 'hi');
```

Run the code and see what happens.

Follow the following steps:

 1.  Create a function called `wordReverse` that reverses a string.
 2.  Create a function called `toUpperCase` that capitalizes every letter in a string.
 3.  Write a function, called `repMaster`, that accepts two arguments, input and a function. Input should be able to be used with the function.  The function used as an argument must return a string.  `repMaster` should take the result of the string, passed as an argument to the argument function, and return this result with `' proves that I am the rep MASTER!'` concatenated to it.  

Expected Output:  

 ```javascript
      repMaster("Never give your heart to a blockhead", wordReverse);
 ```
>    "blockhead a to heart your give never proves that I am the rep MASTER!"

  ```javascript
      repMaster("I finished this practice", toUpperCase);
  ```

>  "I FINISHED THIS PRACTICE proves that I am the rep MASTER!"

## Hungry for More

 Javascript is a great language but it can always be improved!

1. We need a `.count` method and we need you to write it! The method should take an array and count how many elements are the same in that array, returning that number. *hint: remember to make an array that has duplicate elements!!*
1. Write a `.unique` method that creates a new array out of all the unique values in an array.
