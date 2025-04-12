export const arrayMove = (array, fromIndex, toIndex) => {
  const element = array[fromIndex]
  array.splice(fromIndex, 1)
  array.splice(toIndex, 0, element)

  return array
}
