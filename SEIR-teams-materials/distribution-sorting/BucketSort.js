function insertionSort(array) {
	// completed insertionSort, do not alter
	for (let i = 1; i < array.length; i++) {
		let currentValue = array[i];
		let j = i - 1;
		for (j; j >= 0 && array[j] > currentValue; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = currentValue;
	}
	return array;
}

function bucketSort(array) {
	
}

module.exports = bucketSort;
