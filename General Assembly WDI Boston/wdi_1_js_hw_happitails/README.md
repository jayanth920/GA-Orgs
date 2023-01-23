# HappiTails

###Type:
- Group Homework/Lab

###Time Required:
- 4/5 hours
- overnight

###Objectives:
- Practice manipulating hierarchical objects

###Activity:
- You are strongly encouraged to work on this lab in groups

###Explanation
- You are the manager at HappiTails animal shelter. You need to manage your
shelter by storing and manipulating information about clients and animals.

- Make git commits often, as you finish each function and phase, so you can see the history

###Specification:
#####Data Structure Specs:
  
  + Animal
    + An animal should have a name. (Animal names are unique.)
    + An animal should have an age.
    + An animal should have a gender.
    + An animal should have a species.
    + An animal can have multiple toys.

  + Client 
    + A client should have a name. (Client names are unique.)
    + A client should have an age.
    + A client should have a number of pets.

  + Shelter:
    + The shelter should have a name.
    + The shelter should have an address.  
    + The shelter should have a list of animals
    + The shelter should have a list of clients.
    
#### Phase 1

Look at the data that currently exists in the file.  This data is in a known format described above. Notice that everything is kept in a very large, complex data structure named **happitails.**

Every object in this large structure has a certain set of properties, but some of those properties are themselves lists of objects!  You will have to write careful code to step through these objects.  

#### Phase 2

These are some of the easier functions to write, so we're starting with them.  Study the specifications above so you know what to expect when you're dealing with these objects.

1. Write a function to create an animal and add it to the shelter's list of pets.  What parameters do you need?  How do you figure out where it needs to go?

(Hint: the word *list* suggests that we're dealing with an array.  Remember that if you have an expression that evaluates to an array, you can use the array push method to add an element to it.)

2. Write a function that creates a client object with no pets and adds it to the shelter's list of clients.

3. Write a function that takes a client's name and finds the client's object in the larger structure.

(Hint: when you have an array containing objects and you are trying to match one property, you need to iterate through the array and examine the relevant property in each object.)

4. Write a functioh that takes an animal's name and finds the animal's object in the larger structure.

(Hint: this is more complicated than the function in #3, above, because there are several lists that an animal might be on.)

5. Write a function that takes an animal's name and a toy (a string) and adds the toy name to the animal's list of toys.

(Hint: you will have to find the animal's object in the larger structure.  Fortunately you solved that problem in #4, above.)

#### Phase 3

These are some of the more complex functions to write.  

1. Write a function that takes a client's name and a pet's name and transfers the animal object from the shelter's list to the client's list.

2. Write a function that takes a client's name and an animal's name and transfers the animal from the client's list to the shelter's list.

3. Write a function that displays a list of clients and how many pets they have.

#### Phase 4 

1. Write a function to create a **shelterData** structure from scratch.

2. Modify all the functions you have written, if necessary, so that they do not depend on any objects already being present in the larger data structure.  For instance, if there are no clients in the structure, your functions dealing with finding clients and with transferring an animal to a client should not fail with an error.

#### Phase 5

Invoke the functions you wrote, starting with the function in Phase 4 Step 1 (to create a fresh **shelterData** structure), with arguments in the right order to recreate the **shelterData** as provided in the happitails.js file.


