// CALLBACKS LESSON

// const exampleFunction = (callback) => {
//   callback();
// }
//
// exampleFunction(() => { console.log('hi') });

// const foo = ()=>{
//     console.log("I'm the function 'foo'");
// }
// const bar = (param1)=>{
//     param1();
// }
// bar(foo);


// const electricMixer = (attachment) => {
//   console.log('The mixer is now: ' + attachment());
// }
//
// const attachment = () => {
//   return "Mixing";
// }
//
// electricMixer(attachment);
//
// electricMixer(() => {return "spiralizing";});


// const electricMixer = (attachment) => {
//   console.log("This mixer is now: " + attachment());
// }
//
// const attachment = () => {
//   return "on";
// }
//
// const spiralizer = () => {
//   return "spiralizing";
// }
//
// electricMixer(() => {
//   return "spiralizing";
// });
//
// electricMixer(spiralizer);
// electricMixer(attachment);

// setTimeout(() => {
//   console.log('hi');
// }, 2000);
//
// setInterval(() => {
//   console.log('hi');
// }, 2000);

// https://codepen.io/madeline10302/pen/jKrJYV

// var countDup = 0;
//
// const count = {
//   myArr: [1,2,3,5,6,6,6],
//   count:()=> {
//      console.log(count.myArr);
//   }
// }
//
// count.count();




// count.myArr.forEach(function(element,index){
//       if(count.myArr.indexOf(element) !== index) {
//         countDup += 1;
//       }
//     });
//     return countDup;

// Useful Array
const testArray = [10,20,40,50,60];
//
// // Every Array
// console.log(testArray.every(x => x <= 100));
//
// // Filter
const result = testArray.filter(x => x >= 30);

console.log(result);

// Find

// var find = testArray.find(function(elem){
//   return elem < 30;
// });
//
// Find Index
// var findIndex = testArray.findIndex(function(elem){
//   return elem < 30;
// });
//
// console.log(find,findIndex);

// For Each

// testArray.forEach(function(x) {
//   console.log(x);
// });

// MAP

// REDUCE

// var red = testArray.reduce(function(reducer, currentvalue){
//   return reducer - currentvalue;
// });
//
// console.log(red);

// SOME

// var some = testArray.some((x)=>{
//   return x <= 10;
// });
//
// console.log(some);

// SORT
// const sortArray = [100,20,54,50,60];
//
// console.log(sortArray.sort((a,b) =>  a -b));







//***** ARRAYS WITH CALLBACK METHODS *******//

// const iceCream = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
//
// const updateIceCream = iceCream.map(x => x + " Ice Cream");
//
// const updateIceCream = iceCream.map(function(element){
//   return element + " Ice Cream";
// });
//
// console.log(updateIceCream);












// const iceCream = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
//
// var updateIceCream = iceCream.map(x => x +" Ice Cream");
//
// console.log(updateIceCream);
