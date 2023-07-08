import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'

interface SidebarProps {
  className?: string
  lang?: string
}

export const Sidebar: React.FC<SidebarProps> = memo((props: SidebarProps) => {
  const [collapse, setCollapse] = React.useState<boolean>(false)
  const { className, lang = '' } = props
  const sidebarItems = useSelector(getSidebarItems)

  const onToggle = (): void => {
    setCollapse(prev => !prev)
  }

  return (
    <div
      data-testid={'sidebar'}
      className={
        classNames(cls.Sidebar,
          {
            [cls.collapsed]: collapse,
          },
          [className]
        )
      }
    >
      <Button
        data-testid={'sidebar-toggle'}
        type={'button'}
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
        square
      >
        {collapse ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {sidebarItems.map((item: SidebarItemType) => (
          <SidebarItem
            key={item.path}
            item={item}
            lang={lang}
            collapsed={collapse}
          />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          lang={lang}
          short={collapse}
        />
      </div>
    </div>
  )
})
