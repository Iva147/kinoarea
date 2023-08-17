import { ReactComponent as CloseBtn } from '../../../assets/images/general/close-btn.svg'
import cls from './IncomingFriend.module.scss'
interface IncomingFriendProps {
  img: string
  name: string
  commonFriends: number
}

type Btns = 'accept' | 'cancel' | 'block'

const btns: { id: number; title: string; name: Btns }[] = [
  { id: 1, title: 'Принять', name: 'accept' },
  { id: 2, title: 'Отклонить', name: 'cancel' },
  { id: 3, title: 'Заблокировать', name: 'block' },
]
export const IncomingFriend = ({ img, name, commonFriends }: IncomingFriendProps) => {
  const handlers: Record<Btns | 'close', () => void> = {
    accept: () => {},
    cancel: () => {},
    block: () => {},
    close: () => {},
  }
  return (
    <div className={cls.wrapper}>
      <img src={img} alt={name} className={cls.avatar} />
      <div className={cls.textWrapper}>
        <p className={cls.title}>
          {name} хочет добавить вас в друзья ({commonFriends} общих друга)
        </p>
        <div className={cls.btns}>
          {btns.map(item => (
            <button onClick={() => handlers[item.name]()} key={item.id} className={cls.btn}>
              {item.title}
            </button>
          ))}
          <button onClick={() => handlers.close()}>
            <CloseBtn className={cls.svg} />
          </button>
        </div>
      </div>
    </div>
  )
}
