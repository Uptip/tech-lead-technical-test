#!/usr/bin/node

const { main } = require('./lib');

try {
  console.log(JSON.stringify(main(), null, 2));
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
