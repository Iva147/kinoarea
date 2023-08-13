import { IFriend } from '../../../api/types/responses'
import Avatar from '../../../assets/images/general/avatar.svg'
import cls from './Friend.module.scss'
import { twMerge } from 'tailwind-merge'

interface FriendProps extends IFriend {
  online: boolean
}
export const Friend = ({ img, name, surname, online }: FriendProps) => {
  return (
    <div>
      <img src={img || Avatar} alt={name} className={cls.img} />
      <p className={cls.name}>
        {name} {surname}
      </p>
      {online ? <p className={twMerge(cls.status, cls.online)}>В сети</p> : <p className={cls.status}>В сети</p>}
    </div>
  )
}
