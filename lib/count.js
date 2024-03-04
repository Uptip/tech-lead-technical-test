const countChildren = (data) =>
  data.map((country) => ({
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map((person) => ({
      ...person,
      name: `${person.name} [${person.animals.length}]`,
    })),
  }));

module.exports = {
  countChildren,
};
