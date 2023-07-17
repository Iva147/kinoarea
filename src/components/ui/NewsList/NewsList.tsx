import { NewsMiniCard } from '../NewsMiniCard/NewsMiniCard'
import { NewsBigCard } from '../NewsBigCard/NewsBigCard'
import { news } from '../../../mock/news'
import { getScreenWidth, screens } from '../../../utils'
import { useCallback, useEffect, useState } from 'react'
import { INews } from '../../../api/types'

const lenghts = {
  [screens.md]: 3,
  [screens.lg]: 4,
}

interface NewsListProps {
  className?: string
}
export const NewsList = ({ className }: NewsListProps) => {
  const [cards, setCards] = useState<INews[]>([])
  const [first, ...rest] = news

  const listener = useCallback(() => {
    let length = 2
    const screen = getScreenWidth()
    if (screen >= screens.md) length = lenghts[screens.md]
    if (screen >= screens.lg) length = lenghts[screens.lg]

    rest.length = length
    setCards(rest)
  }, [rest])

  useEffect(() => {
    listener()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [listener])

  return (
    <div className={'2xl:flex 2xl:gap-3.5'}>
      <NewsBigCard {...first} className={'aspect-[1159/870]'} />
      <ul
        className={`${className} grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mt-2.5 2xl:grid-cols-1 2xl:min-w-[256px]`}
      >
        {cards.map(item => (
          <NewsMiniCard {...item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
