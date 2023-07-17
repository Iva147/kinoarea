import { Film } from '../Film/Film'
import { IFilm } from '../../../api/types'

interface FilmListProps {
  list: IFilm[]
}
export const FilmList = ({ list }: FilmListProps) => {
  return (
    <div className={'grid gap-3 grid-cols-card-2 md:gap-3.5 md:grid-cols-card-3 lg:grid-cols-card-4 2xl:gap-[22px]'}>
      {list.map(({ id, ...rest }) => (
        <Film {...rest} key={id} />
      ))}
    </div>
  )
}
