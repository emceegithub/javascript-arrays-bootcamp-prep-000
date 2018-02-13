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