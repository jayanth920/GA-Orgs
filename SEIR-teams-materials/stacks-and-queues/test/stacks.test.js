const expect = require('chai').expect;
const { Stack } = require('../stacks');

describe('Stack', () => {
	it('should be initialized with an `items` property that is an empty array', () => {
		const s = new Stack();
		expect(s.items).to.not.be.undefined;
		expect(s.items).to.deep.equal([]);
	});

	it('should have a `push` method that adds items to the top (end) of a stack', () => {
		const s = new Stack();
		expect(s.push).to.not.be.undefined;
		s.push(6);
		s.push(7);
		expect(s.items[0]).to.equal(6);
		expect(s.items[1]).to.equal(7);
	});

	it('should have a `pop` method that removes the last item from the end of a stack and returns it', () => {
		const s = new Stack();
		expect(s.pop).to.not.be.undefined;
		s.push(6);
		s.push(7);
		const poppedItem = s.pop();
		expect(poppedItem).to.equal(7);
		expect(s.items.length).to.equal(1);
		s.pop();
		const empty = s.pop();
		expect(empty).to.equal('Empty stack!');
	});

	it('should have a `peek` method that accesses the last item in the stack', () => {
		const s = new Stack();
		expect(s.peek).to.not.be.undefined;
		const emptyStack = s.peek();
		expect(emptyStack).to.equal('Empty stack!');
		s.push(1);
		s.push(3);
		const lastItem = s.peek();
		expect(lastItem).to.equal(3);
	});

	it('should have an `isEmpty` method that returns a boolean indicating whether the stack is empty or not', () => {
		const s = new Stack();
		expect(s.isEmpty).to.not.be.undefined;
		const isEmpty = s.isEmpty();
		expect(isEmpty).to.equal(true);
		s.push(1);
		const isEmptyAgain = s.isEmpty();
		expect(isEmptyAgain).to.equal(false);
	});
});
