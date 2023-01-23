![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Recursion

## Instructions

1. Fork this repo to your own account and download to your `sei/homework` folder.
1. Follow along the steps in this README to progress through the myGA modules.
1. When you are finished, submit your assignment by clicking on the issues tab above on this repo and start a [new issue](https://git.generalassemb.ly/seir-201/recursion/issues/new?assignees=&labels=&template=seir-homework-submission.md&title=YOUR+FULL+NAME).
1. The issue template will ask that you answer exit ticket questions on recursion before submitting your issue, to summarize your learning on this topic.

**Note: This exercise includes a coding component. For tonight, focus on understanding recursion conceptually but do try some of the coding exercises in the myGA CodePen that is provided. We will review and continue the coding part of the assignment together tomorrow morning.**

Unless otherwise noted, homework is due at 10:00 AM ET the next day.

## Overview

We've seen that a function can call other functions to perform an action. When a function becomes too large to read or test easily, we split them into smaller functions that perform parts of the larger whole.

**Recursion is a function that calls itself.** A recursive function achieves a small part of the larger task, then passes the partially completed result to another call of itself. Recursion is a useful alternative to iteration methods like loops. They are especially helpful for looking at all combinations or permutations of a given input.

There are two parts to this lesson:

1. [myGA module: Recursion](https://my.generalassemb.ly/activities/773) -- homework tonight
2. [In-Class Exercise: Writing Recursive Functions](exercises/recursion.js) -- tomorrow's morning exercise.

You can automatically test your progress in the exercises by running `npm install` from your terminal inside this folder to install the testing dependencies, then run `npm test` to see if your functions pass the test cases. 

> **Note**: The myGA module contains a link to an [exercise in CodePen](https://codepen.io/GAmarketing/pen/oVNWjd). **The code in CodePen is the exact same as the code for the in-class exercises.**

## Learning Objectives

By the end of this lesson, you will be able to:

- Define recursion.
- Write the base case and recursive cases of a recursive function.
- Identify functions that use recursion and explain why it’s used.

## Prerequisites

- Big O Notation

## Three steps of recursion

♻️ To understand recursion, you must understand recursion ♻️

We can break a recursive function into three steps:

1. Base case
2. Action
3. Recursive case leading towards the base case

First, establish a base case. Ask when do we know the process can stop? At this point we can return a specific value, instead of calling the function again recursively.

Next, perform the action of the function. If recursive functions simply called themselves forever without doing anything else, they wouldn't be very useful. Regular recursive functions do some kind of computation that helps lead to the final result.

Finally, we call the function recursively inside itself. Make sure we progress towards the base case. If we do not make progress toward the base case we will cause a stack overflow when the stack of unresolved function calls gets too large to handle.

Recursion is found in mathematics and can look really scary. But we can use recursion with ease.

## Recursion Example 

Let’s think about adding the following numbers

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

### Solving it by hand
Average humans, do not add all the numbers all at once.  We add two numbers together, store that number, and then add the next number, until we are left with one number. When we have one number, that is our answer.

So we do:
```
1  + 2   = 3
3  + 3   = 6
6  + 4   = 10
10 + 5   = 15
15 + 6   = 21
21 + 7   = 28
28 + 8   = 36
36 + 9   = 45
45 + 10   = 55
55 + no numbers left means our answer is 55
```

### Solving it recursively
We can express this with a recursive function that follows our above pattern really easily

1. First, since we have a list of numbers (our test case), let’s express them as an array
2. Second, define a function

```js
const numsToSum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const getArraySum = (numsArr) => {

}
```

3. we need a base case

```js
const getArraySum = (numsArr) => {
 if ( numsArr.length === 0 ){
   return sum;
 }
}
```

4. Holding onto our sum value

We have to define our sum variable and we have to be able to access it over and over again, let’s pass it in our function
If it isn’t defined, let’s give it a value of 0, otherwise it will equal the sum of the previous numbers.

```js
const getArraySum = (numsArr, sum) => {
 sum = sum || 0;
 if  (numsArr.length === 0 ){
   return sum;
 }
}
```

5. Define a way (or rules) to decrease our complex problem down to the base case <br>
Each time we add a number we have to remove it from the array, thus decreasing the array length and bring us closer to our base case. We’ll use the `shift()` method so it is taking the number from the start of the array, to match our previous calculations, but one could just as easily use `.pop()`

```js
const getArraySum = (numsArr, sum) => {
  sum = sum || 0;
  if (numsArr.length === 0){
    return sum;
  }
  sum += numsArr.shift();
}
```

6.  Now that we’ve established our base case and a way to get down to our base case, we can now call our function

```js
const getArraySum = (numsArr, sum) => {
  sum = sum || 0;
  if (numsArr.length === 0){
    return sum;
  }
  sum += numsArr.shift();
  return getArraySum(numsArr, sum);
}
```
7. Let’s test it!

```js
console.log(getArraySum(numsToSum)); // => 55
```


## Applications of Recursion

- Iteration
- Permutations
- Traversing Multiple Paths
- Divide and Conquer

Now that you understand the how of recursion, let's talk about when and why to use it. Keep in mind that any recursive function can also be written using iteration, and iteration will usually be more efficient than recursion. Recursion is useful because it allows for more straightforward, elegant code to solve complex problems.

Consider using recursion any time you're exploring multiple possibilities or paths, such as calculating all possible combinations of elements, or checking all paths between two destinations. Recursion provides the simplest solution by continuing through each possibility using a new recursive call.

Recursion also lets us divide a larger problem into smaller subproblems. Merge sort, for example, can use recursion to break down sorting an array into sorting two, smaller arrays. Eventually it will reach the base case of a single element array, and then zip these single-element arrays back together into a single sorted array. While this could be done using iteration, it would become difficult to read, modify, and debug compared to the recursive version.

## Your turn

Sometimes, it is scary to do things that might cause an infinite loop or blow the stack- because it may be difficult to stop and cause your computer to freeze and you might have to restart it.

[repl.it](repl.it) is really nice because if you cause an infinite loop or try to blow the stack it'll stop pretty quickly and give you an error. You are welcome to do this in your code editor, but if you are afraid of creating infinite loops, go on over to `repl.it` or GA's [CodePen for Recursion](https://codepen.io/GAmarketing/pen/oVNWjd) and get coding there.

## Additional Resources

- How recursion comes up in [job interviews](https://hackernoon.com/coding-interview-recursion-f0d60c9dbb60).
- More thoughts on recursion in [job interviews](https://www.byte-by-byte.com/recursion/).
- Sketching out a [recursive function](https://www.youtube.com/watch?v=bGC2fNALbNU).
- Recursion for Coding Interviews: [The Ultimate Guide](https://www.byte-by-byte.com/recursion/).
- Just for fun: The [recursion subreddit](https://www.reddit.com/r/recursion).

### Sources/Contributors

- [Carlos Godoy](https://git.generalassemb.ly/seir-826/recursion)
- [Ryan Fleharty](https://git.generalassemb.ly/ryanfleharty/recursion-exercises/blob/master/lesson.md)
- [Ali Spittel](https://github.com/aspittel/coding-cheat-sheets/blob/master/fundamentals/recursion.md)
