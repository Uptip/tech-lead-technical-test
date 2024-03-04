#!/usr/bin/node

const { data } = require('../data');
const { filterAnimals } = require('./filter');
const { countChildren } = require('./count');
const { parseArguments } = require('../utils/parseArguments');

const main = () => {
  const { filter, count } = parseArguments(process.argv);
  let result = data;

  if (!filter && !count) {
    throw new Error('No arguments provided');
  }

  if (filter) {
    result = filterAnimals({ data: result, filter });
  }

  if (count) {
    result = countChildren(result);
  }

  return result;
};

module.exports = {
  main,
};
