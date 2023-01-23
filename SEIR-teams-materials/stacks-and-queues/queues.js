class Queue {
	constructor() {
		// should be initialized with an items property set to an empty array
	}

	enqueue(item) {
		// should add item to the end of a queue
	}

	dequeue() {
		// should remove item from the beginning of a queue and return it
		// if queue is empty, return 'Empty queue!'
	}

	peek() {
		// should access the first item in the queue
		// if queue is empty, return 'Empty queue!'
	}

	isEmpty() {
		// should return a boolean
		// true if the queue is empty
		// false if the queue is not empty
	}
}

module.exports = { Queue };
