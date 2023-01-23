# Introduction to C

## What is C?

C is a low-level, general purpose, imperative/procedural programming language. Unlike Ruby or JavaScript it is compiled prior to execution. Compilation is a process that turns source code (what you type) into machine code which is executed by the computer. Ruby and JavaScript are both interpeted languages, which means each statement is turned into machine code instructions at runtime instead of beforehand. Compiled languages are *generally* faster than interpeted languages for most tasks because they do not have this intermediary step at execution time.

## Why learn C?

C can be compiled for almost any processor or platform, from inexpensive microprocessors that might be found in a watch to the multi-core processors in your laptop. It provides low-level access to the memory and machine instructions, which makes it very efficient, flexible and fast. Many important programs such as operating systems, core system tools and embedded hardware systems are programmed with C. It is a relatively small, straightforward and simple language; although that may translate to it appearing to have fewer features than you are used to a language having.

Learning just a bit of C can enable you to read the source code for programs like Ruby, understand how other languages work better and opens up a world of programming microcontrollers like Arduino.

## Hello, World!

Here's a basic 'Hello, World' program in C.

```c
#include <stdio.h>
int main(void)
{
  puts("Hello World!");
  return 0;
}
```

It isn't too different than what we might do in Ruby (`puts 'Hello World'`) or JavaScript (`console.log('Hello World')` but there are a few extra lines that are important to consider:

- Line 1, `#include <stdio.h>` links the standard input/output library into our code. This is a bit like `require` in Ruby. This specific library provides us with the `puts` function which we use on line 4. If you remove this line, you'll get an error like `warning: implicit declaration of function 'puts' is invalid in C99`
- Line 2, `int main(void)` creates a function called `main` which is expected to return an integer. The `main(void)` part specifically says that the function must be invoked with no parameters. `main` is the first function that is invoked by default in a C program. Unlike Ruby or JavaScript, everything (well, almost everything; not the include statement from line 1) must be inside a function.
- Line 4, this will output the text "Hello World!" to the standard output (often the terminal in a Unix-line environment).
- Line 5, `return 0;` we said on line 2 that the `main` function must return an integer. To make this true, we return the number `0`. We return this to indicate that the program has successfully completed execution.

### Compiling and Execution of a C program

Unlike a Ruby or JavaScript, we can't just execute the program through an interpeter and we must *compile* it first.

To do this, we use a program called `gcc` in our terminal to *compile* the program. For example, if we put the above C code in `hello_world.c` then we would run `gcc hello_world.c` to compile it. By default, it will save the *binary executable* to a file called `a.out`, which we can execute by running `./a.out` from our terminal. Try it yourself!

- `gcc hello_world.c`
- `./a.out`

### Other Notes on C

- Statements in C are terminated by a semicolon.
- If there is a syntax error, you'll often find this at compile time.
- If you change your source code file, the executable doesn't automatically recompile.

## C Basics

### Variables

To declare a variable, in C you must specify the *data type* when you declare its name. You may at that time, or later define the value of the variable.

Two basic datatypes we'll start with are `int` and `char` which represent integers and single characters. C doesn't actually have some built-in datatypes that we're used to like 'string' or 'boolean'! But later we'll learn how to build our own strings and boolean types.

An example:

```c
int counter;
counter = 0;
counter = counter + 1;

char initial = 'a';
initial = 'b';
```

These are variables with values. They are **not** objects. C has no objects, and thus there are no methods on those objects.

#### Arrays

Arrays are a little more tricky in C. We have to say the type of what's in them and how big they are:

int luckyNumbers[5] = {2, 3, 19, 5};

### Functions

We write functions in C much as we did with our `main` function above. If we wanted to write a function called `square` that would return the square of an integer, we might do the following:

```c
int square(int x) {
  return x * x;
}
```

Unlike Ruby or JavaScript, we must specify the *data type* that we will return from the function in its declaration, as well as the *data type* of its arguments We must place this function declaration above where we invoke it, so it has to go above the `main` function.

Unfortunately, we can't just say `puts square(2)` like we might try in Ruby. The `puts` function expects an array of characters (essentially a string).
