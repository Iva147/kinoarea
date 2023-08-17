import { RateBadge } from '../RateBadge/RateBadge'
import { Button } from '../Button/Button'
import { IMovies } from '../../../api/types'
import { setMovieDBPath } from '../../../utils'
import { AbsentImg } from '../AbsentImg/AbsentImg'

interface ResultListProps {
  list: IMovies
}
export const ResultList = ({ list }: ResultListProps) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id} className={'pt-[14px] pb-5 flex items-center gap-5 item-border'}>
          {item.poster_path ? (
            <img
              src={setMovieDBPath(item.poster_path)}
              alt={item.title || item.name}
              className={'rounded-10 w-[144px] h-[205px] object-cover xl:w-[150px] xl:h-[214px]'}
            />
          ) : (
            <AbsentImg className={'rounded-10 w-[144px] h-[205px] object-cover xl:w-[150px] xl:h-[214px]'} />
          )}

          <div className={'flex-1 gap-1 md:flex md:items-center md:justify-between lg:gap-[25px]'}>
            <div className={'lg:flex-1 lg:flex lg:items-center lg:justify-between'}>
              <div className={'lg:flex-1'}>
                <p className={'text-17 font-q-700 mb-[9px]'}>{item.title || item.name}</p>
                <p className={'text-13 font-q-500 text-purple-1'}>{item.original_title}</p>
                <p className={'text-13 font-q-500 text-yellowish'}>{item.title || item.name}</p>
                <p
                  className={`text-13 text-purple-1 mt-[5px] mb-[15px] lg:mb-0 max-h-[100px] overflow-hidden [:last-]`}
                >
                  {item.overview}
                </p>
              </div>

              <div className={'flex gap-3 lg:pt-5'}>
                <div>
                  <RateBadge rating={item.vote_average} />
                  <p className={'mt-1 text-15 font-q-500'}>Kinoarea</p>
                </div>
                <div>
                  <RateBadge rating={item.vote_average} />
                  <p className={'mt-1 text-15 font-q-500'}>IMDb</p>
                </div>
              </div>
            </div>
            <Button size={'md'} className={'hidden md:block'}>
              Карточка фильма
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}
