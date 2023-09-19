import { useEffect, useState } from 'react'
import { Editor as DraftEditor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { convertFromHTML, convertToHTML } from 'draft-convert'

import BoldIcon from '../../../assets/images/editor/bold-ru.svg'
import ItalicIcon from '../../../assets/images/editor/italic-ru.svg'
import UnderIcon from '../../../assets/images/editor/underline-ru.svg'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import cls from './Editor.module.scss'

const customToolbarOptions = {
  options: ['inline'],
  inline: {
    options: ['bold', 'italic', 'underline'],
    bold: { className: cls.editor_btn, icon: BoldIcon },
    italic: { className: cls.editor_btn, icon: ItalicIcon },
    underline: { className: cls.editor_btn, icon: UnderIcon },
  },
}

interface EditorProps {
  getContent?: (context: string) => void
  initialContentState?: string
}
export const Editor = ({ getContent, initialContentState = '' }: EditorProps) => {
  const [editorState, setEditorState] = useState(() => {
    const contentState = convertFromHTML(initialContentState)
    if (contentState) {
      return EditorState.createWithContent(contentState)
    } else {
      return EditorState.createEmpty()
    }
  })

  useEffect(() => {
    const html = convertToHTML(editorState.getCurrentContent())

    getContent?.(html)
  }, [editorState])

  return (
    <DraftEditor
      editorState={editorState}
      onEditorStateChange={setEditorState}
      toolbar={customToolbarOptions}
      editorClassName={cls.editor_content}
      toolbarClassName={cls.editor_toolbar}
    />
  )
}
