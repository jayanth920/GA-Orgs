// const myArr = [1,2,3]
//
// for (let element of myArr) {
//     console.log(element);
// }
//
// const myObj = {
//     name:"matt",
//     age: 38,
//     glasses:true
// }
//
// for (let key in myObj) {
//     console.log(myObj[key]);
// }

// const myArry = [
//     1,
//     23,
//     ()=>{
//         console.log('hello');
//     }
// ];
//
// myArry[2]();

// const henchman = ()=>{
//     console.log("I'm the henchman");
// }
// const mobboss = (employee)=>{
//     console.log(employee);
// }
// mobboss(henchman);
// const henchman = ()=>{
//     console.log("I'm the henchman");
// }
// const mobboss = (employee)=>{
//     console.log("I'm the boss");
//     employee();
// }
// mobboss(henchman);

// const mobboss = (employee) => {
//     // console.log(employee);
//     console.log("I'm the boss");
//     employee()
//     // henchman();
// }
//
// mobboss(
//     () => {
//         console.log("I'm the henchman");
//     }
// );
// mobboss(
//     () => {
//         console.log("I'm another henchman");
//     }
// );

// const henchman = () => {
//     console.log('hi');
// }
//
// setTimeout(henchman,2000);
// console.log('computing...');

// let a = 2 + 2;
// debugger;
// a++;
// debugger;
// console.log(a);

// const henchman = () => {
//     console.log("I'm a henchman");
// }
//
// const mobbsasdfoss = (callback) => {
//     henchman();
// }
// mobboss(henchman);
//
// const a = '1';
//
// if(parseInt(a) === 1){
//     console.log('should execute');
// }
// const a = '5,000,000';
//
// console.log(a.replace(',',''));
//
// console.log(typeof a);
//
// console.log(5 + parseInt(a));

// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];

// for(let i = 0; i < iceCreams.length; i++){
//     console.log(iceCreams[i]);
// }
// for (desert of iceCreams) {
//     console.log(desert);
// }
// iceCreams.forEach((flavor) => {
//     console.log(flavor);
// });

// iceCreams[0]

const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];

const updatedIceCreams = iceCreams.map((flavor) => {
    return flavor + " food"
});
console.log(updatedIceCreams);
console.log(iceCreams);
