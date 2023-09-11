import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack } from '@/shared/ui/Stack'
import { AppLogo } from '@/shared/ui/deprecated/AppLogo'
import { Button, SizeButton, ThemeButton } from '@/shared/ui/deprecated/Button'

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <aside
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

          <nav>
            <VStack className={cls.items} gap={8}>
              {sidebarItems.map((item: SidebarItemType) => (
                <SidebarItem
                  key={item.path}
                  item={item}
                  lang={lang}
                  collapsed={collapse}
                />
              ))}
            </VStack>
          </nav>

          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher
              className={cls.lang}
              lang={lang}
              short={collapse}
            />
          </div>
        </aside>
      }
      on={
        <aside
          data-testid={'sidebar'}
          className={
            classNames(cls.SidebarRedesigned,
              {
                [cls.collapsed]: collapse,
              },
              [className]
            )
          }
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
    />
  )
})
