import { Typography, TypographyTypes } from '../ui/Typography/Typography'
import { IMovieRes } from '../../api/types'
import { Film } from '../ui/Film/Film'
import { getGenres, setMovieDBPath } from '../../utils'
import { GenreIds } from '../../mock/types'

interface ScheduleProps {
  period: string
  films: IMovieRes[]
}
export const Schedule = ({ period, films }: ScheduleProps) => {
  return (
    <>
      <Typography variant={'h4'} type={TypographyTypes.BLOCK_TITLE}>
        {period}
      </Typography>
      <div
        className={`grid grid-cols-2 gap-[8.8px] mt-4
        md:grid-cols-3 md:gap-[10.12px] md:mt-5
        lg:grid-cols-4 lg:gap-x-[1.17%] lg:gap-y-5 
        2xl:gap-[22.84px]`}
      >
        {films.map(item => {
          const path = item.poster_path || item.backdrop_path
          const url = path && setMovieDBPath(path)

          return (
            <Film
              img={url}
              rating={item.vote_average}
              title={item.title || item.name || ''}
              genre={getGenres(item.genre_ids as unknown as GenreIds)}
              id={item.id}
              key={item.id}
            />
          )
        })}
      </div>
    </>
  )
}
