import { useNavigate, useOutletContext } from 'react-router-dom'
import { setMovieDBPath } from '../../utils'
import { IPersonImg } from '../../api/types/responses'
import { SectionHeader, SectionHeaderType } from '../../components/ui/SectionHeader/SectionHeader'

interface OutletContext {
  images: IPersonImg[]
  title: string
}
export const ActorImages = () => {
  const context = useOutletContext<OutletContext>()
  const navigate = useNavigate()

  return (
    <section className={'container'}>
      <SectionHeader
        title={context.title}
        type={SectionHeaderType.ARROW}
        linkTitle={'Обратно'}
        onArrowClick={() => navigate(-1)}
      />
      <p className={'py-3'}>Всего найдено: {context.images.length} фото</p>
      <div className={'grid grid-cols-2 gap-2 py-3 md:grid-cols-4 md:gap-1.5 lg:gap-2 2xl:gap-[22px]'}>
        {context.images.map((item, order) => (
          <img
            src={setMovieDBPath(item.file_path)}
            alt={`${context.title}`}
            className={'w-full object-cover rounded-10'}
            key={order}
          />
        ))}
      </div>
    </section>
  )
}
