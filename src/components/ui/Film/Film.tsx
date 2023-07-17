import { getRatingColor, getRating } from '../../../utils'
import classnames from 'classnames'
import { Button } from '../Button/Button'
import { IFilm } from '../../../api/types'
interface FilmProps extends Omit<IFilm, 'id'> {
  className?: string
}

export const Film = ({ img, rating, title, genre, className }: FilmProps) => {
  return (
    <div className={classnames([className])}>
      <div
        className={`group/film relative bg-img aspect-card-sm rounded-lg overflow-hidden`}
        style={{ backgroundImage: `url(${img})` }}
      >
        {rating && (
          <span
            className={`absolute top-2.5 right-2.5 px-2 py-1 rounded-[5px] text-white font-bold
          2xl:top-4 2xl:right-4 2xl:text-lg z-10`}
            style={{ background: getRatingColor(rating) }}
          >
            {getRating(rating)}
          </span>
        )}
        <div
          className={`group-hover/film:opacity-100 opacity-0 
            absolute inset-0 bg-blue bg-opacity-60 flex justify-center items-center transition-opacity`}
        >
          <Button variant={'white'} className={'py-7'}>
            Смотреть фильм
          </Button>
        </div>
      </div>
      <h3 className={'text-base text-white font-bold 2xl:text-lg 2xl:py-2.5'}>{title}</h3>
      <p className={'text-xs text-yellowish font-normal 2xl:text-base'}>{genre}</p>
    </div>
  )
}
