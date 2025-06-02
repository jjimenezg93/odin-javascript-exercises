function getAge(person) {
  let endYear = person.yearOfDeath ?? new Date().getFullYear();
  return endYear - person.yearOfBirth;
}

const findTheOldest = function (array) {
  return array.reduce((a, b) => (getAge(a) > getAge(b) ? a : b));
};

// Do not edit below this line
module.exports = findTheOldest;
