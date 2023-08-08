import classnames from 'classnames'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { ReactComponent as HomeIcon } from '../../assets/images/general/home.svg'
import { ReactComponent as FriendIcon } from '../../assets/images/general/friend.svg'
import { ReactComponent as ReviewIcon } from '../../assets/images/general/review.svg'
import { ReactComponent as LikesIcon } from '../../assets/images/general/likes.svg'
import { ReactComponent as CommentsIcon } from '../../assets/images/general/comments.svg'
import { ReactComponent as FilmsIcon } from '../../assets/images/general/films.svg'
import { ReactComponent as FamousIcon } from '../../assets/images/general/famous.svg'

const navBtns = [
  { id: 1, path: '/profile', icon: <HomeIcon /> },
  { id: 2, path: '/profile/friends', icon: <FriendIcon /> },
  { id: 3, path: '/profile/reviews', icon: <ReviewIcon /> },
  { id: 4, path: '/profile/likes', icon: <LikesIcon /> },
  { id: 5, path: '/profile/comments', icon: <CommentsIcon /> },
  { id: 6, path: '/profile/films', icon: <FilmsIcon /> },
  { id: 7, path: '/profile/famous', icon: <FamousIcon /> },
]

export const Profile = () => {
  const { pathname } = useLocation()
  console.log('pathname', pathname)
  return (
    <div className={'container flex flex-col gap-2 md:gap-[5px] lg:flex-row lg:gap-[8.77px]'}>
      <div className={'flex gap-0.5 justify-between items-stretch md:gap-1 lg:flex-col lg:w-[8.85%] md:max-h-[90vh]'}>
        {navBtns.map(item => (
          <Link
            key={item.id}
            className={twMerge(
              classnames(
                `aspect-square rounded-10 bg-darkBlue-5 flex-center p-2 flex-1 [&>svg]:w-[29%] [&>svg]:min-w-[14.7px] 
                md:[&>svg]:min-w-[26.4px]
                md:[&>svg]:min-w-[21.9px]`,
                { 'bg-blue': pathname === item.path }
              )
            )}
            to={item.path}
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div
        className={`
          rounded-10 bg-darkBlue-5 px-2 pr-[15px] pl-2 flex-1 
          md:pt-4.5 md:pb-6 md:pr-4 md:pl-5 
          lg:pb-[38px]
          2xl:pt-[32px] 2xl:pb-[68px] 2xl:pr-[42px] 2xl:pl-[54px] `}
      >
        <Outlet />
      </div>
    </div>
  )
}
