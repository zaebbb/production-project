import React, { memo } from 'react'
import { Currency } from '../../model/types/currency'
import { Select } from 'shared/ui/Select/Select'

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

  const onChangeHandler = React.useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      className={className}
      label={label}
      value={value}
      readonly={readonly}
      onChange={onChangeHandler}
      options={options}
    />
  )
})
