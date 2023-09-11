import React, { memo } from 'react'
import cls from './MainLayout.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface MainLayoutProps {
  className?: string
  Header?: React.ReactElement
  Content?: React.ReactElement
  Sidebar?: React.ReactElement
  Toolbar?: React.ReactElement
}

export const MainLayout: React.FC<MainLayoutProps> = memo((props: MainLayoutProps) => {
  const {
    className,
    Header,
    Content,
    Sidebar,
    Toolbar,
  } = props

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.SidebarLayout}>
        {Sidebar}
      </div>
      <div className={cls.ContentLayout}>
        {Content}
      </div>
      <div className={cls.RightbarLayout}>
        <div className={cls.HeaderLayout}>{Header}</div>
        <div className={cls.ToolbarLayout}>{Toolbar}</div>
      </div>
    </div>
  )
})
