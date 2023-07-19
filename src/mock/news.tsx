import NewsBig from '../assets/images/films/news-big.png'
import News from '../assets/images/films/news.png'
const setTimestamp = (d: string) => {
  const [day, month, year] = d.split(' ')
  const monthIndex = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'].indexOf(month)

  return new Date(parseInt(year), monthIndex, parseInt(day)).getTime()
}
export const news = [
  {
    id: '1',
    title: 'Как изменили Соника с последнего анонса',
    details:
      'Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.',
    seen: 242,
    comments: 14,
    date: setTimestamp('15 Апр 2020'),
    img: NewsBig,
  },

  {
    id: '2',
    title: 'Джеймс Ганн назвал 10 самых недооцененных сериалов последних лет',
    details:
      'Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.',
    seen: 242,
    comments: 14,
    date: setTimestamp('15 Апр 2020'),
    img: News,
  },
  {
    id: '3',
    title: 'Как изменили Соника с последнего анонса',
    details:
      'Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.',
    seen: 242,
    comments: 14,
    date: setTimestamp('15 Апр 2020'),
    img: News,
  },
  {
    id: '4',
    title: 'Как изменили Соника с последнего анонса',
    details:
      'Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.',
    seen: 242,
    comments: 14,
    date: setTimestamp('15 Апр 2020'),
    img: News,
  },
  {
    id: '5',
    title: 'Как изменили Соника с последнего анонса',
    details:
      'Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.',
    seen: 242,
    comments: 14,
    date: setTimestamp('15 Апр 2020'),
    img: News,
  },
]

export const newsPageList: typeof news = []
newsPageList.length = 14
newsPageList.fill(news[0]).map((item, order) => ({ ...item, id: order.toString() }))
