import { Film } from '../Film/Film'
import { IMovies } from '../../../api/types'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { getGenres } from '../../../utils/getGenres'
import { memo } from 'react'
const baseUrl = import.meta.env.VITE_MOVIEDB_ASSETS

interface FilmListProps {
  list: IMovies
}

export const FilmList = memo(({ list }: FilmListProps) => {
  const genres = useTypedSelector(state => state.genres.movies)

  return (
    <div className={'grid gap-3 grid-cols-card-2 md:gap-3.5 md:grid-cols-card-3 lg:grid-cols-card-4 2xl:gap-[22px]'}>
      {list.map(movie => {
        const genre = getGenres(genres, movie.genre_ids)

        return (
          <Film
            img={`${baseUrl}${movie.poster_path}`}
            rating={movie.vote_average}
            title={movie.title}
            genre={genre || ''}
            id={movie.id}
            key={movie.id}
          />
        )
      })}
    </div>
  )
})

FilmList.displayName = 'FilmList'
