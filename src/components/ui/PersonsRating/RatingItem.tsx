interface RatingItemProps {
  img: string
  rate: string | number
  actor: string
  originalActorName: string
  age: number
}
export const RatingItem = ({ rate, age, actor, originalActorName }: RatingItemProps) => {
  return (
    <li className={'flex justify-between items-center py-2'}>
      <div>
        <p className={'text-15 font-q-700'}>{actor}</p>
        <p className={'text-11 mb-[1.79px] mt-[3px] text-darkBlue-3'}>{originalActorName}</p>
        <p className={'text-11 text-yellowish'}>{age} лет</p>
      </div>
      <p className={'text-15 text-yellowish font-q-600'}>{rate} место</p>
    </li>
  )
}
