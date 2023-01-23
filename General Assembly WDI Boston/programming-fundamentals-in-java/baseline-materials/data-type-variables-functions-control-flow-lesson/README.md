---
title: Data Types and Variables
duration: "1:30"
creator:
    name: Kristen Tonga
    city: NYC
---


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Data Types and Variables


### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Describe the different types of variables (locals, instance, constants) and when to use them
- Use class methods to manipulate data in the Math and String classes
- Describe the difference between NaN and null
- Use if/else if/else conditionals to control program flow based on boolean conditions
- Use switch conditionals to control program flow based on explicit conditions
- Use comparison operators to evaluate and compare statements
- Use boolean logic (!, &&, ||) to combine and manipulate conditionals
- Loop over a code block one or more times
- Describe how parameters relate to functions
- Compare different types of variable scope
- Identify the parts of a method
- Use naming conventions for methods and variables
- Create and call a function that accepts parameters to solve a problem

### STUDENT PRE-WORK

*Before this lesson, you should already be able to:*
- List a few of the basic Java data types
- Assign a variable in Java (`int a = 1;`)
- Describe Objects in Java

### INSTRUCTOR PREP

*Before this lesson, instructors will need to:*
- Open and run the starter and solution code
- Set up IntelliJ with JUnit
- Modify sections and checks as needed

---

## Opening (5 min)

In programming, we need a way to store information while our programs are running. This could be anything from names, to numbers, to dates, and many other things, which are all known as `data types`. These data types are stored in `variables`, just like algebra class. Today we are going to be exploring how data types and variables are the very basic building blocks of programming and how we actually use them to store information in our programs.

## Introduction: Data types in Java (10 mins)

From the Wikipedia:

In computer science and computer programming, a data type or simply type is a classification identifying one of various types of data that determines:
- the possible values for that type;
- the operations that can be done on values of that type;
- the meaning of the data;
- and the way values of that type can be stored.

Data types are similar across different languages, including English:

> Instructor Note: Put the categories on the board and ask for students to provide the data type, or in some other way create a list on the board that includes the data types below.  Include both lowercase primitive and capitalized Object types.  This chart will be referenced later.

|Category    | DataType                     | Description          | Example |
|------------|------------------------------|----------------------|---------|
|True/False  | boolean, Boolean                   | Represents either true or false                               |true, false|
|Integers    | short, int, Integer, long, Long    | Whole numbers, with no delimiter. Can optionally have underscores to make large numbers easier to read	| 42, 1024, 1_000_000 |
|Decimals    | float, Float, double, Double       | Decimals, with no delimiter                                   | '42.123', 2.5' |
|Characters  | char                               | Single character, surrounded by single quotes                 | 'a', 'A'|
|Strings     | String                             | Single words or sentences, surrounded by double quotes        | "lots of kittens", "a lazy lizard"    |                                                                | true, false


