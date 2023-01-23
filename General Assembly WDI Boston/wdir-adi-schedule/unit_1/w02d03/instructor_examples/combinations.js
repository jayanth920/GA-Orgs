// const foo = {
//     someArray: [1,2,3]
// }
// console.log(foo.someArray[1]);

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// }
// console.log(foo.someObject.someProperty);

// const foo = {
//     someMethod: ()=>{
//         console.log('oh hai');
//     }
// }
// foo.someMethod();

// const foo = [{someProperty:'weeee'}, 2, 5];
// console.log(foo[0].someProperty);

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];
//
// console.log(foo[1][2]);

// const foo = [
//     1,
//     'hi',
//     ()=>{
//         console.log('fun');
//     }
// ];
// foo[2]();

// const foo = {
//     someArray: [1,2,'hi']
// }
//
// //elem is the value
// //works only on arrays
// for(let elem of foo.someArray){
//     console.log(elem);
// }
//
// //key is the key/index
// //works on objects AND arrays
// for(let key in foo){
//     console.log(key);
// }

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ]
//
// for(row of foo){
//     for(element of row){
//         console.log(element);
//     }
// }
//
// for(let row = 0; row < foo.length; row++){
//     for(let column = 0; column < foo[row].length; column++){
//         console.log(foo[row][column]);
//     }
// }

// const foo = () => {
//     return {
//         someProperty: 'hi!'
//     }
// }
//
// console.log(foo().someProperty);

// const foo = () => {
//     return ['apple', 'banana', 'pear']
// }
// console.log(foo()[1]);

// const foo = () => {
//     return {
//         someArray: ['fun', 'awesome', 'sweeeeet']
//     }
// }
// console.log(foo().someArray[1]);

// const foo = () => {
//     return {
//         someObject: {
//             someProperty: 'some value'
//         }
//     }
// }
// console.log(foo().someObject.someProperty);

// const foo = () => {
//     return {
//         someMethod: ()=>{
//             console.log('oh hai!');
//         }
//     }
// }
//
// foo().someMethod();

// const foo = () => {
//     return () => {
//         console.log('whaaaa');
//     }
// }
// foo()();

// const foo = {
//     someMethod: ()=>{
//         return {
//             someProperty: 'some value'
//         }
//     }
// }
// console.log(foo.someMethod().someProperty);

// const foo = {
//     someMethod: ()=> {
//         return {
//             someArray: ['peach', 'apple', 'pear']
//         }
//     }
// }
//
// console.log(foo.someMethod().someArray[2]);

// const foo = {
//     someMethod: () => {
//         return {
//             someObject: {
//                 someProperty: 'some value'
//             }
//         }
//     }
// }
// console.log(foo.someMethod().someObject.someProperty);

// const foo = {
//     someMethod: ()=>{
//         return {
//             someMethod:()=>{
//                 console.log('both methods have same name');
//             }
//         }
//     }
// }
//
// foo.someMethod().someMethod();

// const foo = {
//     someMethod: () => {
//         return () => {
//             console.log('hi');
//         }
//     }
// }
// foo.someMethod()();

// const foo = [
//     1,
//     'apple',
//     ()=>{
//         return {
//             someProperty: 'some value'
//         }
//     }
// ];
// console.log(foo[2]().someProperty);

// const foo = [
//     1,
//     'apple',
//     ()=>{
//         return {
//             someArray: ['cat', 'dog', 'baboon']
//         }
//     }
// ];
// console.log(foo[2]().someArray[2]);

// const foo = [
//     1,
//     'apple',
//     () => {
//         return {
//             someObject: {
//                 someProperty: 'some value'
//             }
//         }
//     }
// ]
// console.log(foo[2]().someObject.someProperty);

// const foo = [
//     1,
//     'apple',
//     ()=>{
//         return {
//             someMethod: ()=>{
//                 console.log('fun');
//             }
//         }
//     }
// ];
// foo[2]().someMethod();

// const foo = [
//     1,
//     'apple',
//     ()=>{
//         return ()=>{
//             console.log('happy new year!');
//         }
//     }
// ];
// foo[2]()();

// const foo = ()=>{
//     console.log('I am the function foo');
// }
// // foo();
// console.log(foo);

// const foo = () => {
//     console.log('I am the function foo');
// }
//
// const awesome = () => {
//     console.log('I am the function awesome');
// }
//
// const bar = (param1) => {
//     console.log('I am about to execute a callback');
//     param1();
// }
// bar(foo);
// bar(awesome);


// const bar = (param1) => {
//     console.log('I am about to execute a callback');
//     param1();
// }
//
// bar(()=>{
//     console.log('I am the function foo');
// });
// bar(()=>{
//     console.log('I am the function awesome');
// });

// setTimeout(
//     ()=>{
//         console.log('hi');
//     },
//     1000
// )

// let a = 2 + 2;
// debugger;
// a++;
// debugger;
// console.log(typeof a);

// const myArr = [1,2,3];
// const result = myArr.map((element)=>{
//     return element * 5;
// });
// console.log(result);

const myArr = [1,2,3];
const map = (array, callback)=>{
    const newArray = [];
    for(element of array){
        const newElem = callback(element);
        newArray.push(newElem);
    }
    return newArray;
}
const result = map(myArr,(element)=>{
    return element*5;
})
console.log(result);
