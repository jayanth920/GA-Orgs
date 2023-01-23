// const printBoo = () => {
//     console.log('==========');
//     console.log('Boo!');
//     console.log('==========');
// }
//
// printBoo();

// const sayName = (name) => {
//     console.log('Hello!  My name is ' + name);
// }
//
// sayName('Frodo');
// sayName('Pippin');
// sayName('Sam');
// sayName('Iron Man');

// const calculateArea = (num1, num2) => {
//     console.log(num1 * num2);
// }
//
// calculateArea(4,4);
// calculateArea(6,5)

// const ten = () => {
//     return 10;
// }
//
// console.log(8+10);

// const calculateArea = (num1, num2) => {
//     return num1 * num2;
// }
//
// console.log(calculateArea(calculateArea(2,3), calculateArea(9,4)));

//
// const calculateArea = (num1, num2) => {
//     console.log(num1 * num2);
// }
//
// calculateArea(2,10);

// const example = (input) => {
//     if( input == 'none'){
//         return 0;
//     }
//     return 1;
// }
//
// console.log(example("none"));
// console.log(example('asdfasdfasdf'));

// const item = 'spicy meatball';
//
// const exampleFunction = () => {
//     // const num = 100;
//     // console.log(num * num);
//     console.log(item + ' within function');
// }
//
// exampleFunction();
//
// const setItem = () => {
//     const item = 'spicty meatball';
//     return item;
// }
//
// const getItem = () => {
//     return item;
// }
//
// console.log(getItem());

// const returnName = () => {
//     return "Matt";
// }
//
// const returnGreeting = () => {
//     return "Oh hai, " + returnName();
// }
//
// console.log(returnGreeting());

// {
//     let item = 'spicy meatball';
// }
// console.log(item);

// for(let i = 0; i < 100; i++){
//     console.log('inside the block:' + i);
// }
//
// console.log('Outside the block: '  + i);

// if(true){
//     const num = 100;
// }
// console.log(num);

// const age = 21;
// let message = '';
//
// if(age < 21){
//     message = 'You cannot buy beer';
// } else {
//     message = 'You can buy the beer';
// }
//
// console.log(message);

// const words = "That's a ...";
// {
//     const item = 'spicy meatball';
//     const start = 'mama mia!';
//     {
//         console.log(start);
//         console.log(words);
//         console.log(item);
//     }
// }

// const func = () => {
//     console.log('hi');
//     return func();
// }
//
// func();

// const countdown = (num) => {
//     if(num != 0){
//         console.log(num);
//         countdown(num - 1);
//     }
// }
//
// countdown(10);

const checkSquare = (num) => {
    // console.log(Math.sqrt(num));
    // console.log(5.75 % 1);
    if(Math.sqrt(num) % 1 == 0){
        console.log('perfect square');
    } else {
        console.log('not a perfect square');
    }
}

checkSquare(64);
checkSquare(9);
checkSquare(5);
checkSquare(3);
