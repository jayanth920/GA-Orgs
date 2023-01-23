// const adventurer = {
//   name: 'Timothy',
//   hitpoints: 10,
//   belongings: ['sword', 'potion', 'Tums']
// }

// console.log(adventurer);

// console.log(adventurer.belongings);

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i]);
// }
//
// const adv2 = {
//   name: 'Link',
//   hitpoints: 3,
//   belongings: ['sword', 'sheild', 'potion'],
//   companion: {
//     name: 'Navi',
//     type: 'Fairy'
//   },
//   companion2: {
//     name: 'Buzz',
//     type: 'Insect'
//   }
// }
//
// adv2.companion.name = 'Susan'

// console.log(adv2.companion2.name);
//
// adv2.belongings.push('Vogue Magazine')
//
// // console.log(adv2.belongings[adv2.belongings.length - 1]);
//
// for (let i = 0; i < adv2.belongings.length; i++ ) {
//   console.log(adv2.belongings[i]);
// }

//
// const adventurer = {
//   name: 'Timothy',
//   hitpoints: 10,
//   belongings: ['sword', 'potion', 'Tums'],
//   companion: {
//     name: 'Velma',
//     type: 'Bat',
//     companion: {
//       name: 'Tim',
//       type: 'Parasite',
//       belongings: ['SCUBA tank', 'Rogan josh', 'health insurance']
//     }
//   }
// }

// console.log(adventurer.companion);
//
// console.log(adventurer.companion.name);
//
// console.log(adventurer.companion.type);


// console.log(adventurer.companion.companion.type);

// console.log(adventurer.companion.companion.belongings.slice(-1)[0]);
// console.log(adventurer.companion.companion.belongings[2]);
// console.log(
//   adventurer.companion.companion.belongings[
//     adventurer.companion.companion.belongings.indexOf('health insurance')
//   ]
// );


const movies = [
  { title: 'Tokyo Story'},
  { title: 'Paul Blart: Mall Cop'},
  { title: "L'Avventura"}
]

// console.log(movies[0].title);

// for ( let i = 0; i < movies.length; i++ ) {
//   console.log(movies[i].title);
// }

//
// const monster = {
//   name: 'Slimer',
//   age: 6
// }
//
// const someVar = 'name'
//
// console.log(monster[someVar]);

const movie = {
  title: "L'Avventura",
  director: 'Michelangelo Antonioni',
  year: 1960
}

// for (let key in movie ) {
//   console.log(movie[key]);
// }

// console.log(Object.keys(movie));

// for (let i = 0; i < Object.keys(movie).length; i++) {
//   console.log(movie[Object.keys(movie)[i]]);
// }
