'use strict';

var game = require('../lib/battlegame.js');

describe('game units', function(){
  describe('infantry unit', function(){
    it('exists and has the correct properties', function(){
      expect(game.infantry).toBeDefined();
      expect(game.infantry.health).toBeDefined();
      expect(game.infantry.speed).toBeDefined();
    });
    it('has the values for its properties that are given in the spec', function(){
      expect(game.infantry.health).toBe(2);
      expect(game.infantry.speed).toBe(2);
    });
    it('has an attack method', function(){
      expect(game.infantry.attack).toBeDefined();
    });
  });
  describe('artillery unit', function(){
    it('exists and has the correct properties', function(){
      expect(game.artillery).toBeDefined();
      expect(game.artillery.health).toBeDefined();
      expect(game.artillery.speed).toBeDefined();
    });
    it('has the values for its properties that are given in the spec', function(){
      expect(game.artillery.health).toBe(2);
      expect(game.artillery.speed).toBe(1);
    });
    it('has an attack method', function(){
      expect(game.artillery.attack).toBeDefined();
    });
  });
  describe('cavalry unit', function(){
    it('exists and has the correct properties', function(){
      expect(game.cavalry).toBeDefined();
      expect(game.cavalry.health).toBeDefined();
      expect(game.cavalry.speed).toBeDefined();
    });
    it('has the values for its properties that are given in the spec', function(){
      expect(game.cavalry.health).toBe(1);
      expect(game.cavalry.speed).toBe(3);
    });
    it('has an attack method', function(){
      expect(game.cavalry.attack).toBeDefined();
    });
  });
});

describe('gameplay', function(){
  describe('infantry attacks artillery', function(){
    it('decreases artillery health to 1', function(){
      game.infantry.attack(game.artillery);
      expect(game.artillery.health).toBe(1);
    });
  });
  describe('cavalry attacks infantry', function(){
    it('decreases infantry health to 1', function(){
      game.cavalry.attack(game.infantry);
      expect(game.infantry.health).toBe(0);
    });
  });
  describe('artillery attacks cavalry', function(){
    it('decreases cavalry health to -2', function(){
      game.artillery.attack(game.cavalry);
      expect(game.cavalry.health).toBe(-2);
    });
  });
})
