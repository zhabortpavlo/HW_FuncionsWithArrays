const array = [1,2,3,4,5,6,7];

const removeElement = function(array,item) {
const elemToRemove = item;
const filteredArr =  array.filter(function(elem) {
return elem !== elemToRemove;
})
console.log(filteredArr)
}

removeElement(array,6);