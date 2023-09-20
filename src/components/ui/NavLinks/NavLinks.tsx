import { Link } from 'react-router-dom'
import { endpoints } from '../../../api'
import classnames from 'classnames'

const navLinks = [
  { id: '1', title: 'Афиша', path: endpoints.premiere },
  { id: '3', title: 'Фильмы', path: endpoints.films },
  { id: '4', title: 'Актёры', path: endpoints.actors },
  { id: '5', title: 'Новости', path: endpoints.news },
  { id: '6', title: 'Подборки', path: endpoints.collections },
] as const

interface LinksProps {
  className?: string
  onClick?: () => void
}
export const NavLinks = ({ className, onClick }: LinksProps) => {
  return (
    <ul className={classnames('font-bold text-white', [className])}>
      {navLinks.map(({ id, path, title }) => (
        <Link to={path} key={id} onClick={onClick}>
          {title}
        </Link>
      ))}
    </ul>
  )
}
