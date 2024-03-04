const { filterAnimals } = require('./filter');
const { data } = require('../data');

describe('filter function', () => {
  it('should match the documented filter result', () => {
    expect(filterAnimals({ data, filter: 'ry' })).toEqual([
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

  it('should not send empty animals arrays', () => {
    const mocked = [
      {
        name: 'France',
        people: [
          { name: 'Owner 1', animals: [{ name: 'Doggo' }] },
          { name: 'Owner 2', animals: [] },
        ],
      },
    ];

    expect(filterAnimals({ data: mocked, filter: 'Doggo' })).toEqual([
      {
        name: 'France',
        people: [{ name: 'Owner 1', animals: [{ name: 'Doggo' }] }],
      },
    ]);
  });

  it('should not send empty people arrays', () => {
    const mocked = [
      {
        name: 'France',
        people: [
          { name: 'Owner 1', animals: [{ name: 'Doggo' }] },
          { name: 'Owner 2', animals: [{ name: 'Doggu' }] },
        ],
      },
      {
        name: 'Belgium',
        people: [{ name: 'Owner 3', animals: [{ name: 'Catto' }] }],
      },
    ];

    expect(filterAnimals({ data: mocked, filter: 'Dogg' })).toEqual([
      {
        name: 'France',
        people: [
          { name: 'Owner 1', animals: [{ name: 'Doggo' }] },
          { name: 'Owner 2', animals: [{ name: 'Doggu' }] },
        ],
      },
    ]);
  });

  it('should not send empty countries arrays', () => {
    const mocked = [
      {
        name: 'France',
        people: [
          { name: 'Owner 1', animals: [{ name: 'Doggo' }] },
          { name: 'Owner 2', animals: [] },
        ],
      },
      {
        name: 'Belgium',
        people: [
          { name: 'Owner 3', animals: [{ name: 'Doggo' }] },
          { name: 'Owner 4', animals: [] },
        ],
      },
    ];

    expect(filterAnimals({ data: mocked, filter: 'Cato' })).toEqual([]);
  });
});
