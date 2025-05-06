const reverseString = function (str) {
  let reversedStr = "";
  for (let i = 0; i < str.length; ++i) {
    reversedStr += str[str.length - 1 - i];
  }
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
