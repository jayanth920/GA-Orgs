'use strict'

var i = 3;

function foo() {
  var n = i;
  var i = 0;
  return n;
}

console.log("foo returns " + foo());

function bar(arg) {
  var n = i;
  var j = 0;
  i = j;
  return n;
}

console.log("bar returns " + bar());

var n = false ? k=1:l=2;
var k= 0, l = 1;
console.log("n is " + n + ", but l is " + l);

function baz(arg) {
  var n = arg? i:j;
  return n;
}

console.log("baz returns " + baz());
