// Pass a function to a function
// Little bit like using a block in Ruby
// But, this is more powerful.
var doItWithFunc = function(cmd){
   var x = 5, cmdResult =  cmd(x);
    return cmdResult;
};

function square(n){
    return n * n;
};

function cube(n){
    return n * n * n;
};

console.log('doItWithFunc square = ' + doItWithFunc(square));

console.log('doItWithFunc cube = ' + doItWithFunc(cube));


var setup = function(){
  var count = 0;
  return function(){
    count += 1;
  }
}

var next = setup();
console.next();
console.next();
console.next();

var make_mult = function(x, multiplier) {
  return function(x){
    return x * multiplier;
  }
}

var times2 = make_mult(x, 2);
var times7 = make_mult(x, 7);

console.log(times2(7));
