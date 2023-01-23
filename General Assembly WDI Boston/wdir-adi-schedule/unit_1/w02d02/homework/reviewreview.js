// function, single argument string
// should return true if palindrome: radar
// palindrome is a word that is the same forwards and backwards
// should return false if not: borscht

// BONUS deal with capital letter

// get the input
// reverse the input
// check if the input matches the reversed input

// chaining
const checkPalindrome = str => {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

// totally fine way to do it too
// const checkPalindrome = str => {
//   const lCaseString = str.toLowerCase()
//   const toArray = lCaseString.split('')
//   const arrReverse = toArray.reverse()
//   const reverseJoin = arrReverse.join('')
//
//   return str.toLowerCase() === reverseJoin
// }

console.log(checkPalindrome('Radar'));
