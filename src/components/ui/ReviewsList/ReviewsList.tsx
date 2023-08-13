import { IReview, IUserReview } from '../../../api/types/responses'
import { getDate, setMovieDBPath } from '../../../utils'
import { memo, ReactEventHandler, useMemo, useState } from 'react'
import { Button } from '../Button/Button'
import AvatarIcon from '../../../assets/images/general/avatar.svg'
import cls from './ReviewsList.module.scss'

type ReviewType = 'user' | 'movie'
interface ReviewsListProps {
  type?: ReviewType
  list: IUserReview[] | IReview[]
}

interface ReviewProps {
  type: ReviewType
  item: IUserReview | IReview
  handleImgError?: ReactEventHandler<HTMLImageElement>
}

const Review = ({ item, handleImgError, type }: ReviewProps) => {
  const header = useMemo(() => {
    if (type === 'movie') {
      const { author_details, created_at } = item as IReview
      return (
        <>
          <div className={cls.headerWrapper}>
            <img
              src={setMovieDBPath(author_details.avatar_path)}
              alt={author_details.username}
              className={cls.avatar}
              onError={handleImgError}
            />
            <span className={cls.name}>{author_details.username}</span>
          </div>
          <p className={cls.time}>{getDate(created_at)}</p>
        </>
      )
    }

    if (type === 'user') {
      const { movie, created_at } = item as IUserReview

      return (
        <>
          <div className={cls.headerWrapper}>
            <img src={movie?.poster} alt={movie?.name} className={cls.poster} onError={handleImgError} />
            <div>
              <p className={cls.name}>{movie?.name}</p>
              {/* FIREBASE. Different conduct with Date */}
              <p className={cls.time}>{getDate(created_at.toDate())}</p>
            </div>
          </div>
        </>
      )
    }
  }, [item, type, handleImgError])

  return (
    <div key={item.id} className={'rounded-10 border-green-800 border-[3px] pl-5 pr-[21px] pt-[17px] pb-10 mb-9'}>
      {header}
      <p className={'text-13 md:text-17 lg:text-xl'}>{item.content}</p>
    </div>
  )
}
export const ReviewsList = memo(({ list, type = 'movie' }: ReviewsListProps) => {
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
        <Review item={item} key={item.id} handleImgError={hangleImgError} type={type} />
      ))}

      {isAllShown &&
        reviews?.rest?.map(item => <Review item={item} key={item.id} handleImgError={hangleImgError} type={type} />)}

      {reviews?.rest && (
        <Button onClick={() => setAllShown(prev => !prev)} className={'mx-auto'}>
          {isAllShown ? 'Показать меньше' : 'Показать больше'}
        </Button>
      )}
    </div>
  )
})

ReviewsList.displayName = 'ReviewsList'
