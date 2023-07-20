import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import NewsOneImg from '../../assets/images/news/news-one.png'
import NewsVideo from '../../assets/images/news/news-video.png'
import { newsImgs, oneNews } from '../../mock/oneNews'
import { Mark } from '../../components/ui/Mark/Mark'
import TwitterComment from '../../assets/images/news/twitter-comment.png'
import { Link } from 'react-router-dom'
import NewsImg2 from '../../assets/images/news/news-img-2.png'
import { NewsSlider } from '../../components/ui/sliders/NewsSlider/NewsSlider'

const classes = {
  img: 'w-full max-h-[80vh] object-cover rounded-10',
}
const PBlock = ({ list }: { list: string[] }) => {
  return (
    <div>
      {list.map((p, order) => (
        <Typography className={'[&:not(:last-of-type)]:pb-2'} key={order}>
          {p}
        </Typography>
      ))}
    </div>
  )
}
export const OneNews = () => {
  return (
    <div className={'container'}>
      <section>
        <Typography variant={'h1'} type={TypographyTypes._TITLE}>
          Вышел трейлер документального сериала о создании «Мандалорца»
        </Typography>
        <Breadcrumbs
          lastCrumb={'Вышел трейлер документального сериала о создании «Мандалорца»'}
          className={'py-[9px]'}
        />
      </section>

      <section>
        <img src={NewsOneImg} alt={'film'} className={`aspect-[367/267] mt-5 mb-3.5 ${classes.img}`} />
        <PBlock list={oneNews.first} />

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video poster={NewsVideo} className={'aspect-video rounded-10 my-8 w-full'}>
          <source src={'/'} type={'video/mp4'} />
          <track label="English" kind="subtitles" srcLang="en" src={'/'} default />
          <p>Ваш бразер не поддержывает видео</p>
        </video>
        <PBlock list={oneNews.second} />
      </section>

      <section
        className={`
          relative bg-darkBlue-5 rounded-10 pt-14 pb-5  pl-5 pr-3 mt-8 mb-12
          md:pt-7 md:pb-14  md:pl-[46px] md:pr-14 md:mt-[68px] md:mb-[44px]
          lg:pb-[34px] lg:pl-[46px] lg:pr-12 lg:mt-[53px] lg:mb-10`}
      >
        <Mark className={'absolute top-0 left-0 pl-8 -translate-y-1/2'} />
        <h6 className={'text-base italic md:text-lg lg:text-22'}>
          Повседневная практика показывает, что высокотехнологичная концепция общественного уклада создаёт необходимость
          включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса новых принципов
          формирования материально-технической и кадровой базы.
        </h6>
        <p
          className={`
            text-sm font-q-500 text-yellowish mt-3.5 
            md:text-17 md:mt-[27px]
            lg:text-lg lg:mt-2`}
        >
          Виктор Викторов
        </p>
      </section>

      <section>
        <PBlock list={oneNews.third} />
        <div
          className={`
            rounded-10 mx-auto overflow-hidden my-[25px] 
            md:max-w-[519px] md:mt-[23px] md:mt-[34px] 
            lg:py-8 2xl:mt-7 2xl:mb-3.5`}
        >
          <img src={TwitterComment} alt={'twitter comment'} className={'w-full'} />
        </div>
        <PBlock list={oneNews.forth} />
        <Typography variant={'p'} className={'mt-9 text-white/67'}>
          Источник:{' '}
          <Link to={'/'} className={'text-white/100 underline'}>
            Kinoarea
          </Link>
        </Typography>
      </section>

      <section className={'mt-8 mb-16 md:mt-10 md:mb-15 lg:mb-[42px] 2xl:my-9'}>
        <img
          src={NewsImg2}
          alt={'film img'}
          className={`
            aspect-[373/278] mb-2.5 
            md:mb-6 lg:mb-[22px] 
            ${classes.img}`}
        />
        <Typography variant={'p'} className={'text-white/67'}>
          Кадр из сериала “Мандалорец”
        </Typography>

        <NewsSlider slides={newsImgs} />
      </section>
    </div>
  )
}
