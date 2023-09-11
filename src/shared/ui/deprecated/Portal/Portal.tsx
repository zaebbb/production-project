import type React from 'react'
import { createPortal } from 'react-dom'
interface PortalProps {
  children?: React.ReactNode
  element?: HTMLElement
}

/**
 * Данный компонент устарел, используйте новый UI-kit
 * @deprecated
 * */
export const Portal: React.FC<PortalProps> = (props) => {
  const {
    children,
    element = document.body,
  } = props

  return createPortal(children, element)
}
