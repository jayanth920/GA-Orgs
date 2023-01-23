
// Define an object literal with two properties
var myapp = {};
myapp.color = "green"; // color property is a String

// paint property is a Function
myapp.paint = function (node) {
	node.style.color = this.color; 
};


// Function that will ATTEMPT to make the DOM elements
// with a class of 'test' green. THIS WILL FAIL!!

// It takes a callback function that is invoked for 
// each DOM element of class 'test' and set it's color to green.
var findNodes = function (callback) {
	// get all the DOM elements
	var testElements = document.getElementsByClassName("test");
	for(var i = 0; i < testElements.length; i++){
			// AAAAAAhhhhgggg, the callback's this pointer is wrong.
			// the this pointer is the global object because this
			// findNodes function is a global object.
			callback(testElements[i]);
	};
};

// Function that will make the DOM elements with a class of 'test' green. 

// It uses the javascript 'call' function to change the
// 'Context' that the callback function is invoked from.
// Changing the Context will change the 'this' pointer used
// inside the callback function.
var findNodes_fixed = function (callback,callback_obj) {
	// get all the DOM elements
	var testElements = document.getElementsByClassName("test");
	for(var i = 0; i < testElements.length; i++){
			callback.call(callback_obj, testElements[i]);
	};
};

// Fails because 'this' pointer is WRONG
//findNodes(myapp.paint);


var msg = "Hide All DOM elements with the class 'test'";
alert(msg);
console.log(msg);

// Succeeds because the 'this' pointer is explicity
// set to the myapp object.
findNodes_fixed(myapp.paint, myapp)
