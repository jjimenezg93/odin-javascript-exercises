const leapYears = function (year) {
  const bDivisibleBy4 = year % 4 === 0;
  const bDivisibleBy100 = year % 100 === 0;
  const bDivisibleBy400 = year % 400 === 0;

  return bDivisibleBy4 && (bDivisibleBy400 || !bDivisibleBy100);
};

// Do not edit below this line
module.exports = leapYears;
