import { Button } from '../Button/Button'
import { twMerge } from 'tailwind-merge'
import { FormEvent, ReactNode, useRef } from 'react'

interface FileInputProps {
  accept?: string
  className?: string
  onChange?: (e: FormEvent<HTMLInputElement>) => void
  data: string | ReactNode
  btnText?: string
  name: string
  multiple?: boolean
}
export const FileInput = ({ name, accept, className, data, onChange, btnText, multiple = false }: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handlePick = () => inputRef.current?.click()

  return (
    <div className={twMerge('input flex', className)}>
      <input
        type="file"
        accept={accept}
        onChange={onChange}
        ref={inputRef}
        name={name}
        multiple={multiple}
        className={'opacity-0 h-0 w-0 leading-[0px]'}
      />
      <p className={'input-padding flex-1'}>{data}</p>
      <Button type="button" onClick={handlePick}>
        {btnText}
      </Button>
    </div>
  )
}
