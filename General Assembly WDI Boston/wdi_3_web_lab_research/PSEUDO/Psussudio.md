# Pseudo-Classes in CSS

CSS pseudo-classes are used to add special effects to just one part of a class. 

Syntax:

	selector:pseudo-class {property:value;}
	

## Pseudo-Selectors
Pseudo-selectors give us way of narrowly addressing a specific state or property of an existing HTML selector.

For example the "a" tag has a pseudo selector "a:visited" that lets you set the specific properties of a visited link, and differentiate from an unvisited link). Every visited link (a member of pseudo-class a:visited) will share the properties you set in the CSS.

### Multiple states of the "a" tag
	
We can modify the "a" selector (links )with a psuedo class for a specific state or attribute of the link like so:

	a:link {color:#FF0000;}      /* unvisited link */
	a:visited {color:#00FF00;}  /* visited link */
	a:hover {color:#FF00FF;}  /* mouse over link */
	a:active {color:#0000FF;}  /* selected link */
		

This gives us different colors for different states of the link (hovering, visited, active, etc.


### Sibling Rivalry

Remember how CSS stands for "Cascading" Style Sheets? The first child of any element can be given a different property (from the rest of the cascade) by using the first-child pseudo-selector. For example:

	p:first-child { 
		background-color:yellow;
	}
	
will change the background-color of the first child element in each p tag. You can also do second-child, last-child, and nth-child to specify any sub-element, and it will hold across all classes.

### More Pseudo-Classes

The most common uses in CSS are for differentiating link states within the a tag and sub-elements using the nth child functionality, but there's lots more you can do with this functionality. Here's a list from MDN of all the standard

	:active
	:checked
	:default
	:dir()
	:disabled
	:empty
	:enabled
	:first
	:first-child
	:first-of-type
	:fullscreen
	:focus
	:hover
	:indeterminate
	:in-range
	:invalid
	:lang()
	:last-child
	:last-of-type
	:left
	:link
	:not()
	:nth-child()
	:nth-last-child()
	:nth-last-of-type()
	:nth-of-type()
	:only-child
	:only-of-type
	:optional
	:out-of-range
	:read-only
	:read-write
	:required
	:right
	:root
	:scope
	:target
	:valid
	:visited

### Resources:

https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes

http://nicolasgallagher.com/pure-css-speech-bubbles/
 
http://nicolasgallagher.com/an-introduction-to-css-pseudo-element-hacks/
  
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

http://css-tricks.com/pseudo-element-roundup/























