import { Button } from '../Button/Button'
import { getDate } from '../../../utils'
import { INews } from '../../../api/types'

interface NewsMiniCardProps extends Omit<INews, 'id'> {}
export const NewsMiniCard = ({ img, date, title }: NewsMiniCardProps) => {
  return (
    <li
      style={{ backgroundImage: `url(${img})` }}
      className={'group/card bg-img relative rounded-10 overflow-hidden h-[130px] 2xl:h-auto'}
    >
      <div className={'hidden opacity-0 group-hover/card:opacity-100 bg-blue/58 absolute inset-0 flex-center'}>
        <Button variant={'transparent'} className={'text-15 px-3.5 pt-2.5 pb-3.5'}>
          Читать новость
        </Button>
      </div>
      <div className={'opacity-100 group-hover/card:opacity-0 flex flex-col justify-between px-3.5 py-3 h-full'}>
        <p className={'text-xs/[12px] font-q-700 md:text-13 2xl:text-15'}>{getDate(date)}</p>
        <p className={'text-13 font-q-900 md:text-15 2xl:text-lg/[18px]'}>{title}</p>
      </div>
    </li>
  )
}
