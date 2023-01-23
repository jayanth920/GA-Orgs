![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Pass by Value, Pass by Reference.

## Objectives.

* Understand that changing a primitive will **not** have "side effects". The change will be limited to that variable.
* Understand that changing an object **may** have side effects. Other variables pointing to the same object will reflect the change.  
* Understand that javascript **always** passes function arguments by value.



## Primitives always "Pass by Value"  

Primitives, *(boolean, number, string, null, undefined)*, are all passed by value. 

```
// pass value of num1 to num2
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

// change num1's value.
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
// pass value of name1 to name2
var name1 = "tom";
var name2 = name1;
console.log("name1 is " + name1); // tom
console.log("name2 is " + name2); // tom
/*
 | name1 | "tom" |
 | name2 | "tom" |
 |  ...  | ...   |
*/

// change name1's value
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


```

## Lab

Draw a memory model for 

```
var jill = 'jill',
    jill_age = 35,
    joe = 'joe',
    joe_age = 55;

console.log('Joe is ' + joe_age);
console.log('Jill is ' + jill_age);

joe_age  = jill_age;
jill_age = 33;

console.log('Joe is ' + joe_age);
console.log('Jill is ' + jill_age);

// Draw the memory model.
```

## Objects always "Pass by Reference"

That's why they are called reference types/objects.

```
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

```

## Lab 
Draw the Memory Model for 

```
var jill = {
  name: 'jill',
  age: 35 
  },
  joe = {
    name: 'joe',
    age: 55
  };
console.log(joe.name + ' is ' + joe.age);
console.log(jill.name + ' is ' + jill.age);

var person1 = joe,
person2 = jill;

console.log('person1 name is ' + person1.name + ", age is " + person1.age);
console.log('person2 name is ' + person2.name + ", age is " + person2.age);

jill.age = 44;
joe.age = 66;

// See how changing jill and joe's age changed 
// person1 and person 2 ages.
console.log('person1 name ' + person1.name + ", age is " + person1.age);
console.log('person2 name ' + person2.name + ", age is " + person2.age);console.log(person2.name + ' is ' + person2.age);


```


## Passing Arguments to Functions.

Arguments passed to a function are always **"Passed by value"**. The value is actually the variable's value. This variable's value can be either a reference to an object OR the actual value.


This can be really confusing. 

### Passing a Primitive.

When passing a primitive to a function any changes made inside that function will **NOT** be seen outside that function.  

```
function addTen(num){  // 3
  num += 10;  // 4
  return num; // 5
};

var count = 20;  // 1
var result = addTen(count); //2, 6
console.log("count is " + count); //7
console.log("result is " + result);

// At Runtime the above will:
// 1. set count to be 20
/*
 | count | 20 |
 | ...   |    |
*/
// 2. Invoke the function addTen and pass 20 to it.
// 3. Set the addTen functions local variable, num, to 20.
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

```
### Passing a Reference Object.

When passing an object to a function any changes made inside that function will be seen outside that function.


```
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

```
