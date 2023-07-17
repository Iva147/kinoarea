import { FilmList } from '../../components/ui/FilmList/FilmList'
import { SectionHeader, SectionHeaderType } from '../../components/ui/SectionHeader/SectionHeader'
import { Button } from '../../components/ui/Button/Button'
import Poster from '../../assets/images/films/poster.png'
import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { IconBtn } from '../../components/ui/IconBtn/IconBtn'

import { ReactComponent as TwitterIcon } from '../../assets/images/general/icons8-twitter.svg'
import { ReactComponent as FacebookIcon } from '../../assets/images/general/facebook-f.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/general/instagram.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/images/general/linkedin-in.svg'
import { VideoSlider } from '../../components/ui/sliders/VideoSlider/VideoSlider'
import { videos } from '../../mock/videos'
import { films } from '../../mock/films'
import { SliderNav } from '../../components/ui/sliders/SliderNav/SliderNav'
import { FilmSlider } from '../../components/ui/sliders/FilmSlider/FilmSlider'
import { PersonSlider } from '../../components/ui/sliders/PersonSlider/PersonSlider'
import { personsList } from '../../mock/person'
import { PersonsRating } from '../../components/ui/PersonsRating/PersonsRating'
import { IncomeList } from '../../components/ui/IncomeList/IncomeList'
import { income } from '../../mock/income'
import { NewsList } from '../../components/ui/NewsList/NewsList'

const years = [
  { id: '1', title: 'Все', isActive: false },
  { id: '2', title: 'Боевики', isActive: false },
  { id: '3', title: 'Приключения', isActive: false },
  { id: '4', title: 'Комедии', isActive: false },
  { id: '5', title: 'Фантастика', isActive: false },
  { id: '6', title: 'Триллеры', isActive: false },
  { id: '7', title: 'Драма', isActive: false },
]

const times = [
  { id: '1', title: 'Всё время', isActive: false },
  { id: '2', title: '2020', isActive: false },
  { id: '3', title: '2019', isActive: false },
  { id: '4', title: '2018', isActive: false },
  { id: '5', title: '2017', isActive: false },
  { id: '6', title: '2016', isActive: false },
  { id: '7', title: '2015', isActive: false },
]

//За год         За месяц         За неделю
const persons = [
  { id: '1', title: 'За год', isActive: false },
  { id: '2', title: 'За месяц', isActive: false },
  { id: '3', title: 'За неделю', isActive: false },
]

const profit = [
  { id: '1', title: 'Украина', isActive: false },
  { id: '2', title: 'Весь мир ', isActive: false },
  { id: '3', title: 'США и Канада', isActive: false },
]
export const Main = () => {
  return (
    <>
      <div className={'container'}>
        <section>
          <SectionHeader title={'Сейчас в кино'} categories={years} />
          <FilmList list={films} />
          <Button
            variant={'transparent'}
            className={'block mt-7 mb-8 mx-auto md:mt-8 md:mb-6 lg:mb-12 2xl:mt-12 2xl:mb-[54px]'}
          >
            Все новинки
          </Button>
        </section>

        <section>
          <SectionHeader
            title={'Новые трейлеры'}
            type={SectionHeaderType.ARROW}
            linkTitle={'Новые трейлеры'}
            className={'mb-4 mt-7 md:mb-8 2xl:mb-20'}
          />
          <div>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video poster={Poster} className={'w-full aspect-[368/198.87] rounded-lg overflow-hidden'} src={'/'} />
          </div>
          <div className={'flex justify-between mb-4 md:mb-6 lg:mb-8 2xl:mb-11'}>
            <div className={'whitespace-nowrap flex flex-col items-center gap-2 md:flex-row md:gap-6'}>
              <Typography variant={'h4'} type={TypographyTypes.SUBTITLE}>
                Форсаж 9
              </Typography>

              <div className={'flex gap-4 md:w-full md:justify-between '}>
                <LinkedInIcon className={'fill-grayIcon hover:fill-white w-4 max-h-4'} />
                <InstagramIcon className={'fill-grayIcon hover:fill-white w-4 max-h-4'} />
                <FacebookIcon className={'fill-grayIcon hover:fill-white  w-4 max-h-4'} />
                <TwitterIcon className={'fill-grayIcon hover:fill-white w-4 max-h-4 '} />
              </div>
            </div>
            <div className={'flex items-center text-white gap-1 text-0.5rem'}>
              <div>
                <IconBtn type={'like'} />
                <p className={'text-center'}>3 245</p>
              </div>
              <div>
                <IconBtn type={'dislike'} />
                <p className={'text-center'}>420</p>
              </div>
            </div>
          </div>

          <VideoSlider slides={videos} />
        </section>

        <section>
          <SectionHeader title={'Популярные фильмы'} categories={times} />
          <FilmSlider slides={films} name={'films'} />
          <div className={'flex justify-center items-center mt-8'}>
            <SliderNav sliderName={'films'} />
          </div>
        </section>

        <section>
          <div className={'flex-between'}>
            <SectionHeader title={'Популярные персоны'} categories={persons} />
            <SliderNav sliderName={'persons'} className={'slider-nav mt-[46px]'} />
          </div>
          <div className={'lg:grid lg:grid-cols-3 lg:gap-[1.317%]'}>
            <div className={'lg:col-span-2'}>
              <PersonSlider slides={personsList} name={'persons'} />
            </div>
            <PersonsRating />
          </div>
        </section>

        <section className={'pt-7 pb-3.5 md:pt-8 md:pb-7 lg:pt-11 md:pb-[42px] 2xl:pt-16 2xl:pb-[75px]'}>
          <SectionHeader
            title={'Последние новости'}
            type={SectionHeaderType.ARROW}
            linkTitle={'Все новости'}
            className={'mb-4 md:mb-2 2xl"mb-16'}
          />
          <NewsList />
        </section>
      </div>

      <div className={'bg-dark'}>
        <section className={'container pt-[17px] lg:pt-8 2xl:pt-[49px] 2xl:pb-[105px]'}>
          <div className={'flex-between my-2'}>
            <Typography variant={'h3'} type={TypographyTypes._TITLE}>
              Ожидаемые новинки
            </Typography>
            <SliderNav sliderName={'upcoming'} className={'slider-nav hidden md:inline-flex'} />
          </div>
          <FilmSlider slides={films} name={'upcoming'} />
          <div className={'flex-center mt-7'}>
            <SliderNav sliderName={'upcoming'} className={'slider-nav md:hidden'} />
          </div>
        </section>

        <section className={'container'}>
          <SectionHeader title={'Кассовые сборы'} categories={profit} /> {/* TODO: add period */}
          <IncomeList list={income} />
        </section>
      </div>
    </>
  )
}
