'use strict';

var collections = require('../lib/collections.js');

describe('collections', function() {

  describe('normalized words', function() {

    var normalizedWords = [
      'we', 'the', 'people', 'of', 'the', 'united', 'states', 'in',
      'order', 'to', 'form', 'a', 'more', 'perfect', 'union',
      'establish', 'justice', 'insure', 'domestic', 'tranquility',
      'provide', 'for', 'the', 'common', 'defence', 'promote', 'the',
      'general', 'welfare', 'and', 'secure', 'the', 'blessings', 'of',
      'liberty', 'to', 'ourselves', 'and', 'our', 'posterity', 'do',
      'ordain', 'and', 'establish', 'this', 'constitution', 'for',
      'the', 'united', 'states', 'of', 'america'
    ];

    it('has the correct length', function() {
      expect(collections.normalizedWords.length).toBe(52);
    });

    it('matches expected array', function() {
      expect(collections.normalizedWords.sort())
        .toEqual(normalizedWords.sort());
    });

  });

  describe('unique words', function() {

    var sortedUniqueWords = [
      'a', 'america', 'and', 'blessings', 'common', 'constitution',
      'defence', 'do', 'domestic', 'establish', 'for', 'form',
      'general', 'in', 'insure', 'justice', 'liberty', 'more', 'of',
      'ordain', 'order', 'our', 'ourselves', 'people', 'perfect',
      'posterity', 'promote', 'provide', 'secure', 'states', 'the',
      'this', 'to', 'tranquility', 'union', 'united', 'we', 'welfare'
    ];

    it('has the correct length', function() {
      expect(collections.uniqueWords.length).toBe(38);
    });

    it('matches expected array', function() {
      expect(collections.uniqueWords.sort())
        .toEqual(sortedUniqueWords);
    });

  });

  describe('word lengths', function() {

    it('has the correct longest', function() {
      expect(collections.longAndShort.longest).toBe('constitution');
    });

    it('matches keys to expected array', function() {
      expect(collections.longAndShort.shortest).toBe('a');
    });

  });

});
