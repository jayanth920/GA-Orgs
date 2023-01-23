module.exports = function exampleData () {
  var _      = require('lodash');
  var Chance = require('chance');
  var chance = new Chance();

  return {
    people: _.times(10, function generatePeople (index) {
      return {
        id: index,
        name: chance.name(),
        address: {
          street: chance.address(),
          city: chance.city(),
          state: chance.state({ full: true }),
          zip: chance.zip({ plusfour: true })
        },
        email: [
          { type: "home", address: chance.email({domain: "example.com"}) },
          { type: "work", address: chance.email({domain: "example.com"}) }
        ],
        phone: [
          { type: "work",   number: chance.phone() },
          { type: "mobile", number: chance.phone() }
        ]
      };
    })
  };
};
