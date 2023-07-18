import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs'
import { Schedule } from '../../components/Schedule/Schedule'
import { schedule } from '../../mock/filmsSchedules'

export const Premiere = () => {
  return (
    <div className={'py-6'}>
      <section className={'container xl:flex xl:gap-6'}>
        <div className={'xl:grow-1'}>
          <Typography
            className={'max-w-[284px] mx-auto text-center md:max-w-full md:text-start'}
            variant={'h1'}
            type={TypographyTypes._TITLE}
          >
            График премьер фильмов
          </Typography>
          <Breadcrumbs className={'flex-center mt-1 mb-2 md:justify-start md:mb-1.5 lg:mb-2 2xl:mb-3.5'} />
          <p className={'text-13 font-q-500 text-center md:text-start md:text-15 2xl:text-lg'}>
            Также как дальнейшее развитие различных форм деятельности, в своём классическом представлении, допускает
            внедрение первоочередных требований. Современные технологии достигли такого уровня, что внедрение
            современных методик предполагает независимые способы реализации стандартных подходов. Сторонники
            тоталитаризма в науке могут быть объявлены нарушающими общечеловеческие нормы этики и морали.
          </p>
        </div>
        <div className={'my-[21.5px]'}>{/* TODO: add selects*/}</div>
      </section>

      {schedule.map(item => (
        <section key={item.id} className={'container mt-7 md:mt-10 2xl:mt-16'}>
          <Schedule period={item.title} films={item.films} />
        </section>
      ))}
    </div>
  )
}
