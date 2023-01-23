# Algorithmic Complexity + Big O Notation

## Learning Objectives
* Identify what makes a good algorithm
* Use Big-O Analysis to Evaluate Algorithms

# Concepts in Computer Science: Algorithms

## Learning Objectives

By the end of this, developers should be able to...

-   Define "algorithm"
-   Identify what Big-O time-complexity measures
-   Give an example of a divide-and-conquer algorithm
-   Predict the time-complexity of a given algorithm

## Computer Science (10 minutes, 0:10)

> "Computer science is a discipline that involves the understanding and design of computers and computational processes. In its most general form it is concerned with the understanding of information transfer and transformation. Particular interest is placed on making processes efficient and endowing them with some form of intelligence. The discipline ranges from theoretical studies of algorithms to practical problems of implementation in terms of computational hardware and software."
>
> ([Source](https://www.cs.mtu.edu/~john/whatiscs.html))

Computer Science fields include but are not limited to...
- Algorithms
- Data structures
- Mathematical logic
- Networking
- Computer Architecture
- Theory (Coding, Game, Graph)
- Artificial intelligence

> [This Wikipedia article](https://en.wikipedia.org/wiki/Outline_of_computer_science#Subfields) has a nice summary of CS subfields.

Many think of computer science as a necessary prerequisite to do anything programming-related with a computer and *really know what you are doing*, or that knowing a certain amount of computer science is some kind of litmus test for a *true programmer*. This attitude perhaps unnecessarily mystifies an already difficult subject and field of study and, at worst, makes the learning curve seem so steep that it is like a learning barrier.

What do you already know about computer science?

Decades ago, it was absolutely necessary to have an understanding of computer science to do anything with a computer. In the beginning of consumer computing, home computers were essentially electronics projects for enthusiasts and hardcore hobbyists. The types of things you could do with a computer were very limited, and of interest to people with specific interests. Computers have come a long way since then, and are equipped with operating systems that attempt to make it as easy as possible for anyone to use a computer.

Something similar is true for programming, namely that not knowing any computer science is no longer a barrier to entry.

### How Can We Use Computer Science?

**Computer science provides methods and concepts for evaluating what we are doing as programmers.** At the very least, understanding some computer science can simply deepen our appreciation for our discipline and our craft. Not everyone who programs all of sudden thinks inherently, or has to think, like the stereotype of an engineer might think.

What does computer science have to do with modern web development? Not much, on the surface. As application developers, we can do our job well by following best practices, guided by our experience. It probably will not be often that you are interested in the time-complexity of a method you write.

Complexity and data structures are something **engineers** worry about, not developers, right?

Well, no. While it is true that we don't usually care much about optimization,
there are a few reasons why developers should care a bit about classic topics in
introductory computer science (CS).

1. Classic problems allow us to practice our problem solving skills; in fact, most of our lesson today can be completed without coding.
2.  Being familiar with the tradeoffs inherent in choosing an algorithm or a data structure have direct parallels in choices you make writing your application code.
3. Some of our colleagues will have CS degrees, and being able to understand the jargon and figures of speech they use helps us communicate with them. Perhaps most importantly, these colleagues will probably have some say in hiring you, since they're your prospective team. Nearly every technical interview touches on these topics.

## Algorithms (5 minutes, 0:15)

> algorithm (n.) - a process or set of rules to be followed to attain a goal

Algorithm is a fancy word for recipe. When we have a problem, we take a **series
of steps to solve that problem**. Say I want a peanut butter and jelly sandwich,
and Andy has agreed to make it for me. The problem is, he doesn't know how.
Assuming an otherwise-adult set of knowledge, how might we tell Andy to make me
a sandwich?

> 1.  Go to the kitchen
> 1.  Find the bread, toaster, utensils, peanut butter, and jelly
> 1.  Toast the bread
> 1.  Using a knife or spoon, spread one slice of toast with peanut butter
> 1.  Spread the other slice of toast with jelly
> 1.  Place the two pieces of bread together
> 1.  Return to me with the sandwich (most important step)

If Andy needed to make sandwiches for all of us, how would he do that? What's
the "easy" way to obtain many sandwiches? What is a more efficient way?

### Think-Pair-Share: Outline an Algorithm (5 minutes, 0:20)

Take 3 minutes to write down your day-initialization algorithm (i.e., your morning routine). Share it with a neighbor. How many steps are there? How do you or could you save time if you're in a rush?


### Big-O (10 min / 9:10)

Last week we learned what an algorithm is and why they are so important to the field of computer science.  This week we'll learn about how programmers measure the efficiency of algorithms and which types of algorithms are the most efficient in terms of *time* and *memory* consumption.  

Who can remind me what the definition of an algorithm is?

To restate from last class, while we are still learning the fundamentals and are working with relatively *small inputs*, it is more important to have clean code, good interfaces, and bug-less applications. However, as our inputs grow in size, having efficient algorithms becomes extremely important!

Our main concerns in terms of efficiency are *time* and *memory*. If our sites load slowly, users may leave. If our code takes up too much memory, it will be more expensive to host our sites.  

## Run Time and Big-O Analysis (30 min / 9:40)

We can look at a program and say -- "Oh that took two seconds to run". But that two seconds is dependent on a lot of factors. That two seconds is for a very specific input - your computer on your network with a certain version of your programming language. Instead, we should generalize the algorithm's complexity.

We do so using a notation that mathematicians and computer scientists use, called Big-O notation. This notation standardizes how we discuss the efficiency of algorithms. ***Big-O really tells us how quickly the runtime grows as the input becomes arbitrarily large***.  Most of the time, we use Big-O notation to describe time complexity, but we can also use it to describe memory efficiency.

Big-O notation is not an exact metric for benchmarking algorithms. Rather, it gives us an abstract idea about how costly or efficient an algorithm is, with respect to how much computing power it takes. With Big-O notation, we are comparing orders of magnitude.

A few notes on Big-O notation:
* When we calculate the Big-O of the function, we are calculating the **worst** possible runtime for a given function.
* Sometimes, Big-O notation is referred to as [asymptotic analysis](http://www.cs.cornell.edu/courses/cs3110/2013sp/supplemental/lectures/lec19-asymp/review.html).

For time complexity, we want to count how many times the code is run in context of how large the input to the code is. For example, O(1) is a very efficient piece of code, O(N!) is very inefficient. Let's break this down into categories of Big-O.

### O(1) Complexity (aka Constant Complexity)

O(1) means that an algorithm's runtime is static or constant. *The complexity stays the same no matter the input*.

```javascript
function helloWorld (arr) {
	console.log('hello world')
}

function returnFirstItem (arr) {
	return arr[0]
}
```

In both of the above examples, no matter what size the `arr` argument is, the function will run once.

### O(N) Complexity (aka Linear Complexity)

O(N) complexity means that, as the input sizes increase, the processing time increases linearly. Or, more simply, *the code runs once for each input*.

```javascript
function iterate (arr) {
  arr.forEach(item => console.log(item))
}

function iterateLoop (arr) {
  for (let i = 0; i < arr.length; i++) {
     console.log(arr[i])
  }
}

function addOne (arr) {
  return arr.map(item => item + 1)
}
```

In each of the above examples, we go through the array and perform an action with each item in it. If we have the array `[1]`, each will execute once. If we have the array `[3, 5, 1000]` the code will run 3 times. If our array has 1000 items, the code will execute 1000 times!

### O(N^2) Complexity (aka Quadratic Complexity)

For an input with the size n, *quadratically complex algorithms execute `n*n` times*.

```javascript
function consoleLogLots (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j])
    }
  }
}
```
For the array `[1, 3]`, this function will print:
```js
[1, 1]
[1, 3]
[3, 1]
[3, 3]
```
For a 2 item array, the code executes 4 times. For 3 items, the code executes 9 times.  This scales pretty fast -- for an array with 100 items this code will `console.log` 10,000 times!

### O(log n) and O(n log n) Complexity

O(log n) refers to algorithms which cut the problem in half each time. These have significantly lower complexity than O(n). We don't actually have to calculate logarithms or anything like that! Technically, a logarithm is a "quantity representing the power to which a fixed number (the base) must be raised to produce a given number." [source](https://en.wikipedia.org/wiki/Logarithm)
>Examples...

- the base 10 logarithm of 1000 is 3 since 10^3 is 1000.
- log<sub>2</sub> 32 = 5

One example of an O(log n) algorithm is a **binary search**. In an *unsorted* array, if we want to find the index of an item with a given value, we have to iterate through it and check if each item is equal to the item we are searching for. However, if we know that we have a **sorted** array, we can do this a lot easier!

For the array `[1, 3, 5, 7, 9, 11, 13]`, if we want to find the index of the 5, we can do so like this:
* Find the item at the midpoint of the array. This ends up being `7`.
* Our item is below 7, so then, since our array is sorted, we only have to search the half of the array before the 7.
* The midpoint of the sub array from 1-7 or `[1, 3, 5]` is `3`.
* This time, 5 is larger than 3, so we search the sub-array `[5]`. Since the midpoint of that array `5` is equal to the number we are searching for, we just return that number.

Let's checkout a ***[visualization](https://www.cs.usfca.edu/~galles/visualization/Search.html)***

An implementation of that algorithm is below:
```javascript
function binarySearch(arr, item, first = 0, last = null) {
	if (!last) last = arr.length - 1
  
	let midpoint = Math.floor((last - first) / 2) + first

	if (arr[midpoint] === item) return midpoint
	if (arr[midpoint] > item) return binarySearch(arr, item, first, midpoint)
	if (arr[midpoint] < item) return binarySearch(arr, item, midpoint, last)
}
```

The above function ran 3 times instead of the 7 that we would need if we iterated through the entire array! This algorithm is super efficient -- even if we have a million items in our array, on average we will only need to execute the binary search 20 times.

O(n log n) algorithms are ones that are faster than O(n^2) but slower than O(n). Let's come back to O(n log n) in a minute -- a lot of sorting algorithms fall under this category.

### O(n!) and O(2^n)

O(n!) and O(2^n) complexities should make you very nervous! These should be avoided at all costs. One example of an O(n!) algorithm is the Bogosort - aka the slowsort. This sort is when an array is randomly ordered over and over again until it is in the correctly sorted order. For an array with the length 10, this sort may have to run up to 3,628,800 times! Sometimes you will have to look at all the available combinations and writing code that are in these complexity categories can't be avoided, but they should bring up some red flags!

### Drop the Coefficients, Constants, and less Significant Terms

With Big-O analysis, it is convention to drop the coefficients and constants. This helps us generalize our how efficient our algorithms will be.  

For example:
```javascript
function iter (arr) {
  // Big-O: N
  arr.forEach(item => console.log(item))
  arr.forEach(item => console.log(item))
  console.log('hello world')
}

function helloWorld () {
  // Big-O: 1
  console.log('hello world')
  console.log('hello world')
}
```
The above examples, at first look would have complexities of O(2N + 1) and O(2) respectively; however, in order to keep things simple, we can drop the coefficients. The time complexities are still linear and constant respectively. We take the least efficient operation within the block of code to measure its efficiency.

Here are some more examples where you want to drop the less significant terms...

<code>O(n​<sup>3</sup> ​​+ 50n<sup>​2</sup>​​ + 10000) = O(n​<sup>3</sup>​​)</code>

<code>O(n+30) x O(n+5) = O(n​<sup>2</sup>​​)</code>

The most significant term always wins out in the end!

### Big-O Summary
![](https://i.stack.imgur.com/jIGhf.png)

The following table shows how algorithms with different complexities scale when given different numbers of inputs. Note: some values are rounded.

|Complexity |1|10      |100  |
|-----------|-|--------|-----|
|O(1)       |1| 1      |1    |
|O(log N)   |0| 2      |5    |
|O(N)       |1|10      |100                            |
|O(N log N) |0|20      |461                            |
|O(N^2)     |1|100     |10000                          |
|O(2^N)     |1|1024    |1267650600228229401496703205376|       
|O(N!)      |1|3628800 |doesn't fit on screen! |


Let's look at this demo in javascript...
- Code: [JS](https://git.generalassemb.ly/ga-wdi-lessons/cs-algorithms/blob/master/js-example/script.js), [HTML](https://git.generalassemb.ly/ga-wdi-lessons/cs-algorithms/blob/master/js-example/index.html)
- [Deployed](http://aboard-thought.surge.sh)

### You Do: Study Big-O Families (10 min / 9:50)

[Write down the complexities of these functions](https://git.generalassemb.ly/ga-wdi-lessons/cs-algorithmic-complexity/blob/master/big-o-exercise.md).


## Learn More!
* https://www.youtube.com/watch?v=V6mKVRU1evU
* http://www.cs.cmu.edu/afs/cs/academic/class/15451-s10/www/lectures/lect0203.pdf
* https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation/487278
* https://www.codenewbie.org/basecs
* http://bigocheatsheet.com/

