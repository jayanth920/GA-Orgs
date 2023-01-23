// The callback here is an anonymous function defined when 
// this function is called below.

// Don't believe it's any more or less efficient that 
// explicity defining the callback function.

// Apply the callback to all DOM elements, nodes, that
// have the class 'test'
var findNodes = function (callback) {
	// get all the DOM elements
	var testElements = document.getElementsByClassName("test");
	for(var i = 0; i < testElements.length; i++){
			callback(testElements[i]);
	};
};

var msg = "Hide All DOM elements with the class 'test' with an anonymous callback";
alert(msg);
console.log(msg);

// The callback is defined in-place,i.e. when the function is being using 
// the callback is being invoked.
findNodes(function hide(node){
	node.style.display = "none";
});


// I prefer to name anonymous functions so that I can:
// 1) Refer to them inside the anon funtion if needed.
// 2) Be able to follow a stack trace in a javascript debugger.
// findNodes(function(node){
// 	node.style.display = "none";
// });

