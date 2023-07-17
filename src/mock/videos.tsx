import FilmImg from '../assets/images/films/film-card.png'
import { IVideo } from '../api/types'

export const videos = [
  { id: '1', title: 'Some name', src: FilmImg },
  { id: '2', title: 'Some name', src: FilmImg },
  { id: '3', title: 'Some name', src: FilmImg },
  { id: '4', title: 'Some name', src: FilmImg },
  { id: '5', title: 'Some name', src: FilmImg },
  { id: '6', title: 'Some name', src: FilmImg },
  { id: '7', title: 'Some name', src: FilmImg },
  { id: '8', title: 'Some name', src: FilmImg },
  { id: '9', title: 'Some name', src: FilmImg },
]

interface VideoSlideProps extends Omit<IVideo, 'id'> {}
export const VideoSlide = (props: VideoSlideProps) => {
  return (
    <div>
      <img
        src={props.src}
        alt={props.title}
        className={`w-full object-cover aspect-[184/132] 
              md:aspect-[163/116] lg:aspect-[210/160] 2xl:aspect-[2344/247]`}
      />
      <p className={'text-xs font-black mb-1 lg:text-sm 2xl:text-xl 2xl:mb-2'}>{props.title}</p>
    </div>
  )
}
