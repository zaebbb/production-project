import React, { memo } from 'react'
import { Card } from '../Card'
import { Flex, type FlexDirection } from '../Stack/ui/Flex/Flex'
import cls from './Tabs.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export interface TabItem {
  value: string
  content: React.ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
  direction?: FlexDirection
}

export const Tabs: React.FC<TabsProps> = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
    direction = 'row',
  } = props

  const onTabClickHandler = React.useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <Flex
      direction={direction}
      align={'start'}
      gap={8}
      className={classNames(cls.Tabs, {}, [className])}
    >
      {tabs.map(tab => {
        const isSelected = tab.value === value

        return (
          <Card
            key={tab.value}
            className={cls.tab}
            variant={isSelected ? 'light' : 'normal'}
            onClick={onTabClickHandler(tab)}
            borderRadius={'round'}
          >
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  )
})
