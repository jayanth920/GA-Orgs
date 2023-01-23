// More efficient way of hiding the DOM elements.
// Only one iteration through the the list of DOM element.


// Apply the callback to all DOM elements, nodes, that
// have the class 'test'
var findNodes = function (callback) {
	// get all the DOM elements
	var testElements = document.getElementsByClassName("test");
	for(var i = 0; i < testElements.length; i++){
			callback(testElements[i]);
	};
};

// Given an one DOM elements, node, hide it
// by setting it's display to "none"
var hide = function (node) {
	node.style.display = "none";
};

var msg = "Hide All DOM elements with the class 'test' with a callback";
alert(msg);
console.log(msg);

findNodes(hide);