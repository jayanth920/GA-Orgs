# Big O Notation

A core concept in computer science is analyzing an algorithms to determine the amount of resources (time or storage) needed to execute. Most algorithms are designed to work with inputs of arbirarty length. We consider the size of this input to determine how many steps (*time complexity*) or how much storage (*space complexity*) it will take to execute.

Instead of saying that an algorithm takes a specific amount of measured time for a given CPU to execute with a given input size, we use *Big O Notation* to generally understand the change in number execution steps as the input size changes.

We consider these changes asymptotically (as the input size goes to infinity), and drop coefficients and lower order terms as they don't help us better understand the changes in computation.

## Time Complexity

Since an algorithm's performance time may vary with different inputs of the same size, one commonly uses the worst-case time complexity of an algorithm, denoted as T(n), which is defined as the maximum amount of time taken on any input of size n.

For example, if `T(n) = O(n)` we describe this as a linear time algorithm.

### Common time complexities:

| Name | T(n) | Example algorithms |
| -- | -- | -- |
| constant time | O(n) | Determining if an integer is even or odd |
| linear time | O(n) | Finding smallest value in unsorted array |
| logarithmic time | O(log n) | Binary search |
| quadratic time | O(n^2) | Bubble sort; Insertion sort |
| exponential time | 2^poly(n) | brute force search |

### Why?

We can use Big O and time complexity to better describe and compare algorithms and data structures.

### Resources

http://bigocheatsheet.com/
