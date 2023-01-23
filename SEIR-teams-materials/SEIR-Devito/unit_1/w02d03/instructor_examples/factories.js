class Car {
  static color () {
    return 'red'
  }
  constructor(maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker;
  }
  drive () {
    console.log('Vroom Vroom')
  }
}
const newCar = new Car('toyota', 100)
newCar.drive()
console.log(Car.color())
// instantiate a new instance of a Car
// new is the keyword that instantiates the new car
// const newCar = new Car('Mazda', 12345)
// console.log(newCar)
class Factory {
  constructor (company) {
    this.company = company;
    this.cars = [];
    this.count = 1
  }
  generateCar () {
    const newCar = new Car(this.company, this.count++)
    this.cars.push(newCar)
  }
  findCar (index) {
    return this.cars[index]
  }
}

const tesla = new Factory('Tesla')
tesla.generateCar() // 0
tesla.generateCar() // 1
tesla.generateCar() // 2
tesla.generateCar() // 3

// console.log(tesla.cars)

const porche = new Factory('Porche')
porche.generateCar()
porche.generateCar()
porche.generateCar()
// console.log(porche)
