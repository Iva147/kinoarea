import { useRef, useState } from 'react'
import { Editor } from '../Editor/Editor'
import { AbsentImg } from '../AbsentImg/AbsentImg'
import { Button } from '../Button/Button'
import { Review } from '../Review/Review'
import type { IUserReview } from '../../../api/types/responses'
import { useActions } from '../../../hooks/useActions'
import { Timestamp } from 'firebase/firestore'
import { twMerge } from 'tailwind-merge'

interface CommentProps extends Pick<IUserReview, 'movie' | 'userId'> {
  userImg: string
  userName: string
  userSurname: string
  className?: string
}

export const Comment = ({ userId, userImg, userName, userSurname, movie, className }: CommentProps) => {
  const editorValRef = useRef<string>('')
  const [showPreview, setShowPreview] = useState(false)
  const { setUserReview } = useActions()

  const comment = {
    userId,
    created_at: Timestamp.now(),
    movie,
    author_details: {
      name: userName,
      username: userSurname,
      avatar_path: userImg,
      rating: 0,
    },
  }
  const sendMessage = (content: string) => {
    setUserReview({ ...comment, created_at: Timestamp.now(), content })
    //TODO: message that comment is sent
    editorValRef.current = ''
  }

  return (
    <>
      {showPreview && (
        <Review
          htmlContent={editorValRef.current}
          type={'user'}
          item={{ ...comment, created_at: Timestamp.now(), id: userId + userName, content: editorValRef.current }}
        />
      )}
      <div className={twMerge('rounded-10 border-blue pt-12 px-[5.97%] pb-9 bg-darkBlue-5', className)}>
        {!showPreview && (
          <>
            <div className={'flex items-center gap-5 md:gap-9'}>
              <div className={'w-[25.54%] aspect-square rounded-full overflow-hidden md:w-[120px]'}>
                {userImg && <img src={userImg} alt={userName} className={'w-full'} />}
                {userImg || <AbsentImg className={'h-full'} />}
              </div>
              <div>
                <p className={'font-q-700 text-25 md:text-3xl md:mb-2.5'}>{userName}</p>
                <p className={'font-q-500 text-15md:text-18 '}>Мой профиль</p>
              </div>
            </div>
            <div className={'mt-5 mb-8 md:mt-9 md:mb-[27px]'}>
              <Editor getContent={val => (editorValRef.current = val)} initialContentState={editorValRef.current} />
            </div>
          </>
        )}

        <div className={'flex flex-col items-center gap-[17px] md:flex-row md:gap-[24px] md:items-stretch'}>
          <Button
            variant={'transparent'}
            onClick={() => setShowPreview(prev => !prev)}
            disabled={!editorValRef.current}
          >
            {showPreview ? 'Вернуться к редактированию' : 'Предварительный просмотр'}
          </Button>
          <Button variant={'yellow'} onClick={() => sendMessage(editorValRef.current)}>
            Отправить
          </Button>
        </div>
      </div>
    </>
  )
}
