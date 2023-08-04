export function setActiveItem<T extends { id: string | number }>(list: T[], id: string | number): T[] {
  return list.map(item => {
    if (item.id === id) return { ...item, isActive: true }
    return item
  })
}
