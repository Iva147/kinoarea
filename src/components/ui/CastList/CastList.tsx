import { ICastRes } from '../../../api/types/responses'
import { setMovieDBPath } from '../../../utils'
import { memo, useMemo } from 'react'

interface CastListProps {
  list: ICastRes[]
}
export const CastList = memo(({ list }: CastListProps) => {
  const cast = useMemo(() => {
    const maxAmount = 8
    if (list.length > 8) {
      return list.slice(0, maxAmount)
    }
    return list
  }, [list])
  return (
    <div
      className={`grid grid-cols-2 gap-x-[8.9%] gap-y-5 
        md:gap-y-[62px] 
        lg:grid-cols-3 lg:gap-y-10 lg:gap-x-12 
        2xl:grid-cols-5 2xl:gap-y-14`}
    >
      {cast.map(item => (
        <div key={item.id}>
          <img
            src={setMovieDBPath(item.profile_path)}
            alt={item.name}
            className={'rounded-[5px] aspect-square object-cover mb-1.5 md:mb-4'}
          />
          <h5 className={'text-sm font-q-700 md:text-lg'}>{item.name}</h5>
          <p className={'text-xs text-white/70 my-[3px] md:text-15 md:my-3'}>{item.original_name}</p>
          <p className={'text-xs text-yellowish  md:text-base'}>{item.character}</p>
        </div>
      ))}
    </div>
  )
})

CastList.displayName = 'CastList'
