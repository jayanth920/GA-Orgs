## Function Fundamentals

### Recognize the parts

**What are the components of a function?**

#### Function Container

```js
function multiply(){

}
```

#### Input ("Arguments" or "Parameters")

```js
function multiply( num1, num2 ){

}
```

#### Output and Side Effects

```js
function multiply( num1, num2 ){
  console.log( num1 * num2 );
  return num1 * num2;
}
```
* **Output:** return value.
* **Side Effects:** `console.log` statements, DOM manipulation -- anything inside a function that changes state that is **NOT** the output.

### Invoking vs. Referencing

Pay attention to the return values of the next two examples...

#### Invoking/Calling a Function

```js
multiply(2,3);
// => 6
```

#### Referencing a Function

```js
multiply;
// => function multiply( num1, num2 ){
//      console.log( num1 * num2 );
//      return num1 * num2;
//    }
```

### Exercises

#### Calculator
[Repo found here](https://github.com/ga-wdi-exercises/js-calculator-intro)

#### Input, Output, Side Effects
[Repo found Here](https://github.com/ga-wdi-exercises/input-output-SEs)

#### FizzBuzz Redux
[Repo found here](https://github.com/ga-wdi-exercises/fizzBuzz_redux)
