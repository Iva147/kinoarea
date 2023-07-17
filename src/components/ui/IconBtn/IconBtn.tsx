import { ReactComponent as LikeIcon } from '../../../assets/images/general/like.svg'
import { ReactComponent as DislikeIcon } from '../../../assets/images/general/dislike.svg'

type Icons = 'like' | 'dislike'

interface IconBtnProps {
  type: Icons
  onClick?: () => void
}
const icons = {
  like: LikeIcon,
  dislike: DislikeIcon,
}

const additionalStyle = {
  like: 'pt-1',
  dislike: 'pb-1',
}
export const IconBtn = ({ type, onClick }: IconBtnProps) => {
  const Icon = icons[type]
  return (
    <button
      className={`w-[30.46px] h-[30.46px] flex justify-center items-center rounded-md bg-darkBlue-2 
        lg:w-[39.23px] lg:h-[39.23px]
        2xl:w-[58.87px] 2xl:h-[58.87px]
        ${additionalStyle[type] && ''}`}
      onClick={onClick}
    >
      <Icon className={'w-[44.1651%] h-auto'} />
    </button>
  )
}
