# Group 6

## .some() method code snippet

```javascript
const mixedArray = [1, 2, 3, 4, 5];
const allEvenArray = [2, 4, 6, 8, 10];
const allOddArray = [1, 3, 5, 7, 9];
// checks whether an element is even
const even = element => element % 2 === 0;
let retVal = mixedArray.some(even);
console.log(`some() returns ${retVal} for mixedArray `);
// expected output: true
retVal = allEvenArray.some(even);
console.log(`some() returns ${retVal} for allEvenArray `);
// expected output: true
retVal = allOddArray.some(even);
console.warn(`some() returns ${retVal} for allOddArray `);
// expected output: false
```
