import { IGenre } from '../api/types'

export const getGenres = (genres: IGenre[], genres_ids: number[]) => {
  const genres_names: string[] = []
  genres_ids.forEach(id => {
    const genre_name = genres?.find(genre => genre.id === id)
    if (!genre_name) return
    genres_names.push(genre_name.name.toLowerCase())
  })

  return genres_names.sort().join(', ')
}
