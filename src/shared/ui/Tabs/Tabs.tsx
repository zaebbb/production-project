import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from 'widgets/Card'
import { CardTheme } from 'widgets/Card/ui/Card'
import cls from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: React.ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs: React.FC<TabsProps> = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props

  const onTabClickHandler = React.useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          key={tab.value}
          className={cls.tab}
          onClick={onTabClickHandler(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
