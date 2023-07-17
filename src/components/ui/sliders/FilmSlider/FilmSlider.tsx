import { IFilm } from '../../../../api/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Film } from '../../Film/Film'
import { Navigation, Pagination } from 'swiper'

interface FilmSliderProps {
  slides: IFilm[]
  name: string
}

export const FilmSlider = ({ slides, name }: FilmSliderProps) => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={2}
      slidesPerGroup={1}
      modules={[Pagination, Navigation]}
      pagination={{
        el: `.${name}-pagination`,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return `${current}/${total}`
        },
      }}
      navigation={{
        nextEl: `.${name}-next`,
        prevEl: `.${name}-prev`,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
        914: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
      }}
      className={'slider-cards'}
    >
      {slides.map(item => (
        <SwiperSlide key={item.id}>
          <Film {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
