//import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import FilmImg from '../../assets/images/films/film-2.png'
//import { Button } from '../../components/ui/Button/Button'
//import { ReactComponent as PlayIcon } from '../../assets/images/general/play-btn.svg'
//import cls from './FilmPage.module.scss'
import { FilmDescript } from '../../components/ui/FilmDescript/FilmDescript'
import { filmDescriptions } from '../../mock/films'

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

      <section className={'rounded-10 pt-4 px-3.5 pb-8 lg:py-10 lg:px-5'}></section>
    </div>
  )
}
