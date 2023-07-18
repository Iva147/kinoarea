import { Button } from '../../components/ui/Button/Button'
import { Layout } from '../../components/layout/Layout'
import cls from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <Layout noMailing>
      <section className={'pt-7 pb-9 md:pb-11 lg:pb-20 2xl:pt-[122px] 2xl:pb-[133px] flex items-center h-full'}>
        <div className={'container text-center'}>
          <div className={'text-4xl font-q-900 md:text-50/[80px] '}>
            <h2>404</h2>
            <h2>Кина не будет:(</h2>
          </div>
          <p
            className={`text-15 leading-[25px] font-q-500 mt-4 mb-7 px-2 
            md:text-lg md:mt-[26px] md:mt-8`}
          >
            Возможно, данного адреса страницы не сущетсвует, или странциа была перемещена.
          </p>
          <div
            className={`flex flex-col gap-[15px] max-w-[425px] mx-auto 
              md:max-w-full md:flex-row md:justify-center`}
          >
            <Button className={cls.btn}>Вернуться на главную</Button>
            <Button variant={'transparent'} className={cls.btn}>
              Поиск по сайту
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
