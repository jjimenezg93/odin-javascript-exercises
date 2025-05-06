const repeatString = function (str, numRepetitions) {
  if (numRepetitions < 0) {
    return "ERROR";
  }
  let retVal = "";
  for (let i = numRepetitions; i > 0; --i) {
    retVal += str;
  }
  return retVal;
};

// Do not edit below this line
module.exports = repeatString;
