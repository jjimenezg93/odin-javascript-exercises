const palindromes = function (text) {
  if (!text) {
    return false;
  }
  let leftIdx = 0;
  let rightIdx = text.length - 1;
  let isValidChar = (char) => /[a-z0-9]/i.test(char);
  while (leftIdx < rightIdx) {
    const leftChar = text[leftIdx].toLowerCase();
    const rightChar = text[rightIdx].toLowerCase();
    if (!isValidChar(leftChar)) {
      leftIdx++;
      continue;
    }
    if (!isValidChar(rightChar)) {
      rightIdx--;
      continue;
    }
    if (leftChar !== rightChar) {
      return false;
    }
    leftIdx++;
    rightIdx--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
