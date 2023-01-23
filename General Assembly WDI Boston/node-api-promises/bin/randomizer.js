'use strict'

const randomizer = require('../lib/randomizer.js')

const inFile = process.argv[2]
const outFile = process.argv[3]

if (!outFile) {
  throw new Error('Script requires two arguments, an input and an output file')
}

randomizer(inFile, outFile)
