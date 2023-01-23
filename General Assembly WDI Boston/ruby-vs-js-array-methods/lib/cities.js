'use strict';

const City = require('./city.js');

const loadCities = () =>
  new Promise((resolve, reject) => {
    const cities = [];
    const fs = require('fs');
    const parse = require('csv').parse;
    const parser = parse({ columns: true });

    const input = fs.createReadStream('data/cities.csv');
    input.on('error', e => reject(e));

    parser.on('readable', () => {
      let record;
      while (record = parser.read()) { // jshint ignore:line
        cities.push(new City(record));
      }
    });

    parser.on('error', e => reject(e));
    parser.on('finish', () => resolve(cities));
    input.pipe(parser);
  });

module.exports = loadCities;
