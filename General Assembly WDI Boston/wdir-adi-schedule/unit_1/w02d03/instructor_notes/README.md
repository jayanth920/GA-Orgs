# Callbacks

---
Title: Callbacks<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>

---

## Lesson Objectives

* Use an anonymous function as an argument to another function
* Use a named function as an argument to another function
* Write a function to perform enumeration with a callback

---

## Passing a function as an argument

### Review
1. What is an argument in terms of a function?
1. Define what it means to invoke a function.

What datatypes can we pass as arguments to functions?

* strings
* numbers
* booleans
* arrays
* objects

Anything, really. We can also pass **functions** as arguments. A function received as a parameter can then be invoked within the receiving function.

Pseudocode passing a function

```javascript
exampleFunction = (ARGUMENT) => {
  // stuff: run the argument
}

exampleFunction(FUNCTION);
```

Proof 

```javascript
const exampleFunction = (callback) => {
  callback();
}

exampleFunction(() => { console.log('hi') });
```

Jargon: a function passed as an argument is a **callback**.

Callbacks are versatile, because they provide additional functionality to an existing function. That additional functionality can be anything at all.

They are used extensively in

* Event listeners in the DOM. Callbacks are used extensively in the DOM with event listeners: given an event, what functionality should occur?
* Javascript iterators -- **below**
* Server code, handling requests and reponses
* 'Asynchronous' patterns (such as setTimeout and setInterval) -- **below**

<br>
<hr>

## Putting it together

Let's examine a variable that is a function

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
console.log(foo);
```

We can pass a function into another function

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const bar = (param1)=>{
    console.log(param1);
}
bar(foo);
```

Once we've done this, we can execute the function that is passed in as a parameter (called a callback)

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(foo);
```

This is good because it allows us to perform some functionality and then do something unique once that's complete:

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const awesome = ()=>{
    console.log("I'm the function 'awesome'");
}
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(foo);
bar(awesome);
```

If we want, we don't even need to assign the callback functions to variables

```javascript
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(()=>{
    console.log("I'm the function 'foo'");
});
bar(()=>{
    console.log("I'm the function 'awesome'");
});
```

	
# Electric Mixer

![electric mixer](https://i.pinimg.com/originals/14/b5/75/14b575bb9e064631727c7c1b8a30f06f.jpg)

A callback is like an electric mixer attachment. A mixer attachment _does_ something. Each attachment does something different: slice, dice, spiralize, all sorts of fancy things depending on the attachment. 

The electric mixer also _does_ something: it uses the mixer attachment.

1. Write a function `electricMixer` that takes one parameter named `attachment`. The `electricMixer` function should console log "This mixer is now: " plus the return value of the attachment.


2. Invoke `electricMixer` using an **anonymous function** as the argument. The return of the anonymous function should be a string that says: "spiralizing".


```javascript
const electricMixer = (attachment) => {	
  console.log("This mixer is now: " + attachment());
}
```

```javascript
electricMixer(() => { 
  return "spiralizing";
});
```

The callback function doesn't need to be anymous, we can give it a name and pass it as a reference:

```javascript
const spiralizer = () => {
  return "spiralizing";
}

electricMixer(spiralizer);
```

```javascript
const slicerDicer = () => {
  return "slicin' and dicin'";
}

electricMixer(spiralizer);
electricMixer(slicerDicer);
```

> Write an electricMixer function and write a new attachment for the mixer. Get your electric mixer to use the attachment.

## setInterval and setTimeout

We can still provide multiple arguments to a function even if one of those arguments is a function.

Pseudocode for **setInterval** and **setTimeout**

```javascript
functionName(CALLBACK, MILLISECONDS)
```



```javascript
setTimeout(() => {
  console.log('hi');
}, 2000);
```

```javascript
setInterval(() => {
  console.log('hi');
}, 2000);
```

> Use SetInterval to display a number that increases by 1 each second (it's a clock!)

**Food for thought: Give a real world example of when you would use setTimeout or setInterval**

<hr>


# Hungry For More
* On Parameters & Arguments (https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04)
