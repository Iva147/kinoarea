export const getDate = (timestamp: number, o?: Intl.DateTimeFormatOptions) => {
  const options = o || {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const date = new Date(timestamp)
  console.log({ date, timestamp })
  return new Intl.DateTimeFormat('en-AU', options).format(date)
}
