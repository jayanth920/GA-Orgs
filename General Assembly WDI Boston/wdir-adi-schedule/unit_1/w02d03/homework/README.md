![ga](../../../ga_cog.png)

# Combining data types / callbacks

---
Title: Combining data types/Callbacks<br>
Type: Homework<br>
Duration: 4hr<br>
Creator: Matt Huntington<br>
Adapted by: Thom Page<br>
Competencies: Objects, Arrays, Loops <br>
Prerequisites: JavaScript <br>

---
# Homework

## CSS

Watch this video introducing [flexbox](https://www.youtube.com/watch?v=tqdqEiTlqF0&index=33&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)


## Common programming principles

Read this article on [programming principles](http://www.artima.com/weblogs/viewpost.jsp?thread=331531), especially the following nine:

* **DRY**
* **KISS**
* **Avoid creating a YAGNI**
* **Do the simplest thing that could possibly work**
* **Don't make me think**
* **Write code for the maintainer**
* **Single responsibility principle**
* **Avoid premature optimization**
* **Separation of concerns**

(You don't have to write anything in response, just having read the article is enough :) ).

## JavaScript Setup

1. Create a file called `answers.js` inside your `homework` folder for today.
2. Copy the questions that you are answering into your file (and comment it out) and write the answer below the question.

## Combine objects, arrays, and functions

**COMPLETE ANY 4**

1. Create an object that has a property that is an array. Log one of the elements of that array.

1. Create an object that has a property that is an object. Log one of the properties of that inner object.

1. Create an array that has an object in it.  Log one of the properties of that object.
1. Create an array that has an array as one of its elements.  Log one of the elements of the inner array.
1. Create an array that has a function as one of its elements.  Call that function.
1. Create an object that has a property that is an array. Loop over the array and log each individual element.
1. Create an array that has an array as one of its elements.  Loop over the second array and log each individual element.
    - Bonus: make each element of the outer array an array as well.  Using two for loops, loop over each array in the outer array and log those elements.

<hr>
&#x1F534; Commit: <br>
"Combine objects, arrays, and functions"
<hr>

## Combine objects, arrays, and functions more than one level deep

**COMPLETE ANY 5**

1. Create a function that returns an object.  Log a value of that object (hint: call the function and then call a property on the return value).
1. Create a function that returns an array.  Log an element of the array.
1. Create a function that returns an object that has an array.  Log one of the elements of that array.
1. Create a function that returns an object that has an object.  Log one of the properties of the inner object.
1. Create a function that returns a function.  Call that inner function
1. Create an array that has a function that returns an object.  Log a property of the object.
1. Create an array that has a function that returns an object that has an array.  Log an element of the inner array.
1. Create an array that has a function that returns an object that has an object.  Log a property of the inner object.
1. Create an array that has a function that returns a function.  Call the inner function.

<hr>
&#x1F534; Commit:  <br>
"Combine objects, arrays, and functions more than one level deep"
<hr>

## Callbacks

1. Make a function `operateNums` that takes two arguments. Assume the two arguments are a number and a function (a callback).
2. Make it so that when `operateNums` is invoked, the callback "operates" on the number.
3. Create a function called `multByTwo` that accepts a number as an argument and multiplies that number by two.
4. Create a function called `squareNum` that accepts a number as an argument and squares that number.
5. Use `multByTwo` and `squareNum` as callbacks when invoking `operateNums`.

<hr>
&#x1F534; Commit:  <br>
"Created and used callbacks"
<hr>

## .forEach

```
const nums = [5, 10, 15, 16, 17, 18, 19, 20];
```

1. Using a for loop, iterate through the `nums` array and print only the numbers that are evenly divisible by 5.
2. Now, use JavaScript's built-in `.forEach` function instead to iterate over the `nums` array and print only those numbers that are evenly divisible by 5.
3. Write a sentence or two comparing and contrasting the two methods.

<hr>
&#x1F534; Commit:  <br>
"Used Javascript's built-in forEach method"
<hr>

## Indentation

Correctly indent the following code:

```javascript
            if(true){
    const a = 2 + 2;
console.log(a);
        }

    if(true){
if(false){
            console.log('hi');
    }
                }
```

<hr>
&#x1F534; Commit:  <br>
"Indentation"
<hr>

## Semantic naming of variables

Fix this variable to have a better name:

```javascript
const c = [2, 4, 6, 8, 10];
```

<hr>
&#x1F534; Commit: <br>
"Semantic naming of variables"
<hr>

## Function definition placement

Clean up this code, so that it works and has function definitions in the correct place

```javascript
bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}
```

<hr>
&#x1F534; Commit: <br>
"Function definition placement"
<hr>

## Commenting code

Write your own comments for each line of code:

```javascript
const addTwoNums = (firstNum, secondNum)=>{
    const finalValue = firstNum + secondNum;
    return finalValue;
}
```

<hr>
&#x1F534; Commit: <br>
"Commenting code"
<hr>


## Error reading

What is meant by the error this produces?

```javascript
foo();

const foo ()=>{
    console.log('hi');
}
```

<hr>
&#x1F534; Commit: <br>
"Error reading"
<hr>

## Hungry For More?

1. Complete all of the **Combine objects, arrays, and functions** section.

<hr>
&#x1F534; Commit: <br>
"Hungry for more part 1 of 2"
<hr>

2. Complete all of the **Combine objects, arrays, and functions more than one level deep** section.

<hr>
&#x1F534; Commit: <br>
"Hungry for more part 2 of 2"
<hr>

3. Watch these extra CSS videos explaining flexbox in more depth.

   - [Flexbox: Wrap, Justify, Align](https://www.youtube.com/watch?v=7d8aAw8mzjI&index=34&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)

   - [Flexbox: Child Property](https://www.youtube.com/watch?v=zDYAbI78dzc&index=35&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J)
