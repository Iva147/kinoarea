export const shortenFileName = (filename?: string, length: number = 20): string | undefined => {
  if (!filename) return
  if (filename.length <= length) return filename

  const lastDotIndex = filename.lastIndexOf('.')

  if (lastDotIndex === -1 || lastDotIndex <= 0) return

  const lastCharBeforeDot = filename.charAt(lastDotIndex - 1)
  const extension = filename.substring(lastDotIndex)

  let restLength = length - extension.length - 1
  if (restLength <= 0) restLength = 1

  const name = filename.slice(0, restLength)

  return `${name}...${lastCharBeforeDot}${extension}`
}
