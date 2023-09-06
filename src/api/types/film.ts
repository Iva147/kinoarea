export interface IFilm {
  id: string | number
  img: string | null
  rating: number
  title: string
  genre: string
}

interface IFilmRes {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  title?: string
  original_title?: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface ITVRes {
  backdrop_path: string
  first_air_date: Date
  genre_ids: number[]
  id: number
  name?: string
  original_name?: string
  origin_country: string[]
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface IMovieRes extends IFilmRes, ITVRes {}

export type IMovies = IMovieRes[]
