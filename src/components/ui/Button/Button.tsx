import { HTMLAttributes, PropsWithChildren } from 'react'
import cls from './Button.module.scss'

type BtnVariant = 'icon' | 'primary' | 'transparent' | 'white'
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  variant?: BtnVariant
  className?: string
}
export const Button = ({
  children,
  onClick,
  variant = 'primary',
  className,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} {...rest} className={`rounded-md ${className} ${cls[variant]}`}>
      {children}
    </button>
  )
}
