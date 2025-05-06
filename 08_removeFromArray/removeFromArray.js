const removeFromArray = function (array, ...itemsToRemove) {
  const removalSet = new Set(itemsToRemove);
  let retArray = [];
  array.forEach((element) => {
    if (!removalSet.has(element)) {
      retArray.push(element);
    }
  });
  return retArray;
};

// Do not edit below this line
module.exports = removeFromArray;
