import { useEffect } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { ReviewsList } from '../../../../components/ui/ReviewsList/ReviewsList'
import { Typography, TypographyTypes } from '../../../../components/ui/Typography/Typography'
import cls from '../../Profile.module.scss'
import { Button } from '../../../../components/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../../../api'

export const UserReviews = () => {
  const { reviews } = useTypedSelector(state => state.userReviews)
  const { fetchUserReviews } = useActions()
  const navigate = useNavigate()
  const user = useTypedSelector(state => state.user.user)

  useEffect(() => {
    if (user) fetchUserReviews(user.id)
  }, [fetchUserReviews])

  if (!reviews || !reviews.length) {
    return (
      <>
        <div className={cls.titleWrapper}>
          <Typography variant="h2" type={TypographyTypes._TITLE} className={'text-center'}>
            Вы пока-что не додали ни одного отзыва на фильм
          </Typography>
        </div>

        <Button variant="transparent" onClick={() => navigate(endpoints.main)} className={'mx-auto'}>
          Вернуться на главную стараницу
        </Button>
      </>
    )
  }

  return (
    <>
      <div className={cls.titleWrapper}>
        <Typography variant="h2" type={TypographyTypes._TITLE}>
          Ваши рецензии
        </Typography>
        <p>Всего: {reviews.length}</p>
      </div>

      <ReviewsList type="user" list={reviews} setAsHtml />
    </>
  )
}
