import { FormEvent, HTMLAttributes, ReactNode, useId, useState } from 'react'
import { IRegister } from '../../../api/types/forms'
import classnames from 'classnames'
import { FieldValues } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type InputVal = string | undefined
type InputSetter = <T>(a: T) => void

interface InputProps<T extends FieldValues | undefined = undefined>
  extends HTMLAttributes<HTMLInputElement>,
    IRegister<T> {
  className?: string
  type?: string
  label?: string
  placeholder?: string
  defaultValue?: string
  value?: string
  onChange?: InputSetter
  addendum?: ReactNode
  onAddendumClick?: InputSetter
  error?: string
}

export function Input<T extends FieldValues | undefined = undefined>({
  className,
  type = 'text',
  label,
  placeholder,
  defaultValue,
  value: inputValue,
  name,
  onChange,
  addendum,
  onAddendumClick,
  error,
  register,
  ...props
}: InputProps<T>) {
  const [value, setValue] = useState<InputVal>(inputValue || defaultValue)
  const [isFieldFocused, setFieldFocused] = useState(false)
  const id = useId()

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    onChange ? onChange(setInputValue) : setValue((e.target as HTMLInputElement).value)

    if (register && name) {
      register(name).onChange(e)
    }
  }

  const setInputValue = (value: InputVal) => {
    setValue(value)
  }

  const addendumClickHandler = () => {
    onAddendumClick && onAddendumClick(setInputValue)
  }

  return (
    <div className={classnames(`cls.input text-white/60 text-17 relative`, [className])}>
      {label && (
        <label
          htmlFor={id + name}
          className={twMerge(
            classnames('absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-500 pl-5 text-white/60', {
              'top-0 translate-0 pl-2 text-sm  text-white/40': !!value || isFieldFocused,
            })
          )}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        {...props}
        id={id + name}
        {...(register ? register(name) : { value, name })}
        onChange={changeHandler}
        onBlur={() => setFieldFocused(false)}
        onFocus={() => setFieldFocused(true)}
        placeholder={placeholder}
        autoComplete="new-password"
        aria-invalid={!!error}
        className={`
          bg-darkBlue w-full py-3 px-4 outline-0 rounded-10 text-white
          focus:outline-none 
          md_h:py-5 md_h:px-[26px]`}
      />
      {addendum && <button onClick={addendumClickHandler}>{addendum}</button>}
      {error && !isFieldFocused && (
        <p role="alert" className={'cls.error text-red-500 absolute bottom-0 left-0 pl-2 translate-y-1/2 text-[0.7em]'}>
          {error}
        </p>
      )}
    </div>
  )
}
