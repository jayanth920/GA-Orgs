'use strict';

// global scope
var favoriteCookie = 'Snickerdoodle';

var takeFromJar = function takeFromJar () {
    var who = 'Adam took the cookie from the cookie jar!'; // `who` is defined in the local scope (the function scope)
    console.log('Who took the cookie from the cookie jar?', who);
};

console.log(who); //=> undefined

var oreo = 'DoubleStuf';

var bestOreo = function bestOreo () {
    oreo = 'Mint';
    console.log(oreo);
};

console.log(bestOreo()); //=> 'Mint'
console.log(oreo); //=> 'Mint' overwrote 'DoubleStuf'
