export const getCommonFriends = (arr1: string[] | undefined, arr2: string[] | undefined) => {
  if (!arr1 || !arr2 || !arr1.length || !arr2.length) return []

  if (arr1.length > arr2.length) {
    return arr1.filter(element => arr2.includes(element))
  }
  return arr2.filter(element => arr1.includes(element))
}
