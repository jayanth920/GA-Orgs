# reps_for_Everyone


## Goal behind reps.

The idea behind this repository is to compile a list of simple *reps* in each respective language. 
This will allow us to easily pull tested and well thought out examples for students when they need them.  

### Benefits
- This can be especially beneficial for students who need to get more comfortable looking up methods or those struggling with syntax.  
- For students that are put on *catch-up* plans, this would be a great resource for those students and would help guide them in the process of problem solving as they are becoming more comfortable with the language at hand.  


### Question format 

1.  The question itself
2.  Links to relevant documentation
3.  Helpful questions to ask stack overflow to help them get started problem solving, and asking questions correctly.  
4.  An example of what should be the result of the question.


### Example

1.  Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string. To get you started, you'll need to loop through each string in the array and get the length of each one. Those lengths should be stored in a different array that you will return.

*Depending on the student*
  1a.  Remember that when building a function, you want to use declare a function with a name that accepts arguments. So for building our function called lengths that accepts an array of strings, it might look something like:


    // declare function named "lengths"
    // that accepts a arguments named "arrayOfStrings"
    function lengths(arrayOfStrings) {

      // we can log out our "arrayOfStrings"
      console.log(arrayOfStrings);

      // now, we want to "return" something... but what?

      return whateverVariableYouWantToReturnHere;

    }

2.  reference: MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

3.  Questions to ask Stack Overflow:  
    - How to find the length of a string in (Javascript, Ruby, etc....)?
    - How to find the length of each item in an array in (Javascript, Ruby, etc....)?

4.  Example of how the answer should look

`var words = ["hello", "what", "is", "up", "dude"]
  lengths(words)  # => [5, 4, 2, 2, 4]`






