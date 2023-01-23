'use strict'

const loadPeople = require('../lib/people.js')

loadPeople().then((people) => {
  const count = people.reduce((m /*, p */) => m + 1, 0)
  console.log(`count: ${count}, length: ${people.length}`)
}).catch((error) => console.log(error))
