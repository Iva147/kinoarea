import { personsList } from '../../../mock/person'
import { IPerson } from '../../../api/types'
import { RatingItem } from './RatingItem'

const data = [...personsList]
data.length = 4

interface PersonsRatingProps {
  list?: IPerson[]
  className?: string
}
export const PersonsRating = ({ list = data, className }: PersonsRatingProps) => {
  return (
    <ul
      className={`rounded-[10px] pt-2 pb-3 pl-5 pr-3.5 bg-darkBlue-2 grid grid-cols-1 divide-y-[2px] divide-darkBlue mt-2.5 
        lg:mt-0 ${className}`}
    >
      {list.map(item => (
        <RatingItem {...item} key={item.id} />
      ))}
    </ul>
  )
}
