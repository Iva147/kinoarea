import { SectionHeader } from '../../../../components/ui/SectionHeader/SectionHeader'
import { FilmSlider } from '../../../../components/ui/sliders/FilmSlider/FilmSlider'
import { SliderNav } from '../../../../components/ui/sliders/SliderNav/SliderNav'
import { useEffect } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { years } from '../../../../mock/categories'
import { setActiveItem } from '../../../../utils/setActiveItem'
import { ICategory } from '../../../../components/ui/Category/Category'

export const Popular = () => {
  const { fetchPopularMovies, changePopularCategory } = useActions()
  const { popular, popularCategory } = useTypedSelector(state => state.movies)

  useEffect(() => {
    fetchPopularMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCategoryClick = (item: ICategory) => {
    changePopularCategory(item)

    const year = Number(item.title)
    if (isNaN(year)) {
      fetchPopularMovies()
    } else {
      fetchPopularMovies(year)
    }
  }

  return (
    <section>
      <SectionHeader
        title={'Популярные фильмы'}
        categories={setActiveItem(years, popularCategory.id)}
        onCategoryClick={onCategoryClick}
      />
      <FilmSlider slides={popular} name={'films'} />
      <div className={'flex justify-center items-center mt-8'}>
        <SliderNav sliderName={'films'} />
      </div>
    </section>
  )
}
