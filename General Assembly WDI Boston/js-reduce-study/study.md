# Reduce Study

## Processing all array elements with an accumulator

The
[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
method returns a single value from operating on all the values in the array. It
"reduces" many values to one value. The original array does not change.

Take your time and methodically walk-through the "How reduce works" section at
the above link. Then, try running the following snippets (taken from the link
above) in the `node` repl environment:

```js
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue
})

[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
}, 10)
```

Play around with the examples above, then walk through the steps in `bin/reduce.js`
to use see what else reduce can do and answer the questions below.

### Question 1

```js
arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
```

Based on the above function signature, define each parameter below:

```
`callback`: <your-answer-here>
    `accumulator`: <your-answer-here>
    `currentValue`: <your-answer-here>
    `index`: <your-answer-here>
    `array`: <your-answer-here>
`initialValue`: <your-answer-here>
```

### Question 2

Take a look at the following snippet, and consider the parameter & return
values for each loop.

```js
[0, 1, 2, 3, 4].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})
```

The first loop breakdown has been written out for you as an example. Fill in
the rest below, including the value of the parameters and return statement for
each iteration.

```
Loop 1: `accumulator` is 0, `currentValue` is 1, return `10`
<your-answer-here>
```

### Question 3

Take a look at the following snippet, and consider the parameter & return
values for each loop.

```js
[20, 1, 13, 9, 44].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 10)
```

Just like in question 2, write out the values of the parameters and return
statement for each iteration below.

```
<your-answer-here>
```

## Additional Resources

- [A Guide To The Reduce Method In Javascript​](https://medium.freecodecamp.org/reduce-f47a7da511a9)
