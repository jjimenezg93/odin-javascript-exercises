const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let result = min;
  while (max > min) {
    result += max--;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
