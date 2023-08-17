import { ReactComponent as SearchIcon } from '../../../assets/images/general/search.svg'
import { twMerge } from 'tailwind-merge'
import { ForwardedRef, forwardRef } from 'react'

interface SearchBarProps {
  className?: string
  onSearch?: () => void
}
export const SearchBar = forwardRef(
  ({ className, onSearch }: SearchBarProps, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
      <div className={twMerge('flex bg-white rounded-10 pt-[9px] px-2.5 pb-2.5', className)}>
        <input
          type="text"
          ref={ref}
          className={'w-3 text-dark focus:outline-0 font-q-300 text-xl flex-1 md:px-[22px]'}
        />
        <button onClick={onSearch} className={'rounded-10 bg-yellowish w-[55px] h-[52px]'}>
          <SearchIcon className="w-full" />
        </button>
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'
