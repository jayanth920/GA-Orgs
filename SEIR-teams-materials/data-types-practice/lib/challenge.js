/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

console.log("challenge.js has been included!");

////////////////////////////////////////////////
// Please do not change the names of any of the variables!
////////////////////////////////////////////////

/*
 * Prompt 1:
 *
 *  A variable called myFavoriteNumber has been declared on one line; assign it a value on the next line.
 */

let myFavoriteNumber;

/*
 * Prompt 2:
 *
 * Three variables have been declared. The first one should be a string data type, the second should be a boolean data type, and the third one should be a number data type.
 */

let myFirstVariable;
let mySecondVariable;
let myThirdVariable;

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let myNumber;

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables. Be sure to add a space between the first and last names.
 */

let firstName;
let lastName;
let fullName;

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

let hello;
let world;
let message;

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below. The first one has been done for you!
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statement that is true
// G. Use greater than or equals (>=) to create a statement that is false

let sixA = 2 == 3;
let sixB;
let sixC;
let sixD;
let sixE;
let sixF;
let sixG;

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each sub-prompt so that the statement evaluates to true. The first one has been done for you as an example.
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = "Kevin";

// a _ b;
let sevenA = a < b;

// c _ d;
let sevenB;

// 'Name' ___ 'Name';
let sevenC;

// a _ b ___ c;
let sevenD;

// a _ a ___ d;
let sevenE;

// e ___ 'Kevin';
let sevenF;

// 48 ___ '48';
let sevenG;

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false. The first one has been done for you as an example.
 */

const var1 = 6;
const var2 = 100;
const var3 = -5;
const var4 = 3000;
const var5 = "Jelly Bean";

// var1 _ var2;
let eightA = var1 === var2;

// var3 _ var4;
let eightB;

// 'Peanut' ___ 'Peanut';
let eightC;

// var1 _ var2 ___ var3;
let eightD;

// var1 _ var1 ___ var4;
let eightE;

// var5 ___ 'Jelly Bean';
let eightF;

// 48 ___ '48';
let eightG;

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

const array1 = ["Marty Marion", "Marty Feldman", "Marty McFly", "Marty Marion"];
const array2 = [
  ["Marty Feldman", "Marty Marion"],
  ["Marty Stuart", "Marty McFly"],
  ["Marty Jannetty", "Marty Robbins"],
];
const array3 = [
  ["Marty Feldman", ["Marty Marion"]],
  ["Marty Stuart", ["Marty Janetty", ["Marty McFly"], "Marty Robbins"]],
];

// retrieve from array 1
let martyArray1 = array1[2];
// retrieve from array 2
let martyArray2 = array2;
// retrieve from array 3
let martyArray3 = array3;

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

const array4 = ["a", "b", "c", "d", "e"];

let secondToLast;

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const cathleen = ["Cathleen", 186, "New York"];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

// DO NOT MODIFY CODE BENEATH THIS LINE

module.exports = {
  myFavoriteNumber,
  myFirstVariable,
  mySecondVariable,
  myThirdVariable,
  myNumber,
  firstName,
  lastName,
  fullName,
  hello,
  world,
  message,
  sixA,
  sixB,
  sixC,
  sixD,
  sixE,
  sixF,
  sixG,
  sevenA,
  sevenB,
  sevenC,
  sevenD,
  sevenE,
  sevenF,
  sevenG,
  eightA,
  eightB,
  eightC,
  eightD,
  eightE,
  eightF,
  eightG,
  martyArray1,
  martyArray2,
  martyArray3,
  secondToLast,
  thom,
  karolin,
  kristyn,
  cathleen,
};
