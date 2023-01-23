---
title: Storing Data in Collections and Organization
duration: "1:30"
creator:
    name: Kristen Tonga
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Storing Data in Collections and Organization

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Create and manipulate arrays and ArrayLists
- Work with for loops to iterate over collections
- Create and manipulate Java ArrayLists and LinkedLists
- Compare array and linked lists
- Convert a list into an array (and vice-versa)
- Describe and implement a Hash Map

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*
- Working knowledge in one or more programming languages
- Understanding of Arrays, Loops, and Control Flow

---

<a name="introduction"></a>
## Introduction: Basic Arrays (5 mins)

An array is a container object that holds a **fixed** number of values of **a single type**. You've already seen an example in the `main` method.

> Instructor Note: Optional - Draw a picture similar to the one below on the board to visually display each element and corresponding index.

Each item in an array is called an *element*, and each element can be accessed by it's *index*. The index of elements starts at 0. That means visually that:

  INDEX  | 0 | 1 | 2 | 3 | 4
  -------|---|---|---|---|---
| ELEMENT| x | x | x | x | x |
  -------|---|---|---|---|---

> Check: If a fixed size is required, how would we add more space?

## Demo: Creating Arrays (5 mins)

Let's create an Array together:

> Instructor Note:  Explain each piece of syntax here

```java
  class ArrayDemo {
    public static void main(String[] args) {
      //declares an array of integers
      int[] anArray; // note datatype, followed by [] indicating array

      //allocates memory for 10 integers
      anArray = new int[10];

      //assign elements
      anArray[0] = 111;
      anArray[1] = 222; //etc.

      //access elements
      System.out.println("Element at index 0: "+ anArray[0]);
      System.out.println("Element at index 1: "+ anArray[1]); //etc.
      System.out.println("The array has a size of "+anArray.length);
    }
  }
```

> Check: How would I find the index of the last element in the array using the length property?

## Independent Practice: Creating Arrays (10 mins)

**Now you:** Create a String array of *three* of your favorite things. Print the result to the command line.

>Instructor Note: Go over how you would create `String[] favoriteThings;`

> Check: What are the three parts of creating an array? (expect: declare variable, allocate memory, initialize/assign values)

## Demo: Manipulating Arrays (15 mins)

Now that we know what the computer will be doing, let's use the shortened syntax. Arrays can also be created and initialized with one statement. The length of the array is automatically determined by the number of elements between the curly braces.

```java
  class FavoriteThings {
    public static void main(String[] args) {
      // shortened syntax. assign variable, allocate memory, and initialize values all in one
      String[] favoriteThings = {
        "raindrops",
        "roses",
        "whiskers on kittens"
      } // length will be inferred as: 3
    }
  }
```

#### Manipulating Basic Arrays

Let's take a look at some basic things you can do with an array.

Note that indexing (getting/setting the item based on its position in the array) and determining the length of the array have built-in syntax, while some less fundamental operations are performed by using methods on the `Arrays` object. This is similar to the way you can add two numbers together by just writing `a + b` but need to use methods on the `Math` object to do more esoteric things like rounding.

```java
  class ArrayManipulationDemo {
    // initialize array
        int[] primeNumbers = {5,3,11,7,2}; //next 13, 17, 19, 23

      // get the thing at a specified index
        int firstPrime = primeNumbers[0];
        System.out.println( "index 0: " + firstPrime );

      // print it
        System.out.println( Arrays.toString(primeNumbers) );

      // sort it
        Arrays.sort( primeNumbers );
        System.out.println( Arrays.toString(primeNumbers) );

      // get its length
        System.out.println(primeNumbers.length); // it's a constant, not a method -- we'll talk about this later

      // see if value is found in array. Returns -1 if not found.
      // Note: binarySearch() only works if the array is sorted.
        int indexOf11 = Arrays.binarySearch( primeNumbers, 11 );
        System.out.println( "index of 11: " + indexOf11 );

      // CHECK: How to get the value?
        // if(indexOf11 >= 0) {
            System.out.println("looking for 11, found value: " + primeNumbers[indexOf11]);
        // }
  }
```

