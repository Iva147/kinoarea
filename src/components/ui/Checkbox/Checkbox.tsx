import { ReactNode } from 'react'

interface CheckboxProps {
  label?: ReactNode | string
  name: string
  isChecked?: boolean
  onChecked?: (status: boolean) => void
  className?: string
}
export const Checkbox = ({ label, name, className, isChecked, onChecked }: CheckboxProps) => {
  return (
    <label className={`relative flex gap-3 ${className}`} htmlFor={name}>
      <input
        type={`checkbox`}
        id={name}
        //checked={isChecked}
        onChange={e => onChecked?.(e.target.checked)}
        className={'w-0 h-0 absolute opacity-0'}
      />
      <span className={`shrink-0 basis-[17px] h-[17px] rounded-sm bg-yellowish flex-center`}>
        <span className={`${isChecked ? 'bg-checkmark' : ''} bg-img w-1.5 h-1`} />
      </span>
      {label && <span className={'text-sm'}>{label}</span>}
    </label>
  )
}
