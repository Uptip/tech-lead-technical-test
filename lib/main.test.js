const { main } = require('./main');
const { parseArguments } = require('../utils/parseArguments');

jest.mock('../utils/parseArguments');

describe('main function', () => {
  it('should only filter animals when filter argument is provided', () => {
    parseArguments.mockReturnValue({
      filter: 'ry',
      count: null,
    });

    expect(main()).toEqual([
      {
        name: 'Uzuzozne',
        people: [{ name: 'Lillie Abbott', animals: [{ name: 'John Dory' }] }],
      },
      {
        name: 'Satanwi',
        people: [{ name: 'Anthony Bruno', animals: [{ name: 'Oryx' }] }],
      },
    ]);
  });

  it('should only count children when only count argument is provided', () => {
    parseArguments.mockReturnValue({
      filter: null,
      count: true,
    });

    expect(main()[0]).toEqual({
      name: 'Dillauti [5]',
      people: [
        {
          animals: [
            { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' },
          ],
          name: 'Winifred Graham [6]',
        },
        {
          animals: [
            { name: 'Barbet' },
            { name: 'Rhea' },
            { name: 'Snakes' },
            { name: 'Antelope' },
            { name: 'Echidna' },
            { name: 'Crow' },
            { name: 'Guinea Fowl' },
            { name: 'Deer Mouse' },
          ],
          name: 'Blanche Viciani [8]',
        },
        {
          animals: [
            { name: 'Sand Dollar' },
            { name: 'Buzzard' },
            { name: 'Elephant' },
            { name: 'Xenops' },
            { name: 'Dormouse' },
            { name: 'Anchovy' },
            { name: 'Dinosaur' },
          ],
          name: 'Philip Murray [7]',
        },
        {
          animals: [
            { name: 'Kowari' },
            { name: 'Caecilian' },
            { name: 'Common Genet' },
            { name: 'Chipmunk' },
            { name: 'Aardwolf' },
            { name: "Przewalski's Horse" },
            { name: 'Badger' },
            { name: 'Sand Cat' },
            { name: "Linne's Two-toed Sloth" },
          ],
          name: 'Bobby Ristori [9]',
        },
        {
          animals: [
            { name: 'Manta Ray' },
            { name: 'Nubian Ibex' },
            { name: 'Warbler' },
            { name: 'Duck' },
            { name: 'Mice' },
          ],
          name: 'Louise Pinzauti [5]',
        },
      ],
    });
  });

  it('should be able to combine both arguments', () => {
    parseArguments.mockReturnValue({
      filter: 'ry',
      count: true,
    });

    expect(main()).toEqual([
      {
        name: 'Uzuzozne [1]',
        people: [
          { name: 'Lillie Abbott [1]', animals: [{ name: 'John Dory' }] },
        ],
      },
      {
        name: 'Satanwi [1]',
        people: [{ name: 'Anthony Bruno [1]', animals: [{ name: 'Oryx' }] }],
      },
    ]);
  });

  it('should throw when no arguments are provided', () => {
    parseArguments.mockReturnValue({
      filter: null,
      count: null,
    });

    expect(() => main()).toThrow('No arguments provided');
  });
});
