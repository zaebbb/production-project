import React, { memo } from 'react'
import ArrowTopIcon from '@/shared/assets/icons/redesigned/ArrowScrollTop.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> =
  memo((props: ScrollToTopButtonProps) => {
    const { className } = props

    const onClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    return (
      <Icon
        width={32}
        height={32}
        clickable
        onClick={onClick}
        className={className}
        Svg={ArrowTopIcon}
      />
    )
  })
