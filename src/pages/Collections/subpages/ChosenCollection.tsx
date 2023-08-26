import { CategoriesTypes } from '../../../mock/categories'
import { useOutletContext } from 'react-router-dom'
import { getSearch } from '../../../api/movieDBApi'
import { useEffect, useState } from 'react'
import { ICategories } from '../../../api/types/categories'
import { Typography, TypographyTypes } from '../../../components/ui/Typography/Typography'
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs'
import { Pagination } from '../../../components/ui/Pagination/Pagination'
import { ResultList } from '../../../components/ui/ResultList/ResultList'
import { IDiscoverResult } from '../../../api/types/responses'
import { scrollTop } from '../../../utils/scrollTop'

export const ChosenCollection = () => {
  const { chosen } = useOutletContext() as { chosen: ICategories; slug: CategoriesTypes }
  const [films, setFilms] = useState<IDiscoverResult>()
  const [currentPage, setCurrentPage] = useState(1)

  const fetch = async () => {
    const data = await getSearch({
      type: 'movie',
      params: chosen.params,
    })

    console.log('ChosenCollection', data)
    setFilms(data)
  }
  useEffect(() => {
    if (!chosen) return
    fetch()
  }, [])

  const changePage = (page: number) => {
    setCurrentPage(page)
    scrollTop()
  }

  return (
    <section className={'container pb-9 lg:pb-10 2xl:pb-[70px]'}>
      <Typography variant={'h1'} type={TypographyTypes._TITLE}>
        Подборки фильмов
      </Typography>
      <Breadcrumbs lastCrumb={chosen.title} />

      <p className={'py-3'}>Всего найдено: {films?.total_results}</p>
      <ResultList list={films?.results || []} />

      <Pagination
        totalCount={films?.total_results || 0}
        currentPage={currentPage}
        siblingCount={2}
        pageSize={10}
        onPageChange={changePage}
        className={'mx-auto mt-5'}
      />
    </section>
  )
}
