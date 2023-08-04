import { ICategory } from '../components/ui/Category/Category'

export const categories = [
  { id: '1', title: 'ТОП 250 лучших фильмов', amount: 250 },
  { id: '2', title: 'Популярные фильмы и сериалы', amount: 1000 },
  { id: '3', title: 'Ожидаемые фильмы', amount: 480 },
  { id: '4', title: 'Фильмы про акул', amount: 29 },
  { id: '5', title: 'Фильмы про любовь', amount: 250 },
  { id: '6', title: 'Фильмы про школу', amount: 30 },
  { id: '7', title: 'Фильмы про вампиров', amount: 30 },
  { id: '8', title: 'Фильмы про зомби', amount: 31 },
  { id: '9', title: 'Фильмы про войну', amount: 40 },
  { id: '10', title: 'Комедийные боевики', amount: 50 },
]

export const persons = [
  { id: '1', title: 'За год', isActive: false },
  { id: '2', title: 'За месяц', isActive: false },
  { id: '3', title: 'За неделю', isActive: false },
]

export const genres = [
  { id: '1', title: 'Все', isActive: false },
  { id: '2', title: 'Боевики', isActive: false, param: '28' },
  { id: '3', title: 'Приключения', isActive: false, param: '12' },
  { id: '4', title: 'Комедии', isActive: false, param: '35' },
  { id: '5', title: 'Фантастика', isActive: false, param: '14' },
  { id: '6', title: 'Триллеры', isActive: false, param: '53' },
  { id: '7', title: 'Драма', isActive: false, param: '18' },
]

const getYearsCategories = (): ICategory[] => {
  const currentYear = new Date().getFullYear()
  const years = [{ id: '1', title: 'Всё время', isActive: false }]
  for (let i = 0; i <= 5; i++) {
    const y = (currentYear - i).toString()
    const id = (i + 2).toString()
    years.push({ id, title: y, isActive: false })
  }

  return years
}

export const years = getYearsCategories()

export const profit = [
  { id: '1', title: 'Украина', isActive: false },
  { id: '2', title: 'Весь мир ', isActive: false },
  { id: '3', title: 'США и Канада', isActive: false },
]
