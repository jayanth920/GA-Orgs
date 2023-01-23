---
title: Classes
duration: "1:30"
creator:
    name: Drew Mahrt
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Classes

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Describe what classes and objects are
- Describe what object properties and methods are
- Demonstrate and explain instantiation
- Write getter and setter methods for a given class
- Given a class, add conditional methods to a test case
- Perform a jUnit test

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*
* Recall basic knowledge of Java data types

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*
- Gather materials needed for class
- Complete Prep work required
- Prepare any specific instructions

---

## Introduction: What are classes? (25 minutes)

Objects are special pieces of data that have properties and functions contained inside of them. We use these objects to divide our code into separate responsibilities. We can then use these objects from other code to execute their responsibility. How the object accomplishes its responsibility is irrelevant to the calling code. This is known as a black box.

We only have to worry about the input and outputs of the object and let the object itself worry about it self. For example, if we had a ```Calculator``` object and it had a function ```public int findLowestCommonDenominator(int number1, int number2)``` we don't care how it finds our lowest common denominator, just that it returns an int that is correct.

This has an advantage for whomever is implementing the object as well. They can change the internals, perhaps make it more efficient, without breaking compatibility with any code that uses it already.

These objects are first templated using the concept of `classes`. A `class` is a special *type* that can be user-defined to ensure every object of its type contain all the properties and methods of that class. Unlike data types which have intrinsic value - i.e an `int` is a number, `char` are characters - classes have defined values. For example, a __Car__ class could hold the `double` value of __speed__ and also `String` value of __model__.

> Check: In your own words, explain what is an object? What is a class?

#### Instantiation

Creating an object of a class is called instantiation. This means we are creating a new object in memory. This is done by using the `new` keyword and a special type of method called a constructor. Constructor methods can include some parameters we can pass to our new object. They set up the initial state of the object.

Constructors methods fire when an object is instantiated and their only purpose is to help create an instance of a class. In contrast, the purpose of methods is much more general: execute Java code.


## Demo: What are classes? (10 minutes)

>Note: Explain the syntax here about how to create new objects and also the syntax of a class file.

The paradigm of OOP allows programmers to compartmentalize specific bits and pieces of code so that we can reuse this code while also hiding parts of it within the each class. In the __Car__ example, we can create new Cars and give them different model names but have an internal concept of _speed_ that only the Car itself is aware.

Variables and objects defined within an object are known as _member variables_. Java convention dictates that these variables be named in camel case starting with an 'm' denoting that it is a _member variable_

Functions defined within a class are known as _methods_. Java convention dictates that methods also be named in camel case.

``` java
public class Car {
    double mSpeed = 0.0;
    String mModel;
    public Car(String named) {
        mModel = named;
    }
}

// creating a new object of type Car
Car mFirstCar = new Car("DeLorean");
```

> Check: What are methods? How should they be defined and written?

## Guided Practice: What are classes? (10 minutes)

Ok, time for you to write your own class!

> Instructor Note: Use a text editor to do this next part and as you write the class, try to elicit each line of syntax from members of the class.

In your Documents folder, create a new text file with a text editor of your choice.

In this file, create a new class using the syntax your learned above. Your class should be modeling a __Person__ object. Your __Person__ must have a name and age. The __Person__ can also have another __Person__ as its "child". All of these must be set during construction. Don't try to instantiate your __Person__ anywhere.

> Note: sample correct code
``` java
public class Person {
    int mAge;
    String mName;
    Person mChild;
    public Person(String named, int aged, Person parentOf) {
        mName = named;
        mAge = aged;
        mChild = parentOf;
    }
}
```

Save this file as `Person.java` and note that the file must be named the same as the top level class in your file. Save it in your Documents folder.

Now open Terminal on Mac or Command Prompt on Windows then use the command `cd Documents` to get to your Documents folder. Then use `javac Person.java` to compile the file and you should see a _Person.class_ in your Documents folder if your class compiled correctly. If not, then there should be an error in your terminal window, see what its telling you and fix!

> Check: Did anyone hit an error?

In basic Java programs, you need a `static main()` method to be able to run the program, add one to your program with in your __Person__ `class` like this.

```java
public static void main(String [] args) {
}
```

Inside of this method, instantiate a Person object with a child:


```java
    public static void main(String [] args)
	{
		Person person = new Person("Ankur", 27, new Person ("Mint", 2, null));
	}
```

>Instructor Note: Students might have trouble with this because of the `null` needed. Good to pause, explain the next section and let them try again.

### Introduction: Getters and setters (5 minutes)
In Java, there is a convention used called _getters and setters_. It is not a good idea to make _member variables_ public and so instead methods are defined to expose access.

By definition, getters "get" or return stored information from an instance of a class; setters assign information / data to an instance of a class.

##### Demo: Getters and setters (5 minutes)

In our car, we simply want to allow read access to the mSpeed variable and so we would define a method called `getSpeed()` within our `class`.

```java
public double getSpeed() {
    return mSpeed;
}
```
Java naming convention dictates that getters should start with 'get' and then the name of the variable (minus any leading letters). The only exception is for getters with return type `boolean`, it is convention to name these as `isBoolean()` or `hasBoolean()`. For example our car might have a method: `hasLowFuel()`.

