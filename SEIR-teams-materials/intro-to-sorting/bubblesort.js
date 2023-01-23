function bubbleSort(array) {
	// Make a loop that keeps running WHILE the array is not sorted (ie. if isSorted === false)

	// Set isSorted to true each time so we can detect if a swap happened in this specific iteration.

	// Make another loop (inside the first one) to go through the array

	// Inside inner loop:
	// compare each pair of elements next to each other
	// IF the current index is greater than the index to the right swap them.

	// Make sure to keep track of whether a swap happened (if the array is sorted)!
	// If a swap does happen, we know the array was not sorted. So reset isSorted to false.

	// After both loops have exited, remember to return the array
	return array;
}

module.exports = bubbleSort;
