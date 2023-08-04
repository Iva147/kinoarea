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
