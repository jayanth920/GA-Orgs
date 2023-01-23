// This is a the least efficient way of hiding DOM elements, nodes.
// It iterates through a list of nodes twice!

// Find all the nodes in the DOM with the class of 'test'
// Add these nodes to an array, nodes.
// And return this array.
var findNodes = function () {
	var nodes = []; // stores the result
	// get all the DOM elements
	var testElements = document.getElementsByClassName("test");
	for(var i = 0; i < testElements.length; i++){
			nodes.push(testElements[i]);
	};
	return nodes; 
};

// Given an array of DOM elements, i.e nodes, hide them
// by setting their display to "none"
var hide = function (nodes) {
	var i = 0, max = nodes.length; 
	for (; i < max; i += 1) {
		nodes[i].style.display = "none";
	};
};

var msg = "Hide All DOM elements with the class 'test'";
alert(msg);
console.log(msg);


hide(findNodes());