import { films } from '../../../mock/films'
import { Pagination } from '../Pagination/Pagination'
import { useState } from 'react'
import { RateBadge } from '../RateBadge/RateBadge'
import { Button } from '../Button/Button'
export const ResultList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <ul>
        {films.map(item => (
          <li key={item.id} className={'pt-[14px] pb-5 flex items-center gap-5 item-border'}>
            <img
              src={item.img}
              alt={item.title}
              className={'rounded-10 w-[144px] h-[205px] object-cover xl:w-[150px] xl:h-[214px]'}
            />

            <div className={'flex-1 md:flex md:items-center md:justify-between lg:gap-[25px]'}>
              <div className={'lg:flex-1 lg:flex lg:items-center lg:justify-between'}>
                <div className={'lg:flex-1'}>
                  <p className={'text-17 font-q-700 mb-[9px]'}>{item.title}</p>
                  <p className={'text-13 font-q-500 text-purple-1'}>{item.originalName}</p>
                  <p className={'text-13 font-q-500 text-yellowish'}>{item.director}</p>
                  <p className={`text-13 text-purple-1 mt-[5px] mb-[15px] lg:mb-0`}>{item.director}</p>
                </div>

                <div className={'flex gap-3 lg:pt-5'}>
                  <div>
                    <RateBadge rating={item.rating} />
                    <p className={'mt-1 text-15 font-q-500'}>Kinoarea</p>
                  </div>
                  <div>
                    <RateBadge rating={item.rating} />
                    <p className={'mt-1 text-15 font-q-500'}>IMDb</p>
                  </div>
                </div>
              </div>
              <Button size={'md'} className={'hidden md:block'}>
                Карточка фильма
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        totalCount={500}
        currentPage={currentPage}
        siblingCount={2}
        pageSize={10}
        onPageChange={(pageNum: number) => setCurrentPage(pageNum)}
        className={'mx-auto mt-4 md:mt-8 ld:mt-9 2xl:mt-11'}
      />
    </>
  )
}
