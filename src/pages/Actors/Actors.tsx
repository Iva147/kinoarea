import { Pagination } from '../../components/ui/Pagination/Pagination'
import { IPerson, IPersonResult, MovieDBPageSize } from '../../api/types/responses'
import { useEffect, useState } from 'react'
import { getPersons } from '../../api/movieDBApi'
import { PersonItem } from '../../components/ui/PersonItem/PersonItem'
import { scrollTop } from '../../utils/scrollTop'
import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'

export const Actors = () => {
  const [actors, setActors] = useState<IPerson[]>([])
  const [pagesData, setPagesData] = useState<Omit<IPersonResult, 'results'> | null>(null)

  const setData = (page?: number) => {
    const params = page ? { page } : undefined
    getPersons(params).then(res => {
      const { results, ...pages } = res
      setActors(results)
      setPagesData(pages)
      scrollTop()
    })
  }
  useEffect(() => {
    setData()
  }, [])

  actors?.map(item => {
    if (item.name === 'Zhao Lusi') {
      console.log('PERSON', item)
    }
  })

  const onPaginationChange = (page: number) => setData(page)
  return (
    <section className={'container'}>
      <Typography variant={'h1'} type={TypographyTypes._TITLE}>
        Actors
      </Typography>
      {actors.map(actor => (
        <PersonItem
          img={actor.profile_path}
          name={actor.name}
          rating={actor.popularity}
          known_for={actor.known_for}
          key={actor.id}
        />
      ))}
      {pagesData?.page && pagesData?.total_pages > 1 && (
        <Pagination
          totalCount={pagesData?.total_pages || 0}
          currentPage={pagesData?.page}
          siblingCount={pagesData?.total_pages >= 5 ? 2 : undefined}
          pageSize={MovieDBPageSize}
          onPageChange={(pageNum: number) => onPaginationChange(pageNum)}
          className={'mx-auto mt-4 md:mt-8 ld:mt-9 2xl:mt-11'}
        />
      )}
    </section>
  )
}
