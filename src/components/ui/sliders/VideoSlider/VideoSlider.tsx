import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { VideoSlide } from '../../../../mock/videos'
import { IMovies } from '../../../../api/types'
import { BaseMovieDBAssetsUrl } from '../../../../api'

interface SliderProgressProps {
  slides: IMovies
}
export const VideoSlider = ({ slides }: SliderProgressProps) => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={2}
      modules={[Pagination]}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 4,
          spaceBetween: 6,
        },
      }}
      className={'slider-progress'}
    >
      {slides.map(item => (
        <SwiperSlide key={item.id}>
          <VideoSlide src={`${BaseMovieDBAssetsUrl}${item.poster_path}`} title={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
