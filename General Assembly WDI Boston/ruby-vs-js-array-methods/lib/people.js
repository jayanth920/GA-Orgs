'use strict';

const Person = require('./person.js');

const loadPeople = () =>
  new Promise((resolve, reject) => {
    const people = [];
    const fs = require('fs');
    const parse = require('csv').parse;
    const  parser = parse({ columns: true });

    const input = fs.createReadStream('data/people.csv');
    input.on('error', e => reject(e));

    parser.on('readable', () => {
      let record;
      while (record = parser.read()) { // jshint ignore:line
        people.push(new Person(record));
      }
    });

    parser.on('error', e => reject(e));
    parser.on('finish', () => resolve(people));
    input.pipe(parser);
  });

module.exports = loadPeople;
