# Big-O Notation Exercises

What is the worst-case time complexity for the following algorithms?

#### #1

```js
function occurrences(word, phrase) {
  let result = 0
  let words  = phrase.split(' ')
  words.forEach(word => {
    if (word.toLowerCase() === word.toLowerCase()) result += 1
  })
  return result
}
```

#### #2

```js
// from http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm/
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSortBasic(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}
```

#### #3

```js
function factorial (n) {
  if (n === 0) {
    return 1
  } else { 
    return n * factorial(n - 1)
  }
}
```

#### #4

```js
function isBobFirstIn (people) {
 return people[0] === 'Bob'
}
```

#### #5

```js
function palindrome (input) {
  let output = ""
  let stack = input.split('').reverse()
  stack.forEach(character => {
    output += character
  })
  return input === output
}
```

#### #6

```js
function sumDivisors (number) {
  let result = 0
  let counter = 1
  while (counter < number) {
    if (number % counter === 0) {
      result += counter
    }
    counter += 1
  }
  return result
}
```

#### #7

```js
function printAllNumbersThenAllPairSums(numbers) {
  numbers.forEach(number => console.log(number))
  
  numbers.forEach(number => {
    numbers.slice(1, numbers.length-1).forEach(innerNumber => {
      console.log(number, innerNumber)
    })
  })
}
```

#### #8

```js
// from https://stackoverflow.com/questions/40200089/is-a-number-prime
function isPrime (number) {
  for (let i = 2; i < number; i++)
    if(num % i === 0) return false;
  return number !== 1;
}
```

#### #9

```js
function guessNumber (max, correct, counter=0)
  if (counter === correct) {
    return `I finally found the number after ${counter} tries!`
  } else {
    guessNumber(max, correct, counter+1)
  }
}
```

#### #10

```js
function guessNumber (max) {
  let min = 1
  let tries = 0
  let guess = 0

  let answer = Math.floor(Math.random(max) + 1)

  while (guess !== answer) {
    guess = Math.floor((max + min) / 2)
    if (guess === answer) return tries
    if (guess < answer) min = guess + 1
    if (guess > answer) max = guess - 1
    tries += 1
  }

  return null
}
```

#### Sources 

- [1](http://www.daveperrett.com/articles/2010/12/07/comp-sci-101-big-o-notation/)
- [2](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity)
- [3](https://juloc88.github.io/blog/2014/12/18/binary-search-algorithm-in-ruby/)
