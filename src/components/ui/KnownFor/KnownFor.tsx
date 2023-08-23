import { Link } from 'react-router-dom'

export interface KnownForItem {
  id: number
  name: string
}

interface KnownForProps {
  title: string
  list: KnownForItem[]
}
export const KnownFor = ({ title, list }: KnownForProps) => {
  const neededWithSeparator = list.length - 1
  return (
    <div className={`text-13 text-purple-1 mt-[5px] mb-[15px] lg:mb-0 max-h-[100px] overflow-hidden`}>
      <p>{title}:</p>
      <p>
        {list.map((item, order) => (
          <Link to={`/films/${item.id}`} key={item.id} className={'text-13 font-q-500 text-yellowish hover:underline'}>
            {item.name}
            {order !== neededWithSeparator && ', '}
          </Link>
        ))}
      </p>
    </div>
  )
}
