import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import ArrowSidebar from '@/shared/assets/icons/redesigned/ArrowSidebar.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated, SizeButton, ThemeButton } from '@/shared/ui/deprecated/Button'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { VStack } from '@/shared/ui/redesigned/Stack'

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
          <ButtonDeprecated
            data-testid={'sidebar-toggle'}
            type={'button'}
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ThemeButton.BACKGROUND_INVERTED}
            size={SizeButton.L}
            square
          >
            {collapse ? '>' : '<'}
          </ButtonDeprecated>

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
                [cls.collapsedRedesigned]: collapse,
              },
              [className]
            )
          }
        >
          <AppLogo className={cls.appLogo} size={!collapse ? 50 : 30} />

          <Icon
            Svg={ArrowSidebar}
            clickable
            onClick={onToggle}
            className={cls.collapseBtn}
            width={12}
            height={12}
          />

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
    />
  )
})
