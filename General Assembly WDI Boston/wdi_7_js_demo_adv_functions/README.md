![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

## Callbacks and the "this" pointer.

Learn some important concepts about how javascript functions behave **at Runtime**.

## Objectives
* Understand how to use functions as first-class objects.
* Using function callbacks to increase efficiency.
* Using the javascript functions, _(call, apply and bind)_, to change a function's execution/runtime "Runtime Context" with 'this' pointer.
* Learning how the 'this' pointer changes at Runtime, execution, time.
* Know that **Scope is NOT the same as the 'this' pointer**. They are two separate concepts. (There is another lesson on scope).  
	* **Scope** is *lexical scope* that is constructed during javascript compilation.  
	* It's **static**, never changes at Runtime, when javascript code is executing.  
	* All you need to know to determine scope can be seen from reading the code. *You don't have to think about what happens when the code is running to determine a variable's scope*.  
* **'this'** is *Runtime Context*. A function get's it 'this' pointer from something that called the function **at Runtime.**
	  


## Callbacks

In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves.[From Javascript Callbacks and how to use them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

They can be *“stored in variables, passed as arguments to functions, created within functions, and returned from functions”.* [From Javascript Callbacks and how to use them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

### Lab
Work through this article [Javascript Callbacks and how to use them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/). 

- Create a branch name \<initials\>_done, e.g. Thomas George Dyer branch would be named tgd_done.

```
git checkout -b <initials>_done
```

- Create a solutions directory for your javascript files.

- Create javascript files, in solutions dir, for each example.  

	*I created 8 javascript files and ran a couple in the browser, a couple using node.*

	*You may need to create an associated HTML file with DOM elements refered to in exercises.*

- Step thru the code in a browser debugger and create comments at each point that may be surprising, or that need clarification.

	*Some examples, (Multiple Callback Functions Allowed, Callback Hell), cannot be coded. Write in your own words what the point of these examples are.*
	
- How can creating callbacks help to: 
  
	* DRY up your code?  
	* Implement better abstractions?  
	* Make your code more maintainable?
	* Help to reuse code?

**Put all your answers in callback_benefits.txt file. And submit a pull request.**


### Demo
In the index.html change the script at the end of the body 
to point to one of these javascript files.
  
  * simple_iter.js - Simple DOM iteration.  
  * simple_callback.js - Simple DOM iteration with callback.  
  * anon_callback.js - Simple DOM iteration with anonymouscallback.  
  * problem_callback.js - Simple DOM iteration with callback that is an object's method. How 'this' is used in callbacks.  
  
## "this"" pointer and a Function's Runtime Context.
"We use this similar to the way we use pronouns in natural languages like English and French. We write: “John is running fast because he is trying to catch the train.” Note the use of the pronoun “he.” We could have written this: “John is running fast because John is trying to catch the train.” We don’t reuse “John” in this manner, for if we do, our family, friends, and colleagues would abandon us. Yes, they would. In a similar aesthetic manner, we use the this keyword as a shortcut, a referent to refer to an object." from [Understanding Javascript 'this' pointer.](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

### Lab
Read this. [Understanding Javascript 'this' pointer.](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

Create files for each example. *You may need to create an associated HTML file with DOM elements refered to in exercises.*

Step thru the code in a browser debugger and create comments at each point that may be surprising, or that need clarification.

### Demo

In the this_index.html change the script at the end of the body 
to point to one of these javascript files

* this_object_literal.js - 'this' in an object literal.
* this_global_function.js - 'this' in a global function.
* this_event_handler_broken.js - Broken button event handler.  
* this_event_handler_fixed.js - Fixed button event handler.
* this_inner_function_bad.js - Broken inner function.  
* this_inner_function_fixed.js - Fixed inner function.  
* this_reassign_method_bad.js - Changing the runtime context of a method to the global object.
* this_reassign_method_fixed.js - Changing the runtime context of a method with the javscript _bind_ function.


### References 
* [Javascript Callbacks and how to use them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [Javscript Call, Apply and Bind](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
* [Understanding Javascript 'this' pointer.](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
* [Javscript Do's and Don'ts](http://programming.oreilly.com/2014/05/dos-and-donts-in-javascript.html)
* [You Don't Know Javscript](https://github.com/getify/You-Dont-Know-JS)
* [Scopes and Closures. Advanced Topic.](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md)
* [Javascript 'this'. Advanced Topic](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md)
