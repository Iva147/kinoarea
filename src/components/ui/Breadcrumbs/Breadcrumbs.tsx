import { Link, useLocation } from 'react-router-dom'

export const PAGES: { [key: string]: string } = {
  '/': 'Главная',
  '/premiere': 'Афиша',
}

interface BreadcrumbsProps {
  className?: string
}
export const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const locations = useLocation()
  let current = ''
  const othersCrumbs = locations.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => (current += '/' + crumb))
  const crumbs = ['/', ...othersCrumbs]

  console.log({ current, crumbs })

  return (
    <ul className={`flex ${className} text-base font-q-500`}>
      {crumbs.map(item => (
        <li
          key={item}
          className={`text-darkBlue-4 [&:not(:last-of-type):after]:content-breadcrumbs 
             [&:not(:last-of-type):after]:pl-2 [&:not(:first-of-type)]:pl-2 last-of-type:text-white [&:not(:last-of-type):hover]:underline`}
        >
          <Link to={item}>{PAGES[item]}</Link>
        </li>
      ))}
    </ul>
  )
}
