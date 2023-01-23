'use strict';
describe('Javascript Basics',function(){

  describe('Javascript Primitive datatypes',function(){
    describe('Numbers in Javascript',function(){
      it('have no special distinction between numbers with and without decimals',function(){
        expect(currentLevel).toBeDefined();
        expect(price).toBeDefined();
        expect(fiveMinutes).toBeDefined();
        expect(threeHalves).toBeDefined();

        expect(currentLevel).toEqual(jasmine.any(Number));
        expect(price).toEqual(jasmine.any(Number));
        expect(fiveMinutes).toEqual(jasmine.any(Number));
        expect(threeHalves).toEqual(jasmine.any(Number));
      });
      it('can be operated on',function(){
        expect(fiveMinutes).toEqual(300);
        expect(price).toBeCloseTo(1400,0);
        expect(threeHalves).toEqual(1.5);
      });
      it('have only one integer that has two representations: 0 is represented as -0 and +0. ("0" is an alias for +0). In the praxis, this has almost no impact. For example +0 === -0 is true.',function(){
        expect(infinity).toEqual(Infinity);
        expect(negativeInfinity).toEqual(-Infinity);
      });
    });

    describe('Strings in Javascript',function(){
      it('have no difference between single and double quotes',function(){
        expect(greeting).toBeDefined();
        expect(firstName).toBeDefined();
        expect(lastName).toBeDefined();
        expect(greeting).toEqual(jasmine.any(String));
        expect(firstName).toEqual(jasmine.any(String));
        expect(lastName).toEqual(jasmine.any(String))
      });
      it('can be built using concatenation',function(){
        expect(myName).toEqual('Jason Wharff');
      });
    });

    describe('Booleans in Javascript',function(){
      it('can be assigned to variables',function(){
        expect(excited).toBe(true);
        expect(testMode).not.toBe(true);
        expect(testMode).toBe(false);
      });
      it('can be combined with the "&&" and "||" operators',function(){
        expect(excitedlyTesting).not.toBe(true);
        expect(excitedlyTesting).toBe(false);
      });
      it('can be assigned by using the "not" operator (!)',function(){
        expect(calm).not.toBe(true);
        expect(calm).toBe(false);
        expect(!calm).toBe(true);
      });
    });

    describe('Null in Javascript',function(){
      it('is a value that carries no value, but is defined',function(){
        expect(result).toBe(null);
        expect(result).toBeNull();
      });
      it('is still defined',function(){
        expect(result).toBeDefined();
        expect(result).not.toBeUndefined();
      });
      it('is a falsy value',function(){
        expect(result).toBeFalsy();
      });
    });

    describe('Undefined in Javascript',function(){
      it('happens when a variable has not been assigned a value, then it is of type "undefined". A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.',function(){
        expect(mystery).toBeUndefined();
        expect(mystery).not.toBeDefined();
        expect(spooky).toBeUndefined();
        expect(spooky).not.toBeDefined();
      });
      it('is not null',function(){
        expect(mystery).not.toBeNull();
        expect(spooky).not.toBeNull();
      });
      it('is a falsy value',function(){
        expect(mystery).toBeFalsy();
        expect(spooky).toBeFalsy();
      });
    });

    describe('Null in Javascript',function(){
      it('is a value that carries no value, so it is technically defined',function(){
        expect(result).toBeNull();
        expect(typeof null).toEqual('object');
      });
      it('is a falsy value',function(){
        expect(result).toBeFalsy();
      });
      it('is not undefined by strict equality',function(){
        expect(null === undefined).toBe(false);
      });
      it('is undefined when compared with equality',function(){
        expect(null == undefined).toBe(true);
      });
    });
  });

  describe('Control Flow in Javascript',function(){
    it('> converts both sides to the same datatype',function(){
      expect(holyNumber('4')).toEqual('Four shalt thou not count. Five is right out.');
      expect(holyNumber(4)).toEqual('Four shalt thou not count. Five is right out.');
    });
    it('< converts data types too',function(){
      expect(holyNumber('2')).toEqual('Count neither one nor two, excepting that thou then proceedest to three.');
      expect(holyNumber(2)).toEqual('Count neither one nor two, excepting that thou then proceedest to three.');
    });
    it('=== does not convert data types',function(){
      expect(holyNumber('3')).toEqual('World ends');
      expect(holyNumber(3)).toEqual('Throw the holy hand grenade!');
    });

    describe('Javascript Switch/Case statements',function(){
      it('uses strict equality for comparison',function(){
        expect(yearbook('freshman')).toMatch(/cannon fodder/);
        expect(yearbook('sophomore')).toMatch(/mildly respectable/);
        expect(yearbook('junior')).toMatch(/some influence/);
        expect(yearbook('senior')).toMatch(/phenomenal cosmic power/);
        expect(yearbook('the dude')).toMatch(/mysterious stranger/);
      });
    });
  });

  describe('Javascript Loose vs. Strict Equality Operators',function(){
    describe('==',function(){
      it('tries to convert both sides of the argument to the same data type before evaluation',function(){
        expect(3 == '3').toBe(true);
        expect(0 == false).toBe(true);
        expect(1 == true).toBe(true);
        expect(2 != true).toBe(true);
        expect(2 != false).toBe(true);
        expect(0 == '').toBe(true);
        expect(0 == []).toBe(true);
        expect('' == []).toBe(true);
        expect('wat' == ['wat']).toBe(true);
        expect(null == undefined).toBe(true);
      });
    });
    describe('===',function(){
      it('does not try to convert data types',function(){
        // notice the difference in data types
        expect(3 == '3').toBe(true);
        expect(1 != '1').toBe(false);
        expect(3 === '3').toBe(false);
        expect(1 !== '1').toBe(true);
      });
    });
  });

  describe('Javascript Arrays',function(){
    it('uses a 0-based index',function(){
      expect(colors[0]).toEqual('red');
      expect(colors[1]).toEqual('green');
      expect(colors[2]).toEqual('blue');
    });
    it('can be operated upon with functions defined on them',function(){
      // adds 'purple' to the end of the colors array
      colors.push('purple');

      expect(colors.length).toEqual(4);
      expect(colors).toContain('purple');
      expect(colors[colors.length - 1]).toMatch(/purple/);

      // removes the last item of an array
      colors.pop();

      expect(colors.length).toEqual(3);
      expect(colors).not.toContain('purple');

      expect(joinedColors).toEqual(jasmine.any(String));
      expect(joinedColors).toEqual('blue and orange and yellow');
    });
    it('have a length property (.length is not a function)',function(){
      expect(newColors.length).toEqual(3);
    });
    it('can be generated from strings',function(){
      expect(newColors).toEqual(jasmine.any(Array));
      expect(newColors).toContain('blue');
    });

    describe('and Iterating through them',function(){
      it('using a for loop',function(){
        expect(tmpColors).toEqual(jasmine.any(Array));
        expect(tmpColors).toContain("blue is one of my favorite colors");
      });
      it('using forEach',function(){
        expect(tempColors).toEqual(jasmine.any(Array));
        expect(tempColors).toContain('blue is favorite color number 2');
      });
    });
  });

  describe('Javascript Objects',function(){
    it('have properties and values',function(){
      expect(friend).toEqual(jasmine.any(Object));
      expect(friend.colors[1]).toEqual('blue');
      expect(friend.pets[0].age).toEqual(6);
      expect(friend.pets[1].name).toEqual('Reginald');
    });
    describe('Built-in methods',function(){
      it('include for..in loops',function(){
        expect(propArray.length).toEqual(4);
        expect(propArray[0]).toEqual("My friend's name is Dan");
      });
    });
  });

});