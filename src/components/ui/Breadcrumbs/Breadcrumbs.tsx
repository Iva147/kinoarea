import { Link, useLocation, useParams } from 'react-router-dom'

export const PAGES: { [key: string]: string } = {
  '/': 'Главная',
  '/premiere': 'Афиша',
  '/films': 'Фильмы',
  '/news': 'Новости',
  '/collections': 'Подборки',
}

interface BreadcrumbsProps {
  className?: string
  lastCrumb?: string
}
export const Breadcrumbs = ({ className, lastCrumb }: BreadcrumbsProps) => {
  const locations = useLocation()
  const { slug } = useParams()
  let current = ''
  const othersCrumbs = locations.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => (current += '/' + crumb))
  const crumbs = ['/', ...othersCrumbs]

  if (lastCrumb) {
    crumbs[crumbs.length - 1] = lastCrumb
  }

  console.log({ current, crumbs })

  return (
    <ul className={`flex flex-wrap ${className} text-base font-q-500 w-fit`}>
      {crumbs.map(item => (
        <li
          key={item}
          className={`text-darkBlue-4 [&:not(:last-of-type):after]:content-breadcrumbs 
             [&:not(:last-of-type):after]:pl-2 [&:not(:last-of-type)]:pr-2 last-of-type:text-white [&:not(:last-of-type):hover]:underline`}
        >
          <Link to={item}>{PAGES[item] || lastCrumb || slug}</Link>
        </li>
      ))}
    </ul>
  )
}
