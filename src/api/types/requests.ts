export type MOVIETV = 'movie' | 'tv'
export type CATEGORY = 'now_playing' | 'upcoming' | 'popular' | 'top_rated'

export type MovieSort =
  | 'popularity.asc'
  | 'popularity.desc'
  | 'revenue.asc'
  | 'revenue.desc'
  | 'primary_release_date.asc'
  | 'primary_release_date.desc'

export type IParams = {
  sort_by?: MovieSort
  language?: string
  page?: number
  with_cast?: string
  with_genres?: string
  with_keywords?: string
  year?: number
}

export type TVFilters = IParams
export type MovieFilters = IParams

export type TVSearch = {
  type: 'tv'
  category?: CATEGORY
  params?: TVFilters
}

export type MoviesSearch = {
  type: 'movie'
  category?: CATEGORY
  params?: MovieFilters
}
export type IGetSearchParams = TVSearch | MoviesSearch