#### Error Checking
Now what if we searched for an value that was not in the array? Let's see if 10 is a prime number.

> Instructor Note: Add the lines below, leaving out the commented code. Throw the exception, ask the students why it was thrown, and ONLY THEN add in the >=0 check that is commented out below and above.

```java
  int[] primeNumbers = {5,3,11,7,2};

  int indexOf10 = Arrays.binarySearch( primeNumbers, 10 );
  System.out.println( "index of 10: " + indexOf11 );
  // if(indexOf11 >= 0) {
      System.out.println("looking for 10, found value: " + primeNumbers[indexOf11]);
  // }
```

An Exception is thrown when the computer is asked to do something it can't do, like accessing index -1 or 4 in a 4-element array. Exceptions bubble up, and unless caught (which we will talk about in a later lesson) cause the program to quit.

It is important to consider when the results of our actions might throw an exception, and add checks as needed.

> Check:  If an array is 5 elements long, what happens if we look for `myArray[5]`?

## Demo: Problems with Arrays (10 min)

But what if I decide that actually, I want this list to include 4 things instead of 3? For example, let's go back to our favoriteList; I decide I really like chocolate and want it to be the fourth favorite thing.

Follow along, if you want:

```java
  public static void addFourthFav() {
    String[] favoriteThings = {"roses","whiskers on kittens","raindrops"};
    favoriteThings[3] = "chocolate"; // **Check:** why 3 not 4?
    System.out.println( Arrays.toString(favoriteThings) );
  }
```

That throws an out of bounds exception!

Why? As mentioned, arrays are fixed in size. To add chocolate as a fourth item in an array, I would have to create a new array of a larger size, copy the info over, and then initialize the additional elements.

```java
  public static void addFourthFav() {
    String[] favoriteThings = {"roses","whiskers on kittens","raindrops"};
    String[] favoriteThingsLarge = new String[4];

    System.arraycopy(favoriteThings, 0, favoriteThingsLarge, 0, 3);
    favoriteThingsLarge[3] = "chocolate";

    System.out.println( Arrays.toString(favoriteThingsLarge) );
  }
```

Luckily, Java has provided something better: collections.

## Demo: Collections (15 mins)

Collections will not only will provide us with more convenience methods, allowing us to do more things with the data we have, but will also *automatically increase in size* if we need!

There are many different collection classes that we use just like data types, each of which provides some distinct functionality, but for today, we're going to focus on just one of them.

#### ArrayList

Let's take the array we made of favorite things and convert it into an `ArrayList`.

```java
  public static void main(String[] args) {
    // initialize ArrayList
      ArrayList<String> favoriteThings = new ArrayList<>();
    // add items
      favoriteThings.add("bright copper kettles");
      favoriteThings.add("brown paper packages tied up with strings");
  }
```

Note, the data type of each element is defined in angle brackets `<>`. This data type could be any object type. So, if you'd created a `Person` object, as you may have in the pre-work, you could create an ArrayList of Persons! (i.e. an `ArrayList<Person>`)

If you want to make an ArrayList of a primitive type, you need to use a "boxed" version of that type as the thing in the angle brackets. For example, if you want to store a bunch of `int`s, you would use an `ArrayList<Integer>`.

#### Manipulating a ArrayList

An ArrayList is an object, with methods, which makes it much easier to manipulate than a simple array. Check out the following methods.

```java
  //to print. No need to explicitly convert it to a string first!
  //(because ArrayList has a toString() method, which automatically
  //gets called here)
    System.out.println("favoriteThings = " + favoriteThings);

  //add(item) -- adds to the end of the list
    favoriteThings.add("chocolate");
    System.out.println("favoriteThings = " + favoriteThings);

  //add(index, item) -- adds to the list at specified index and moves all other entries over. Think: what you would have to do with a simple array to do that?
    favoriteThings.add(1, "warm woolen mittens");
    System.out.println("favoriteThings = " + favoriteThings);

  //set(index, item) -- replace the item at the given index with a new one
    favoriteThings.set(0, "tarnished copper kettles");
    System.out.println("favoriteThings = " + favoriteThings);

  //to search for an entry
    int indexOfIceCream = favoriteThings.indexOf("icecream");
    if(indexOfIceCream != -1) {
      String ic = favoriteThings.get(indexOfIceCream);
      System.out.println("ic = " + ic);
    }
    else {
      System.out.println("icecream not found");
    }

 //here's another good one: get number of things in the ArrayList
    favoriteThings.size();
```

