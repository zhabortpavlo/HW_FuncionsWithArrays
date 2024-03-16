const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = function (array, item) {
  const filteredArr = array.filter(function (elem) {
    return elem !== item;
  });
  console.log(filteredArr);
};

removeElement(array, 6);
removeElement(array,7);