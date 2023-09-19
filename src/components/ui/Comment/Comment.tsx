import { useRef, useState } from 'react'
import { Editor } from '../Editor/Editor'
import { AbsentImg } from '../AbsentImg/AbsentImg'
import { Button } from '../Button/Button'
import { Review } from '../Review/Review'
import type { IUserReview } from '../../../api/types/responses'

interface CommentProps extends Pick<IUserReview, 'movie' | 'userId'> {
  userImg: string
  userName: string
}

export const Comment = ({ userId, userImg, userName, movie }: CommentProps) => {
  const editorValRef = useRef<string>('')
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      {showPreview && (
        <Review
          htmlContent={editorValRef.current}
          type={'user'}
          item={{
            id: userId + userName,
            userId: userId,
            created_at: new Date(),
            movie,
            content: '',
            author_details: {
              name: userName,
              username: userName,
              avatar_path: userImg,
              rating: 0,
            },
          }}
        />
      )}
      <div className={'rounded-10 border-blue pt-12 px-[5.97%] pb-9 bg-darkBlue-5'}>
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
          <Button variant={'yellow'}>Отправить</Button>
        </div>
      </div>
    </>
  )
}
