import { FormEvent, ReactNode, useEffect, useState } from 'react'
import { Typography, TypographyTypes } from '../../../../components/ui/Typography/Typography'
import { ReactComponent as CheckedIcon } from '../../../../assets/images/general/checked.svg'
import cls from '../../Profile.module.scss'

import { Input } from '../../../../components/ui/Input/Input'
import { useNavigate } from 'react-router-dom'
import { Textarea } from '../../../../components/ui/Textarea/Textarea'
import { ProfilePages } from '../../../../router/paths'

import { ReactComponent as LinkedInIcon } from '../../../../assets/images/general/linkedin-in.svg'
import { ReactComponent as YoutubeIcon } from '../../../../assets/images/general/youtube.svg'
import { ReactComponent as InstagramIcon } from '../../../../assets/images/general/instagram.svg'
import { ReactComponent as TwitterIcon } from '../../../../assets/images/general/icons8-twitter.svg'
import { ReactComponent as FacebookIcon } from '../../../../assets/images/general/facebook-f.svg'
import type { SocialMedias } from '../../../../api/types/socialMedias'
import { CustomSelect } from '../../../../components/ui/Select/Select'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import type { IUser, SexType } from '../../../../api/types/responses'
import { useActions } from '../../../../hooks/useActions'
import { getSelectedOption, getSelectedValue } from '../../../../utils/getSelectedOption'
import type { IOption } from '../../../../utils/getSelectedOption'

import Avatar from '../../../../assets/images/general/avatar.svg'
import { twMerge } from 'tailwind-merge'
import { DateInput } from '../../../../components/ui/DateInput/DateInput'
import { FileInput } from '../../../../components/ui/FileInput/FileInput'
import { shortenFileName } from '../../../../utils/shortenFileName'
import { Timestamp } from 'firebase/firestore'

const sexOptions: { value: SexType; label: string }[] = [
  { value: 'male', label: 'мужчина' },
  { value: 'female', label: 'женщина' },
  { value: 'others', label: 'другое' },
  { value: 'notchosen', label: 'не указывать' },
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

type Fields = Pick<IUser, 'name' | 'surname' | 'about' | 'sex'>
type SocialMediasType = {
  [K in SocialMedias]: string | null
}

export const Setting = () => {
  const [info, setInfo] = useState<Fields>({
    name: '',
    surname: '',
    about: '',
    sex: 'notchosen',
  })
  const [socialMedias, setSocialMedias] = useState<SocialMediasType>({
    linkedin: '',
    youtube: '',
    instagram: '',
    twitter: '',
    facebook: '',
  })
  const [date, setDate] = useState<Date | null>(null)
  const [selectedImage, setSelectedImage] = useState<Blob | null>(null)
  const [err, setErr] = useState({ name: '', surname: '' })
  const { user, error } = useTypedSelector(state => state.user)
  const navigate = useNavigate()
  const { updateUser } = useActions()

  function handleInput<T>(name: keyof Fields) {
    return (value: T) => {
      if (name === 'name' || name === 'surname') {
        handleErr(value as string, name)
      }
      setInfo(prev => ({ ...prev, [name]: value }))
    }
  }

  function handleSelect(selectedOptions: unknown) {
    const sex = getSelectedValue(sexOptions, selectedOptions as IOption | IOption[])
    if (sex) setInfo(prev => ({ ...prev, sex: sex as SexType }))
  }

  function handleSocialMediasInput<T>(name: SocialMedias) {
    return (value: T) => {
      setSocialMedias(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleImageUpload = (e: FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0]
    if (!file) return
    setSelectedImage(file)
  }

  const getImgUrl = (file: Blob | MediaSource) => URL.createObjectURL(file)

  useEffect(() => {
    if (user) {
      const { name, surname, about, sex, links, birthday } = user
      setInfo({ name, surname, about, sex })
      links && setSocialMedias(links)
      birthday && setDate(birthday.toDate())
    }
  }, [user])

  const submitForm = async (e: FormEvent) => {
    e.preventDefault()

    if (err.name || err.surname) return
    if (user) {
      console.log('submitForm', user)
      console.log('birthday', date)
      const updatedUserData: Partial<IUser> = {
        ...info,
        links: socialMedias,
        birthday: date && Timestamp.fromDate(date),
      }

      for (const key in updatedUserData) {
        if (key !== 'name' && key !== 'surname' && updatedUserData[key as keyof IUser] === undefined) {
          delete updatedUserData[key as keyof IUser]
        }
      }
      console.log('data', { ...info, links: socialMedias, birthday: date })

      await updateUser(user.id, updatedUserData, selectedImage)
      error && navigate(ProfilePages.main)
    }
  }

  console.dir({ ...info, links: socialMedias, birthday: date })

  const handleErr = (val: string, fieldName: 'name' | 'surname') => {
    const appropriateLength = val.length > 1
    let errText = ''
    if (!appropriateLength) errText = 'Нужно указать больше одной буквы'
    if (appropriateLength && err[fieldName]) errText = ''

    setErr(prev => ({ ...prev, [fieldName]: errText }))
  }

  return (
    <>
      <div className={cls.titleWrapper}>
        <Typography variant="h2" type={TypographyTypes._TITLE}>
          Настройки профиля
        </Typography>
        <button className={cls.titleBtn} form="profile-form">
          <CheckedIcon className="w-[14.8px] md:w-[19px]" />
          <span>Сохранить</span>
        </button>
      </div>
      <form className={cls.form} id="profile-form" onSubmit={submitForm}>
        {selectedImage && <img src={getImgUrl(selectedImage)} alt={info.name} className={cls.img} />}
        {user?.img && !selectedImage && <img src={user?.img} alt={info.name} className={cls.img} />}
        {!user?.img && !selectedImage && <img src={Avatar} alt={'avatar'} className={twMerge(cls.img, 'avatar')} />}
        <div className={cls.inputsBlock}>
          <Input name="profile-name" label="Имя" value={info.name} onChange={handleInput('name')} error={err.name} />
          <Input
            name="profile-surname"
            label="Фамлия"
            value={info.surname || undefined}
            onChange={handleInput('surname')}
            error={err.surname}
          />
          <CustomSelect
            options={sexOptions}
            value={getSelectedOption(sexOptions, info?.sex || 'notchosen')}
            onChange={handleSelect}
          />
          <DateInput date={date} onChange={setDate} placeholderText={'Укажите дату рождения'} />
          <Textarea
            placeholder="Информация о себе"
            className={cls.textarea}
            value={info.about}
            onChange={handleInput('about')}
          />
        </div>
        <div className={cls.socialMediaBlock}>
          <FileInput
            data={
              <>
                <span className={'text-white/60'}>Фото профиля: </span>
                <span>{shortenFileName(selectedImage?.name) || ''}</span>
              </>
            }
            btnText="Загрузить"
            name="img"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {socialBtns.map(item => (
            <Input
              addendum={
                <span className={cls.inputAddendum} style={{ background: item.bg }}>
                  {item.icon}
                </span>
              }
              addendumLeft
              addendumFull
              name={item.name}
              placeholder={item.placeholder}
              key={item.id}
              value={socialMedias?.[item.name] || undefined}
              onChange={handleSocialMediasInput(item.name)}
            />
          ))}
        </div>
      </form>
    </>
  )
}
