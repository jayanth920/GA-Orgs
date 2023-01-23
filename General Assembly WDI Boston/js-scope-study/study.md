# JavaScript: Scope Study

Use your favorite search engine and the provided readings to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

## Required Readings

- Read the information in [`scope.md`](scope.md)
- [MDN - Blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)


## Share Your Understanding

#### 1. Copy the following block of code and paste into your answer. Write console log statements for english, spanish and french in the correct location to print the value of each of these variables.

<!-- start code block -->
```js
const english = 'hello'

if (true) {
  const spanish = 'hola'
  if (true) {
    const french = 'bonjour'
  }
}
```
<!-- end code block -->

```js
  <!-- your answer here -->
```

#### 2. Take a look at the loops below. If we were to run this code, what would be the output of the each of the two console logs?

<!-- start code block -->
```js
let counter = 0
while (counter < 5) {
  const a = 1
  counter++
}
console.log(a)

let number = 0
for (let i = 1; i < 2; i++) {
  number += 1
}
console.log(i)
```
<!-- end code block -->

```md
  <!-- your answer here -->
```

#### 3. Consider the following block of code. Is this valid JavaScript? What will print to the console?
<!-- start code block -->
```js
const name = 'Mary'
{
  const name = 'Lou'
  {
    const name = "Ted"
    {
      const name = 'Rhoda'
    }
  }
  console.log(`name in this scope is ${name}`)
}
```
<!-- end code block -->

```md
  <!-- your answer here -->
```

#### 4. Answer the following questions.

A. What is a block?
```md
  <!-- your answer here -->
  ```
B. What is a break?
```md
  <!-- your answer here -->
```
C. Is a function parameter an example of global or local scope?
```md
  <!-- your answer here -->
```
D. What is coupling?
```md
  <!-- your answer here -->
```

#### 5. Read and take note of the various scopes in the following code. When you're done, answer the following questions.

<!-- start code block -->
```js
const autoMake = 'Ford'
const autoModel = 'Stang'
const price = 2368
const baseYear = 1964
const inflation = 0.05

const showAuto = function (year) {
  const autoInfo = function () {
    const currentPrice = price * Math.pow((1 + inflation), year - baseYear)
    console.log(`Auto is a ${year} ${autoMake} ${autoModel}', it's price is ${currentPrice}$`)
  }

  autoInfo()
}

showAuto(1979)
```
<!-- end code block -->

A. Name any and all scopes from which `autoModel` is available. ("Available" is another word for "defined".)
```md
  <!-- your answer here -->
```
B. Is `autoInfo` available from the global scope? Can you execute `autoInfo()` from the global scope?
```md
  <!-- your answer here -->
```
C. Is `price` visible from within `showAuto`?
```md
  <!-- your answer here -->
```
D. Does a 1979 model know anything about any other year's `currentPrice`?
```md
  <!-- your answer here -->
```
E. Name any and all scopes from which `year` is available.
```md
  <!-- your answer here -->
```
