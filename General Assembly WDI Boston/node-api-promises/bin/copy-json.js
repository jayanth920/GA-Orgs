'use strict'

const copyJson = require('../lib/copy-json.js')

const inFile = process.argv[2]
const outFile = process.argv[3]

if (!inFile || !outFile) {
  throw new Error('Script requires an in file and an out file')
} else {
  copyJson(inFile, outFile)
}
