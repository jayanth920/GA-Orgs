const crayon = {
  color: 'blue',
  lengthInCM: 8,
  getUsedUp: function () {
    crayon.lengthInCM -= 0.5
  }
}

module.exports = crayon
