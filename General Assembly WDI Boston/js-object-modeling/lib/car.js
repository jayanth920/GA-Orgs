const car = {
  make: 'Toyota',
  model: '4Runner',
  releaseYear: 1992,
  mileage: 78062,
  addMileage: function () {
    this.mileage += 50
  }
}

module.exports = car
