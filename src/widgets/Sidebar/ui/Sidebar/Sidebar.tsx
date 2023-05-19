import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import {Button} from "shared/ui/Button/Button";

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
      >
        {t('toggle-sidebar')}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          className={cls.lang}
          lang={lang}
        />
      </div>
    </div>
  )
}
