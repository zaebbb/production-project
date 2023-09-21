import React, { memo } from 'react'
import { Country } from '../../model/types/country'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox as ListBoxRedesigned } from '@/shared/ui/Popups/ui/ListBox/ListBox'
import { ListBox } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox'

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <ListBoxRedesigned
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
          options={options}
          direction={'top-left'}
        />
      }
    />
  )
})
