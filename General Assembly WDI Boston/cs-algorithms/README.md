[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science: Algorithms

We've already discussed the basics of computer science and why computer science
as a field is important. Next we'll discuss a few algorithms that will give us
a foundation to discuss more advanced computer science topics, and also help
can us make better choices when writing code.

## Objectives

By the end of this, developers should be able to:

1. Define "algorithm"
1. Write basic and divide & conquer sort algorithms
1. Implement a binary search
1. Predict an algorithm's Big O time-complexity
1. Improve an algorithm's Big O time-complexity

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

## Algorithms

> algorithm (n.) - a process or set of rules to be followed to attain a goal

Algorithm is a fancy word for recipe. When we have a problem, we take a series
of steps to solve that problem. Say I want a peanut butter and jelly sandwich,
and Robin has agreed to make it for me. The problem is, he doesn't know how.
Assuming an otherwise-adult set of knowledge, how might we tell Robin to make me
a sandwich?

> 1. Go to the 12th floor
> 1. Go to the kitchen
> 1. Find the bread, toaster, utensils, peanut butter, and jelly
> 1. Toast the bread
> 1. Using a knife or spoon, spread one slice of toast with peanut butter
> 1. Spread the other slice of toast with jelly
> 1. Place the two pieces of bread together
> 1. Return to me with the sandwich

If Robin needed to make sandwiches for all of us, how would he do that? What's
the "easy" or naïve way to obtain many sandwiches? What is a more efficient way?

### Lab: Outline an Algorithm

Take a few minutes to describe your morning algorithm... uh, routine. Share it
with a neighbor. How many steps are there? How do you save time if you're in a
rush?

## Big O Notation

In software development, Big O focuses on the efficiency of an algorithm as its input increases. It’s used to describe time complexity or space complexity.

Time complexity refers to the amount of time an algorithm takes to run. Space complexity refers to the amount of memory or RAM an algorithm needs to run. A common optimization technique is to trade increased space complexity
for reduced time complexity (and less commonly vice versa).

<p>
  <details>
    <summary><strong>Question:</strong> Why do we focus on time complexity?</summary>
      We focus on time complexity because modern computers have gigabytes of RAM available. Now that memory is cheaper and more readily available, it's less important to optimize for space complexity.
  </details>
</p>

Big O notation is used to measure an algorithm's best case, average case, or
worst case complexity. As developers we focus on an algorithm's **worst case**
complexity. Which is the longest amount of time a function could take to
complete.

<details>
<summary><strong>Question:</strong> Why might it be important to focus on an
algorithm's worst case time complexity?</summary>
    <p>
We focus on an algorithm's worst case time complexity so our applications are
predictable. If calling a function usually takes 1 second, but occasionally
takes hours, then we wouldn't want to use that function. Since a multiple hour
delay would effectively freeze our application and lead to losing our
application's users.
    </p>
</details>

### Measuring Time Complexity

Time complexity is not actually measured in increments of time (e.g., seconds,
minutes). Instead, we measure time based on the number of basic steps an
algorithm needs to execute, relative to the size of the data set it’s working
on.

While those steps may look different depending on the context or programming
language, something like indexing into an array or adding two numbers together
each count as one basic step in Big O.

Likewise, we’re not trying to calculate the exact number of steps a given
algorithm takes. Big O isn’t about the nitty-gritty details. Instead, it’s a
big-picture view of algorithms. It categorizes, at a high level, the differences
between them.

An incomplete list of time complexities is provided below ordered by efficiency.

#### Time Complexities

Notation  |  Name
--|--
O(1)  |  Constant Time
O(log(n))  |  Logarithmic Time
O(n)  |  Linear Time
O(n log(n))  |  Quasilinear Time
O(n<sup>2</sup>)  |  Quadratic Time
O(n<sup>3</sup>)  |  Cubic Time
O(2<sup>n</sup>)  |  Exponential Time
O(n!)  | Factorial Time

Lets compare different time complexities with each other using [this visualization](https://cooervo.github.io/Algorithms-DataStructures-BigONotation/index.html).

### O(1) Constant Time

Constant complexity algorithms fall into the “highly efficient” category. They
have a constant space (memory usage) and time (number of steps required)
complexity, no matter the size of the input.

To understand this type of algorithm, imagine you’re throwing a bag of apples in
the trash. This task will always take the same amount of time, no matter if you
have 2 or 20 apples in that bag.

In Big O notation, we represent constant complexity algorithms as O(1). `O(1)`
is pronounced "Big O of 1", "O of 1", or simply "constant".

`console.log` is an example of a constant time operation. Since it will always
take the same amount of time to complete.

```js
console.log('hello world')
```

Similarly, accessing a property on an object is constant time.

```js
let person = {
    name: 'Mike'
}

console.log(person.name)
```

### O(n) Linear Time

Linear complexity is represented as O(n) in Big O notation. For this type of
algorithm, as the input size increases, the processing time increases linearly
(one extra input = one more step for the code to perform).

The O(n) notation represents just that — the code will run once for every input value.

Remember our apples analogy? This time, instead of throwing out your apples, you
decide to peel them to make apple sauce. This is a linear task. The amount of
time it’ll take you to peel all of the apples is directly proportional to the
number of apples you have in the bag.

Iterating over an array is O(n). **Note:** iterating over an array using an
array iteration method, such as `forEach` or `map`, is still O(n)! Iteration
methods must iterate through each element in the array in their worst case.

```js
const forLoopOverArray = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

const forEachOverArray = array => {
  array.forEach(element => {
    console.log(element)
  })
}
```

Iterating over a range of numbers, where the size of the range depends on a
number, is also O(n).

```js
const forLoopUpToNum = num => {
  for (let i = 0; i < num; i++) {
    console.log(i)
  }
}
```

### Dropping Coefficients

Recall that Big O is a relatively high-level way to categorize algorithms. We’re
not getting into the nitty-gritty of precisely how much time it takes for an
algorithm to run, but instead, looking at its overall efficiency as an input
size increases.

For this reason, it’s conventional in Big O to drop coefficients, constants, and
other less significant terms when describing an algorithm’s complexity. We’re
less worried about the exact runtime of an algorithm and more about the broad
category into which it falls (linear complexity, quadratic complexity, etc.).

Take a look at these functions:

```js
const helloWorld = () => {
    // O(1)
    console.log('hello world')
    console.log('hello world')
}

const iter = arr => {
    // O(n)
    arr.forEach(item => console.log(item))
    arr.forEach(item => console.log(item))
    console.log('hello world')
}
```

At first glance, you might think they have complexities of O(2) and O(2n + 1),
respectively. However, in order to keep things simple, we can drop the
coefficients and non-dominant terms. The time complexities are still constant
and linear — and that’s all that matters for Big O!

### O(n<sup>2</sup>) Quadratic Time: An Inefficient Algorithm

For an input with the size `n`, quadratically complex algorithms execute
O(n<sup>2</sup>) times, giving us the Big O notation for this class:
O(n<sup>2</sup>).

Put another way, these algorithms may have a nested loop, like in this example:

```js
const nestedLoopOverArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}
```

To imagine counting the number of steps, consider that each iteration through
the outer loop counts as one basic step per input element. Next, in the inner
loop, there is a basic step for each input element, but the inner loop runs from
beginning to end for each iteration of the outer loop. We can multiply the
number of steps taken in the inner loop by the number of iterations in the outer
loop — `n * n` — or just O(n<sup>2</sup>), the conventional notation for this
function.

...for array `[1, 3]`, this function will print:

```js
[1, 1]
[1, 3]
[3, 1]
[3, 3]
```

For a two-item array, the code executes four times. This scales pretty
fast — for an array with 100 items, this code will console.log() 10,000 times!

Quadratically complex equations are very inefficient and
*should be avoided whenever possible.*

#### O(n<sup>3</sup>) Cubic Time

For an input with the size `n`, algorithms with cubic time complexity execute
n<sup>3</sup> times, giving us the Big O notation for this class:
O(n<sup>3</sup>).

Put another way, cubic time algorithms may have two nested loops, like in this example:

```js
const twoNestedLoopsOverArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          for (let k = 0; k < arr.length; k++) {
              console.log(arr[i], arr[j], arr[k])
          }
        }
    }
}
```

For a two-item array, the code executes 8 times. This scales even faster than
quadratic complexity — for an array with 100 items, this code will console.log()
1,000,000 times!

### O(log(n)) Logarithmic Time

Logarithmic complexity is represented as O(log(n)).

This type of algorithm cuts the problem in half each time. This makes them fast
and efficient! Lets look at a popular logarithmic time algorithm together called
a binary search.

#### Searching

Here's a party trick that is sure to make you popular. Bet someone you can state
with certainty a number they've chosen, between one and one hundred, after seven
questions. The questions will all be "Is `<number>` less than the number you've
chosen?"  Before I show you how, let's look at a simplistic solution that takes,
at worst, 100 guesses:

##### Linear Search

```md
1. Guess "1". If no,
2. Guess "2". If no,
3. Guess "3". If no,
...
100.  Guess "100". You win!
```

**Question:** What is the complexity of this algorithm?

##### Binary Search

The algorithm that gets you there in the minimum number of guesses is called a
"binary search". It goes like this:

1. Set the initial start & stop index values
1. Calculate the mid-point between the start and stop index value
1. If the mid-point is the target element, return the mid-point and you're done.
1. Otherwise, if the midpoint is less than the target element, then the target
element is in the upper half-range.
1. Otherwise, the target element is in the lower half-range.
1. Repeat steps 2-5 while the range has elements
1. If the element wasn't found in the range, return -1

It's relatively easy to see in a tree diagram. Can you see the binary structure
of the tree?

A binary search works with any direct access weakly ordered set (an ordered
array with elements that may compare equal). See
[here](https://en.wikipedia.org/wiki/Binary_search_algorithm#Procedure) for a
more rigorous algorithm.

**Question:** Explain why this algorithm is an example of divide-and-conquer in
your own words.

##### Code Along: Binary Search

Now that we've discussed binary search. Let's implement it together in
[`lib/binarySearch.js`](lib/binarySearch.js)

### O(n log(n)) Quasilinear Time

A quasilinear complexity, represented as O(n log(n)), is a combination of linear
O(n) and logarithmic O(log(n)) time complexities. Quasilinear algorithms are
extremely efficient. In fact quasilinear means "seemingly linear", since these
algorithms are so close to O(n) complexity.

An O(n log(n)) algorithm must perform a divide and conquer operation O(log(n))
for every element O(n). We'll see two common O(n log(n)) algorithms, merge sort
and quick sort, shortly which efficiently sort elements.

### O(n!) Factorial Time

Factorial complexity, represented as O(n!), should be avoided at all costs.
Here’s why.

One example of an O(n!) algorithm is the “bogosort” — aka, the “slow sort.” Why
so slow? An array is randomly ordered over and over again until it is correctly
sorted. For an array with a length of 10, this sort may have to run up to
3,628,800 times!

Sometimes this complexity category can’t be avoided, but it should raise some
red flags.

### Predicting Complexity

How can you predict the complexity of a given algorithm? We can look for certain
features to help us characterize it.

- Loops take linear time to complete (`O(n)`).
- Nested loops looping over the same elements take quadratic time to complete
(O(n<sup>2</sup>)), or worse, cubic time (O(n<sup>3</sup>))
- For branching statements (`if/else`), take the complexity of the worse
  branch.
- Generating all the possible permutations of a set, e.g. `abc`, `acb`, `cba`,
  etc, takes factorial time (`O(n!)`)

## Sorting

A well-known problem in computer science is sorting an array. There are many
strategies (read: algorithms) for accomplishing this. Here are two incomplete
lists:

### The Basic Sorts

- Bubble sort
- Insertion sort
- Selection sort

### The Divide & Conquer Sorts

- Quick sort
- Merge sort

This illustrates something important about algorithms: you nearly always have a
choice. There is no "one way" to solve a problem, no "right" way. Different
algorithms are better in different contexts, or with different constraints. It's
up to you to consider the options and pick the one that best meets your needs.

### Lab: Sorting Cards

I have a deck of unsorted playing cards. Describe in English an algorithm for
sorting them. Can you think of any algorithms that are very inefficient but do
sort the deck properly?

### Basic Sorts

#### Bubble Sort

##### Demo: Visualize Bubble Sort

Examine how bubble sort works using [this visualization.](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)

##### Annotate Along: Bubble Sort

Annotate bubble sort together in [`lib/bubbleSort.js`](lib/bubbleSort.js)

##### Big O

<details><summary><strong>Average</strong></summary>
<p>
O(n^2)
</p>
</details>

<details><summary><strong>Worst</strong></summary>
<p>
O(n^2)
</p>
</details>

<details><summary><strong>Best</strong></summary>
<p>
O(n)
</p>
</details>

#### Insertion Sort

##### Lab: Visualize Insertion Sort

Visualize [insertion sort](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/)
with six volunteers holding cards.

##### Code Along: Insertion Sort

Now that we've visualized insertion sort, let's write it together in
[`lib/insertionSort.js`](lib/insertionSort.js)

##### Big O

<details><summary><strong>Average</strong></summary>
<p>
O(n^2)
</p>
</details>

<details><summary><strong>Worst</strong></summary>
<p>
O(n^2)
</p>
</details>

<details><summary><strong>Best</strong></summary>
<p>
O(n)
</p>
</details>

### Divide & Conquer Sorts

Merge sort and quick sort, use a "divide & conquer" approach. Divide and conquer
methods are commonly very efficient, so they are widely used in programming.

#### Quick Sort

##### Lab: Research Quick Sort

Take 10 minutes to work with a partner to read the
[rosettacode](http://rosettacode.org/wiki/Sorting_algorithms/Quicksort)
pseudocode implementations of quick sort. Then read through the 3-way Quick
Sort algorithm below. One of you will be asked to explain quick sort in
your own words.

###### 3-Way Quick Sort Algorithm

1. **Base Case:** If the array has less than or equal to `1` element, then it is
sorted.
1. Choose a pivot. A pivot can be any element in the array.
1. **Divide:** Divide the array into three arrays. An array with the values less
than the pivot, an array with the values equal to the pivot, and an array with
the values greater than the pivot.
1. **Recursive Case:** Recursively call quick sort on the less than and greater
than arrays.
1. **Conquer:** Combine the **sorted** less than, equal, and greater than arrays.

**Note:** A 3-way quick sort puts any element that is a duplicate of the pivot
into an `equals` array. This is an efficient optimization when there are
duplicate elements in the array. If we didn't have an equals array, the
algorithm would repeat for each duplicate element.

##### Code Along: Implement Quick Sort

Now that we've discussed quick sort. Let's implement it together in
[`lib/quickSort.js`](lib/quickSort.js)

##### Big O

<details><summary><strong>Average</strong></summary>
<p>
O(n log(n))
</p>
</details>

<details><summary><strong>Worst</strong></summary>
<p>
O(n log(n))
</p>
</details>

<details><summary><strong>Best</strong></summary>
<p>
O(n log(n))
</p>
</details>

#### Merge Sort

##### Demo: Merge Sort

Let's discuss how [merge sort](https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/Mergesort.html)
works.

###### Merge Sort Algorithm

1. **Base Case:** If the array has less than or equal to `1` element, then it is
sorted.
1. **Divide:** Evenly divide the array into two arrays, an array of elements on
the left side and the right side.
1. **Recursive Case:** Recursively call merge sort on the left side and right
side arrays.
1. **Conquer:** Merge the **sorted** left side and right side arrays together.

**Note:** Merging the sorted left side and right side of the arrays, does not
mean concatenating them. Merging is the process of combining two sorted arrays
and producing a new *sorted* array. To learn more, see the
[merge(left,right) pseudocode](https://rosettacode.org/wiki/Sorting_algorithms/Merge_sort).

##### Lab: Merge Sort

Now it's your turn. Implement the `mergeSort` method in
[`lib/mergeSort.js`](lib/mergeSort.js). A helper method for merging two sorted
arrays has been provided.

##### Big O

<details><summary><strong>Average</strong></summary>
<p>
O(n log(n))
</p>
</details>

<details><summary><strong>Worst</strong></summary>
<p>
O(n log(n))
</p>
</details>

<details><summary><strong>Best</strong></summary>
<p>
O(n log(n))
</p>
</details>

## How To Speed Up Algorithms

When you're interviewing the first solution you come up might not have the best
Big O time complexity. The following tips can help speed up your algorithm
immensely. Remember these three tips for speeding up algorithms:

1. Try Using Math
1. Try Using Divide & Conquer
1. Try Using Memoization

### Try Using Math

Try using a mathematical formula instead of looping through your data.

Let's look at an example. If we wanted to calculate the distance between two
elements a naive approach might be to loop through each element from the `start`
to the `stop`. This approach would be O(n), but we could use the distance
formula to conquer this problem in O(1). See `lib/math.js` for an example of
both approaches.

### Try Using Divide & Conquer

Another way to speed up your algorithm is to use a divide & conquer approach.
Binary search, quicksort, and mergesort all use divide & conquer to efficiently
tackle problems and so can you.

For another example, if we wanted to find out if there were duplicate elements
inside a sorted array, a naive approach might be something like:

1. For each element in the array
1. **Loop through** every element after it, and compare it with the element from
the outer loop.
1. Return true if the elements are the same, otherwise continue searching for a
duplicate.
1. Return false if no duplicate elements were found in the array.

That's pretty slow! O(n^2) in fact. We could find them much faster. Since the
array is sorted, we could use a binary search to find duplicates in O (n * log n).

1. For each element in the array
1. Use **a binary search** on every element after it, and compare it with the
element from the outer loop.
1. Return true if we found a duplicate, otherwise continue searching for a duplicate.
1. Return false if no duplicate elements were found in the array.

The code for both approaches can be found in `lib/divide-and-conquer.js`.

### Try Using Memoization

Memoization is the process of using extra memory, often in the form of an
object, array, or another data structure, to speed up your program. Let's look
at how we could speed up looking for duplicates even further using memoization!

Right now we're able to find duplicates in O(n * log(n)), but if we keep track
of each element we see in a `knownElements` object, we can actually find
duplicated elements in O(n) time. Let's look at our new algorithm.

1. For each element in the array
1. If the element has already been added to our `knownElements` object
1. Return true since we found a duplicate,
1. Otherwise, add the current element to our `knownElements` object and continue
searching for a duplicate.
1. Return false if no duplicate elements were found in the array.

See `lib/memoization.js` for an example of this approach.

## Additional Resources

- [Big-O Algorithm Complexity Cheat Sheet](http://bigocheatsheet.com/)
- [Sorting Algorithm Animations](http://www.sorting-algorithms.com/)
- [A Beginner’s Guide to Big O Notation « Rob Bell](http://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
- [Fibonacci sequence - Rosetta Code](http://rosettacode.org/wiki/Fibonacci_sequence#Recursive_51)
- [Bubble-sort with Hungarian ("Csángó") folk dance - YouTube](https://www.youtube.com/watch?v=lyZQPjUT5B4)
- [Quick-sort with Hungarian (Küküllőmenti legényes) folk dance - YouTube](https://www.youtube.com/watch?v=ywWBy6J5gz8)
- [CS50's Sort lesson](https://youtu.be/IEOO5UToo6A?list=PLhQjrBD2T383Xfn0zECHrOTpfOSlptPAB&t=1109)
- [Big O Notation in JS](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)
- [Algorithms in JS](https://github.com/mgechev/javascript-algorithms)
- [More Algorithms in JS](https://github.com/trekhleb/javascript-algorithms)
- [The Definitive Guide To Time Complexity For Ruby Developers](https://www.rubyguides.com/2018/03/time-complexity-for-ruby-developers/)
- [The Sound of Sorting - "Audibilization" and Visualization of Sorting Algorithms](http://panthema.net/2013/sound-of-sorting/#video)
- [Visualization of Common Time Complexities](https://i.stack.imgur.com/8nXvk.jpg)
- [Ruby Binary Search Implementation](https://gist.github.com/danman01/fcb74a041864ac2733e59dd93c7e6a62)
- [Algorithms Explained like Ikea Instruction Manuals](https://idea-instructions.com/)
- [Sorting Algorithms Visualization](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
- [When to use each Sorting Algorithm](https://stackoverflow.com/questions/1933759/when-is-each-sorting-algorithm-used)
- [Selection Sort Visualized](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
