#!/usr/bin/node

const { data } = require('./data');
const { filterAnimals, countChildren } = require('./lib');
const { parseArguments } = require('./utils/parseArguments');

const run = () => {
  try {
    const { filter, count } = parseArguments(process.argv);
    let result = data;

    if (filter) {
      result = filterAnimals({ data: result, filter });
    }

    if (count) {
      result = countChildren(result);
    }

    return result;
  } catch (err) {
    console.error(`Error: \n\n${err.message}`);
    process.exit(1);
  }
};

console.log(JSON.stringify(run(), null, 2));
