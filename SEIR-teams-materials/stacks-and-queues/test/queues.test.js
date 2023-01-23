const expect = require('chai').expect;
const { Queue } = require('../queues');

describe('Queue', () => {
	it('should be initialized with an `items` property that is an empty array', () => {
		const q = new Queue();
		expect(q.items).to.not.be.undefined;
		expect(q.items).to.deep.equal([]);
	});

	it('should have an `enqueue` method that adds items to the end of a queue', () => {
		const q = new Queue();
		expect(q.enqueue).to.not.be.undefined;
		q.enqueue(6);
		q.enqueue(7);
		expect(q.items[0]).to.equal(6);
		expect(q.items[1]).to.equal(7);
	});

	it('should have a `dequeue` method that removes the first item from the queue and returns it', () => {
		const q = new Queue();
		expect(q.dequeue).to.not.be.undefined;
		q.enqueue(6);
		q.enqueue(7);
		const dequeuedItem = q.dequeue();
		expect(dequeuedItem).to.equal(6);
		expect(q.items.length).to.equal(1);
		q.dequeue();
		const empty = q.dequeue();
		expect(empty).to.equal('Empty queue!');
	});

	it('should have a `peek` method that accesses the first item in the queue', () => {
		const q = new Queue();
		expect(q.peek).to.not.be.undefined;
		const emptyQueue = q.peek();
		expect(emptyQueue).to.equal('Empty queue!');
		q.enqueue(1);
		q.enqueue(3);
		const firstItem = q.peek();
		expect(firstItem).to.equal(1);
	});

	it('should have an `isEmpty` method that returns a boolean indicating whether the queue is empty or not', () => {
		const q = new Queue();
		expect(q.isEmpty).to.not.be.undefined;
		const isEmpty = q.isEmpty();
		expect(isEmpty).to.equal(true);
		q.enqueue(1);
		const isEmptyAgain = q.isEmpty();
		expect(isEmptyAgain).to.equal(false);
	});
});
