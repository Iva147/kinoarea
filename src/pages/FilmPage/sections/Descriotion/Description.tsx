import { FilmDescript } from '../../../../components/ui/FilmDescript/FilmDescript'
import { IMovieDetailsRes } from '../../../../api/types/responses'
import { getDate } from '../../../../utils'

interface DescriptionProps extends IMovieDetailsRes {}

function getList<T extends Record<K, string>, K extends string>(list: T[], param: K): string[] {
  return list.map(item => item[param])
}
export const Description = ({
  release_date,
  production_countries,
  tagline,
  production_companies,
  runtime,
  revenue,
  budget,
  genres,
}: DescriptionProps) => {
  const list = [
    { id: '1', title: 'Год', descriptions: [getDate(release_date)] },
    { id: '2', title: 'Страна', descriptions: getList(production_countries, 'iso_3166_1') },
    { id: '3', title: 'Слоган', descriptions: [tagline] },
    { id: '4', title: 'Продакшн', descriptions: getList(production_companies, 'name') },
    { id: '5', title: 'Жанры', descriptions: getList(genres, 'name') },
    { id: '6', title: 'Бюджет', descriptions: ['$ ' + budget] },
    { id: '7', title: 'Сборы', descriptions: ['$ ' + revenue.toString()] },
    { id: '8', title: 'Время', descriptions: [runtime.toString() + ' min'] },
  ]
  return (
    <ul className={'mt-7 mb-9 md:cols-2 md:mt-5 md:mb-6 lg:gap-7 lg:mt-11 lg:mb-12 2xl:gap-16'}>
      {list.map(item => (
        <FilmDescript {...item} key={item.id} />
      ))}
    </ul>
  )
}
