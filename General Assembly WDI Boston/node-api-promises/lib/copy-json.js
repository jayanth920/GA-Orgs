'use strict'

const fs = require('fs')

const copyJson = function (inFile, outFile) {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    let pojo
    if (error) {
      console.error(error.stack)
      return
    }

    try {
      pojo = JSON.parse(data)
    } catch (error) {
      console.error(error.stack)
      return
    }
    const json = JSON.stringify(pojo, null, 2)

    fs.writeFile(outFile, json, { flag: 'w' }, error => {
      if (error) {
        console.error(error.stack)
        return
      }
      console.log('\ncopied')
    })
  })
}

module.exports = copyJson
