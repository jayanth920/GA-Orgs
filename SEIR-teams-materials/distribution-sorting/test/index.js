const expect = require('chai').expect;
const bucketSort = require('../BucketSort');

describe('Bucket Sort', () => {
	it('should sort the array', () => {
		const myArray = [12, 6, 3, 7, 13, 8];
		const sorted = bucketSort(myArray);
		expect(sorted).to.deep.equal([3, 6, 7, 8, 12, 13]);
		const otherArray = [-3, -1, 5, 100];
		const otherSorted = bucketSort(otherArray);
		expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
		const finalArray = [
			11, 187,  95, 187,  36,  30, 165,  95, 103, 180,
		   165, 152,  51,  76, 113,  81, 190, 116,  38,  23,
		   201, 142, 179, 193,  11,  95,  42, 105,   6,  75,
		   111, 172, 141, 240, 196, 240, 168, 174, 186,  79,
			14,  34,  96,  79, 117, 197,  84, 208, 111, 200
		];
		const finalSorted = bucketSort(finalArray);
		expect(finalSorted).to.deep.equal([
			6,  11,  11,  14,  23,  30,  34,  36,  38,  42,
		   51,  75,  76,  79,  79,  81,  84,  95,  95,  95,
		   96, 103, 105, 111, 111, 113, 116, 117, 141, 142,
		  152, 165, 165, 168, 172, 174, 179, 180, 186, 187,
		  187, 190, 193, 196, 197, 200, 201, 208, 240, 240
		]);
	});
});
