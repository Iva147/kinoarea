import { SectionHeader, SectionHeaderType } from '../../../../components/ui/SectionHeader/SectionHeader'
import { NewsList } from '../../../../components/ui/NewsList/NewsList'

export const News = () => {
  return (
    <section className={'pt-7 pb-3.5 md:pt-8 md:pb-7 lg:pt-11 lg:pb-[42px] 2xl:pt-16 2xl:pb-[75px]'}>
      <SectionHeader
        title={'Последние новости'}
        type={SectionHeaderType.ARROW}
        linkTitle={'Все новости'}
        className={'mb-4 md:mb-2 2xl"mb-16'}
        moveToViaArrow={'/news'}
      />
      <NewsList />
    </section>
  )
}
