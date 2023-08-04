import { Typography, TypographyTypes } from '../../../../components/ui/Typography/Typography'
import { SliderNav } from '../../../../components/ui/sliders/SliderNav/SliderNav'
import { FilmSlider } from '../../../../components/ui/sliders/FilmSlider/FilmSlider'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

export const Upcoming = () => {
  const { upcoming } = useTypedSelector(state => state.movies)

  return (
    <section className={'container pt-[17px] lg:pt-8 2xl:pt-[49px] 2xl:pb-[105px]'}>
      <div className={'flex-between my-2'}>
        <Typography variant={'h3'} type={TypographyTypes._TITLE}>
          Ожидаемые новинки
        </Typography>
        <SliderNav sliderName={'upcoming'} className={'slider-nav hidden md:inline-flex'} />
      </div>
      <FilmSlider slides={upcoming} name={'upcoming'} />
      <div className={'flex-center mt-7'}>
        <SliderNav sliderName={'upcoming'} className={'slider-nav md:hidden'} />
      </div>
    </section>
  )
}
