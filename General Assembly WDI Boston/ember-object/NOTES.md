* For the first example where we are syncing two objects, paste the code in node and run the `console.log` statements

* `.create` is for instantiating a new Ember Object, whereas `.extend` is for creating a new sub-class constructor function and extending it with new methods/properties.

### Questions
* What is a file with an .hbs extenstion?
  * A Handlebars filter

* In the newly generated template file `about.hbs`, what is {{outlet}} doing?

* What is the purpose of `.get` and `.set`, as opposed to just nakedly getting and setting?
  * So that we can use binding? (Will computed properties in Ember work without this?)

### Answers to first lab
```
const Pet = Ember.Object.extend({
})

let bruce = Pet.create({
  name : 'Bruce',
  age : 9
})

bruce.set('age', 10)
bruce.get('age')

const Dog = Pet.extend({
  species : 'Canine'
})

let jellybeans = Dog.create({
  name : 'Jellybeans',
  age : 7
})

jellybeans.get('species')
```

* Feel free to paste in given code to your Ember console to show examples

* Keep in mind that the function in a computed property must return something, and that a computed property should not be invoked (but a method should)

### Questions

* Why do we have to use `.get` when accessing length in the kids example?

### Answer to second lab
```
const Car = Ember.Object.extend({
  tires : 4,
  passengers : [],
  seats : 5,
  numPassengers : Ember.computed('passengers.@each', function(){
    let number = this.get('passengers').get('length')
    return number
  }),
  upperCasePassengers : Ember.computed.map('passengers.@each', function(name){
    return name.toUpperCase()
  }),
  tooFull : Ember.computed.gt('numPassengers', 5)
})

let pickup = Car.create({
  horsepower : 300,
  tires : 4,
  price : 30000
})
```
