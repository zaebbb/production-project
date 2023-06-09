import React from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { type Country, CountrySelect } from 'entities/Country'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCountry?: (country?: Country) => void
  onChangeCurrency?: (currency?: Currency) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading = false,
    error = '',
    readonly = false,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props
  const { t } = useTranslation('profile')

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, mods, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error-load-data')}
          text={t('please-reload-page')}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.info}>
        {data?.avatar && <Avatar src={data?.avatar} />}

        <Input
          value={data?.first}
          placeholder={t('profile-input-firstname')}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('profile-input-lastname')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('profile-input-age')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
          type={'number'}
        />
        <Input
          value={data?.city}
          placeholder={t('profile-input-city')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('profile-input-username')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('profile-input-avatar')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          label={t('profile-input-currency')}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          label={t('profile-input-country')}
          readonly={readonly}
        />
      </div>
    </div>
  )
}