> Instructor Note: Add other convenience methods as needed.

> Check: What are advantages of using an ArrayList over an array? Expect students to include: automatic resizing, convenience methods.


## Guided Practice: Iterating Through a List with For Loops (15 mins)

#### The For Loop
Do you remember the syntax used in a for loop? We used it in the Control Flow lesson to print something to the command line a set number of times.

The for loop is also commonly used with arrays and collections to iterate through each of the elements and do something with each entry.

For example, let's create a list of 5 movies and iterate through it, printing each one to the command line.

> Instructor Note: Get movie suggestions from the class.

```java
  public static void main(String[] args) {
    ArrayList<String> movieList = new ArrayList<>();
    movieList.add(/*student suggestion here*/); //x5
    printMovies(movieList);
  }

  public static void printMovies(ArrayList<String> movies) {
    for (int i = 0; i < movies.size(); i++) {
      System.out.println("where i="+i+" : "+movies.get(i));
    }
  }

```

To review, a for loop has an initialization stage (where i is initialized), a termination condition (which includes the logic for when the loop stops), and an increment stage (that will occur on the completion of each loop).

#### The Enhanced For Loop
There is also another for loop syntax that is especially for arrays and lists. This is sometimes referred to as the **enhanced** for loop. Try it with me:

```java
 for (String movie : movieList) {
  System.out.println("I love "+movie+"!");
 }
```

The enhanced for loop is the form that is recommended by Oracle for arrays and collections.

A normal for loop is still useful sometimes -- it makes it easier to work with the index of each item alongside its value, or to modify the collection while you're iterating over it. But if you just need to do something with each element, the enhanced for loop is cleaner and more efficient.

>Check: Why might you want to iterate through an array?

## Independent Practice (15 mins)

Complete as many of the following challenges as you can in the next 15 minutes. Each challenge should be completed in its own method.

1. Find the size:
  a. Create an array of ints.
  b. Print the length of the array to the command line.

2. Concrete Jungle
  a. Create a ArrayList of New York City wildlife.
  b. Create a function that, given an ArrayList of Strings, prints for each element: "Today, I spotted a /*Thing here*/ in the concrete jungle!"

3. Create a method that, given an array of ints, return the sum of the first 2 elements in the array. If the array length is 1, just return the single element, and return 0 if the array is empty (has length 0).

4. Create an method that, given an ArrayList of words (Strings), turns each word into Pig Latin. The rules of Pig Latin are as follows:
  a. The first consonant is moved it to the end of the word and suffixed with an `ay`.
  b. If a word begins with a vowel you just add `way` to the end.

For example, `pig` becomes `igpay`, `banana` becomes `ananabay`, `twig` becomes `wigtay`, and `aadvark` becomes `aadvarkway`.

> Instructor Note: The example for Pig Latin can be posted online if students do not get to it, as it will probably take too long to do in class.

<!--
## Add On Lesson
To tackle these Collections Classes, we first need to learn a bit of vocabulary.

Interface | Classes               | Reasons to use it
----------|-----------------------|---------------------------------
List      | ArrayList, LinkedList, Vector, Stack | collection of Objects(most similar to simple array)\ndata is accessed by index
Sets      | HashSet, TreeSet      | unique collection of Objects(like a list, but no duplicates)\ndata is accessed by value
Maps      | HashMap, TreeMap      | set of key/value pairs(similar to a dictionary)\nkeys must be unique\ndata is accessed by using the key


<a name="introduction"></a>
## Introduction:  Lists(5 mins)

First we will cover Lists, one of the most popular collection types. We know the basics of lists. They hold collections of data, and provide a large set of helper functions that make manipulating the data much easier. You can search, sort, add and remove with ease. One of the major drawbacks of Lists are that they contain a larger overhead than a simple array (more memory, slightly slower due to all the work behind the scenes).

