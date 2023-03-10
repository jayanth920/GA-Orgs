# Coding Challenge: Project Euler, Problems 1 and 2

#### From the Project Euler [website](https://projecteuler.net/):
Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.

The motivation for starting Project Euler, and its continuation, is to provide a platform for the inquiring mind to delve into unfamiliar areas and learn new concepts in a fun and recreational context.

## Problem 1: Multiples of 3 and 5

![triplets](https://media.giphy.com/media/jFywwp8TzdCFi/giphy.gif)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

```javascript
function sumOfMultiplesofThreeAndFive(num) {
  // your code goes here! 
}

console.log(sumOfMultiplesofThreeAndFive(10))
// should be 23
// Explanation: Multiples of three and five below 10 are 3, 5, 6, and 9. The sum of 3, 5, 6 and 9 is 23. 

console.log(sumOfMultiplesofThreeAndFive(1000))
// ?????

```


## Problem 2: Even Fibonnacis Sum

![Fibonnaci sequence](https://media.giphy.com/media/1Qj94sCeIEBtC/giphy.gif)

Each new term in the [Fibonacci sequence](https://www.livescience.com/37470-fibonacci-sequence.html)  is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

```javascript
function evenFibonnacisSum(upperlimit){
  //your code goes here!
}

console.log(evenFibonnacisSum(100))
// should be 44
// Explanation: The even Fibonnacis below 100 are 2, 8, and 34. Their sum is 44. 

console.log(evenFibonnacisSum(4000000))

// TESTS:
// console.log(evenFibonnacisSum(8) === 10)
// console.log(evenFibonnacisSum(10) === 10)
// console.log(evenFibonnacisSum(34) === 44)
// console.log(evenFibonnacisSum(60) === 44)
// console.log(evenFibonnacisSum(1000) === 798)
// console.log(evenFibonnacisSum(100000) === 60696)
// console.log(evenFibonnacisSum(4000000) === 4613732)
```


#### Practice Makes Perfect

Check out the Project Euler [archives](https://projecteuler.net/archives) and keep working through the rest of the problems! 
