'use strict'

const fs = require('fs')
const shuffle = require('knuth-shuffle').knuthShuffle

const randomizer = function (inFile, outFile) {
  fs.readFile(inFile, 'utf-8', (error, data) => {
    if (error) {
      console.error(error.stack)
      return
    }

    let dataArray = data.split('\n')

    // remove line at the end of the file
    dataArray = dataArray.slice(0, dataArray.length - 1)

    // randomize the array
    const randomLines = shuffle(dataArray.slice(0))

    // add empty line back
    randomLines.push('')

    fs.writeFile(outFile, randomLines.join('\n'), { flag: 'w' }, error => {
      if (error) {
        console.error(error.stack)
        return
      }

      console.log('\nrandomized!')
    })
  })
}

module.exports = randomizer