The two most commonly used types of lists are the ArrayList and the LinkedList. As the name implies, ArrayLists are backed by an array to hold the data. As we know, one major advantage over arrays is that you don't need to manually create larger arrays if your data set grows. Keep in mind that the ArrayList is taking care of this for you, so the operation isn't free. Therefore ArrayLists aren't the best choice for rapidly growing or shrinking sets of data.

> Draw out nodes on the board to illustrate a LinkedList

A LinkedList is backed by a collection of objects linked together by pointers to each memory location. While we won't be going over how these are implemented, it is important to know that each element in the list is stored in empty spots in memory, so there is no need to worry about the changing size of the data set. Data is simply inserted and removed like links in a chain. Accessing a specific element in a linked list is generally slower than an array, because they aren't stored in sequential memory.

> Check: Ask students to give examples of a use case for ArrayList and LinkedList(ArrayList: Contacts List, LinkedList: To Do Lists)

<a name="demo"></a>
## Demo: Lists (5 mins)

We're going to begin with reviewing how to define a list. The process for a LinkedList and ArrayList is the same, just with the class name changed.

``` java
ArrayList<String> arrayList = new ArrayList<String>();
```

That's it! Notice the type `String` between the brackets must match the type of data you want to store. Now you have an empty list ready to work with. To insert items, we do the following.

``` java
arrayList.add("Hello");
arrayList.add("Test");
```

There are many methods you can use to manipulate the list now. Let's take a look at a few.

``` java
arrayList.sort();
arrayList.contains("Test"); //Returns true because "Test" is in the list
arrayList.indexOf("Test"); //Returns 1, the index of "Test"
arrayList.get(1); //Returns "Test", because it's at index 1
arrayList.size() //Returns 3
```

As you can see, Lists make working with collections of data much more straightforward than arrays.

As a reminder, you can actually convert between arrays and lists very easily.

``` java
String[] arr = new String[]{"one","two"};
List<String> stringArrayList = Arrays.asList(arr);
```

> Check: How would we define a LinkedList of ArrayLists of Strings

***

<a name="guided-practice"></a>
## Independent Practice: Lists (10 mins)

The students must create a LinkedList containing ints 1-10. Afterwards, they must test to see if the values 5-15 exist in the list, and remove the elements that exist (so remove 5-10.) Finally, print the size of the list. Starter code is provided in ListTest.java

> Check: Were students able to successfully solve the problem or complete the task?

***

<a name="introduction"></a>
## Introduction:  Maps(10 mins)

The next Collections type we will cover is the Map. A map is similar to a list, but each entry contains two parts: A key and a value. The key is unique in the map, think of it like the index in an array. Each key maps to a certain value, but there can be duplicate values in a map. This works almost exactly like Extras in Intents, and values in Bundles, except the keys can be any kind of Object.

One of the most popular implementations of a map is called the HashMap. A HashMap is a map, as described above, where the data is stored in an array. The index where the data is stored is generated by something called a hash function. Basically, you give the HashMap the Object you want to use as a key, and it returns an integer to use as the index. When you try to retrieve the value from the map, it uses the same function to generate the same index. Strings are often used as the keys for a map.

> Check: Ask the students to come up with an example for using a Map.

***

> If there is time, talk about collision

### Collision (OPTIONAL 10 minutes)

The hash function isn't flawless, what happens if it gives us the same index for two keys? This is called a collision.

> Ask the students how they think this can be resolved

Java handles this by using a structure like a LinkedList in place of the actual Objects in the HashMap. If a collision occurs, the object is added onto the end of that list.

***

<a name="demo"></a>
## Demo: Maps (10 mins)

Let's try implementing a HashMap. Pretend we have a class called Student which contains the students name, grades, etc. Each student has a unique student id we will use as the key.

> Create Student class

