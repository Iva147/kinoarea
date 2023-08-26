import { ICategory } from '../components/ui/Category/Category'
import { ICategories } from '../api/types/categories'

export type CategoriesTypes = 'genres' | 'category' | 'cast' | 'year' | 'tv'

const setCategoryYear = (): ICategories[] => {
  const current = new Date().getFullYear()
  const low = current - 100
  const years: ICategories[] = []

  for (let i = current; i >= low; i--) {
    years.push({ id: `year${i}`, title: `За ${i} год`, amount: 0, types: 'year', params: { year: i } })
  }

  return years
}

const categories_year = setCategoryYear()

export const categories_2: ICategories[] = [
  /* category */
  { id: '25', title: 'Фильмы с большим рейтингом', amount: 0, types: 'category', params: {} },
  { id: '26', title: 'Популярные фильмы', amount: 0, types: 'category', params: {} },
  { id: '27', title: 'Скоро ожидаеться', amount: 0, types: 'category', params: {} },
  { id: '28', title: 'В прокате', amount: 0, types: 'category', params: {} },
  { id: '19', title: 'Фильмы про акул', amount: 0, types: 'category', params: { with_keywords: 'shark' } },
  {
    id: '20',
    title: 'Фильмы про любовь',
    amount: 0,
    types: 'category',
    params: { with_keywords: 'love', with_genres: '10749,10402,10751' },
  },
  {
    id: '21',
    title: 'Фильмы про школу',
    amount: 0,
    types: 'category',
    params: { with_keywords: 'school', with_genres: '10751' },
  },
  { id: '22', title: 'Фильмы про вампиров', amount: 0, types: 'category', params: { with_keywords: 'vampire' } },
  { id: '23', title: 'Фильмы про зомби', amount: 0, types: 'category', params: { with_keywords: 'zombie' } },
  { id: '24', title: 'Фильмы про войну', amount: 0, types: 'category', params: { with_keywords: 'war' } },

  /* genres */
  { id: '1', title: 'Фильм в жанре экшн', amount: 0, types: 'genres', params: { with_genres: '28' } },
  { id: '2', title: 'Приключения', amount: 0, types: 'genres', params: { with_genres: '12' } },
  { id: '3', title: 'Фантастика', amount: 0, types: 'genres', params: { with_genres: '14' } },
  { id: '4', title: 'Исторические', amount: 0, types: 'genres', params: { with_genres: '36' } },
  { id: '5', title: 'Ужасы', amount: 0, types: 'genres', params: { with_genres: '27' } },
  { id: '6', title: 'Музыкальные фильмы', amount: 0, types: 'genres', params: { with_genres: '10402' } },
  { id: '7', title: 'Романтический фильм', amount: 0, types: 'genres', params: { with_genres: '10749' } },
  { id: '8', title: 'Научная фантастика', amount: 0, types: 'genres', params: { with_genres: '878' } },
  { id: '9', title: 'Триллеры', amount: 0, types: 'genres', params: { with_genres: '53' } },
  { id: '10', title: 'Военные', amount: 0, types: 'genres', params: { with_genres: '10752' } },
  { id: '11', title: 'Анимации', amount: 0, types: 'genres', params: { with_genres: '16' } },
  { id: '12', title: 'Комедии', amount: 0, types: 'genres', params: { with_genres: '35' } },
  { id: '13', title: 'Детективы', amount: 0, types: 'genres', params: { with_genres: '80' } },
  { id: '14', title: 'Документальные фильмы', amount: 0, types: 'genres', params: { with_genres: '99' } },
  { id: '15', title: 'Драма', amount: 0, types: 'genres', params: { with_genres: '18' } },
  { id: '16', title: 'Семейные фильмы', amount: 0, types: 'genres', params: { with_genres: '10751' } },
  { id: '17', title: 'Мистика', amount: 0, types: 'genres', params: { with_genres: '9648' } },
  { id: '18', title: 'Вестерн', amount: 0, types: 'genres', params: { with_genres: '37' } },
  /* year */
  ...categories_year,
  /* cast */
  { id: 'cast_38', title: 'Фильмы с Джонни Деппом ', amount: 0, types: 'cast', params: { with_cast: 'Johnny Depp' } },
  { id: 'cast_39', title: 'Фильмы с Том Круз', amount: 0, types: 'cast', params: { with_cast: 'Tom Cruise' } },
  { id: 'cast_40', title: 'Роберт Дауни-мл', amount: 0, types: 'cast', params: { with_cast: 'Robert Downey Jr' } },
  { id: 'cast_41', title: 'Сандра Баллок', amount: 0, types: 'cast', params: { with_cast: 'Sandra Bullock' } },
  { id: 'cast_42', title: 'Анджелина Джоли', amount: 0, types: 'cast', params: { with_cast: 'Angelina Jolie' } },
  { id: 'cast_43', title: 'Дэниел Крейг', amount: 0, types: 'cast', params: { with_cast: 'Angelina Jolie' } },
  { id: 'cast_44', title: 'Джим Керри', amount: 0, types: 'cast', params: { with_cast: 'Jim Carrey' } },
  { id: 'cast_45', title: 'Уилл Смит', amount: 0, types: 'cast', params: { with_cast: 'Will Smith' } },
  { id: 'cast_46', title: 'Том Харди', amount: 0, types: 'cast', params: { with_cast: 'Tom Hardy' } },
  { id: 'cast_47', title: 'Том Хэнкс', amount: 0, types: 'cast', params: { with_cast: 'Tom Hanks' } },
  { id: 'cast_48', title: 'Морган Фримен', amount: 0, types: 'cast', params: { with_cast: 'Morgan Freeman' } },
  { id: 'cast_49', title: 'Роберт Де Ниро', amount: 0, types: 'cast', params: { with_cast: 'Robert De Niro' } },
  { id: 'cast_50', title: 'Мэттью Макконехи', amount: 0, types: 'cast', params: { with_cast: 'Matthew McConaughe' } },
  {
    id: 'cast_51',
    title: 'Сэмюэл Лерой Джексон',
    amount: 0,
    types: 'cast',
    params: { with_cast: ' Samuel L. Jackson' },
  },
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
