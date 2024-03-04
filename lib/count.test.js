const { countChildren } = require('./count');

const mocked = [
  {
    name: 'Dillauti',
    people: [
      {
        name: 'Winifred Graham',
        animals: [
          { name: 'Anoa' },
          { name: 'Duck' },
          { name: 'Narwhal' },
          { name: 'Badger' },
          { name: 'Cobra' },
          { name: 'Crow' },
        ],
      },
      {
        name: 'Blanche Viciani',
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
      },
    ],
  },
];

describe('count function', () => {
  it('should match the documented count result', () => {
    expect(countChildren(mocked)).toEqual([
      {
        name: 'Dillauti [2]',
        people: [
          {
            name: 'Winifred Graham [6]',
            animals: [
              { name: 'Anoa' },
              { name: 'Duck' },
              { name: 'Narwhal' },
              { name: 'Badger' },
              { name: 'Cobra' },
              { name: 'Crow' },
            ],
          },
          {
            name: 'Blanche Viciani [8]',
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
          },
        ],
      },
    ]);
  });
});
