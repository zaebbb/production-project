import React, { memo } from 'react'
import { Country } from '../../model/types/country'
import { Select } from 'shared/ui/Select/Select'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Country) => void
  label?: string
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Armenia, content: Country.Armenia },
]

export const CountrySelect: React.FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
  const {
    className,
    readonly,
    value,
    onChange,
    label,
  } = props

  const onChangeHandler = React.useCallback((value: string) => {
    onChange?.(value as Country)
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
