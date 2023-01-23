# Group 5 `.every()`

-   The every() method tests whether all elements in the array pass the test implemented by the provided function (the callback function)

-   Only returns TRUE if EVERY value passes the test ... otherwise returns false

-   Use this method to see if every value in your array passes a test (as determined by the callback function), and to return a boolean `true` or `false` as a result

Code example:

```javascript
//an array of ages
const ages = [21, 30, 39, 29, 21, 46];

// a helper function that will be used as the callback function. This only returns ages greater than or equal to 21.
const isOfAge = age => age >= 21;

const acceptAll = ages.every(isOfAge);
console.log(acceptAll);
ages.push(19);
// expected output: true
// .every() doesn't alter the original array
// if original array is changed after .every() is called,
// appended or deleted, or altered elements will not be affected.
// if .every() is used on an empty array, will return true
```

Read more about .every() at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
