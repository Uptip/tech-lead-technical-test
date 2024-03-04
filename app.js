#!/usr/bin/node

const { parseArguments } = require('./utils/parseArguments');

const run = () => {
  try {
    const args = parseArguments(process.argv);
    return args;
  } catch (err) {
    console.error(`Error: \n\n${err.message}`);
    process.exit(1);
  }
};

console.log(JSON.stringify(run(), null, 2));
