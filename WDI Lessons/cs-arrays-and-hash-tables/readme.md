## Data Structures

Throughout this class, we've used some of the builtin data structures that our programming languages give us. Let's review what a data structure is: data structures define how a collection of data should be organized. We have used arrays, objects, hashes, and ranges in our code.  There are reasons why we choose one over the other -- if we want ordered data we use an array, if we want key value pairs we use an object. There are also other data structures out there. Some are built in to the programming language, some are not.

These data structures are programming language agnostic -- they can be implemented in any language. Therefore, they fall into the category of "abstract data types" -- or theoretical data types described by their values and actions. For example, an integer is a whole number which can be added, subtracted, multiplied etc. These can be implemented across programming languages -- or even outside of programming. Data structures fall into this same category!

Similar to the sorting algorithms from before, we use different data structures for different reasons. Usually, they have some operation optimized -- like sorting, searching, adding or removing items, or iterating through them. Let's first start looking more in depth at the data structures we've seen in class and then look at some new ones!

### Arrays

Arrays are ordered data structures that allow us to access pieces of data at a given index.

Traditionally, arrays have a set size, so you can't add or remove data from them. This makes them really efficient because array items can be stored together in a block of memory on your computer. The indexes of the items are then calculated based on the address in memory that the item is located at.

The high level programming languages that we have seen in this class abstract away the memory allocation dynamic in arrays, so we can easily add and remove items from them. Most programming languages implement this process by allocating more memory than needed for an array at initialization and then resizing dynamically at certain indexes. In a lot of cases, arrays wil store a pointer to the item rather than the item itself in memory. This makes them less efficient from a computational perspective, but makes them much more programmer friendly!

|Operation|Complexity|
|---------|----------|
|Access   |O(1)      |
|Search   |O(n)      |
|Insert   |O(n)      |
|Delete   |O(n)      |

* Accessing can be done using the formula start + (cellsize * index)
* Searching is done by iterating through the array and seeing if the value equals the item you are searching for.
* Insertion is done by recreating the array, which means that each item must be recreated.
* Deletion is done by recreating the array, which means that each item must be recreated.


### Hash Tables

Hash tables are another name for objects, hashes, maps, associative arrays, and dictionaries depending on the language. They store data in key value pairs.

Hash tables allow us to easily insert, delete, search, and access data.

|Operation|Complexity|
|---------|----------|
|Access   |O(1) -> O(n)|
|Search   |O(1) -> O(n)|
|Insert   |O(1) -> O(n)|
|Delete   |O(1) -> O(n)|

The implementation details of hash tables are outside the scope of this class, but the efficiency of each of their operations is usually very close to O(1). [Here](https://github.com/aspittel/coding-cheat-sheets/blob/master/data_structures/hash_tables.md) and [here](https://github.com/SF-WDI-LABS/hash-map-lab) have more details on how hash tables are implemented if you are interested.
