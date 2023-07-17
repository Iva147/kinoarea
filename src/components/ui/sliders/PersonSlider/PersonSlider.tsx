import { IPerson } from '../../../../api/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PersonCard } from '../../PersonCard/PersonCard'
import { Navigation, Pagination } from 'swiper'

interface PersonSliderProps {
  slides: IPerson[]
  name: string
}

export const PersonSlider = ({ slides, name }: PersonSliderProps) => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={2}
      slidesPerGroup={2}
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
          spaceBetween: '2.3%',
        },
        914: {
          spaceBetween: '2.55%',
        },
      }}
      className={'slider-cards'}
    >
      {slides.map(item => (
        <SwiperSlide key={item.id}>
          <PersonCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
