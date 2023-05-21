import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface SidebarProps {
  className?: string
  lang?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapse, setCollapse] = React.useState<boolean>(false)
  const { className, lang } = props
  const { t } = useTranslation(lang)

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
        <AppLink
          to={RoutePath.main}
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon
            className={cls.icon}
          />
          <span
            className={cls.link}
          >
            {t('link-main')}
          </span>

        </AppLink>

        <AppLink
          to={RoutePath.about}
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon
            className={cls.icon}
          />
          <span
            className={cls.link}
          >
            {t('link-about')}
          </span>
        </AppLink>
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
}
