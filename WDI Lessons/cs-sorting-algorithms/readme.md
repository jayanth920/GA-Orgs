## Sorting Algorithms (20 min / 9:20)

One of the most important subsets of algorithms is sorting algorithms. A lot of the time, we will have a collection of items that we want to order in some way for our analyses or for display purposes.
![](https://cdn-images-1.medium.com/max/600/1*i0fopl3fml48X4aAxpqM4A.jpeg)

There are **tons** of sorting algorithms with various pros and cons to them -- some are more efficient with some types of inputs and less with others. Again, having an efficient sorting algorithm isn't super important with a collection of ten items, but when there are a million or a billion efficiency becomes very important!

With different sorting algorithms, there are a couple things we need to keep in mind. The first is the time complexity - which we just went over. The second is whether or not they are **in place**. Some sorting algorithms can just re-order the collection, others need an additional data structure in order to work.

### Bubble Sort

The bubble sort algorithm goes like this: pass through the array a bunch of times, and each time if one element is higher than its neighbor, swap them. [Here](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html) is a visualization of it.

```javascript
Array.prototype.swap = function (idxA, idxB) {
	let temp = this[idxA]
	this[idxA] = this[idxB]
	this[idxB] = temp
}

function bubbleSort (a) {
	let keepGoing = true

	while (keepGoing) {
		keepGoing = false
		for (let i=0; i < a.length - 1; i++) {
			if (a[i] > a[i+1]) {
				keepGoing = true
				a.swap(i, i+1)
			}
		}
	}
}
```

The bubble sort algorithm has an O(n^2) complexity. It works really well if an array is close to sorted -- in that case the algorithm could be closer to O(n log n), but in the case that an array is not close to sorted, it will be a lot less efficient.

### Quicksort

Take 5 minutes and with the person next to you, describe what the below function is doing. [Hint](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)

```js
function quickSort (a) {
	if (a.length <= 1) return a

	let below = [], above = []

	let pivot = a.length - 1

	let pivotValue = a[pivot]

	a = a.slice(0, pivot)

	for (let i = 0; i < a.length; i ++) {
		a[i] < pivotValue ? above.push(a[i]) : below.push(a[i])
	}

	return quickSort(above).concat([pivotValue], quickSort(below))
}
```

## You Do: Researching Common Sorting Algorithms (20 min / 9:40)
> 10 min research, 10 min presentations

In groups of three, research the following sorting algorithms:
* Selection sort
* Merge sort
* Radix sort
* Counting sort

You will be presenting your findings to the rest of the class! Make sure you include the benefits, drawbacks, complexity, and a code sample of your algorithm. If you want to send any materials for your presentation to me feel free to do so!

> Aside: writing sorting algorithms is important for understanding the "behind the scenes" of a programming language, but each language we have used in this class has a `.sort()` method built in. Ruby's uses a [merge sort](https://en.wikipedia.org/wiki/Merge_sort), Python uses a [tim sort](https://en.wikipedia.org/wiki/Timsort), and JavaScript uses [quick sort](https://stackoverflow.com/questions/234683/javascript-array-sort-implementation) (depending on the browser). In practice, you should usually use these since they are highly optimized. Many companies like you to know some sorting algorithms (usually have two on hand).

## Resources
* https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html
* https://github.com/keon/algorithms/tree/master/sort
* https://www.khanacademy.org/computing/computer-science/algorithms#intro-to-algorithms
* https://www.toptal.com/developers/sorting-algorithms/