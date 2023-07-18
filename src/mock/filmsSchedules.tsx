import { films } from './films'

const films_22 = [...films]
films_22.length = 2

const films_23 = [...films]
films_23.length = 3

const films_30 = [...films]
films_30.length = 6

const films_4 = [...films]
films_4.length = 1

const films_7 = [...films]
films_7.length = 7

export const schedule = [
  { id: '1', title: '22 апреля 2024', films: films_22 },
  { id: '2', title: '23 апреля 2024', films: films_23 },
  { id: '3', title: '30 апреля 2024', films: films_30 },
  { id: '4', title: '4 мая 2024', films: films_4 },
  { id: '5', title: '7 мая 2024', films: films_7 },
]
