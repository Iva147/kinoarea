export const getISODate = (d: Date): string => {
  return d.toISOString().split('T')[0]
}
