// multiple params are OK.
var multiParamsFunc = function (x, y, z) {
    var result = "x = " + x + ", y = " + y + ', z = ' + z;
    console.log("multParamsFunct: " + result);
};

var result = multiParamsFunc('hey', 'foo', 'bar');
console.log('Oops didnt return anything: result =  ' +  result);
// Fixit

// lets pass only two of three args
var result = multiParamsFunc('hey', 'foo');
console.log('Only two args passed: result =  ' + result);

// Can get all of the functions arguments.
// Kind of like splat in Ruby?
var funcArgs = function(arg1) {
    for(var i = 0; i < arguments.length; i++){
       console.log('argument[' + i + ']= ' +  arguments[i] );
    }

}
// Cool can get all the args
funcArgs(77, 'hello', 'goodbye');