import { Link } from 'react-router-dom'
import { endpoints } from '../../../api'
import classnames from 'classnames'

const navLinks = [
  { id: '1', title: 'Афиша', path: endpoints.premier },
  { id: '2', title: 'Медиа', path: endpoints.media },
  { id: '3', title: 'Фильмы', path: endpoints.films },
  { id: '4', title: 'Актёры', path: endpoints.actors },
  { id: '5', title: 'Новости', path: endpoints.news },
  { id: '6', title: 'Подборки', path: endpoints.collections },
  { id: '7', title: 'Категории', path: endpoints.categories },
] as const

interface LinksProps {
  className?: string
}
export const NavLinks = ({ className }: LinksProps) => {
  return (
    <ul className={classnames('font-bold text-white', [className])}>
      {navLinks.map(({ id, path, title }) => (
        <Link to={path} key={id}>
          {title}
        </Link>
      ))}
    </ul>
  )
}
