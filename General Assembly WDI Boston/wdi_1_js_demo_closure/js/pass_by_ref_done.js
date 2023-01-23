/*****************************************
 Pass by Value
 Primitives, (boolean, number, string, null, undefined),
 are all passed by value.
*****************************************/
// each variable is totally separate. contains it's own number 5.
var num1 = 5;
var num2 = num1;
console.log("num1 is " + num1); // 5
console.log("num2 is " + num2); // 5
/*
 Memory:
 memory location for num1 contains the number 5
 memory location for num2 contains the number 5
 | num1 | 5  |
 | num2 | 5  |
 |  ... | ...|
*/

num1 = 44;
console.log("num1 is " + num1); // 44
console.log("num2 is " + num2); // 5

/*
 | num1 | 44  |
 | num2 | 5   |
 |  ... | ... |
*/

// Notice how changing num1 does NOT effect num2
// thats because each variable, num1 and num2, have their own
// copies of the number 5.

// Lets do this for a string now.
var name1 = "tom";
var name2 = name1;
console.log("name1 is " + name1); // tom
console.log("name2 is " + name2); // tom
/*
 | name1 | "tom" |
 | name2 | "tom" |
 |  ...  | ...   |
*/

name1 = "joe";
console.log("name1 is " + name1); // joe
console.log("name2 is " + name2); // tom
/*
 | name1 | "joe" |
 | name2 | "tom" |
 |  ...  | ...   |
*/
// Notice how changing name1 does NOT effect name2
// Thats because each variable, name1 and name2, each
// have their own copies of the string "tom".
// Changing one does NOT effect the other.


/*****************************************
 Pass by Reference
 Objects, i.e. non-primitives, are all passed
 by reference.
 This is very different that above, pass by value!
*****************************************/

// Create a new object instance in memory. Lets call this <object>
// Make person1 point to this <object>
var person1 = {
  name: 'tom',
  age: 57
};

// Make person2 also point to this <object>
// NOTE: WE ARE ONLY GIVING person2 a ptr to <object>!!!
var person2 = person1;

// should be the same cuz both person1 and person2
// are pointing to <object>
console.log("person1.name is " + person1.name);  // "tom"
console.log("person2.name is " + person2.name);  // "tom"

/*
 Memory:
 memory location for person1 contains a pointer to <object>
 memory location for person2 contains a pointer to <object>

 | person1          | ptr to <object> |
 | person2          | ptr to <object> |
 |  ...             | ...             |
 | <object>         |                 |
 | <object>.name    | "tom"           |
 | <object>.age     | 57              |
*/

// Accessing person1.name will:
// 1. Find person1 in memory.
// 2. Get it's pointer
// 3. Get the object pointed to.
// 4. Get the property value for name

// Change person1.name property to "jill"
person1.name = "jill";

// should be the same cuz both person1 and person2
// are pointing to <object>
console.log("person1.name is " + person1.name);  // "jill"
console.log("person2.name is " + person2.name);  // "jill"

/*
 | person1       | ptr to <object> |
 | person2       | ptr to <object> |
 |  ...          | ...             |
 | <object>      |                 |
 | <object>.name | "jill"          |
 | <object>.age  | 57              |
*/


/*****************************************
 Argument Passing
 All arguments are passed by value.
 This can be confusing so lets explain.
 *****************************************/

////////////////////////////////////////
// Passing a Primitive.
function addTen(num){  // 3
  num += 10;  // 4
  return num; // 5
};

var count = 20;  // 1
var result = addTen(count); //2, 6
console.log("count is " + count); //7
console.log("result is " + result);


// 1. set count to be 20
/*
 | count | 20 |
 | ...   |    |
*/
// 2. Invoke the function addTen and pass 20 to it.
// 3. Set the addTen functons local variable, num, to 20.
/*
 | count | 20 |
 | ...   |    |
 | num   | 20 |
 | ...   |    |
*/
// 4. Add 10 to num
/*
 | count | 20 |
 | ...   |    |
 | num   | 30 |
 | ...   |    |
*/
// 5. Return 30 from addTen function. This will remove num from
// memory also.
// 6. Set result with value, 30, returned from addTen.
/*
 | count | 20 |
 | result| 30 |
 | ...   |    |
*/
// 7. Print out value in count, 20, and value in result, 30


////////////////////////////////////////
// Passing a Reference Object.

var person1 = {
  name: 'tom',
  age: 57
}; // 1.

var removeYears = function(p){ //3
  p.age -= 10; // 4
};

removeYears(person1); // 2
console.log("person1 age is " + person1.age); //5

// 1. Created person1 variable pointing to <object>
// <object> has a name and age property set to
// 'tom' and 57.
/*
 | person1       | ptr to <object> |
 | ...           | ...             |
 | <object>      |                 |
 | <object>.name | 'tom'           |
 | <object>.age  | 57              |
 | ...           | ...             |
*/

// 2. Invoke the removeYears function
// 3. Set the local variable p of the removeYears
// function to point at the <object>
/*
 | person1       | ptr to <object> |
 | ...           | ...             |
 | <object>      |                 |
 | <object>.name | 'tom'           |
 | <object>.age  | 57              |
 | ...           | ...             |
 | p             | ptr to <object> |
 | ...           | ...             |
*/
// 4. subtract 10 from p.age. This will subtract 10 from <object>.age
/*
 | person1       | ptr to <object> |
 | ...           | ...             |
 | <object>      |                 |
 | <object>.name | 'tom'           |
 | <object>.age  | 47              |
 | ...           | ...             |
 | p             | ptr to <object> |
 | ...           | ...             |
 */
// 5. print out "person1 age is 47".
