import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import { ReactComponent as PlayIcon } from '../../assets/images/general/play-btn.svg'
import cls from './FilmPage.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCast, getMovieDetails, getPosters, getReview, getSimilarMovies } from '../../api/movieDBApi'
import { ICastRes, IMovieDetailsRes, IPoster, IReview } from '../../api/types/responses'
import { SectionHeader, SectionHeaderType } from '../../components/ui/SectionHeader/SectionHeader'
import { CastList } from '../../components/ui/CastList/CastList'
import { PostersList } from '../../components/ui/PostersList/PostersList'
import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { FilmSlider } from '../../components/ui/sliders/FilmSlider/FilmSlider'
import { SliderNav } from '../../components/ui/sliders/SliderNav/SliderNav'
import { IMovieRes } from '../../api/types'
import { ReviewsList } from '../../components/ui/ReviewsList/ReviewsList'
import { Button } from '../../components/ui/Button/Button'
import { setMovieDBPath } from '../../utils'
import { Description } from './sections/Descriotion/Description'
import { MovieModal } from '../../components/ui/modals/MovieModal/MovieModal'

export const FilmPage = () => {
  const { slug } = useParams()
  const [details, setDetails] = useState<IMovieDetailsRes | null>(null)
  const [cast, setCast] = useState<ICastRes[]>([])
  const [posters, setPosters] = useState<IPoster[]>([])
  const [reviews, setReviews] = useState<IReview[]>([])
  const [similar, setSimilar] = useState<IMovieRes[]>([])
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (!slug) return
    getCast(slug).then(res => setCast(res))
    getPosters(slug).then(res => setPosters(res))
    getReview(slug).then(res => setReviews(res))
    getSimilarMovies(slug).then(res => setSimilar(res))
    getMovieDetails(slug).then(res => setDetails(res))
  }, [slug])

  const handlePlay = () => setModalOpen(true)

  return (
    <>
      <div
        style={{ backgroundImage: `url(${setMovieDBPath(details?.backdrop_path || details?.poster_path)})` }}
        className={'bg-no-repeat bg-cover bg-top absolute w-full aspect-[3/4] left-0 -z-1 opacity-40 '}
      />
      <div
        className={
          'container pt-[24px] pb-6 md:pt-9 md:pb-[42px] lg:pt-7 lg:pb-14 2xl:pt-16 2zl:pb-[69px] relative z-10'
        }
      >
        {details && (
          <section className={'md:flex md:flex-row-reverse md:justify-end md:gap-[17px] lg:gap-8 2xl:gap-[54px]'}>
            <div>
              <div className={'w-full mb-3 md:mb-4'}>
                <Breadcrumbs lastCrumb={details.title} />
                <h3 className={'text-32 font-q-900 mb-1 md:text-40 md:my-[3px] 2xl:text-60'}>{details.title}</h3>
                <p className={'text-2xl font-q-500 2xl:text-2xl'}>{details.original_title}</p>
              </div>
              <div className={'flex'}>
                <img
                  src={setMovieDBPath(details.poster_path)}
                  alt={'film'}
                  className={'rounded-10 w-[63%] object-cover aspect-[230/310] md:hidden'}
                />
                <div className={'w-[37%] flex flex-col items-center md:w-auto'}>
                  <div>raiting 1</div>
                  <div>raiting 2</div>
                </div>
              </div>
              <div className={''}>
                <p className={'mt-4 mb-11 md:my-4'}>{details.overview}</p>
                <Button variant={'transparent'} className={cls.playBtn} onClick={handlePlay}>
                  <>
                    <PlayIcon />
                    <span>Смотреть трейлер</span>
                  </>
                </Button>
              </div>
            </div>

            <div>
              <img
                src={setMovieDBPath(details.poster_path)}
                alt={'film'}
                className={'hidden rounded-10 object-cover aspect-[230/310] md:block md:max-w-[297px]'}
              />
            </div>

            <MovieModal close={() => setModalOpen(false)} isOpened={isModalOpen} />
          </section>
        )}

        <section>{details && <Description {...details} />}</section>

        <section>
          <SectionHeader
            title={'В главных ролях:'}
            type={SectionHeaderType.ARROW}
            linkTitle={'Все актёры'}
            className={'mb-4 mt-7 md:mb-8 2xl:mb-20'}
          />
          <CastList list={cast} />
        </section>

        <section>
          <SectionHeader
            title={'Постеры к фильму'}
            type={SectionHeaderType.ARROW}
            linkTitle={'Все постеры'}
            className={'mb-4 mt-7 md:mb-8 2xl:mb-20'}
          />
          <PostersList list={posters} title={''} />
        </section>
        <section>
          <Typography
            variant={'h3'}
            type={TypographyTypes._TITLE}
            className={'mx-auto mt-9 mb-[18px] md:mt-[52px] md:mb-9 2xl:mt-[73px] 2xl:mb-[42px] w-max'}
          >
            Похожие фильмы
          </Typography>
          <FilmSlider slides={similar} name={`film-${slug}`} />
          <div className={'flex justify-center items-center mt-8'}>
            <SliderNav sliderName={`film-${slug}`} />
          </div>
        </section>

        <section>
          <div className={'mb-5 mt-24 md:flex md:justify-between'}>
            <Typography variant={'h3'} type={TypographyTypes._TITLE} className={'mx-auto w-max mb-[54px] md:m-0'}>
              Рецензии к фильму
            </Typography>
            <Button className={'mx-auto md:m-0'}>Добавить рецензию</Button>
          </div>

          <ReviewsList list={reviews} />
        </section>

        <section className={'rounded-10 pt-4 px-3.5 pb-8 lg:py-10 lg:px-5'}></section>
      </div>
    </>
  )
}
