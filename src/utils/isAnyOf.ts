export function isAnyOf<T>(value: T, ...options: T[]): boolean {
  return options.includes(value)
}