Perhaps we also wanted to add a _member variable_ `mOwner` and wanted to allow public access to change this variable, we would define a setter. The naming convention here is similar to the getter methods but with starting with 'set'

```java
private String mOwner;
public void setOwner(String name) {
    mOwner = name;
}
```

> Check: In your own words, describe the difference between getters and setters.

##### Guided Practice: Getters and Setters (5 minutes)

Take five minutes to finish getting `mAge` from your object.

> Check: Ask students to review their solution with a partner. What issues are people having?


### Introduction: Anonymous Classes (5 mins)

Java has a feature that allows interfaces to be implemented "on the fly". This is called anonymous classes

> Check: In your own words, explain the purpose of an anonymous class.

#### Demo: Anonymous Classes (5 minutes)

```java
KeyListener listener = new SomeKeyListenerImplementation();

KeyListener listener = new KeyListener()
{
    public void keyPressed(KeyEvent e) { /* ... */ }

    public void keyReleased(KeyEvent e) { /* ... */ }

    public void keyTyped(KeyEvent e) { /* ... */ }
};

```

Notice how we implemented this - it doesn't have a definite `class`, other then the generic `Object`. This is why its called an anonymous class. The class has no name to call it by.

#### Guided Practice: Anonymous Classes (10 minutes)

Your turn: Implementevent listeners with a anonymous class

## Introduction: Unit tests (5 mins)

There are two types of automated tests: Unit tests and UI tests.

> Check: Predict the difference.

Unit tests check if the code logic is correct, and UI tests check if the elements on the screen work as expected.

We'll talk more about UI tests in a future lesson. This lesson will focus on Unit tests.

#### What is a Unit test?

A Unit Test is one that tests a piece of code (a unit). A unit, in most cases, is a Class.

So, think of a unit test as "Is this class and its methods working as expected?"

## Demo: Creating a Unit Test (20 mins)

Follow along, if you'd like!

To do test our classes (units), we create test classes that test other classes.

Create a new project. In the **src** folder, you will find three folders:

* **main** - the location of your app's main code (classes, activities, resources, etc.)
* **test** - the location of tests

The **test** folder is where we'll add new test classes.

First, let's create a Student class, which has the methods `getFullName` and `getLetterGrade`. The constructor takes a first name, last name, and number grade.

Create a new test in the src/test package, call it `StudentTest`.

We know that the Student class has three methods. The idea is to have methods in the Test that implement the class being tested and asserting that their methods are working.

In the `StudentTest` class, add methods that test if the `getFullName` and `getLetterGrade` methods are correct. Make sure to add the `@Test` annotation, or else jUnit doesn't recognize it.

```java
package co.ga.junittesting;

import org.junit.Test;
import static org.junit.Assert.*;

public class StudentTest {
    @Test
    public void testIfFullNameIsCorrect() {

    }

		@Test
    public void testIfLetterGradeIsCorrect() {

    }
}
```

To assert thing, you would use jUnit's `assert_____()` static methods. The main ones are:

```java
		assertEquals(4, 2 + 2);
		assertTrue(true);
    assertFalse(false);
    assertNull(null);
    assertNotNull("Not null");
```

Each of these take an *expected value* and an *actual value*. The expected value is what you think the method should return, and the actual is what the method actually returns.

So, filling out the rest of the class:

```java
package co.ga.junittesting;

import org.junit.Test;
import static org.junit.Assert.*;

public class StudentTest {
    @Test
    public void testIfFullNameIsCorrect() {
				Student student = new Student("Leslie", "Knope", 93);

				String expected = "Leslie Knope";
				String actual = student.getFullName();

				assertEquals(expected, actual);
    }

		@Test
    public void testIfLetterGradeIsCorrect() {
				Student student = new Student("Charlie", "Brown", 76);

				String expected = "C";
				String actual = student.getLetterGrade();

				assertEquals(expected, actual);
    }
}
```

To run the test, you right click on the class in the Project View and click "Run StudentTest".

> Check: Were you able to click "Run StudentTest" and get the same output I did?

**Note**: If you write multiple test classes, you can right click on the folder that contains the classes and click "Run tests in ______" to run all of them!

## Independent Practice: Automated testing (40 minutes)

* `MathUtils.multiply(number1, number2, number3, etc.)` correctly multiplies the numbers you provide it
	* Test for both integer and decimal point numbers
* `MathUtils.add(number1, number2, number3, etc.)` correctly adds the numbers you provide it
		* Test for both integer and decimal point numbers
* `MathUtils.square(number)` correctly squares the numbers you provide it
		* Test for both integer and decimal point numbers
* `MathUtils.pythagorean(a, b)` correctly calculates the results of using a and b in Pythagorean theorem
		* Test for both integer and decimal point numbers

    _Note: Note every method will have errors._

> Check: With 5 minutes left, review the solution. Were students able to fix the errors they found in MathUtils.


### ADDITIONAL RESOURCES
- [Classes & Objects](http://www.javawithus.com/tutorial/class-as-a-reference-data-type)
- [Java Getters vs Setters](http://stackoverflow.com/questions/2036970/how-do-getters-and-setters-work)
