import { Link as Anchor, type LinkProps as AnchorProps } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/general/arrow-right.svg'

interface LinkProps extends Omit<AnchorProps, 'to'> {
  className?: string
  path: string
  title: string
  onClick?: () => void
}
export const Link = ({ path, title, className, onClick, ...rest }: LinkProps) => {
  return (
    <Anchor
      to={path}
      onClick={onClick}
      className={`flex gap-2 items-baseline 2xl:text-1.375rem ${className}`}
      {...rest}
    >
      <span>{title}</span>
      <ArrowRightIcon className={'fill-current'} />
    </Anchor>
  )
}
