import { ChangeEvent, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import classnames from 'classnames'
import cls from './Textarea.module.scss'

interface TextareaProps {
  placeholder?: string
  onChange?: (val: string) => void
  value?: string
  className?: string
}
export const Textarea = ({ placeholder, value = '', onChange, className }: TextareaProps) => {
  const [val, setVal] = useState(value)
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value
    setVal(val)
    onChange?.(val)
  }
  return (
    <div className={twMerge(classnames(cls.wrapper, [className]))}>
      <textarea placeholder={placeholder} value={val} onChange={changeHandler} className={cls.textarea} />
    </div>
  )
}
