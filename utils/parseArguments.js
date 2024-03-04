const parseArguments = (argv) => {
  try {
    const args = argv.slice(2);

    if (args.length === 0) {
      throw new Error('No arguments provided');
    }

    return args.reduce((acc, arg) => {
      const [argument, value] = arg.split('=');

      switch (argument) {
        case '--filter':
          if (!value) {
            throw new Error(`Malformed argument: --filter`);
          }
          return {
            ...acc,
            filter: value,
          };
        case '--count':
          if (value && !['true', 'false'].includes(value)) {
            throw new Error(`Malformed argument: --count`);
          }
          return {
            ...acc,
            count: value === 'false' ? false : true,
          };
        default:
          throw new Error(`Unknown argument: ${argument}`);
      }
    }, {});
  } catch (err) {
    const usage = `Usage: node app.js [--filter=string] [--count[=true|false]]\n`;

    if (err && err.stack && err.message) {
      throw new Error(`${err.message} \n\n${usage}`);
    } else {
      throw new Error(usage);
    }
  }
};

module.exports = {
  parseArguments,
};
