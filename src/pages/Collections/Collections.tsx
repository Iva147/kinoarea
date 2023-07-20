import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import { Button } from '../../components/ui/Button/Button'
import { useState } from 'react'
import cls from './Collections.module.scss'
import classnames from 'classnames'
import { CollectionsList } from '../../components/ui/CollectionsList/CollectionsList'
import { categories } from '../../mock/categories'

const categoriesTags = [
  { id: '1', title: 'Kinoarea' },
  { id: '2', title: 'Сериалы' },
  { id: '3', title: 'Направления' },
  { id: '4', title: 'Критика' },
  { id: '5', title: 'Сборы' },
  { id: '6', title: 'Премии' },
  { id: '7', title: 'Годы' },
  { id: '8', title: 'Жанры' },
]

//
export const Collections = () => {
  const [activeCategory, setActiveCategory] = useState(categoriesTags[0])

  return (
    <section className={'container pb-9 lg:pb-10 2xl:pb-[70px]'}>
      <Typography variant={'h1'} type={TypographyTypes._TITLE}>
        Подборки фильмов
      </Typography>
      <Breadcrumbs />
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
            onClick={() => setActiveCategory(category)}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <CollectionsList list={categories} />
    </section>
  )
}
