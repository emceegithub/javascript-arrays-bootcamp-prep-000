function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1)
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element) {
  //return array.splice(array.length,0,element)
  return array.push(element)
}
