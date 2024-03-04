#!/usr/bin/node

const { data } = require('./data');
const { filterAnimals } = require('./lib');
const { parseArguments } = require('./utils/parseArguments');

const run = () => {
  try {
    const { filter } = parseArguments(process.argv);

    if (filter) {
      return filterAnimals({ data, filter });
    }
  } catch (err) {
    console.error(`Error: \n\n${err.message}`);
    process.exit(1);
  }
};

console.log(JSON.stringify(run(), null, 2));
