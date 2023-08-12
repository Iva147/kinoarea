import DatePicker, { type ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DateInputProps extends ReactDatePickerProps {
  date: Date | null
  onChange: (a: Date | null) => void
}
export const DateInput = ({ date, onChange, ...rest }: DateInputProps) => {
  return (
    <DatePicker
      selected={date}
      onChange={date => onChange(date)}
      className={'block w-full input input-padding'}
      calendarClassName={'calendar'}
      dateFormat="dd.MM.yyyy"
      {...rest}
    />
  )
}
