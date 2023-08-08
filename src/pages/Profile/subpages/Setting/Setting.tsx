import { ReactNode, useState } from 'react'
import { Typography, TypographyTypes } from '../../../../components/ui/Typography/Typography'
import { ReactComponent as CheckedIcon } from '../../../../assets/images/general/checked.svg'
import cls from '../../Profile.module.scss'
import Profile from '../../../../assets/images/profile/profile.png'
import { Input } from '../../../../components/ui/Input/Input'
import { Button } from '../../../../components/ui/Button/Button'
import { Link } from 'react-router-dom'
import { Textarea } from '../../../../components/ui/Textarea/Textarea'

import { ReactComponent as LinkedInIcon } from '../../../../assets/images/general/linkedin-in.svg'
import { ReactComponent as YoutubeIcon } from '../../../../assets/images/general/youtube.svg'
import { ReactComponent as InstagramIcon } from '../../../../assets/images/general/instagram.svg'
import { ReactComponent as TwitterIcon } from '../../../../assets/images/general/icons8-twitter.svg'
import { ReactComponent as FacebookIcon } from '../../../../assets/images/general/facebook-f.svg'
import type { SocialMedias } from '../../../../api/types/socialMedias'
import classnames from 'classnames'
import { CustomSelect } from '../../../../components/ui/Select/Select'
import { twMerge } from 'tailwind-merge'

const sexOptions = [
  { value: 'male', label: 'мужчина' },
  { value: 'female', label: 'женщина' },
  { value: 'others', label: 'другое' },
  { value: 'notselects', label: 'не указывать' },
]

const socialBtns: { id: number; icon: ReactNode; bg: string; name: SocialMedias; placeholder: string }[] = [
  { id: 1, icon: <LinkedInIcon />, bg: '#4D7198', name: 'linkedin', placeholder: 'ссылка на линкедин' },
  { id: 2, icon: <YoutubeIcon />, bg: '#F00', name: 'youtube', placeholder: 'ссылка на youtube' },
  {
    id: 3,
    icon: <InstagramIcon />,
    bg: 'linear-gradient(218deg, #532CD7 0%, #E32A47 60.04%, #EF7230 100%)',
    name: 'instagram',
    placeholder: 'ссылка на instagram',
  },
  { id: 4, icon: <TwitterIcon />, bg: '#1DA1F2', name: 'twitter', placeholder: 'ссылка на twitter' },
  { id: 5, icon: <FacebookIcon />, bg: '#3B5998', name: 'facebook', placeholder: 'ссылка на facebook' },
]
export const Setting = () => {
  const [socialMedias, setSocialMedias] = useState({
    linkedin: '',
    youtube: '',
    instagram: '',
    twitter: '',
    facebook: '',
  })

  function handleSocialMediasInput<T>(name: SocialMedias) {
    return (value: T) => {
      setSocialMedias(prev => ({ ...prev, [prev[name]]: value }))
    }
  }
  return (
    <>
      <div className={cls.titleWrapper}>
        <Typography variant={'h2'} type={TypographyTypes._TITLE}>
          Настройки профиля
        </Typography>
        <Link className={cls.titleBtn} to={'/profile'}>
          <CheckedIcon className={'w-[14.8px] md:w-[19px]'} />
          <span>Сохранить</span>
        </Link>
      </div>
      <form className={'sm:mr-10 sm:ml-9 md:flex md:flex-wrap md:gap-4'}>
        <img src={Profile} alt={''} className={twMerge(classnames(cls.img, 'md:max-w-[40%]'))} />
        <div className={'[&>*:not(:last-child)]:mb-[11px] mb-[23px] md:order-3 md:w-full'}>
          <Input name={'profile-name'} label={'Имя'} />
          <Input name={'profile-surname'} label={'Фамлия'} />
          <CustomSelect options={sexOptions} />
          <Textarea placeholder={'Информация о себе'} className={'h-[267px]'} />
        </div>
        <div className={'text-white [&>*:not(:last-child)]:mb-[9px] md:flex-1'}>
          <Input addendum={<Button>Загрузить</Button>} addendumFull name={'linkedin'} />
          {socialBtns.map(item => (
            <Input
              addendum={
                <span
                  className={'w-[54px] h-[54px] [&>*]:w-[22px] [&>*]:max-h-[22px] inline-block flex-center rounded-10'}
                  style={{ background: item.bg }}
                >
                  {item.icon}
                </span>
              }
              addendumLeft
              addendumFull
              name={item.name}
              placeholder={item.placeholder}
              key={item.id}
              value={socialMedias[item.name] && undefined}
              onChange={handleSocialMediasInput(item.name)}
            />
          ))}
        </div>
      </form>
    </>
  )
}
