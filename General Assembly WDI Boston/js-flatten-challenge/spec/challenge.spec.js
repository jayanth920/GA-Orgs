'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030, -W079, -W083

const chai = require('chai');
const expect = chai.expect;

const Array = require('../lib/challenge');

const arrays = [
  [],
  [[]],
  [0, 1, 2, 3],
  [0, [1], [[2]], [[[3]]]],
  [0, [1], [[2], 3], [[[4], 5], 6]],
  [0, [1], [2, [3]], [4, [5], [6, [7]]]],
  [0, [1, []], [2, [], [3]], [4, [], [5, [], [6]], [[[[7], 8, [9]]]]]],
  [[0, 1], [true, false], [['', 'string'], [{}, []]], [[null], [undefined]]],
];

describe('Requirements', () => {
  describe('flatten()', () => {
    it('is a method defined on Array\'s prototype.', () => {
      expect(Array).to.respondTo('flatten');
    });
  });

  describe('flatten()\'s return value', () => {
    const flattenedArrays = [
      [],
      [],
      [0, 1, 2, 3],
      [0, 1, 2, 3],
      [0, 1, 2, 3, 4, 5, 6],
      [0, 1, 2, 3, 4, 5, 6, 7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, true, false, '', 'string', {}, null, undefined],
    ];

    it('is an array.', () => {
      arrays.forEach(array => {
        expect(Array.isArray(array.flatten())).to.be.true;
      });
    });

    it('does not contain any arrays.', () => {
      arrays.forEach(array => {
        expect(array.flatten().some(Array.isArray)).to.be.false;
      });
    });

    it(`contains every non-array element from the original array.`, () => {
      arrays.forEach((array, index) => {
        expect(array.flatten()).to.deep.equal(flattenedArrays[index]);
      });
    });
  });
});

describe('Bonus', () => {
  describe('flatten()', () => {
    it('takes an argument and flattens an array to that depth.', () => {
      const flattenedArrays = [
        [
          [],
          [[]],
          [0, 1, 2, 3],
          [0, [1], [[2]], [[[3]]]],
          [0, [1], [[2], 3], [[[4], 5], 6]],
          [0, [1], [2, [3]], [4, [5], [6, [7]]]],
          [0, [1, []], [2, [], [3]], [4, [], [5, [], [6]], [[[[7], 8, [9]]]]]],
          [[0, 1], [true, false], [['', 'string'], [{}, []]], [[null], [undefined]]],
        ],
        [
          [],
          [],
          [0, 1, 2, 3],
          [0, 1, [2], [[3]]],
          [0, 1, [2], 3, [[4], 5], 6],
          [0, 1, 2, [3], 4, [5], [6, [7]]],
          [0, 1, [], 2, [], [3], 4, [], [5, [], [6]], [[[[7], 8, [9]]]]],
          [0, 1, true, false, ['', 'string'], [{}, []], [null], [undefined]],
        ],
        [
          [],
          [],
          [0, 1, 2, 3],
          [0, 1, 2, [3]],
          [0, 1, 2, 3, [4], 5, 6],
          [0, 1, 2, 3, 4, 5, 6, [7]],
          [0, 1, 2, 3, 4, 5, [], [6], [[[7], 8, [9]]]],
          [0, 1, true, false, '', 'string', {}, [], null, undefined],
        ],
        [
          [],
          [],
          [0, 1, 2, 3],
          [0, 1, 2, 3],
          [0, 1, 2, 3, 4, 5, 6],
          [0, 1, 2, 3, 4, 5, 6, 7],
          [0, 1, 2, 3, 4, 5, 6, [[7], 8, [9]]],
          [0, 1, true, false, '', 'string', {}, null, undefined],
        ],
        [
          [],
          [],
          [0, 1, 2, 3],
          [0, 1, 2, 3],
          [0, 1, 2, 3, 4, 5, 6],
          [0, 1, 2, 3, 4, 5, 6, 7],
          [0, 1, 2, 3, 4, 5, 6, [7], 8, [9]],
          [0, 1, true, false, '', 'string', {}, null, undefined],
        ],
        [
          [],
          [],
          [0, 1, 2, 3],
          [0, 1, 2, 3],
          [0, 1, 2, 3, 4, 5, 6],
          [0, 1, 2, 3, 4, 5, 6, 7],
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 1, true, false, '', 'string', {}, null, undefined],
        ],
      ];

      for (let d = 0; d < flattenedArrays.length; d++) {
        arrays.forEach((array, i) => {
          expect(array.flatten(d)).to.deep.equal(flattenedArrays[d][i]);
        });
      }
    });
  });
});
