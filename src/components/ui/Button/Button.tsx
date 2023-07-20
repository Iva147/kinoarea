import { HTMLAttributes, PropsWithChildren } from 'react'
import cls from './Button.module.scss'
import { twMerge } from 'tailwind-merge'

type BtnVariant = 'icon' | 'primary' | 'transparent' | 'white'
type BtnSizes = 'normal' | 'md'
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  variant?: BtnVariant
  size?: BtnSizes
  className?: string
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'normal',
  className,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} {...rest} className={twMerge(`rounded-md  ${cls[variant]} ${cls[size]} ${className}`)}>
      {children}
    </button>
  )
}
