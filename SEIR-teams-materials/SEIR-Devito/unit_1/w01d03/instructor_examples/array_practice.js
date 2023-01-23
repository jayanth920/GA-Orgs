// arrays are the most basic type of containers
const arr = []
const list = ['chair', 'table', 'candle']
typeof {}
typeof []
//.isArray() is an array method
// a method is a function attached to an object
Array.isArray(list)

const faveFoods = ['Kalua Pig', 'Poke Bowl', 'Sushi'];
// items are referenced in an array based on their position
// positions start at 0
faveFoods[0] // Kalua Pig
faveFoods[1] // Poke Bowl
faveFoods[2] // Sushi

const ghostBusters = ["Venkman", "Spengler", "Stantz",
                        "Zeddemore", "Melnitz", "Barrett", "Tully"];
ghostBusters[0]
ghostBusters[2]
// how do we get the last element
ghostBusters[ghostBusters.length - 1]

// CHANGING ELEMENTS
faveFoods[0] = 'sour candy'
faveFoods

//               [0,  1, 2, 3, 4, 5, 6]
const numbers = [21, 18, 5, 3, 2, 1, 1];
numbers[2]=null
numbers[0] = numbers[0] *= 10
numbers
numbers[numbers.length/2] // 3.5
numbers[Math.floor(numbers.length/2)]
numbers[Math.ceil(numbers.length/2)]
numbers[Math.round(numbers.length/2)]

const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];
// for loops are impertive
// for(let i = 0; i < kitchenSink.length; i += 2){
//   console.log(kitchenSink[i])
// }

const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
//all of the items
// for(let i = 0; i < drSeuss.length; i += 1){
//   console.log(drSeuss[i])
// }

// index and odd numbered items
// for(let i = 0; i < drSeuss.length; i += 1){
//   if(i % 2 !== 0) {
//   console.log(i)
//   console.log(drSeuss[i])
//   }
// }

const foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream", "sushi", "tacos"];

// for (let i = 0; i < foodSelections.length; i ++) {
//   if ((i === 5) || (i % 2 === 0)) {
//     console.log(foodSelections[i]);
//   }
// }

// for (let i = 0 ; i < foodSelections.length; i++){
//   if ( i % 2 === 0 && i % 3 === 0 ){
//     console.log(foodSelections[i]);
//   }
// }

let favMovies = ['inception','titanic','ironman','avengers','superbad']
favMovies

const pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
pairs[0][1]
