import { movieTypes } from '../mock/types'
export const getGenresOptions = () => {
  const options = []
  for (const [key, value] of Object.entries(movieTypes)) {
    options.push({ value: key, label: value })
  }

  return options
}
