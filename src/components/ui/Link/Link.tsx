import { Link as Anchor } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/general/arrow-right.svg'

interface LinkProps {
  className?: string
  path: string
  title: string
}
export const Link = ({ path, title, className }: LinkProps) => {
  return (
    <Anchor to={path} className={`flex gap-2 items-baseline 2xl:text-1.375rem ${className}`}>
      <span>{title}</span>
      <ArrowRightIcon className={'fill-current'} />
    </Anchor>
  )
}
