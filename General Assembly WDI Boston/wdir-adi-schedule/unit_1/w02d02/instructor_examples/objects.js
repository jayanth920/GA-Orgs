// const vehicle = ["blue", 4000, 1989];
// console.log(vehicle[0]);

// const car = {
//     hp: 4000,
//     color: "blue",
//     year: 1989
// }
//
// console.log(car.color);
// console.log(car['color']);

// const person = {
//     hair: 'brown',
//     height: 6,
//     age: 23
// }
//
// console.log(person.age);
//
// const house = {
//     doors: 9
// }
// console.log(house);
// house.windows = 30;
// console.log(house);
// house.hasGarden = true;
// console.log(house);

// const bicycle = {
//     isATricycle: false
// }
// console.log(bicycle);
// bicycle.isATricycle = true;
// console.log(bicycle);
//

// const mogwai = {};
// mogwai.name = "Gizmo";
// console.log(mogwai);
// mogwai = { name: "Gizmo"};

// const name = 'Gizmo';
// const age = 1;
//
// const mogwai = {name, age}
//
// console.log(mogwai);

// const borough = {
// 	name: "Brooklyn",
// 	name: "The Bronx"
// }
//
// console.log(borough);

// const goblin = {badGuy: true};
//
// console.log(goblin['badGuy']);

// const strangeObj = {};
//
// strangeObj['a key with spaces'] = 999;
//
// console.log(strangeObj['a key with spaces']);

// const obj = {
//     1: 'one'
// }
// console.log(obj);
// console.log(obj['1']);
//
// for (var i = 0; i < 10; i++) {
//     obj['key'+i] = 'foo'
// }
// console.log(obj);

// const obj = {
// 	whatevs: 'hi',
// 	count:4,
//     something: 'wutttt'
// }
// if (obj.whatevs == "hi") {
// 	console.log('ok');
// }
//
// for (var i = 0; i < obj.count; i++) {
// 	console.log(i);
// }
// if(obj.something){
//     console.log('something exists');
// }
// if(obj.anotherthing){
//     console.log('anotherthing exists');
// } else {
//     console.log('anotherthing des not exist');
// }
// console.log(obj.anotherthing);

const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
    companion: {
       name: "Velma",
		type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
        }
	}
};

// console.log(adventurer.belongings[1]);
//
// for (var i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// console.log(adventurer.companion.type);
// console.log(adventurer.companion.companion.type);
// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [
//     { title: "Tokyo Story" },
//     { title: "Paul Blart: Mall Cop" },
//     { title: "L'Avventura" }
// ]
//
// for (var i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
// }

// const monster = {
//     name: 'Slimer',
//     age: 6
// }
//
// const monsterObj = {
//     name: 'Zool',
//     age: 6
// }
//
// const someVar = 'name'
//
// console.log(monsterObj[someVar]);

const movie = {
    title: "L'avventura",
    director: "Michelangelo Antonini",
    year: 1960
}

// for(let key in movie){
//     console.log(movie[key]);
// }

// const myArr = ['blue', 'dog', 'house'];
// // for(let index in myArr){
// //     console.log(myArr[index]);
// // }
// for(let elem of myArr){
//     console.log(elem);
// }

//create an array of strings that corresponds of the movie object
const keys = Object.keys(movie);

for(let i = 0; i < keys.length; i++){
    console.log(movie[ keys[i] ])
}
