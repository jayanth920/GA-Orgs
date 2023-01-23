// Function that returns a function.
function addNum(num1){ // 2

  function addIt(num2){ // 6
    return num1 + num2; // 7
  };

  return addIt; // 3.
};

var addEleven = addNum(11); // 1, 4

var result = addEleven(15); // 5
console.log("result is " + result);

// HUH?????? WTF???

/////////////////////////////////
// At Compile Time
/////////////////////////////////

// A) Put variables addNum, addEleven and result in the
// global scope.

// B) Create a scope for addNum function and put in variables
// num1 and addIt

// C) Create a scope fo addIt function and put in variable num2.


/////////////////////////////////
// At Runtime, during Execution.
/////////////////////////////////

// 1. Calling addNum(11) invokes this function and passes the number 11

// 2. Set num1's value to 11
// Remember: num1 was put in addNum functions scope during compliation.
// Now we have a closure that contains the number 11.

// 3. Return a pointer to the addIt function

// 4. Set addEleven variable to point to the inner function, addIt, returned
// by addNum during the last step.

// 5. Invoke addEleven and pass it the number 15.

// 6. Set addIt num2 variable to the number 15

// 7. Add num1 and num2 and return it.
//  num1 comes from the closure created in step 2 above.
//  And we can access num1 because it's declared in an enclosing scope.
//  And we created a closure that has num1 set to 11 during step 2.

// Closure:
// Functions can access variables in the same or outer scope they are declared
// in.
// In fact this access can happen EVEN WHEN THE FUNCTION IS RUN OUTSIDE OF
// FUNCTION IT WAS DECLARED IN!!
