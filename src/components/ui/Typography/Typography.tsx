import { type FC, ReactElement, ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames'
import cls from './Typography.module.scss'

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type HeadingType = HTMLAttributes<HTMLHeadingElement>
export type ParagraphType = HTMLAttributes<HTMLParagraphElement>
export type SpanType = HTMLAttributes<HTMLSpanElement>

export enum TypographyTypes {
  _TITLE = 'title',
  _P = 'paragraph',
  SUBTITLE = 'subtitle',
}

export type TypographyProps = (HeadingType | ParagraphType | SpanType) & {
  className?: string
  variant?: TagType
  children: ReactNode | ReactElement
  type?: TypographyTypes
}
export const Typography: FC<TypographyProps> = ({
  className,
  variant = 'p',
  type = TypographyTypes._P,
  children,
  ...props
}) => {
  const CustomTag = variant as TagType
  return (
    <CustomTag className={classnames([className], cls[type])} {...props}>
      {children}
    </CustomTag>
  )
}
