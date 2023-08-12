import { IMovieRes } from './film'
import { SocialMedias } from './socialMedias'

/* MovieDB */
export type CustomError = null | string

export interface IGenre {
  id: number
  name: string
}

export interface IPerson {
  adult: boolean
  gender: number
  id: number
  known_for: []
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export interface ICastRes {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: number
  order: number
}

export interface ICrewRes {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

export interface ICreditsRes {
  id: number
  cast: ICastRes[]
  crew: ICrewRes[]
}

export interface IPoster {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface IMovieImagesRes {
  id: number
  backdrops: []
  logos: []
  posters: IPoster[]
}

export interface IReview {
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: string
    rating: number
  }
  content: string
  created_at: Date
  id: string
  updated_at: Date
  url: string
}

export interface IReviewsRes {
  id: number
  page: number
  results: IReview[]
}

export interface ISimilarRes {
  page: number
  results: IMovieRes[]
  total_pages: number
  total_results: number
}

export interface IMovieDetailsRes {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null | []
  budget: number
  genres: { id: number; name: string }[]
  homepage: URL
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

/* firebase */
interface IFriend {
  id: number
  name: string
  img: string
  online: boolean
}

export type SexType = 'male' | 'female' | 'others' | 'notchosen'

export interface IUser {
  id: number
  name: string
  surname: string | null
  birthday: Date | null
  sex: SexType
  img: string
  country: string
  city: string
  genres: { id: number; name: string }[]
  about: string
  links: { [K in SocialMedias]: string | null }
  friends: IFriend[]
  reviews: number[]
}
