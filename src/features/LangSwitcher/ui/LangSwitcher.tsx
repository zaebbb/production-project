import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'

interface LangSwitcherProps {
  className?: string
  lang?: string
  short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <ButtonDeprecated
          onClick={toggle}
          className={classNames(
            '',
            {},
            [className]
          )}
        >
          {t(!short ? 'language' : 'language-short')}
        </ButtonDeprecated>
      }
      on={
        <Button
          onClick={toggle}
          className={classNames(
            '',
            {},
            [className]
          )}
          variant={'clear'}
        >
          {t(!short ? 'language' : 'language-short')}
        </Button>
      }
    />
  )
})
