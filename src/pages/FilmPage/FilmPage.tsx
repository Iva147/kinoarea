//import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import FilmImg from '../../assets/images/films/film-2.png'
//import { Button } from '../../components/ui/Button/Button'
//import { ReactComponent as PlayIcon } from '../../assets/images/general/play-btn.svg'
//import cls from './FilmPage.module.scss'
import { FilmDescript } from '../../components/ui/FilmDescript/FilmDescript'
import { filmDescriptions } from '../../mock/films'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCast, getPosters, getReview, getSimilarMovies } from '../../api/movieDBApi'
import { ICastRes, IPoster, IReview } from '../../api/types/responses'
import { SectionHeader, SectionHeaderType } from '../../components/ui/SectionHeader/SectionHeader'
import { CastList } from '../../components/ui/CastList/CastList'
import { PostersList } from '../../components/ui/PostersList/PostersList'
import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { FilmSlider } from '../../components/ui/sliders/FilmSlider/FilmSlider'
import { SliderNav } from '../../components/ui/sliders/SliderNav/SliderNav'
import { IMovieRes } from '../../api/types'
import { ReviewsList } from '../../components/ui/ReviewsList/ReviewsList'
import { Button } from '../../components/ui/Button/Button'

const data = {
  title: 'Побег из Претории',
  originalTitle: 'Escape from Pretoria',
  poster: FilmImg,
  description: `Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». 
  Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. 
  Шаг второй — реализация плана.`,
}

console.log({ data })

export const FilmPage = () => {
  const { slug } = useParams()
  const [cast, setCast] = useState<ICastRes[]>([])
  const [posters, setPosters] = useState<IPoster[]>([])
  const [reviews, setReviews] = useState<IReview[]>([])
  const [similar, setSimilar] = useState<IMovieRes[]>([])

  useEffect(() => {
    if (!slug) return
    getCast(slug).then(res => setCast(res))
    getPosters(slug).then(res => setPosters(res))
    getReview(slug).then(res => setReviews(res))
    getSimilarMovies(slug).then(res => setSimilar(res))
  }, [slug])

  console.log('POSTERS', posters)
  return (
    <div className={'container pt-[24px] pb-6 md:pt-9 md:pb-[42px] lg:pt-7 lg:pb-14 2xl:pt-16 2zl:pb-[69px]'}>
      {/*<section className={'container'}>
        <div>
          <Breadcrumbs />
          <h3>Побег из Претории</h3>
          <p>Escape from Pretoria</p>
        </div>
        <img src={FilmImg} alt={'film'} className={'rounded-10'} />
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <p>
            Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими
            узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй —
            реализация плана.
          </p>
          <Button variant={'transparent'} className={cls.playBtn}>
            <>
              <PlayIcon />
              <span>Смотреть трейлер</span>
            </>
          </Button>
        </div>
      </section>*/}

      <section>
        <ul className={'mt-7 mb-9 md:cols-2 md:mt-5 md:mb-6 lg:gap-7 md:mt-11 md:mb-12 2xl:gap-16'}>
          {filmDescriptions.map(item => (
            <FilmDescript {...item} key={item.id} />
          ))}
        </ul>
      </section>

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
          className={'mx-auto mt-9 mb-[18px] md:mt-[52px] md:mt-9 2xl:mt-[73px] 2xl:mt-[42px] w-max'}
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
  )
}
