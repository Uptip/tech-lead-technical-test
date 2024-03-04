const { parseArguments } = require('./parseArguments');

describe('arguments parser', () => {
  it('should parse the --filter argument correctly', () => {
    expect(parseArguments([, , '--filter=ry'])).toEqual({ filter: 'ry' });
    expect(() => parseArguments([, , '--filter'])).toThrow(
      'Malformed argument: --filter',
    );
  });

  it('should parse the --count argument correctly', () => {
    expect(parseArguments([, , '--count'])).toEqual({ count: true });
    expect(parseArguments([, , '--count=true'])).toEqual({ count: true });
    expect(parseArguments([, , '--count=false'])).toEqual({ count: false });
  });

  it('should throw an error when an unknown argument is passed', () => {
    expect(() => parseArguments([, , '--unknown'])).toThrow(
      'Unknown argument: --unknown',
    );
  });
});
