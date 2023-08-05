import { IReview } from '../../../api/types/responses'
import { getDate, setMovieDBPath } from '../../../utils'
import { memo, ReactEventHandler, useMemo, useState } from 'react'
import { Button } from '../Button/Button'
import AvatarIcon from '../../../assets/images/general/avatar.svg'

interface ReviewsListProps {
  list: IReview[]
}

interface ReviewProps {
  item: IReview
  handleImgError?: ReactEventHandler<HTMLImageElement>
}

const Review = ({ item, handleImgError }: ReviewProps) => {
  return (
    <div key={item.id} className={'rounded-10 border-green-800 border-[3px] pl-5 pr-[21px] pt-[17px] pb-10 mb-9'}>
      <div className={'flex items-center gap-4 md:gap-6 lg:gap-[26px]'}>
        <img
          src={setMovieDBPath(item.author_details.avatar_path)}
          alt={item.author_details.username}
          className={`
            rounded-full w-[57px] h-[57px] bg-dark-purple object-cover
            md:w-[85px] md:h-[85px]
            lg:w-[115px] lg:h-[115px]`}
          onError={handleImgError}
        />
        <span className={'text-xl font-q-700 md:text-25 lg:text-3xl'}>{item.author_details.username}</span>
      </div>
      <p className={'text-xs text-gray-light2 my-3 md:text-base md:mt-[30px] md:mb-[17px] lg:mb-16 lg:mt-7 lg:text-15'}>
        {getDate(item.created_at)}
      </p>
      <p className={'text-13 md:text-17 lg:text-xl'}>{item.content}</p>
    </div>
  )
}
export const ReviewsList = memo(({ list }: ReviewsListProps) => {
  const [isAllShown, setAllShown] = useState(false)
  const reviews = useMemo(() => {
    const maxAmount = 3
    if (list.length > maxAmount) {
      return {
        start: list.slice(0, maxAmount),
        rest: list.slice(maxAmount),
      }
    }

    return null
  }, [list])

  const hangleImgError: ReactEventHandler<HTMLImageElement> = e => {
    const element = e.currentTarget
    element.onerror = null
    element.src = AvatarIcon
  }
  return (
    <div>
      {(reviews?.start || list).map(item => (
        <Review item={item} key={item.id} handleImgError={hangleImgError} />
      ))}

      {isAllShown && reviews?.rest?.map(item => <Review item={item} key={item.id} handleImgError={hangleImgError} />)}

      {reviews?.rest && (
        <Button onClick={() => setAllShown(prev => !prev)} className={'mx-auto'}>
          {isAllShown ? 'Показать меньше' : 'Показать больше'}
        </Button>
      )}
    </div>
  )
})

ReviewsList.displayName = 'ReviewsList'
