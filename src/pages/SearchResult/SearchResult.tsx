import { Typography, TypographyTypes } from '../../components/ui/Typography/Typography'
import { ResultList } from '../../components/ui/ResultList/ResultList'

export const SearchResult = () => {
  return (
    <section className={'container'}>
      <Typography variant={'h1'} type={TypographyTypes._TITLE}>
        Результаты поиска
      </Typography>
      <h3 className={'text-15 font-q-600 md:text-xl 2xl:text-3xl'}>Побег (376 результатов)</h3>
      <p className={'text-sm font-q-600 md:text-17 2xl:text-2xl'}>Фильмы, сериалы, мультфильмы:</p>
      <ResultList />
    </section>
  )
}
