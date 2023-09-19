import { ReactEventHandler, useMemo } from 'react'
import { IReview, IUserReview } from '../../../api/types/responses'
import cls from './Review.module.scss'
import { getDate, setMovieDBPath } from '../../../utils'
import { Timestamp } from 'firebase/firestore'

export type ReviewType = 'user' | 'movie'

interface ReviewProps {
  type: ReviewType
  item: IUserReview | IReview
  handleImgError?: ReactEventHandler<HTMLImageElement>
  htmlContent?: string
}
export const Review = ({ item, handleImgError, type, htmlContent }: ReviewProps) => {
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
      /* FIREBASE. Different conduct with Date */
      const timestamp = created_at instanceof Date ? created_at : (created_at as Timestamp).toDate()
      return (
        <>
          <div className={cls.headerWrapper}>
            <img src={movie?.poster} alt={movie?.name} className={cls.poster} onError={handleImgError} />
            <div>
              <p className={cls.name}>{movie?.name}</p>
              <p className={cls.time}>{getDate(timestamp)}</p>
            </div>
          </div>
        </>
      )
    }
  }, [item, type, handleImgError])

  return (
    <div key={item.id} className={'rounded-10 border-green-800 border-[3px] pl-5 pr-[21px] pt-[17px] pb-10 mb-9'}>
      {header}
      {htmlContent ? (
        <p className={'text-13 md:text-17 lg:text-xl'} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <p className={'text-13 md:text-17 lg:text-xl'}>{item.content}</p>
      )}
    </div>
  )
}
