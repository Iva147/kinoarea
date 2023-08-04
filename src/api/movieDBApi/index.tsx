import axios, { type AxiosResponse } from 'axios'
import { IGenre } from '../types/responses'

const token = import.meta.env.VITE_MOVIEDB_TOKEN
type MOVIETV = 'movie' | 'tv'
type CATEGORY = 'now_playing' | 'upcoming' | 'popular' | 'top_rated'

const path = {
  search: (type: MOVIETV, category: CATEGORY) => `${type}/${category}`,
  discover: (type: MOVIETV) => `discover/${type}`,
  persons: 'person/popular',
  genres: (type: MOVIETV) => `/genre/${type}/list`,
}

const movieDBAxious = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

movieDBAxious.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err)
  }
)
type IParams = {
  year?: number
  with_genres?: string
}

type TVFilters = IParams
type MovieFilters = IParams

type TVSearch = {
  type: 'tv'
  category?: CATEGORY
  params?: TVFilters
}

type MoviesSearch = {
  type: 'movie'
  category?: CATEGORY
  params?: MovieFilters
}
type IGetSearchParams = TVSearch | MoviesSearch
export const getSearch = async (options: IGetSearchParams) => {
  const { type, category = 'popular', params } = options
  let movie: AxiosResponse

  if (params) {
    movie = await movieDBAxious.get(path.discover(type), { params })
  } else {
    movie = await movieDBAxious.get(path.search(type, category))
  }
  return movie.data
}

interface IGetPersonsParams {
  page: number | string
}
export const getPersons = async (params?: IGetPersonsParams) => {
  const { data } = await movieDBAxious.get(path.persons, { params })
  return data.results
}

export const getGenres = async (type: MOVIETV): Promise<IGenre[]> => {
  const { data } = await movieDBAxious.get(path.genres(type))
  return data.genres
}
