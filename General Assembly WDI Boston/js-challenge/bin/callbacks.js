/*

1.  Write a **maybe** function that, given a predicate (a function at returns a boolean value)
    and any other function, only calls the latter if the former returns true: `maybe(x => x > 100, myFn)`.
    If the predicate returns true, the value of x should be passed to myFn.
    If it the predicate returns false, x should be returned unchanged.

2.  Write a **compose** function that returns the result of all the functions passed into it,
    passing the returned value of a function to the function on its left:
    `const foo = compose(x => x*2, x => x + 1, x => x - 5); foo(100)`. Here, result should be 192.
    - Bonus: create three versions of **compose**: one that uses an iterative approach, one that uses `Array.prototype.reduce`, and one than uses recursion.
    - Note: assume that each function given to compose only accepts one parameter.

3.  Write a **reverse** function that switches the order of the input function’s parameters:
    `reverse((a, b) => a / b)` should return `(b, a) => a / b;`

4.  Use your **reverse** function to create a version of **compose** that runs its input functions from left to right:
    `const foo = leftCompose(x => x*2, x => x + 1, x => x - 5); foo(100);` Here, the result should be 196.

5.  Write a **curry** function that returns a curried version of the input function:
    `const foo = curry((a, b) => a + b); foo(5)(4)`. Here, the result should be 9.

6.  Use **curry** and **compose** to chain together these functions:
    `const add = (a, b) => a + b; const dec = x => x = x - 1`.
    Assume that, in the case of add, you always want the first parameter to be 5.
    You need to deal with the fact that compose assumes each function only has one parameter.
    Add has two parameters.

7.  Write a **branch** function that takes a predicate function and two other functions or values.
    If the predicate is true, the result of the first function (or the first value) will be returned;
    if the predicate is false, the result of the second function (or the second value) will be returned.

*/

const foo = branch(x = x > 0.5, ‘big’, ‘little’);
foo(0.1); // little

const foo = branch(x = x > 0.5, x => ‘x is big’, ‘x is little’);
foo(0.1); // x is little

const foo = branch(x = x > 0.5, x => ‘x is big’, ‘little’);
foo(0.1); // x is little

/*
8.  Write a **not** function that negates another function:
    `const biggerThan100 = not(x => x <= 100); biggerThan100(200); // true`

9.  Write your own versions of **map**, **filter**, and **reduce** with signatures like this:
    `map(mapFunction, array);` Using the `Array.prototype` functions internally is cheating.

10.  Bonus question: why is `map(myFunction, array)` likely to be more useful than `map(array, mapFunction)`?
    (Hint: think about currying and using these functions with compose.)

11.  Use the functions you’ve written make the changes to the following code, indicated in the comments.
    Make sure you get the correct results, indicated in the last comment.

*/

const people = ["Mike K Smith", "Amy Jones", "Laura Madison Johnson"];

const shortenNames = (length, peoplw) =>
	// replace with your own map function
	people.map(name => {
  	const split = name.split(' ');
    // replace with your own map function
  	return split.map(part => part.substring(0, length)).join(' ')
});

const removeMiddleNames = people => people.map(name => {
	const split = name.split(' ');
  // replace with your own branch function
  if (split.length > 2) {
  	return `${split[0]} ${split[split.length - 1]}`
  }
  return name;
})

const reverseNames = people => people
	.map(name => name.split(' ').reverse().join(', '));

const sort = array => [].sort.call(array);

// replace with your own compose function.
// you'll have to somehow deal with the fact
// that shortenNames takes two parameters
const newNames = reverseNames(sort(removeMiddleNames(shortenNames(4, people))));

console.log(newNames); //["Jone, Amy", "John, Laur", "Smit, Mike"]
```