``` java
HashMap<String,Student> studentMap = new HashMap<String,Student>();

studentMap.put("195abc",adamStudent);
studentMap.put("542ijk",bradStudent);
...
Student retrievedStudent1 = studentMap.get("195abc"); //adamStudent
Student retrievedStudent2 = studentMap.get("111"); //null

studentMap.remove("542ijk")

```
As you can see, a Map isn't that different from a List. You can add and retrieve objects. One major difference is that you have no control over the underlying data structure. There is no way for you to sort or control the order of the elements in the Map.

> Check: Ask the students to write the code for removing an object through the key. Tell them to look it up in the documentation.

***

<a name="guided-practice"></a>
## Guided Practice: Maps (10 mins)

Let's create a HashMap that represents a dictionary. The key will be the word, and the value will be the definition. We must add the following value to the map, retrieve it, and print it to the console.

"apple":"A fruit from a tree"
"lake":"A large body of water"

> Check: Were students able to create and manipulate the HashMap?

***


<a name="ind-practice"></a>
## Independent Practice: Organizing Information (15 minutes)

The students will do the following:
  - Create an array of ints containing the values: 1,2,3,4
  - Create a LinkedList of Strings with the values: "One","Two","Three","Four"
  - Create a HashMap with the keys {"One","Two","Three","Four"} taken from the list, and the Integer values 1,2,3,4 taken from the array
  - Print out the HashMap size after adding the above items to it.

> Check: Were students able to create the desired deliverable(s)? Did it meet all necessary requirements / constraints?


