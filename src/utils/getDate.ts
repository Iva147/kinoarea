export const getDate = (
  timestamp: number | Date | string,
  o?: Intl.DateTimeFormatOptions,
  locals: string = 'en-US'
) => {
  if (!timestamp) return ''
  const options = o || {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const date = new Date(timestamp)
  return new Intl.DateTimeFormat(locals, options).format(date)
}
