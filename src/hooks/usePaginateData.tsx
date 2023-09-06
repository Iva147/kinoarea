import React, { useState } from 'react'

interface PaginateDataReturn<T, K> {
  data: T | null
  setData: React.Dispatch<React.SetStateAction<T | null>>
  pagesData: K | null
  setPagesData: React.Dispatch<React.SetStateAction<K | null>>
  onPaginationChange: (page: number, cb: (page: number) => void) => void
}
export function usePaginateData<T, K>(): PaginateDataReturn<T, K> {
  const [data, setData] = useState<T | null>(null)
  const [pagesData, setPagesData] = useState<K | null>(null)

  const onPaginationChange = (page: number, cb: (page: number) => void) => cb(page)

  return { data, setData, pagesData, setPagesData, onPaginationChange }
}
