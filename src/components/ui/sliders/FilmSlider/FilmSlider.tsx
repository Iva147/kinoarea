import { IMovies } from '../../../../api/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Film } from '../../Film/Film'
import { Navigation, Pagination } from 'swiper'
import { BaseMovieDBAssetsUrl } from '../../../../api'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { getGenres } from '../../../../utils/getGenres'

interface FilmSliderProps {
  slides: IMovies
  name: string
}

export const FilmSlider = ({ slides, name }: FilmSliderProps) => {
  const allGenres = useTypedSelector(state => state.genres.movies)
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
      {slides.map(item => {
        const genres = getGenres(allGenres, item.genre_ids)
        return (
          <SwiperSlide key={item.id}>
            <Film
              img={`${BaseMovieDBAssetsUrl}${item.poster_path}`}
              rating={item.vote_average}
              title={item.title}
              genre={genres}
              id={item.id}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
