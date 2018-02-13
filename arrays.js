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
  return [...array, element]
}

function addElementToBeginningOfArray(array, element) {
  array.splice(0,0,element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]