There are also a few odd ones:
- Byte, which is one bit of data. You don't need to worry about it right now.  
- Collections (we'll talk more about this Week 3)

We'll elaborate all of the categories on the board, and show you some helper methods to help you manipulate them.

> Check: Come up with a few examples of data and have students predict what type of data it falls into.

## Demo: Lets start with Numbers (15 mins)

#### Starting an IntelliJ Project

> Instructor Note: Create a new IntelliJ Project, describing each step aloud.

Steps to Create a new IntelliJ Project: File > New > Project > Next > Create from Template.
Note: you are given a class, that is named the same as the file with a `main` method inside it.

Create a class called `DataTypeVariable`.

Also Note: What does the `//` mean?  This represents a comment. You can also replace `//` with a multi-line comment `/* write your code here */`.  Comments are used to clearly articulate what your code is doing so that other developers can easily jump into a project and understand what's going on.

We'll talk more about all of these pieces later, for now, write your code directly within the main method, where the comment says, `//Write your code here`.

#### Decimals vs Integers

> Check: As you code the following examples, ask the students the following. If they guess correctly, ask them to explain why.

First off, lets talk a bit about those Number data types.

What do you expect to be printed to the console from your `main` class?

```java
int num1 = 5;
System.out.println("num1, type int = " + num1);
=> num1 = 2
```

Nice! Let's take a look at the value in main:

```java
int num2 = 5 / 2;
System.out.println("num2, type int = 5/2 = " + num2);
=> num2 = 2
```

But Why is `num2` not 2.5? Well, in low-level languages (unlike JavaScript, Ruby or PHP) numbers are strictly typed, and a type is either an integer or decimal.  An int stores a Integer, not a decimal, as demonstrated in the previous function.

So, what sort of variable would we use if we wanted to assign a variable to a decimal?
How about a float?


```java
float num3 = 5 / 2;
System.out.println("num3, type float = 5/2 = " + num3);
=> num3 = 2
```

> Check: That didn't work quite as expected. Can anyone guess why?

Because both 5 and 2 are automatically assigned data type `int`, when the calculation is done the answer is also an `int` ( `float a = (float) int a = int b / int c;` ). We must tell the computer that the divisors are of a decimal type, not an integer type.


```java
float num4 = 5f / 2f;
System.out.println("num4, type float = 5f/2f = " + num4);
=> num4 = 2.5
```

```java
double num5 = 5d / 2d;
System.out.println("num5, type double = 5d/2d " + num5);
=> num5 = 2.5
```

Note: In the previous example, we used both a float and a double data type to save decimal numbers.  

> Check: What is the difference between float and double and which should you use?

#### Number data types and Bits

To answer this question, it is helpful to understand that a data type defines not only the type of data but also the methods that can be used to manipulate that data. The *primitive* data types in Java also has a certain pre-assigned size in memory. This is represented in a number of bits.

| Name  | Width in bits | Range    |
|-------|---------------|----------|
| float   | 32          | 3.4e–038 to 3.4e+038 |
| double  | 64          | 1.7e–308 to 1.7e+308 |

More memory means more information can fit into that variable. Double's are much larger than floats.
What does that mean for working with decimals? Floats are more memory efficient, and doubles provide more accuracy.

Double's are recommended for currency and where accuracy is important.
There is also a `BigDecimal` class, used when even more decimal points are needed.

The same data type differentiation exists in Integers between shorts (did you notice it in our list), ints and longs.

| Name  | Width in bits | Range    |
|-------|---------------|----------|
| short | 16           | -32,768 to 32,768                  |
| int   | 32           | -(2^31) to 2^31 (approx 2 billion) |
| long  | 64           | -(2^63) to 2^63                    |

`int` will cover almost all of your Integer needs.

> Check: What is the most common data type for decimals? What is the most common data type for integers?


#### Using Standard Arithmetic Operators

Now that we understand a bit more about the Number data types, lets look a bit at what we can do with them.

The standard arithmetic operators - that you've been learning since grade school:

> Instructor Note: Depending on time, and student understanding, this can be breezed over.  Be sure to mention modulus. as it is the one odd one.  If going through each example, ask students to calculate what will be printed to the console.

``` java
System.out.println(2 + 2);
System.out.println(2 - 2);
System.out.println(2 / 2);
System.out.println(2 * 2);
System.out.println(2 % 2); // What does this do??
```

Bonus: let adds and subtracts take in a arbitrary number of operands!

## Demo: Using Special number Operators (10 mins)

Coding languages can be a little cheap with the number of operations they allow you to do.
For example, how do you square or cube a number? There is a special 'Math' Object, provided by Java, that has some very useful methods.  Follow along!


Taking a number to a 'power' ? Then just use `Math.pow(num1,num2)`
``` java
// 3^2 becomes
System.out.println( Math.pow(3,2) );
=> 4
```

Taking a square root ? Then just use `Math.sqrt(num1)`
``` java
// √(4) becomes
Math.sqrt(4);
=> 2
```

Need a random number? Then use `Math.random()`.
``` java
// returns double value with positive sign greater than or equal to 0.0 and less than 1.0
Math.random()
=> ?
// returns random number in range
int range = Math.abs(max - min) + 1;
(Math.random() * range) + min;
```

>Check: Who provides the Math object? Where do you think you might be able to find more information?  ([Oracle Math Documentation](https://docs.oracle.com/javase/7/docs/api/java/lang/Math.html))

## Introduction: Primitives vs. Objects (10 mins)

Before we get into Strings, let's take a step back. Have you noticed that all the data types we've used so far are lowercase? What do you notice about the `String` data type?

What is the difference?  Do you notice that it is capitalized?  This is a naming convention that is used to distinguish between primitive and Object data types.

**Primitive data types**: are a piece of data and are **pass-by-value**.  This means: Using a primitive as a parameter is like writing a number on a post-it note and handing it off. `int a = 1; ` is a *copy* of the number data, not a reference to where the data is stored;

**Object data types**: contain attributes and methods, and start with a capital letter. These are **pass-by-reference**.

In other words: Using an object is like using a dewi decimal system in the library. A variable assigned to an Object is given a number that references where a book can be found in the computer's library but is not a copy of the book itself. `Person a = new Person(Nancy, Drew); ` is a reference to the data Object that contains all info and methods in the class of that object.

> Check: Discuss withe person next to you: What does a primitive contain? What does an object contain?  What's one easy way to tell the difference between an Object and a primitive data type? Be ready to share out!

#### Words: char and Strings

With that basic introduction to the two larger sorts of data types, primitives and Objects, lets talk about words.

A `char` is a primitive data type.  What is an example of a `char`?

A String is capitalized because a String is an Object.

> Check: Discuss with the person next to you: What is an object? Be ready to share out!

Strings are collections of letters and symbols known as *characters*, and we use them to deal with words and text.

Strings are special - String is actually a array of 'char' data:

```java
String str = "abc";
// is actually
char data[] = {'a', 'b', 'c'};
```

## Demo: Creating a new string (15 mins)

Strings are a weird type of Object.

Try this with me.  You can instantiate (or create an instance) a String in a few ways:

```java
//variable can be assigned like a primitive
String a = "I'm a string."
```

Which is really short for:
``` java
//variable assigned like an Object
String a = new String("I'm a string too!")
```

#### String helper methods

Because a String is an Object, it has pre-defined methods we can use.

To find the length of a string, use it's `length` property:

```java
"hello".length();
=> 5
```

To get the first letter of a String:

```java
"hello".charAt(0);
=> "h"
```

To replace part of a String:

```java
"hello world".replace("hello", "goodbye");
=> "goodbye world"
```

To make a String uppercase:

```java
"hello".toUpperCase();
=> "HELLO"
```

To add two Strings together:
```java
"hello".concat(" world");
=> "hello world"
```

Remember, Strings are special Objects that look like primitives. Use the `str1.concat(str2)` function.
Or concatenate (add together) using + :

```java
String twoStringsTogether = "Hello" + " World";
=> "Hello World"
```

> Instructor Note: Introduce other methods as seen fit.  May want to explain when concatenation might be used.

##### A special note on Equality among Strings:

What if you want to compare two strings?

Can you remember from the pre-work how to compare variables?

```java
boolean areEqual = (1 == 2);
=> false
```

What's special about strings?

```java
String blue = "blue";
boolean withSign = (blue == "blue");            //=> true
boolean withWords = (blue).equals("blue");      //=> true
```

Do you know which one of these would be preferred? Well, lets do another example to show you which and why:

```java
String blue = "blue";
String bl = "bl";
String ue = "ue";
System.out.println(bl+ue);                      //=> blue
boolean withSigns = (bl+ue == blue);            //=> false
boolean withWords = (bl+ue).equals(blue);       //=> true
```

Why isn't `withSigns` true? The print out looks the same. Remember, String is actually an object, and Objects are **passed by reference.**

`==` compares the place where the object was stored on the computer to access whether they are the same.  `String blue` has a reference to where it is stored on the computer, and that is a different place than `String bl` is stored. `equals`, on the other hand, is a method that can be called on an instance(`str1`) of a String Object. And accesses whether the `char` arrays in each String are the same, not whether the references are the same.

The long and short of it, use `equals` when comparing strings.

> Check: Why can we call methods on a variable with data type string but not on an int?


## Demo: Converting between data types (10 mins)

Sometimes it is necessary to convert between data types.  User input is _always_ a string - like when you enter your email address, age, income, etc.  If you'd like to operate on those numbers though, you'll have convert it to a type of number.

Remember how we talked about the size of primitive data types? An float is smaller than a double, and a double smaller than a long?

When converting from smaller types to larger types, for example, int(4 byte) to double(8 byte), conversion is done automatically. This is called **implicit casting**.

```java
int a = 100;
double b = a;
System.out.println(b);
```

If, on the other hand, you are converting from a bigger data type to a smaller data type, for example, a double(8 byte) to an int(4 byte), the change in data type must be clearly marked. This is called **explicit casting**.

```java
double a = 100.7;
int b = (int) a;
System.out.println(b);
```

While that is useful for numbers, to cast successfully, a variable must be an **instance of** that second Object.
What do you think would happen if you tried to cast a String to an int?

There is a different way to convert Strings to numbers.

Did you notice that there is both an `int` and an `Integer` data type? The `Integer` data type is a wrapper around an int that provides certain methods.
For example, to convert an String to an Integer, one can use:

```java
String strValue = "42";
int intValue = new Integer(strValue).intValue();
```

Similar methods exist for all of the wrappers.

#### NaN

If a String is converted to a number but contains an invalid character, the result of the conversion will be **NaN**, which stands for: Not A Number.

NaN is toxic, and if a calculation is attempted on that variable or a method called subsequently, your program will break.

Test for NaN using `isNaN()`.

#### Null

A null value is an empty value.  Taken from a StackOverflow post:

"Zero" is a value. It is the unique, known quantity of zero, which is meaningful in arithmetic and other math.

"Null" is a non-value. It is a "placeholder" for a data value that is not known or not specified. It is only meaningful in this context;

> Check: When might you get NaN value?  What is a null value, by the way?

***

<a name="conclusion"></a>
## Conclusion (5 mins)

- Identify the different types of data?
- What type of data do you think is passed as a web request?


### ADDITIONAL RESOURCES
- [Oracle Java Docs on Primitive Data Types](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)
- [Oracle Java Docs on Math Object](https://docs.oracle.com/javase/7/docs/api/java/lang/Math.html)

## Opening (5 mins)

From Culttt.com: "Control Flow Structures are an important aspect of programming languages that allow your code to take certain actions based on a variety of scenarios. Control Flow is a fundamental concept in programming that allows you to dictate how your code runs under different conditions or until a certain condition is met."

## Introduction: Logical operators and control flow (10 mins)

Java supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application.


#### Block Statements

Statements meant to be executed after a control flow operation will be grouped into what is called a **block statement**. These statements are wrapped into a pair of curly braces:

```java
{
  System.out.println("hello");
  System.out.println("roar");
}
```

#### Block scope

We've seen that scope changes depending on whether a variable is defined in the class (we use the `mVariableName` convention for these), or in a method (these variables have local scope only and are not available outside that method).

In Java, variables defined in **block statements** modify scope, meaning those variables are not available outside of the block.

> Instructor Note: Show the scope error in the IDE, then correct it as shown in the second code block.

For example:

```java
boolean beautiful = true;
if (beautiful)
{
  String name = "jay";
}
System.out.println(name); // symbol 'name' cannot be resolved
```

Variables defined in **block statements** are not available outside of the curly braces. How might we resolve this issue?

> Instructor note: first try to print out name without an else statement, then add the else, when the program still won't compile.

```java
boolean beautiful = true;
String name = "pepe";

if (beautiful)
{
  name = "robin"; // use the predefined variable
}
System.out.println(name);
//=> robin
```

## Demo: Conditional statements (10 mins)

Conditional statements are a way of essentially skipping over a block of code if it does not pass a boolean expression. Java supports two conditional statements: `if`...`else` and `switch`.

#### if...else statement

`if(expr) { code }`

... means run the `code` block if `expr` is `true`

```java
if (1 > 0) {
  System.out.println("hi");
}
//=> hi
```

When you need to test more than one case, you may use `else if`:

```java
String name = "kittens";
if (name.equals("puppies")) {
    name += "!!!";
} else if (name.equals("kittens")) {
    name += "!!";
} else {
    name = "!" + name;
}
System.out.println(name);
//=> "kittens!!"
```

#### Ternary Operator

Java has a ternary operator for conditional expressions. You can think about the ternary operator as a concise "if-else in one line":

```java
int age = 12;

String allowed = (age > 18) ? "yes" : "no";

System.out.println(allowed);
//=> "no"
```

#### Truth-y & False-y

It's important to know that all of the following become `false` when converted to a Boolean:

> Instructor Note: This snippet is optional.

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

For example:

```java
Boolean b = new Boolean("");
System.out.println(b);
//=> false
```

This can be vary helpful when checking if conditions exist, are undefined, or if variables don't hold value.

<!-- Add more on truth-y  -->


## Guided Practice: Boolean/Logical Operators (15 mins)

[Logical operators](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html) will always return a boolean value `true` or `false`.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`

#### && (AND)

Do these with me!

The `&&` operator requires both values to the left and right of the operator to be `true` in order to return the entire statement as `true`:

```java
boolean result = false;

if(true && true) {
  result = true;
}
System.out.println(result);
//=> true
```

Any other combination using the `&&` operator is `false`.  What happens if I check `true && false`?

```java
boolean result = false;

if(true && false) {
  result = true;
}
System.out.println(result);
//=> false
```

```java
boolean result = false;

if(false && false) {
  result = true;
}
System.out.println(result);
//=> false
```

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

So, now, if I do `true || false`, what will be returned?

```java
if(true || false) {
  System.out.println("true");
}
//=> true

if(false || true) {
  System.out.println("true");
}
//=> true

if(false || false) {
    System.out.println("true");
}
//=> ... silence ...
```

>Check: What is the only combination that will return false?

Only `false || false` will return `false`

The `!` takes a value and returns the opposite boolean value, i.e.

```java
!(true)
//=> false
```

The `&&` and `||` operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first.

> Check: Can you think of a time when this might be useful?

This is useful for checking for null objects before accessing their attributes:

```java
if(instructor != null && instructor.getName().equals("drew")) {
  System.out.println("davis")
}
```

In this case, if the first operand `instructor != null` is false, then the second operand `instructor.getName().equals("drew")` will not be evaluated. The expression is basically saying "we already know the whole `&&` expression is false, because `instructor != null` is false. Why bother dealing with the second operand?"

This is also important because a `Null Pointer Exception` will be thrown if we try to call a method using "dot notation" on a null Object reference.

## Demo: Comparison Operators (10 mins)

[Comparisons](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html) in Java can be made on primitives using `<`, `>`, `<=`, and `>=`.

> Check: What is a primitive data type?

```java
'A' > 'a'
//=> false

'b' > 'a'
//=> true

12 > 12
//=> false

```

Note that you _cannot_ do:

```java
12 >= "12"

// or

"Apple" > "Oranges"
```

#### Equality Operator `==`

> Check: Can you remember from the pre-work how to compare variables?

When verifying equality between primitives use double equal `==`:

```java
System.out.println(1 == 2);
=> false
```

But what about with Objects like strings?

##### A special note on Equality among Strings:

There are actually two ways to compare the equality of strings.

```java
String blue = "blue";
boolean withSign = (blue == "blue");            //=> true
boolean withWords = (blue).equals("blue");      //=> true
```

Do you know which one of these would be preferred?

Well, lets do another example to show you which and why:

```java
String blue = "blue";
String bl = "bl";
String ue = "ue";
System.out.println(bl+ue);                      //=> blue
boolean withSigns = (bl+ue == blue);            //=> false
boolean withWords = (bl+ue).equals(blue);       //=> true
```

Why isn't `withSigns` true? The print out looks the same.

Well, Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we say Objects are **passed by reference** while things like ints and floats are **passed by value**.

`==` compares the place where the object was stored on the computer.

What this means is that Java doesn't care if they look similar. It only compares whether or not they are the exact same object in memory. In each of the cases above, when checking for equality, we're actually comparing two objects that are in two different places in memory.

`String blue` has a reference to where it is stored on the computer, and that is a different place than `String bl` is stored. They're not exactly "the same" according to `==`.

`equals()`, on the other hand, is a method that can be called on an instance(`str1`) of a String Object. And this method checks whether the `char` arrays in each String are the same, not whether the references are the same.

The long and short of it, use `equals` when comparing strings.

> Check: Why can we call methods on a variable with data type string but not on an int?

#### !=

There is also an `!=` operator, which is the inverse `==`.

## Introduction: Switch Statement (10 mins)

The switch statement can be used for multiple branches based on a number or string:

```java
  String food = "apple";

  switch(food) {
    case "pear":
      System.out.println("I like pears");
      break;
    case "apple":
      System.out.println("I like apples");
      break;
    default:
      System.out.println("No favourite");
  }
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`) and evaluates the expressions beneath them if there is a match. It uses `String.equals` method in this case, or `==` in the case of primitives, to evaluate equality.

The default clause is optional.

**Note: Breaks are important!** If you don't put a break statement, the expression will continue to be evaluated for each following case. This might cause unintended consequences.

For example if you eliminate the break statements:

```java
  String food = "apple";

  switch(food) {
    case "pear":
      System.out.println("I like pears");
    case "apple":
      System.out.println("I like apples");
    default:
      System.out.println("No favourite");
  }
```

The result would be:
```
I like apples
No favourite
```


If `food = "pear"` then the output would be:

```
I like pears  
I like apples
No favourite
```

Thi is not exactly what we had intended.

## Demo: Loops (15 mins)

> Instructor Note: Students should follow along if they feel up to it.

In just about all programming languages, loop-ing exist.  A loop is a statement or block of code that will continue to execute while or until a condition exists.

`while` loops, for example, will run a block of code **while** a condition is `true`.

Java has `while` loops and `do-while` loops.

The `while` loop is good for basic looping, but there's a possibility it will never get run.

> Check: In what case will the while loop never run?

```java
while (true) {
  // an infinite loop!
}
```

Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

```java
int input = 0;
do {
  System.out.println(input++);
} while (input < 10);
```

You can use looping in combination with iteration: a way of incrementally repeating a task.

For example, using a for loop:

```java
int iterations = 10;
for (int i = 0; i < iterations; i++) {
  System.out.println(i);
}
```

Notice the placement of the comma and semi-colons, and let's take a look at what each of the parts do:

1. `int i = 0;` is the **initialization** phase.
  - This is executed once, before the loop begins.
  - Note that `int i` is declared within this phase. This means that the lifespan of `i` is limited to within the for loop, which is a much cleaner, and leads to less problems down the line.  

2. `i < iterations;` is the **termination** phase.
  - Every time the loop evaluates, it checks this statement.
  - If this statement evaluates to `false`, the loop terminates.
  - This is equivalent to the `while` section of the `do...while` loop.

3. `i++` is the **increment** expression.
  - This happens every time the loop evaluates.
  - This is equivalent to the `do` section of the `do...while` loop.
  - In this case, each loop, `i` is incremented by 1.

## Fizz Buzz - Independent Practice (15 minutes)

Fizz buzz is a game about division. Create a program that will iterate through numbers from 1 to 101 and log each number in the console.

- In the loop every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
- If the number is divisible by  **5**, the word "buzz" should be logged.
- If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

Hint: Remember the _modulus_ operator?

A typical output would look like this:

<img src="https://i.imgur.com/avioQC8.png" width="400px">

#### Solution

```java
for (int i = 1; i < 101; i++) {

  if((i % 3 == 0) && (i % 5 == 0)) {
    System.out.println("fizzbuzz");
  } else if(i % 3 == 0) {
    System.out.println("fizz");
  } else if(i % 5 == 0) {
    System.out.println("buzz");
  } else {
    System.out.println(i);
  }
}
```

## Conclusion (5 mins)
These are some of the foundational tools you'll use in many of your applications. You'll probably need to refresh yourself on the exact syntax a few times before you memorize it, but it's important to be able to remember, these core "control flow" concepts, in general, because they'll come up in pretty much every programming language you'll ever encounter.

- [Control Flow](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html)

## Opening (5 mins)

Previously we covered variables and data types, two extremely important building blocks of all programming languages. Today, we are going to learn about two more topics: function and scope. Functions are essentially re-usable chunks of code that complete some task, and scope is defining where the variables actually have relevance in your program.

## Introduction: Writing Functions and Languages (15 mins)

Programming, and Java in particular can be a tough skill to master. There are many different topics to cover, but we are going to concentrate on the basics first. After learning the basics over the next few days, you will be able to easily produce all of the code needed to produce something similar to the following fun little program in a manner of minutes.

> Check: Can students run the Example.java code from the opening-demo solution directory.

#### How computer programs work

> Instructor note: Consider toning down the details in this section if your students don't have a very technical background

Before we talk about functions and scope in detail, there are a few very important things to understand about how programming languages actually work. We are first going to explore how the code you write is actually read and run by the computer.

The code that you write *must* be translated into a form that the computer can understand.

Source code is human readable, *we hope*. This source code may be translated into a set of 1's and 0's that a computer's CPU can understand. Yep, the CPU is a chip on the computer that does all the processing.  There is a reason it's called the Central Processing Unit, or CPU.

`Source Code`  ==>  `1's and 0's`

...or, the source code may be translated into a another type of language, byte code, that can be understood by a Virtual Machine(VM). A Virtual Machine executes a program, by translating each VM readable statement into a sequence of one or more subroutines already compiled into machine code. In the case of Java, the JVM understands bytecode.

`Source Code` ==> `byte code`(understood by JVM and mapped to `1's and 0's` that the computer's CPU can understand)

#### Compiled Languages

Some languages are *explicitly* compiled. In other words, the programmer must run particular commands to invoke compilation.

**Java** is one of these languages. To compile java code, the programmer must run a command like:

`javac MainActivity java MainActivity.class`

The `javac` command translates the Java code in the YourFile.java file into an *executable* or *binary* file (a YourFile.class file) that contains the `bytecode` understood by the JVM. This is what is done under the hood by a IDE like IntelliJ.

The *JVM* is the **Java** compiler.

So here's what happens:

`Source Code`  ==>  `1's and 0's`

`MainActivity.java`  ==>  `MainActivity.class`

#### Interpreted Languages

Some languages do *not* require the programmer to explicitly run a compiler. **JavaScript**, and **Ruby** are a couple of interpreted languages. There is still compilation being done, but it's done automatically.

`Source Code` ==> `byte code`

#### From Source to Running Code

There are two basic phases to go through when going from code in a file to a program running.

- Compile Time - a phase when the source code is translated to another form. For example, when we run the `javac HelloWorld` command, java program will compile java to an intermediate language/bytecode that the Java Virtual Machine(JVM) understands.

- Runtime - a phase when the computer actually runs each statement in the program.  For example, when we run the `java HelloWorld.class` this is when the computer runs the java program bytecode.


#### Main Method
Let's start by looking at our first method! We've actually used this before, but haven't had the chance to talk about what it actually means.

The main method is where everything starts.
From the Oracle Java Documentation:

In the Java programming language, every application must contain a main method whose signature is:

```java
public static void main(String[] args)
```

> Instructor Note: Consider writing the main method signature on the board, so you can underline and point to things (modifiers, parameters) as you go through the following.

The modifiers public and static can be written in either order (public static or static public), but the convention is to use public static as shown above. You can name the argument anything you want, but most programmers choose "args" or "argv".

The main method is similar to the main function in C and C++; it's the entry point for your application and will subsequently invoke all the other methods required by your program.

The main method accepts a single argument: an array of elements of type String.

```java
public static void main(String[] args)
```

This array is the mechanism through which the runtime system passes information to your application. For example:

```
java MyApp arg1 arg2
```

Each string in the array is called a command-line argument. Command-line arguments let users affect the operation of the application without recompiling it.

> Check: Describe what an `entry point` means.


## Demo: Let's break it down (15 mins)

Let's look at what the parts of this method do. Let's start with the basics, which we covered a bit in explaining the main method..

> Instructor Note: Write method on the board (or add body to main method signature, at the appropriate time) and underline and label each part as you go through the following sections.

```java
public                     void            interestingMethod(  String input  )     throws IOException
//<modifiers/visibility>  <return type>    <method name>   (  <parameters>  )     <Exception list>
{
<opening brace>
    System.out.println("I am making" + input + "interesting!")
    <method body>
}
<closing brace>

```

#### Modifiers

Modifiers are used to modify how a method can be called.

Access Modifiers include:
- private *(visible only to the class)*
- protected *(visible to the package and all subclasses)*
- public *(visible to the world)*
- friendly *(when none is specified, this is the default)*

Non-Access Modifiers include:
- static *(for creating class methods and variables)*
- final *(for making something permanent)*
- abstract *(to create abstract classes and methods)*
- synchronized / volatile *(used for threads)*


We'll explain more of what all these keywords mean in later lessons.  For now, use `public`!

>Instructor Note: Refer back to main method and point out `static` modifier. Perhaps eliminate static from a method and point out the Lint error **

Any method that is called from within a static context must also be static. So, for all methods, for now use, `public static`. Again, we'll explain more what this means later.


#### Return Type

A method can return a value, but the type of that returned data must be specified so that the calling function knows what to do with it.

>Instructor Note: Invite students to code along if they wish. Create a new java program, using the given console template from IntelliJ, or create a basic class with an inner main method. Then code the following two methods.  Use the commented out print statements to explain local scope.

The problem:

```java
class Main {
    int mSum;
    public static void main(String[] args) {
        getSum();
        // System.out.println(sum); // not available
    }
    public static void getSum() {
        int sum = 2 + 2;
        System.out.println(sum);
    }
  }
```

The solution:

```java
class Main {
    int mSum;
    public static void main(String[] args) {
        int returned = returnSum();
        System.out.println(returned);
    }
    // public static void getSum() {
        // int sum = 2 + 2;
        // System.out.println(sum);
    // }
    public static int returnSum() {
        int sum = 2 + 2;
        System.out.println(sum);
        return sum;
    }
  }
```

A function executes until it reaches a `return` statement or a closing curly brace.  If a data type has been specified, that sort of data (or null) must be returned or the code will not compile.

Another solution, if it wasn't appropriate to use a return type, would be to use a global variable.

> Check: What do you think a global variable allows you to do?

Global variables are defined at the top of a class, and by convention are named using `mVariableName`.

```java
class Main {
    int mSum;
    public static void main(String[] args) {
        getSum();
        System.out.println(mSum);
    }
    public static void getSum() {
        int sum = 2 + 2;
        System.out.println(sum);
        System.out.println(mSum);
        mSum = sum;
    }
  }
```

> Instructor Note: Give an example of when it is appropriate to use a return type, and another example when a global variable is more appropriate.

## Independent Practice: Discuss (10 mins)

Take 5 minutes, and discuss these questions with the person next to you:

- What are some data types a method could return?
- Why might you want to return a value from a method?  
What is the naming convention for global variables and where do you put them?

Be ready to share!

> Instructor Note: Give students 1-2 minutes to share.


## Demo: More Functions! (10 mins)

#### Method Name
This is what the method is called.

It's important to be explicit in the naming of your method so that just by looking at the title - a new developer can come in and can understand what the method will do.

By convention, a method name should be a **verb** in *camel case* that starts in *lowercase*.

Ex: `getName()`, not `GetName()`, nor `getname()`, nor `get_name()`.


#### Parameters (Enclosed within parenthesis)

Parameters are arguments passed into the function when it is called. This makes a function much more dynamic.

Let's take a look back at the sum method.

> Check: What would you need to do if you wanted to pass in a number to this method?

```java
public static int returnSum(int num1) {
    int sum = num1 + num1;
    return sum;
}
```

> Check: How about two numbers?

```java
public static int returnSum(int num1, int num2) {
    int sum = num1 + num2;
    return sum;
}
```

Now, note, the method can be called like so:
```java
public static void main(String[] args) {
    int returned = returnSum(2,4);
    System.out.println(returned);
    int returned = returnSum(10,52);
    System.out.println(returned);
}
```

>Instructor Note: Emphasize the ability to reuse code without re-writing it. Remind students of the `DRY` principle.

It is also possible to have a return type for an unknown number of arguments, which can be declared like so:
```java
public static void myFunction(String... vars) {}
```

or like so:

```java
public static void myFunction(String[] vars) {}
```

These two signatures the same thing under the covers. From where does it look familiar?

The main class! Like main, myFunction will take an indefinite amount of parameters of the type String. For now, just know it exists.

In java, if a method declares a parameter, that *parameter* is required to be sent as an *argument* from the calling method.


#### Method Body (Enclosed within curly braces)

This is where the main functionality of your method will be called.


## Guided Practice: Writing Functions (15 mins)

>Instructor Note: Take a look at the [solution-code](solution-code) and run the askAQuestion java program, so students have an idea what they will be creating.

Let's work through the following example. The Scanner class we'll be creating will be required in the lab.

Some things to mention:

- methods must be within a class definition
- no nesting method in method
- a bit about scope, and mGlobal variables

> Check: Take a minute and try to come up syntax needed to print the message: "\nAsk: who, what, why, when, or where".

So here we have a basic main class:

```java
public class Main {
    public static void main(String[] args) {
	    System.out.println("\nAsk: who, what, why, when, or where");
    }
}
```

Let's add a method that creates a gets user input and responds.

```java
public static void askAQuestion() {
    Scanner input = new Scanner(System.in);
    String userInput = input.nextLine();
    if (userString.equals("who")) {
        System.out.println("We're the ADI class.");
    }
}
```

Actually, let's allow the user to put in a more complicated question, such as 'Who are you?'

```java
...
if (userString.contains("who")) {
  ...
}
```

Let's add a default:

```java
  else {
     System.out.println("I don't know how to answer that question.");
     System.out.println("Try again...");
  }
```

Wait, what if we actually want to be able to try again?

```java
    ...System.out.println("Try again...");
    }
    askAQuestion();
}
```


Note, this is called **recursion** - a Recursive method calls itself. For those who are interested in Math, a resource is included that talks about some of the other ways to use recursion to solve basic algorithms.

>Instructor Note: Run the program and prove that it runs circularly.


What if we want to exit out of the program?

```java

    else if (userString.contains("exit")) {
            askAgain();
        }
    }
    public static void askAgain() {
        System.out.println("\nAre you sure you have no more questions? y or n");
        String userInput = grabUserInput();
        if (userInput.equals("y")) {
            System.out.println("Thanks for playing. Goodbye.");
            System.exit(0);
        }
        else if (userInput.equals("n")) {
            System.out.println("Ask another then:");
            askAQuestion();
        }
    }
}
```

## Independent Practice: Write a few functions (15 min)

Please create a new Java project in IntelliJ and work through as many as these exercises as you can within the next 15 mins. Use the official [Oracle Java Docs](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html) to help you through these exercises and look up the different class methods you can use.


1. Write a method called `divide152By`. This method should accept one argument, a number, and should divide 152 by the given number. For example, the divide152By result of 1 is `152/1` is 152. Your function should return the result.

    Use your function to find the following:

    ```java
    divide152By(3);
    divide152By(43);
    divide152By(8);
    ```

2. Write a method called `thirdAndFirst`. This method accepts two strings, and checks if the third letter of the first string is the same as the first letter of the second string. It should be case insensitive, meaning `thirdAndFirst("Apple","Peon")` should return true.

    Check the following:
    ```java
    thirdAndFirst("billygoat","LION");
    thirdAndFirst("drEAMcaTCher","statue");
    thirdAndFirst("Times","thyme");
    ```

3. Write a method called `transmogrifier`. This method should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

    The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

    For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the power of 2` is 225. Use your function to find the following answers.

    ```java
    transmogrifier(5, 4, 3);
    transmogrifier(13, 12, 5);
    transmogrifier(42, 13, 7);
```

4. Write a method called 'reverseString'. This method should take one argument, a String. The method should return a string with the order of the words reversed. Don't worry about punctuation

    ```java
    reverseString("black cat"); => "tac kcalb"
    reverseString("the cow jumped over the moon"); => "noom eht revo depmuj woc eht"
    reverseString("I can ride my bike with no handlebars"); => "srabeldnah on htiw ekib ym edir nac I"
    ```

## Conclusion (5 min)

> Instructor Note: Review the answer to each exercise above and briefly discuss the questions below.

- Why do we use methods?
- When might you use a method?

## Resources:
- [Oracle Java Docs - Defining Methods](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)
- [Oracle Java Docs - A Closer Look at the "Hello World!" Application](https://docs.oracle.com/javase/tutorial/getStarted/application/)
- [Princeton Java Cheat sheet](http://introcs.cs.princeton.edu/java/11cheatsheet/)
- [Java Modifier Types](http://www.tutorialspoint.com/java/java_modifier_types.htm)
- [Princeton Recursion](http://introcs.cs.princeton.edu/java/23recursion/)
