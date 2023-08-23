import { IMovies } from '../../../api/types'
import { MovieItem } from '../MovieItem/MovieItem'

interface ResultListProps {
  list: IMovies
}
export const ResultList = ({ list }: ResultListProps) => {
  return (
    <ul>
      {list.map(item => (
        <MovieItem
          name={item.title || item.name || ''}
          img={item.poster_path}
          overview={item.overview}
          rating={item.vote_average}
          key={item.id}
        />
      ))}
    </ul>
  )
}
