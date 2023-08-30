import { Modal, ModalProps } from '../Modal/Modal'
//import YouTube from 'react-youtube'
import cls from './MovieModal.module.scss'

type MovieModalProps = Omit<ModalProps, 'children'>

export const MovieModal = ({ close, isOpened }: MovieModalProps) => {
  return (
    <Modal close={close} isOpened={isOpened} className={cls.modal} contentClassName={cls.modalContent}>
      <iframe
        title={'l'}
        src={`https://www.youtube.com/embed/Wn0JG9SeGBE`} // Замените videoKey на ваш ключ
        frameBorder="0"
        allowFullScreen
        className={cls.youtubeFrame}
      ></iframe>
      {/* <YouTube videoId={'Wn0JG9SeGBE'} iframeClassName={cls.youtubeFrame} />*/}
    </Modal>
  )
}
