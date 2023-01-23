# JS Errors Overview

## Objectives

-   Students will be able to explain what debugging is and why it is important.
-   Students will be able to interpret error messages in JavaScript.
-   Students will be able to explain how to take a methodical approach to debugging.

<hr>

## Agenda

1. Preface (5 min)
2. Anatomy of a JS Error Message (10 min)
3. A Methodical Approach (5 min)
4. JS Error Lab (45 min)
 
<hr>

## Preface

According to W3 Schools, debugging is the process of testing, finding, and reducing bugs (errors) in computer programs. The first known computer bug was a real bug (an insect) stuck in the electronics. 🐞

Throughout your career as software engineer, you will encounter many errors, or "bugs" in your code. These errors may be the result of problems with syntax, references, logic, scope, methods, and so on. The process of determining the causes of these errors and resolving them is called "debugging."

Strong debugging skills are often considered to be one of the characteristics that separates junior developers from senior developers. As we gradually release responsibility to you throughout the course, it will be increasingly up to you to solve your own bugs. During job interviews, potential employers may also ask you about a difficult bug you encountered and how you solved it.

Just like anything else we teach you in this course, debugging is a _SKILL_ -- you will get better at it over time, with more practice and more experience. And by understanding how to read error messages, taking a **methodical approach** to debugging, and getting practice at **finding errors**, you will become a faster, more efficient debugger AND a better developer overall. 💪

<hr>

## JS Error Messages 

JavaScript has a built-in global [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object that returns very specific and helpful information when there is a bug in your code. The most common Error Types we will see are as follows: 

**ReferenceError:** Raised when an invalid reference is used (e.g., referencing an undefined variable, typo in variable name)

**SyntaxError:** Raised when a syntax error occurs while parsing JavaScript code (e.g., missing curly brackets)

**TypeError:** Raised when the type of a variable is not as expected (e.g., passing in a Number instead of a String, trying to call an array method on a data type that is not an array)

### Error Message Practice

For each of the error messages below, identify the following: 
<br>
A. The type of error being raised
<br>
B. The file name and line number of the error
<br>
C. The likely cause of the error
<br>
1. ![](https://i.imgur.com/SKTtkuH.png)

2. ![](https://i.imgur.com/cJ2ABNl.png)

3. ![](https://i.imgur.com/VGdz0zs.png)


## A Methodical Approach to Debugging

![Debugging definition](https://i.imgur.com/KPwphh7.jpg)

When you encounter a bug, your first instinct may be to dive into debugging and make changes to your code right away to try to get it to work. Instead, consider taking a structured, step-by-step approach to debugging. Below is a useful series of questions to ask yourself when debugging. These steps begin assuming that you've already recognized that a bug exists, either from incorrect output in your console or error messages. 

1. **What is my error and where is it?**
    - Define your error in the simplest terms possible. (JS's error message often does this for you, e.g., 'SyntaxError'.)
    - Narrow down the location of your bug to the file, code block, and line if you can. Look for the red squiggly lines in your code editor that indicate problems.
    - JavaScript often gives file and line numbers in its error messages, which can point you in the right direction.
2. **What is causing my error?**
    - Read the content of the error message and think about what your code should be doing at that location. 
    - As you examine your code, consider issues such as scope, hoisting, side effects, etc.
    - [Rubberducking](https://www.thoughtfulcode.com/rubber-duck-debugging-psychology/) or [pair-programming](https://www.agilealliance.org/glossary/pairing/)  are especially helpful with this process. 
3. **How can I fix my errors?**
    - Update your code based on your assumption from the previous step and run again; try to only change one thing at a time.
    - If you return another error, repeat the process until your code works the way you want it to.
    
## JS Debugging Errors Mini Lab

Next, we will get some practice putting these concepts to use with a mini lab on debugging JavaScript errors linked [here](https://git.generalassemb.ly/sei-921/js-debugging-errors). 

## Hungry for More? 

- Check out this [repo](https://git.generalassemb.ly/sei-921/intro-to-debugging) for info on console methods beyond `log` and built-in debugger tools in Chrome and VS Code. 
- Use the Error object to throw custom error messages and learn more about error handling in this [article](https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6).  

### Sources/Attributions
- [W3 Schools on JS Errors](https://www.bugsnag.com/blog/anatomy-of-a-javascript-error)
- [Anatomy of a JS Error by BugSnap](https://www.bugsnag.com/blog/anatomy-of-a-javascript-error)
