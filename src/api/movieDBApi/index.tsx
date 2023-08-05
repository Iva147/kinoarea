import axios, { type AxiosResponse } from 'axios'
import { IGenre, IMovieRes } from '../types'
import {
  ICastRes,
  ICreditsRes,
  IMovieImagesRes,
  IPoster,
  IReview,
  IReviewsRes,
  ISimilarRes,
  IMovieDetailsRes,
} from '../types/responses'

const token = import.meta.env.VITE_MOVIEDB_TOKEN
type MOVIETV = 'movie' | 'tv'
type CATEGORY = 'now_playing' | 'upcoming' | 'popular' | 'top_rated'

const path = {
  search: (type: MOVIETV, category: CATEGORY) => `${type}/${category}`,
  discover: (type: MOVIETV) => `discover/${type}`,
  movie: (id: string) => `movie/${id}`,
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

export const getMovieDetails = async (id: string): Promise<IMovieDetailsRes> => {
  const { data } = await movieDBAxious.get<IMovieDetailsRes>(path.movie(id))
  return data
}

export const getCast = async (id: string): Promise<ICastRes[]> => {
  const { data } = await movieDBAxious.get<ICreditsRes>(path.movie(id) + '/credits')
  return data.cast
}

export const getPosters = async (id: string, lang: string = 'en'): Promise<IPoster[]> => {
  const { data } = await movieDBAxious.get<IMovieImagesRes>(path.movie(id) + '/images', {
    params: { include_image_language: lang },
  })
  return data.posters
}

export const getReview = async (id: string): Promise<IReview[]> => {
  const { data } = await movieDBAxious.get<IReviewsRes>(path.movie(id) + '/reviews')
  return data.results
}

export const getSimilarMovies = async (id: string): Promise<IMovieRes[]> => {
  const { data } = await movieDBAxious.get<ISimilarRes>(path.movie(id) + '/similar')
  return data.results
}