### ADDITIONAL RESOURCES
- [Oracle: Array](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)
- [Oracle: List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)
- [Oracle: HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)
- [Oracle Java Docs - Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)
- [Oracle Java Docs - The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html)
- [CodingBat - Array-1 examples](http://codingbat.com/java/Array-1)

<a name="opening"></a>
## Opening (5 mins)

One of the most commonly used libraries used in Java is the Collections class. We have already used Arrays and Lists. Today we will be covering in more detail the following popular collections: Lists and Maps. We will be learning about and comparing some of these today to understand their strengths and weaknesses, and how you should decide which to use. Once you have a better understanding of how to organize the information in your apps, you will be able to write much cleaner and more efficient code.

> Check: As a quick review, ask the students what some differences between Arrays and ArrayLists are.

***

<a name="introduction"></a>
## Introduction:  Lists(10 mins)

First we will cover Lists, one of the most popular collection types. We know the basics of lists. They hold collections of data, and provide a large set of helper functions that make manipulating the data much easier. You can search, sort, add and remove with ease. One of the major drawbacks of Lists are that they contain a larger overhead than a simple array (more memory, slightly slower due to all the work behind the scenes).

The two most commonly used types of lists are the ArrayList and the LinkedList. As the name implies, ArrayLists are backed by an array to hold the data. As we know, one major advantage over arrays is that you don't need to manually create larger arrays if your data set grows. Keep in mind that the ArrayList is taking care of this for you, so the operation isn't free. Therefore ArrayLists aren't the best choice for rapidly growing or shrinking sets of data.

> Draw out nodes on the board to illustrate a LinkedList

A LinkedList is backed by a collection of objects linked together by pointers to each memory location. While we won't be going over how these are implemented, it is important to know that each element in the list is stored in empty spots in memory, so there is no need to worry about the changing size of the data set. Data is simply inserted and removed like links in a chain. Accessing a specific element in a linked list is generally slower than an array, because they aren't stored in sequential memory.

> Check: Ask students to give examples of a use case for ArrayList and LinkedList(ArrayList: Contacts List, LinkedList: To Do Lists)

***

<a name="demo"></a>
## Demo: Lists (5 mins)

We're going to begin with reviewing how to define a list. The process for a LinkedList and ArrayList is the same, just with the class name changed.

``` java
ArrayList<String> arrayList = new ArrayList<String>();
```

That's it! Notice the type `String` between the brackets must match the type of data you want to store. Now you have an empty list ready to work with. To insert items, we do the following.

``` java
arrayList.add("Hello");
arrayList.add("Test");
```

There are many methods you can use to manipulate the list now. Let's take a look at a few.

``` java
arrayList.sort();
arrayList.contains("Test"); //Returns true because "Test" is in the list
arrayList.indexOf("Test"); //Returns 1, the index of "Test"
arrayList.get(1); //Returns "Test", because it's at index 1
arrayList.size() //Returns 3
```

As you can see, Lists make working with collections of data much more straightforward than arrays.

As a reminder, you can actually convert between arrays and lists very easily.

``` java
String[] arr = new String[]{"one","two"};
List<String> stringArrayList = Arrays.asList(arr);
```

> Check: How would we define a LinkedList of ArrayLists of Strings

***

<a name="guided-practice"></a>
## Independent Practice: Lists (10 mins)

The students must create a LinkedList containing ints 1-10. Afterwards, they must test to see if the values 5-15 exist in the list, and remove the elements that exist (so remove 5-10.) Finally, print the size of the list. Starter code is provided in ListTest.java

> Check: Were students able to successfully solve the problem or complete the task?

***

<a name="introduction"></a>
## Introduction:  Maps(10 mins)

The next Collections type we will cover is the Map. A map is similar to a list, but each entry contains two parts: A key and a value. The key is unique in the map, think of it like the index in an array. Each key maps to a certain value, but there can be duplicate values in a map. This works almost exactly like Extras in Intents, and values in Bundles, except the keys can be any kind of Object.

One of the most popular implementations of a map is called the HashMap. A HashMap is a map, as described above, where the data is stored in an array. The index where the data is stored is generated by something called a hash function. Basically, you give the HashMap the Object you want to use as a key, and it returns an integer to use as the index. When you try to retrieve the value from the map, it uses the same function to generate the same index. Strings are often used as the keys for a map.

> Check: Ask the students to come up with an example for using a Map.

***

> If there is time, talk about collision

### Collision (OPTIONAL 10 minutes)

The hash function isn't flawless, what happens if it gives us the same index for two keys? This is called a collision.

> Ask the students how they think this can be resolved

Java handles this by using a structure like a LinkedList in place of the actual Objects in the HashMap. If a collision occurs, the object is added onto the end of that list.

***

<a name="demo"></a>
## Demo: Maps (10 mins)

Let's try implementing a HashMap. Pretend we have a class called Student which contains the students name, grades, etc. Each student has a unique student id we will use as the key.

> Create Student class

``` java
HashMap<String,Student> studentMap = new HashMap<String,Student>();

studentMap.put("195abc",adamStudent);
studentMap.put("542ijk",bradStudent);
...
Student retrievedStudent1 = studentMap.get("195abc"); //adamStudent
Student retrievedStudent2 = studentMap.get("111"); //null

studentMap.remove("542ijk")

```
As you can see, a Map isn't that different from a List. You can add and retrieve objects. One major difference is that you have no control over the underlying data structure. There is no way for you to sort or control the order of the elements in the Map.

> Check: Ask the students to write the code for removing an object through the key. Tell them to look it up in the documentation.

***

<a name="guided-practice"></a>
## Guided Practice: Maps (10 mins)

Let's create a HashMap that represents a dictionary. The key will be the word, and the value will be the definition. We must add the following value to the map, retrieve it, and print it to the console.

"apple":"A fruit from a tree"
"lake":"A large body of water"

> Check: Were students able to create and manipulate the HashMap?

***


<a name="ind-practice"></a>
## Independent Practice: Organizing Information (15 minutes)

The students will do the following:
  - Create an array of ints containing the values: 1,2,3,4
  - Create a LinkedList of Strings with the values: "One","Two","Three","Four"
  - Create a HashMap with the keys {"One","Two","Three","Four"} taken from the list, and the Integer values 1,2,3,4 taken from the array
  - Print out the HashMap size after adding the above items to it.

> Check: Were students able to create the desired deliverable(s)? Did it meet all necessary requirements / constraints?

***

<a name="conclusion"></a>
## Conclusion (5 mins)

We've covered the major components of the Collections class and how to use them. From sorting to searching, collections make organizing your data in the app very fast and easy. Arrays, lists and maps will become integral parts of your apps as you continue development, and working with them will become second nature.

***

### ADDITIONAL RESOURCES
- [Oracle: Array](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)
- [Oracle: List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)
- [Oracle: HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)
