var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'and skittles.']
function addElementToBeginningOfArray (element, array){
  return [element, ... array]
}
function addElementToBeginningOfArray (element, array){
  addElementToBeginningOfArray.unshift(element)
  return addElementToBeginningOfArray
}