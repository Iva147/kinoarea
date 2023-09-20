import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import { Button } from '../../components/ui/Button/Button'
import { useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
import cls from './Collections.module.scss'
import classnames from 'classnames'
import { CollectionsList } from '../../components/ui/CollectionsList/CollectionsList'
import { categories_2, CategoriesTypes } from '../../mock/categories'
import { Pagination } from '../../components/ui/Pagination/Pagination'
import { scrollTop } from '../../utils/scrollTop'
import { Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ICategories } from '../../api/types/categories'

type CategoryTag = {
  id: string
  title: string
  type: CategoriesTypes | 'all'
}
const categoriesTags: CategoryTag[] = [
  { id: '1', title: 'Kinoarea', type: 'all' },
  { id: '2', title: 'Сериалы', type: 'tv' },
  { id: '3', title: 'Направления', type: 'category' },
  { id: '4', title: 'По акторам', type: 'cast' },
  { id: '5', title: 'Сборы', type: 'all' },
  { id: '6', title: 'Премии', type: 'all' },
  { id: '7', title: 'Годы', type: 'year' },
  { id: '8', title: 'Жанры', type: 'genres' },
]

const pageSize = 5
const slugs: CategoriesTypes[] = ['genres', 'category', 'cast', 'year', 'tv']

export const Collections = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryTag>(categoriesTags[0])
  const [currentPage, setCurrentPage] = useState(1)
  const [chosenCollection, setChosenCollection] = useState<ICategories | null>()
  const { slug } = useParams<Record<'slug', CategoriesTypes>>()
  const navigate = useNavigate()
  const location = useLocation()
  const list = useMemo(() => {
    const data = categories_2.filter(item => item.types.includes(activeCategory.type))

    if (!data.length) return categories_2
    return data
  }, [activeCategory])

  const listPerPage = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = currentPage * pageSize

    return list.slice(start, end)
  }, [list, currentPage])

  const changePage = (pageNum: number) => {
    setCurrentPage(pageNum)
    scrollTop()
  }

  const onCategoryTagClick = (category: CategoryTag) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const onCategoryClick = (category: ICategories) => {
    flushSync(() => setChosenCollection(category))
    navigate(category.types)
  }

  if (slug && slugs.includes(slug) && chosenCollection) {
    return <Outlet context={{ title: chosenCollection.title, params: chosenCollection.params }} />
  }

  if (slug && location.state) {
    const { title, category } = location.state
    return <Outlet context={{ title, category }} />
  }

  if (slug && !slugs.includes(slug) && !chosenCollection && !location.state) return <Navigate to={'/collections'} />

  return (
    <section className={'container pb-9 lg:pb-10 2xl:pb-[70px]'}>
      <Typography variant={'h1'} type={TypographyTypes._TITLE}>
        Подборки фильмов
      </Typography>
      <Breadcrumbs />

      <Outlet />
      <Typography className={'mt-2.5 mb-5'}>
        Также как дальнейшее развитие различных форм деятельности, в своём классическом представлении, допускает
        внедрение первоочередных требований. Современные технологии достигли такого уровня, что внедрение современных
        методик предполагает независимые способы реализации стандартных подходов. Сторонники тоталитаризма в науке могут
        быть объявлены нарушающими общечеловеческие нормы этики и морали.
      </Typography>

      <div className={'flex-center flex-wrap'}>
        {categoriesTags.map(category => (
          <Button
            key={category.id}
            className={classnames([cls.btn], { [cls.notActive]: category.id !== activeCategory.id })}
            onClick={() => onCategoryTagClick(category)}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <CollectionsList list={listPerPage} onCategoryClick={onCategoryClick} />
      <Pagination
        totalCount={list.length}
        currentPage={currentPage}
        siblingCount={2}
        pageSize={pageSize}
        onPageChange={changePage}
        className={'mx-auto'}
      />
    </section>
  )
}
