const fs = require('fs')

const chronalCalibrationSafe = (filePath) =>
  fs.readFileSync(filePath, { encoding: 'utf8' }) // read input
    .split('\n') // split at line break
    .map(l => l.trim()) // trim white space
    .map(l => parseInt(l)) // parse to integer
    .filter(Number) // filter for only numbers
    .reduce((a, b) => a + b, 0) // get sum of integers

const chronalCalibration = (filePath) =>
  fs.readFileSync(filePath, { encoding: 'utf8' })
    .split('\n')
    .reduce((a, b)=> a + Number(b), 0)

module.exports = {
  chronalCalibrationSafe,
  chronalCalibration
}
