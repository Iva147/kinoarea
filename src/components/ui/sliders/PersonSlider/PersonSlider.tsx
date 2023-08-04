import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { PersonCard } from '../../PersonCard/PersonCard'
import { Navigation, Pagination } from 'swiper'
import { IPerson } from '../../../../api/types'
import { BaseMovieDBAssetsUrl } from '../../../../api'
import { Ref, forwardRef } from 'react'

interface PersonSliderProps {
  slides: IPerson[]
  name: string
  onSlidePrev?: () => void
  onSlideNext?: () => void
}

export const PersonSlider = forwardRef(
  ({ slides, name, onSlidePrev, onSlideNext }: PersonSliderProps, ref: Ref<SwiperRef>) => {
    return (
      <Swiper
        ref={ref}
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
        onNavigationNext={() => onSlideNext?.()}
        onNavigationPrev={() => onSlidePrev?.()}
      >
        {slides.map((item, order) => (
          <SwiperSlide key={item.id}>
            <PersonCard
              img={`${BaseMovieDBAssetsUrl}${item.profile_path}`}
              rate={order + 1}
              actor={item.name}
              originalActorName={item.name}
              age={0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
)

PersonSlider.displayName = 'PersonSlider'
