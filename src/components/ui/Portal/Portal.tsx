import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  container?: HTMLElement
}
export const Portal = ({ children, container = document.body }: PropsWithChildren<PortalProps>) => {
  return createPortal(children, container)
}
