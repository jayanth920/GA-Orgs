## Group 1 - .map()

— What is the array method? .map()

— How is it used? To apply a function to each element of an array

— What does it return? A new array with function-applied elements.

— Give an example of how to use it:

```javascript
const numbers = [
	15,
	18,
	3921,
	327,
	88,
	1235,
	1,
	55855,
	34,
	5,
	9,
	9019,
	156,
	874,
	76,
	444,
	12346
];

//Maps over the numbers array and squares every `num` in the array
const squared = numbers.map(num => {
	return num ** 2;
});

//Even more concise notation, but does everything seen in the function above!
const squared = numbers.map(num => num ** 2);

//Function declaration of the above, that also does the exact same thing
const squared = numbers.map(function(num) {
	return num ** 2;
});
```

— What are some key things to remember about this method?

.map applies a function to each element of the array, returning a new version of it which can be stored in another variable and referenced later.
