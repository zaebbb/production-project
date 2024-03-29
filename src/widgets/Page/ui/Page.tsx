import React, { memo, type MutableRefObject, type UIEvent } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import cls from './Page.module.scss'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { getSaveScrollPath, saveScrollActions } from '@/features/ScrollSave'
import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { type TestProps } from '@/shared/types/tests'

interface PageProps extends TestProps {
  className?: string
  children: React.ReactNode
  onScrollEnd?: () => void
  isSaveScroll?: boolean
}

export const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd,
    isSaveScroll = true,
  } = props
  const wrapperRef = React.useRef() as MutableRefObject<HTMLElement>
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector(
    (state: StateSchema) => getSaveScrollPath(state, pathname)
  )

  useInfinityScroll({
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
    triggerRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (isSaveScroll) {
      dispatch(saveScrollActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }))
    }
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(toggleFeatures({
        name: 'isAppRedesigned',
        off: () => cls.Page,
        on: () => cls.PageRedesigned,
      }), {}, [className])}
      onScroll={onScroll}
      data-testid={props['data-testid']}
    >
      {children}
      {
        onScrollEnd && isSaveScroll ? <div className={cls.trigger} ref={triggerRef} /> : null
      }
    </section>
  )
})
