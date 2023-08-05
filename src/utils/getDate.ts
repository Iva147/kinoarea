export const getDate = (timestamp: number | Date, o?: Intl.DateTimeFormatOptions) => {
  const options = o || {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat('en-AU', options).format(date)
}
