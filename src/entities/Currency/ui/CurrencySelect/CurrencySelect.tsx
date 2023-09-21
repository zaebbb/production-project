import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/currency'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/Popups/ui/ListBox/ListBox'
import { ListBox } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Currency) => void
  label?: string
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
  const {
    className,
    readonly,
    value,
    onChange,
    label,
  } = props
  const { t } = useTranslation()

  const onChangeHandler = React.useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <ListBoxDeprecated
          className={className}
          label={label}
          value={value}
          readonly={readonly}
          onChange={onChangeHandler}
          options={options}
          direction={'top-left'}
        />
      }
      on={
        <ListBox
          className={className}
          label={label}
          value={value}
          readonly={readonly}
          onChange={onChangeHandler}
          defaultValue={t('profile-change-currency')}
          options={options}
          direction={'top-left'}
        />
      }
    />
  )
})
