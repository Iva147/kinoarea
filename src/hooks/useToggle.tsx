import { useState } from 'react'
export function useToggle(initial?: boolean): [boolean, (a: boolean) => void] {
  const [isOn, setOn] = useState(initial || false)
  const toggle = (status?: boolean) => {
    setOn(prev => {
      if (typeof status === 'boolean') return status
      return !prev
    })
  }
  return [isOn, toggle]
}
