import { Typography, TypographyTypes } from '../ui/Typography/Typography'
import { IFilm } from '../../api/types'
import { Film } from '../ui/Film/Film'

interface ScheduleProps {
  period: string
  films: IFilm[]
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
        lg:grid-cols-4 lg:gap-[1.17%] 
        2xl:gap-[22.84px]`}
      >
        {films.map(item => (
          <Film
            img={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.img}` || item.img}
            rating={item.rating}
            title={item.title}
            genre={item.genre}
            key={item.id}
          />
        ))}
      </div>
    </>
  )
}
