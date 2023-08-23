import { type LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { getPersonFullInfo } from '../../api/movieDBApi'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import { getDate, setMovieDBPath } from '../../utils'
import { IPersonFullInfo } from '../../api/types/responses'
import { Descript } from '../../components/ui/Descript/Descript'
import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { MovieItem } from '../../components/ui/MovieItem/MovieItem'

export const Actor = () => {
  const actor = useLoaderData() as IPersonFullInfo

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
  } = actor
  console.log('ACTOR', actor)

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
          <p className={'mt-4 mb-11 md:my-4'}>{biography}</p>
          <div>
            {!!also_known_as.length && <Descript title={'Извесный как'} descriptions={also_known_as} />}
            {birthday && <Descript title={'Дата рождения'} descriptions={getDate(birthday)} />}
            {place_of_birth && <Descript title={'Место рождения'} descriptions={place_of_birth} />}
            <Descript title={'Карьера'} descriptions={known_for_department} />
          </div>
        </div>

        <div>
          <img
            src={setMovieDBPath(profile_path)}
            alt={'film'}
            className={'hidden rounded-10 object-cover aspect-[230/310] md:block md:max-w-[297px]'}
          />
        </div>
      </section>

      <section>
        <Typography variant={'h4'} type={TypographyTypes._TITLE}>
          Фильмы
        </Typography>
        <div>
          {(!combined_credits.cast || !combined_credits?.cast.length) && <p>Фильмов ждя отображения не найдено</p>}
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
    </div>
  )
}

export const loadActor = async ({ params }: LoaderFunctionArgs) => {
  if (params.actorId) {
    return await getPersonFullInfo(params.actorId)
  }

  return null
}
