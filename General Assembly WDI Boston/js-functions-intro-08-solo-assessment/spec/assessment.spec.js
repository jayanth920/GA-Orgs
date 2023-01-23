'use strict';

var quiz = require('../lib/assessment.js');

describe('functions', function() {

  describe('powers', function() {

    it('square(2) === 4', function() {
      expect(quiz.square(2)).toBe(4);
    });

    it('cube(3) === 27', function() {
      expect(quiz.cube(3)).toBe(27);
    });

    it('quad(4) === 256', function() {
      expect(quiz.quad(4)).toBe(256);
    });

  });

  describe('inject', function() {

    //Question 2 check
    var nums = [6, 2, 4];

    it('inject(nums)', function() {
      expect(quiz.inject(nums)).toBe(12);
    });

    it('inject(nums, \'+\')', function() {
      expect(quiz.inject(nums, '+')).toBe(12);
    });

    it('inject(nums, \'*\')', function() {
      expect(quiz.inject(nums, '*')).toBe(48);
    });

    it('inject(nums, \'-\')', function() {
      expect(quiz.inject(nums, '-')).toBe(0);
    });

  });

  describe('max', function() {

    it('max() returns undefined', function() {
      expect(quiz.max()).toBe(undefined);
    });

    it('max(15) returns 15', function() {
      expect(quiz.max(15)).toBe(15);
    });

    it('max(-1, 0) returns 0', function() {
      expect(quiz.max(-1, 0)).toBe(0);
    });

    it('max(-1, -7, -4) returns -1', function() {
      expect(quiz.max(-1, -7, -4)).toBe(-1);
    });

  });

});
