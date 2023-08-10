export interface IOption {
  value: string
  label: string
}
export const getSelectedOption = (arr: IOption[], value: string | string[]): IOption | IOption[] | undefined => {
  if (Array.isArray(value)) {
    return arr.filter(item => value.find(val => val === item.value))
  }
  return arr.find(item => item.value === value)
}

export const getSelectedValue = (
  arr: IOption[],
  selectedOptions: IOption | IOption[]
): string | string[] | undefined => {
  if (Array.isArray(selectedOptions)) {
    return arr.filter(item => selectedOptions.find(option => option.value === item.value)).map(item => item.value)
  }

  return arr.find(item => item.value === selectedOptions.value)?.value
}
