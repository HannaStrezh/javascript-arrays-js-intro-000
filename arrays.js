var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'and skittles.']
function addElementToBeginningOfArray ([array], element) {
function.unshift(element, ...array);
return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  array.push(element);
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(elemnt);
}