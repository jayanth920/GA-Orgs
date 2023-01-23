// const foo = {
//   someMethod:()=> {
//     console.log('oh Hai');
//   }
// }
//
// foo.someMethod();

// const foo = {
//   someArray: [1,2,3]
// }
//
// for (element of foo.someArray) {
//   console.log(element);
// }














// const bootcamp = {
//   skills: ["arrays","loops",'variables', 'objects', 'while loops'],
//   feeling:() =>{
//     console.log( "Feeling Good, Feeling Challenged");
//   }
// }
//
// for (x in bootcamp.skills) {
//   console.log(bootcamp.skills[x]);
// }
//
// bootcamp.feeling();
//





// WEEKEND

// const fWeekend = () => {
//   return {
//     activity: "Fishing"
//   }
// }
//
// console.log(fWeekend().activity);



// FAV BAND
// const favBand = () => {
//   return {
//     favSong:() =>{
//       console.log('Africa');
//     }
//   }
// }
//
// favBand().favSong();

// // faveFood
// const favFood = () => {
//   return()=>{
//     console.log('Avocado');
//   }
// }
//
// favFood()();

// const body = {
//     arm: {
//         elbow: 'pointy'
//     }
// };
//
// const myList = [
//   {eyeColor: "green"},
//   2
// ]
//
// console.log(myList[0].eyeColor);
//

const myArrays = [
  [""],
  [],
  ["h",'o','l','u','Buy Supplies']
]

// console.log(myArrays[2][4]);

// const awesome = [
//     {
//         asdf:'true'
//     },
//     3456.245,
//     () => {
//         console.log('fun');
//     },
//     "buddy"
// ];
//
// awesome[2]();
//
// const refrigerator = {
//     fruits: ['apple', 'pear', 'banana']
// }
// for (x in refrigerator.fruits) {
//   console.log(refrigerator.fruits[x]);
// }

// const container = [
//     [1,5,7],
//     ['bear', 'dog', 'cat'],
//     [true, false, true]
// ];
//
// for (row in container) {
//   for (element in container[row]) {
//     console.log(container[row][element]);
//   }
// }


// const createCar = () =>{
//   return {
//     tires: "4"
//   }
// }
//
// console.log(createCar().tires);
//
// const generateShoppingList = () => {
//   return ["apples", "bananas","blueberries", "pears"]
// }
//
// console.log(generateShoppingList()[3]);

// const createRobot = () => {
//   return {
//       stats: {
//         weight: "20lbs"
//     }
//   }
// }
//
// console.log(createRobot().stats.weight);

// const createFunction = () => {
//   return () => {
//     console.log("Hello World");
//   }
// }
//
// createFunction()();


const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}


// console.log(instruments.guitar.electric[1]);
// console.log(instruments.guitar.acoustic[2]);
// console.log(instruments.banjo[2]);
// console.log(instruments.mandolin[1]);
//
// for (guitar in instruments.guitar.electric) {
//   console.log(instruments.guitar.electric[guitar]);
// }

// const favSingers = ['Britney',"Cher","Prince"];
//
// instruments.singers = favSingers;
//
// console.log(instruments);


// const asdfasdf = [
//     true,
//     false,
//     () => {
//         return {
//             foo: 'some value'
//         }
//     },
//     'apple'
// ];
//
// console.log(asdfasdf[2]().foo);

// const matt = [
//   true,
//   () => {
//     return {
//       someArray: ["dog","cat"]
//     }
//   }
// ]
//
// console.log(matt[1]().someArray[0]);

// const foods = [
//   true,
//   () => {
//     return {
//       anObject: {
//         color: "blue"
//       }
//     }
//   }
// ]
//
// console.log(foods[1]().anObject.color);
//
// const garmonbozia = {
//   meltedFace: true,
//   wobblyArms: true,
//   mysteryMeats: [
//     'Schlimmbinooks',
//     'blangs',
//     { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
//     { type: 'Yuck-tops', deliverables: [
//       'Nevermind',
//       { zone: 'safety-zone' },
//       { zone: false, true: true },
//       () => {
//         return () => {
//           return () => {
//             return () => {
//               return () => {
//                 return { website: 'Gossipcop.com', what: {
//                   offering: 'creamed corn', location: 'dark'
//                 }
//                 }
//               }
//             }
//           }
//         }
//       }
//      ]
//     }
//   ]
// }
//
//
// console.log(garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering);


////// START METHODS LAB

// const person = {
//     jump: () => {
//         console.log('fly!');
//     }
// };
//
// person.jump();
//
// const generateCar = ()=>{
//     return {
//         drive(){
//             console.log("Vroom");
//         }
//     }
// }
//
// generateCar().drive();
//
// const account = {
//     tweet: () => {
//         return {
//             message: "fun"
//         }
//     }
// }
//
// console.log(account.tweet().message);


// const me = {
//     foo: () =>{
//         return {
//             array: [2.5, 7, true]
//         }
//     }
// }
//
// console.log(me.foo().array[1]);


// const baz = {
//   foo: () => {
//     return {
//       matt: {
//         travel: "boat"
//       }
//     }
//   }
// }
//
// console.log(baz.foo().matt.travel);

//
// const factory = {
//   createCar: () => {
//     return {
//       startEngine: () => {
//         console.log('Start');
//       }
//     }
//   }
// }
//
// factory.createCar().startEngine();


// const matt = {
//     blink: () =>{
//         return ()=>{
//             console.log('hi')
//         }
//     }
// }
//
// matt.blink()();
//
//
// const list = [
//     'dogs',
//     false,
//     3.5,
//     ()=>{
//         return {
//             funStuff: ()=>{
//                 console.log('yaaassss');
//             }
//         }
//     }
// ];
//
// list[3]().funStuff();

//
// const foo = [
//     'asdfasdf',
//     'matt',
//     false,
//     6,
//     ()=>{
//         return ()=>{
//             console.log('yes!');
//         }
//     },
//     {
//         dog:'blue'
//     }
// ];
//
// foo[4]()();

// const foo = {
//     someMethod: (callback)=>{
//         console.log('About to invoke the callback');
//         callback();
//     }
// }
//
// const myFunc = ()=>{
//     console.log('I have been called!');
// }
//
//
// foo.someMethod(myFunc);
//
// const foo = {
//     height:5,
//     someMethod: (callback)=>{
//         callback();
//     }
// }
//
// const myFunc = (param)=>{
//     console.log(param.height);
// }
//
// myFunc(foo);

// const shirtColor = {
//   color: ["red", 'blue', 'green', 'white', 'pink'],
// }
//
// const combineColor = (param) =>{
//   for (color in param.color) {
//     console.log(param.color[color]);
//   }
// }
//
// combineColor(shirtColor);
