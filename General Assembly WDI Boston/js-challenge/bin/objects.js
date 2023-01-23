// Let’s create a person in javascript.  We could use a variable and a string...

const person = "John Doe"

// To print our person’s name we could do...


const person = "John Doe"
console.log(person)

// Well a person has more than a name so let’s add an age and eye color.  We could use an array...


const person = ["John Doe", 50, "Blue"]

// To print our person’s name, age, and eye color we could do...


const person = ["John Doe", 150, "Blue"]

console.log(person[0]) // John Doe

console.log(person[1]) // 150

console.log(person[2]) // Blue

// Ok, now lets print a sentence with our person in it like we might do on a webpage, maybe a profile.


const person = ["John Doe", 150, "Blue"]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old.")

// There are other qualities we might want to add to describe our person like maybe species, number of legs, and number of arms.  We could do…


const person = ["John Doe", 150, "Blue", "Human", 2, 2]

//
// Ok, now lets print a sentence with our person in it like we might do on a webpage again.


const person = ["John Doe", 150, "Blue", "Human", 2, 2]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old. A " + person[3] + "with " + person[4) + "legs and " + person[5] + " arms.")

// Yikes, that doesn’t look very readable.  It seems like we should use an object to organize our data better.  Let’s create a person object and we might as well also separate the first and last name too.


const person = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
}

// What if we want two different people.  We could do


const person1 = {
     species: “human”,
     legs: 2,
     arms: 2,
     firstName: “John”,
     lastName: “Doe”,
     age: 150,
     eyeColor: “Blue”
}

const person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Jane",
     lastName: "Jackson",
     age: 200,
     eyeColor: "Green"
}

// Now when we write our sentence again, it is much easier to read!


const person1 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
}

const person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Jane",
     lastName: "Jackson",
     age: 200,
     eyeColor: "Green"
}

console.log("The great" + person1.firstName + " " + person1.lastName + ", with striking " + person1.eyeColor + " eyes, was a spry " + person1.age + " years old. A " + person1.species + "with " + person1.legs + "legs and " + person1.arms + " arms.")
console.log("The great" + person2.firstName + " " + person2.lastName + ", with striking " + person2.eyeColor + " eyes, was a spry " + person2.age + " years old. A " + person2.species + "with " + person2.legs + "legs and " + person2.arms + " arms.")

// Ok this is going to get really repetitive if we add 10-20 people again.
// We should put all of our people into an array and just loop through the array.
// In the loop, we can console.log the sentence for each person in the array.
// It would look like this.



const person1 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
}

const person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Jane",
     lastName: "Jackson",
     age: 200,
     eyeColor: "Green"
}

const people = [person1, person2]

for (let i = 0; i < people.length; i++){
    console.log("The great" + people[i].firstName + " " + people[i].lastName + ", with striking " + people[i].eyeColor + " eyes, was a spry " + people[i].age + " years old. A " + people[i].species + "with " + people[i].legs + "legs and " + people[i].arms + " arms.")
}

// Now we could add 10-20 people and only have to add 1 line for each person like before. This is much easier code to manage!
