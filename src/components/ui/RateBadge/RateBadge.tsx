import { getRating, getRatingColor } from '../../../utils'

interface RateBadgeProps {
  rating: number
  className?: string
}
export const RateBadge = ({ rating, className }: RateBadgeProps) => {
  return (
    <span
      className={`
        px-2 py-1 rounded-[5px] text-white font-bold
        2xl:top-4 2xl:right-4 2xl:text-lg z-10
        ${className}`}
      style={{ background: getRatingColor(rating) }}
    >
      {getRating(rating)}
    </span>
  )
}
