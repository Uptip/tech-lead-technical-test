const filterAnimals = ({ data, filter }) =>
  data
    .map((country) => ({
      ...country,
      people: country.people
        .map((person) => ({
          ...person,
          animals: person.animals.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
          ),
        }))
        .filter(({ animals }) => animals.length > 0),
    }))
    .filter(({ people }) => people.length > 0);

module.exports = {
  filterAnimals,
};
