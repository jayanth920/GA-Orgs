/*
 algo is a series of steps
 simple task broken down into steps...
 pseudocode

 Big O = Complexity (Time / Space)
 Time = number of steps
 Space = amount of memory
 Big O represents the WORST CASE SCENARIO

*/

 // Constant 0(1)
 // throwing out a bag of apples
 fuction sayHi() {
   console.log('hello there')
 }

 let obj = {
   name:'bigO',
   complexities: 5
 }
 obj.name

 let arr = ['a','b','c']
 arr[2]

 // Linear 0(N) N is the number of elements
arr.indexOf('b') => it's position in array
// the indexOf is looping over the array under the hood

 for( let i  = 0;; i < arr.length; i += 1) {
   console.log(arr[i])
 }

// worst case scenario is...3x
 for( let i  = 0;; i < arr.length; i += 1) {
   if(arr[i] == 'a') {
     console.log(arr[i])
   }
   return
 }

 // Quadratic O(N^2)
let arr = [1,2,3,4,5]
for(let i = 0; i < arr.length; i =+ 1){
  for(let j = i + 1; j < arr.length-1; j += 1) {
    // logic
  }
}

// Logarithmic O(logN)
