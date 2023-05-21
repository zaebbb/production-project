import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
  lang?: string
  short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
  const {
    className,
    lang,
    short,
  } = props
  const { t, i18n } = useTranslation(lang)

  const toggle = (): void => {
    i18n
      .changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
      .catch(e => { console.log(e.message) })
  }

  return (
    <Button
      onClick={toggle}
      className={classNames(
        '',
        {},
        [className]
      )}
    >
      {t(!short ? 'language' : 'language-short')}
    </Button>
  )
}
