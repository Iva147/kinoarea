import { setMovieDBPath } from '../../../utils'
import { AbsentImg } from '../AbsentImg/AbsentImg'
import { RateBadge } from '../RateBadge/RateBadge'
import { Button } from '../Button/Button'
import { IKnownFor } from '../../../api/types/responses'
import { type KnownForItem, KnownFor } from '../KnownFor/KnownFor'
import { type KeyboardEvent, useCallback } from 'react'

interface ResultItemProps {
  img?: string
  name: string
  known_for: IKnownFor
  rating: number
  onClick?: () => void
}

export const PersonItem = ({ img, name, known_for, rating, onClick }: ResultItemProps) => {
  const setKnownFor = () => {
    const knownForFilms: KnownForItem[] = []
    const knownForTV: KnownForItem[] = []

    known_for.forEach(film => {
      if (film.media_type === 'movie') {
        knownForFilms.push({ id: film.id, name: film.title })
        return
      }

      if (film.media_type === 'tv') {
        knownForTV.push({ id: film.id, name: film.name })
        return
      }
    })

    return (
      <>
        {knownForFilms.length ? <KnownFor title={'Извесные фильмы:'} list={knownForFilms} /> : null}
        {knownForTV.length ? <KnownFor title={'Извесные сериалы:'} list={knownForTV} /> : null}
      </>
    )
  }

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick?.()
    }
  }, [])

  return (
    <li className={'pt-[14px] pb-5 flex items-center gap-5 item-border'}>
      <div onClick={onClick} onKeyDown={onKeyDown} tabIndex={0} role={'button'}>
        {img ? (
          <img
            src={setMovieDBPath(img)}
            alt={name}
            className={'rounded-10 w-[144px] h-[205px] object-cover xl:w-[150px] xl:h-[214px]'}
          />
        ) : (
          <AbsentImg className={'rounded-10 w-[144px] h-[205px] object-cover xl:w-[150px] xl:h-[214px]'} />
        )}
      </div>

      <div className={'flex-1 gap-1 md:flex md:items-center md:justify-between lg:gap-[25px]'}>
        <div className={'lg:flex-1 lg:flex lg:items-center lg:justify-between'}>
          <div className={'lg:flex-1'}>
            <p className={'text-17 font-q-700 mb-[9px]'}>{name}</p>
            {setKnownFor()}
          </div>

          <div className={'flex gap-3 lg:pt-5'}>
            <div>
              <RateBadge rating={rating} />
              <p className={'mt-1 text-15 font-q-500'}>Popularity</p>
            </div>
          </div>
        </div>
        <Button size={'md'} className={'hidden md:block'} onClick={onClick}>
          Карточка актора
        </Button>
      </div>
    </li>
  )
}
