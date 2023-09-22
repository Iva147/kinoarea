import { type LoaderFunctionArgs, Outlet, useLoaderData } from 'react-router-dom'
import { getPersonFullInfo } from '../../api/movieDBApi'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import { getDate, setMovieDBPath } from '../../utils'
import { IPersonFullInfo } from '../../api/types/responses'
import { Descript } from '../../components/ui/Descript/Descript'
import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { MovieItem } from '../../components/ui/MovieItem/MovieItem'
import { SectionHeader, SectionHeaderType } from '../../components/ui/SectionHeader/SectionHeader'
import { Images } from './sections/Images'
import { useLastPathSegment } from '../../hooks/useLastPathsegment'
import Avatar from '../../assets/images/general/avatar.svg'
import { twMerge } from 'tailwind-merge'
import { useSeeMore } from '../../hooks/useSeeMore'
import { Button } from '../../components/ui/Button/Button'
import classNames from 'classnames'

export const Actor = () => {
  const actor = useLoaderData() as IPersonFullInfo
  const lastSegment = useLastPathSegment()
  const { isSeeMorePossible, setSeeMore, ref, isMatchedSize } = useSeeMore<HTMLDivElement>()

  if (!actor) return <div>Такого актора не найдено</div>

  const {
    name,
    profile_path,
    biography,
    birthday,
    place_of_birth,
    known_for_department,
    also_known_as,
    combined_credits,
    images,
  } = actor

  if (lastSegment === 'images') {
    return <Outlet context={{ images: images.profiles, title: name }} />
  }

  return (
    <div className={'container'}>
      <section className={'md:flex md:flex-row-reverse md:justify-end md:gap-[17px] lg:gap-8 2xl:gap-[54px]'}>
        <div>
          <div className={'w-full mb-3 md:mb-4'}>
            <Breadcrumbs lastCrumb={name} />
            <h3 className={'text-32 font-q-900 mb-1 md:text-40 md:my-[3px] 2xl:text-60'}>{actor.name}</h3>
          </div>
          <div>
            <img
              src={setMovieDBPath(profile_path)}
              alt={'film'}
              className={'rounded-10 w-[63%] object-cover aspect-[230/310] md:hidden'}
            />
          </div>
          <div className={'mt-4 mb-11 md:my-4 '}>
            <p
              className={twMerge(
                classNames('max-h-[7.5em] overflow-hidden text-ellipsis text-justify', {
                  'max-h-none': !isSeeMorePossible,
                })
              )}
              ref={ref}
            >
              {biography}
            </p>
            {!isMatchedSize && isSeeMorePossible && (
              <div className={'flex justify-between items-start flex-col sm:flex-row'}>
                <span className={'leading-[0px]'}>...</span>
                <Button onClick={() => setSeeMore(false)} variant={'white'} className={'mt-5 self-center sm:self-auto'}>
                  Читать полностью
                </Button>
              </div>
            )}
            {!isMatchedSize && !isSeeMorePossible && (
              <div className={'flex justify-end'}>
                <Button
                  onClick={() => setSeeMore(true)}
                  variant={'transparent'}
                  className={'mt-5 self-center sm:self-auto'}
                >
                  Уменьшить текст
                </Button>
              </div>
            )}
          </div>

          <div>
            {!!also_known_as.length && <Descript title={'Извесный как'} descriptions={also_known_as} />}
            {birthday && <Descript title={'Дата рождения'} descriptions={getDate(birthday)} />}
            {place_of_birth && <Descript title={'Место рождения'} descriptions={place_of_birth} />}
            <Descript title={'Карьера'} descriptions={known_for_department} />
          </div>
        </div>

        <div>
          {profile_path ? (
            <img
              src={setMovieDBPath(profile_path)}
              alt={'film'}
              className={'hidden rounded-10 object-cover aspect-[230/310] md:block md:max-w-[297px]'}
            />
          ) : (
            <img src={Avatar} alt={'avatar'} className={twMerge('avatar')} />
          )}
        </div>
      </section>

      <section>
        <Typography variant={'h4'} type={TypographyTypes._TITLE}>
          Фильмы
        </Typography>
        <div>
          {(!combined_credits.cast || !combined_credits?.cast.length) && <p>Фильмов для отображения не найдено</p>}
          {combined_credits.cast?.map(item => (
            <MovieItem
              name={item.media_type === 'movie' ? item.title : item.name}
              img={item.poster_path}
              overview={item.overview}
              character={`Роль: ${item.character}`}
              rating={item.vote_average}
              key={item.id}
            />
          ))}
        </div>
      </section>
      <section>
        <SectionHeader title={'Фото'} type={SectionHeaderType.ARROW} linkTitle={'Все фото'} moveToViaArrow={'images'} />
        <Images list={images?.profiles} title={name} />
      </section>
    </div>
  )
}

export const loadActor = async ({ params }: LoaderFunctionArgs) => {
  if (params.actorId) {
    return await getPersonFullInfo(params.actorId)
  }

  return null
}
