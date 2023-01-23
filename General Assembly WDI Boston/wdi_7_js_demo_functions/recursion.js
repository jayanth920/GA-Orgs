// Recursion
function recursiveFunc(val){
    var newVal = val - 1;
    if(val < 1) {
        return;
    }
    console.log('val is ' + val);
    console.log('newVal is ' + newVal);
    recursiveFunc(newVal);
}
recursiveFunc(4);

// Ye ole fibonacci sequence with recursion
function fib(n){
    if (n < 2){
        return n;
    } else{
        return n * fib(n-1);
    }
}
var fibResult = fib(6);
console.log('fibResult is ' + fibResult);

