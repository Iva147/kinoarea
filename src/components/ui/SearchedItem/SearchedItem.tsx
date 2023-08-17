import { RateBadge } from '../RateBadge/RateBadge'
import { twMerge } from 'tailwind-merge'

interface SearchedFilmProps {
  img: string
  title: string
  rate?: number
  originalName: string
  genre: string
  className?: string
  onClick?: () => void
}
export const SearchedItem = ({ img, title, rate, genre, originalName, className, onClick }: SearchedFilmProps) => {
  return (
    <div
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      className={twMerge(
        `rounded-10 py-[14px] pr-9 pl-2.5 bg-darkBlue flex items-center w-full gap-[18px] flex-wrap md:flex-nowrap`,
        className
      )}
    >
      <img
        src={img}
        alt={originalName}
        className={'w-[79px] aspect-square object-cover md:order-1 md:aspect-[79/113]'}
      />
      <div className={'order-3 flex-[100%] md:flex-1 md:order-2'}>
        <p className={'font-q-700 text-xl'}>{title}</p>
        <p className={'text-white/70'}>{originalName}</p>
        <p className={'text-yellowish'}>{genre}</p>
      </div>
      {rate && <RateBadge rating={rate} className={'md:order-3'} />}
    </div>
  )
}
