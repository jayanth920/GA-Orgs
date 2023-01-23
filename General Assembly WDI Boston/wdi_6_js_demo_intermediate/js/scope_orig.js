/****************************************
Scope:

There are two types of scope in Javascript.
1. Global Scope
2. Function Scope.

Unlike other languages, C/C++, Java, there
is no block scope. At least not until ES6.
****************************************/

/*
 Many languages have a number of steps that must be taken before a
 program can be run. Let's look at what the 'C' language does.

1. Write source code and save in a file.
2. Compile source code. The Compiler will:
2.1 Read source code from the file.
2.2 Tokenize or Lexically analyze the source code.
2.3 Build an Abstract Syntax Tree (AST).
2.4 Translate AST to assembly language.
2.5 Run assembler on assembly language.
2.5.1 Translate assembly language to 1's and 0's
2.6 Create .o file that has 1 and 0's.
3. Link libraries used in this program. This will produce an
 executable that can be run.
4. Run executable, program.
*/

/*
Right now we're going to concentrate on Scope.
Scope is sometimes called excecution context.

Javascript, like most languages, has Lexical Scope.
Another words, declared variables are are given scope during
lexical analysis. And lexical analysis is done during
compilation.

Lexical analysis happens after javascript loads the .js file. This
happens before any code is actually executed.

Let's think about how javascript works.
1. Loads the .js file into the javascript Virtual Machine(VM).
 Start Compilation.
2. Starts Lexical analyis of text in file.This is part of compliation.
3. Builds scope or execution context.
4. Compiles text in file into to a form that can be executed.
 End Compilation
5. Starts to execute code.
*/

//define a variable in global scope
var firstName = 'John';
var lastName = 'Dowd';
var age = 19;

function displayPerson(fname, lname){
  var prefix = 'Mr';
  var fullName = null;

  function getFullName(suffix){
   return  fullName = prefix + " " + fname + " " + lname + " " + suffix;
  };

  return getFullName();
};

function removeYears(){
  var minusYears = 10, age = 49;
  return age - minusYears;
};

console.log(displayPerson(firstName, lastName));
console.log(removeYears());

/*
 How is scope build for above?
 During Compilation, really lexical analysis which is part of
 compilation. The below is done.

 - Load this file.
 - Look for variable declarations, 'var identifier'
 and associate them with Global for function scopes.

 - Found 'var firstName' variable declaration.
 - Put firstName in Global Scope.
 - Found 'var lastName' variable declaration.
 - Put lastName in Global Scope.
 - Found 'var age' variable declaration.
 - Put age in Global Scope.
 - Found 'var displayPerson' declaration.
 - Put age in displayPerson in Global Scope.
 - Notice that displayPerson's value is a function. So, process this
 function.

 // In displayPerson function
 - Found the fname and lname declarations.
 Note: functions arguments behave just like local variables.
 - Put them in the displayPerson function scope.
 - Found prefix, fullName variable declarations.
 - Put them in the displayPerson function scope.
 - Found getFullName declaration.
 - Put in the displayPerson function scope.
 - Notice that getFullName is a functon. So, process this function.

 // In getFullName function
 - Found suffix declaration.
 - Put this in the getFullName function scope.

 // All done with getFullName function, no more variable declarations.

 // All done with displayPerson function, no more variable
 declarations.

 - Found removeYears variable declaration
 - Put removeYears in Global scope.
 - Notice that removeYears value is a function. So, process this.

 // removeYears
 - Found currentAge and minusYears variable declarations.
 - Put these in the removeYears function's scope.

 // Draw the scopes!!!
*/
