import { useEffect } from 'react'
import { Typography, TypographyTypes } from '../../../../components/ui/Typography/Typography'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useActions'
import { Friend } from '../../../../components/ui/Friend/Friend'
import clsProfile from '../../Profile.module.scss'
import cls from './Friends.module.scss'

export const Friends = () => {
  const { friends } = useTypedSelector(state => state.userFriends)
  const friendsIds = useTypedSelector(state => state.user.user?.friends)
  const { fetchUserFriends } = useActions()

  useEffect(() => {
    if (friendsIds) fetchUserFriends(friendsIds)
  }, [fetchUserFriends, friendsIds])
  return (
    <>
      <div className={clsProfile.titleWrapper}>
        <Typography variant="h2" type={TypographyTypes._TITLE}>
          Ваши друзья
        </Typography>
        <p>Всего: {friends.length}</p>
      </div>
      <div className={cls.friends}>
        {friends?.map(friend => (
          <Friend img={friend.img} name={friend.name} surname={friend.surname} id={friend.id} key={friend.id} online />
        ))}
      </div>
    </>
  )
}