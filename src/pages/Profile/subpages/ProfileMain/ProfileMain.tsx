import { Typography, TypographyTypes } from '../../../../components/ui/Typography/Typography'
import { Descript } from '../../../../components/ui/Descript/Descript'
import { Link } from 'react-router-dom'

import { ReactComponent as SettingsIcon } from '../../../../assets/images/general/settings.svg'
import { ReactComponent as YoutubeIcon } from '../../../../assets/images/general/youtube.svg'
import { ReactComponent as LinkedInIcon } from '../../../../assets/images/general/linkedin-in.svg'
import { ReactComponent as TwitterIcon } from '../../../../assets/images/general/icons8-twitter.svg'
import { ReactComponent as InstagramIcon } from '../../../../assets/images/general/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../../../assets/images/general/facebook-f.svg'
import Profile from '../../../../assets/images/profile/profile.png'
import cls from '../../Profile.module.scss'
import type { SocialMedias } from '../../../../api/types/socialMedias'

const profileInfo = [
  { id: 1, title: 'Пол:', description: 'Мужской' },
  { id: 2, title: 'День рождения:', description: '24 мая 1991 г. (28 лет)' },
  { id: 3, title: 'Страна:', description: 'Украина' },
  { id: 4, title: 'Город:', description: 'Киев' },
  { id: 4, title: 'Любимые жанры:', description: 'Драма, триллер, документальный' },
]

const socialsMedia = {
  youtube: <YoutubeIcon />,
  linkedin: <LinkedInIcon />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  twitter: <TwitterIcon />,
}
const socials: { id: number; link: string; name: SocialMedias }[] = [
  { id: 1, link: '', name: 'youtube' },
  { id: 2, link: '', name: 'linkedin' },
  { id: 3, link: '', name: 'facebook' },
  { id: 4, link: '', name: 'instagram' },
  { id: 5, link: '', name: 'twitter' },
]

interface InfoItemProps {
  amount: number
  title: string
}

const InfoItem = ({ amount, title }: InfoItemProps) => {
  return (
    <div className={'text-[#323A55] px-1'}>
      <p>{amount}</p>
      <p className={'w-min lg:w-auto'}>{title}</p>
    </div>
  )
}

const info = [
  { title: 'Друзья', amount: 15, id: 1 },
  { title: `Любимые\nфильмы`, amount: 5, id: 2 },
  { title: 'Избранное', amount: 0, id: 3 },
  { title: 'Рецензии', amount: 1, id: 4 },
  { title: 'Ожидаемые\nфильмы', amount: 1, id: 5 },
]
export const ProfileMain = () => {
  return (
    <>
      <div className={cls.titleWrapper}>
        <Typography variant={'h2'} type={TypographyTypes._TITLE}>
          Ваш профиль
        </Typography>
        <Link className={cls.titleBtn} to={'/profile/setting'}>
          <SettingsIcon className={'w-[14.8px] md:w-[18.2px]'} />
          <span>Настройки</span>
        </Link>
      </div>
      <div className={'md:flex md:items-start md:gap-6 md:my-[22px] 2xl:gap-11'}>
        <img src={Profile} alt={''} className={cls.img} />
        <div>
          <Typography variant={'h2'} type={TypographyTypes._TITLE} className={'text-center md:text-start'}>
            Евгений Батиков
          </Typography>
          <div className={'flex-center gap-2.5 mt-2 md:justify-start'}>
            {socials.map(item => (
              <Link
                to={'https://youtu.be/EH1WsQGSrWU'}
                className={
                  'rounded-full border-[1px] border-border-blue w-[26.27px] h-[26.27px] flex-center text-gray [&>svg]:w-[50%] [&>svg]:max-h-[50%]'
                }
                key={item.id}
              >
                {socialsMedia[item.name]}
              </Link>
            ))}
          </div>
          <p
            className={`text-13 text-white/80 text-center mt-3.5 mb-4 
              md:text-15 md:text-start md:mt-3 md:mb-[22px] 
              lg:mb-7 2xl:text-17 2xl:mt-4.5`}
          >
            Учитывая ключевые сценарии поведения, базовый вектор развития, а также свежий взгляд на привычные вещи -
            безусловно открывает новые горизонты для поставленных обществом задач.
          </p>
          <div>
            {profileInfo.map(item => (
              <Descript title={item.title} descriptions={item.description} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={'flex-center flex-wrap font-q-700 text-xs text-center whitespace-wrap md:text-15 md:justify-between'}
      >
        {info.map(item => (
          <InfoItem title={item.title} amount={item.amount} key={item.id} />
        ))}
      </div>
    </>
  )
}
