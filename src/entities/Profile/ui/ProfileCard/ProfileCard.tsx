import React from 'react'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'
import { ProfileCardSkeleton } from './ProfileCard.skeleton'
import { type Country, CountrySelect } from '@/entities/Country'
import { type Currency, CurrencySelect } from '@/entities/Currency'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { HStack as HStackRedesigned, VStack as VStackRedesigned } from '@/shared/ui/Stack'
import { Avatar as AvatarRedesigned } from '@/shared/ui/deprecated/Avatar'
import { Input as InputRedesigned } from '@/shared/ui/deprecated/Input'
import { Loader as LoaderRedesigned } from '@/shared/ui/deprecated/Loader'
import { Text as TextRedesigned, TextTheme } from '@/shared/ui/deprecated/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <HStackRedesigned
            align={'center'}
            justify={'center'}
            className={classNames(cls.ProfileCard, mods, [className, cls.loading])}
          >
            <LoaderRedesigned />
          </HStackRedesigned>
        }
        on={
          <ProfileCardSkeleton />
        }
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
            <TextRedesigned
              theme={TextTheme.ERROR}
              title={t('error-load-data')}
              text={t('please-reload-page')}
              data-testid={'profile-card-error'}
            />
          </div>
        }
        on={
          <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
            <Text
              variant={'error'}
              title={t('error-load-data')}
              text={t('please-reload-page')}
              data-testid={'profile-card-error'}
              align={'center'}
            />
          </div>
        }
      />
    )
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <VStackRedesigned gap={8} className={classNames(cls.ProfileCard, mods, [className])}>
          {data?.avatar && <AvatarRedesigned src={data?.avatar} />}

          <InputRedesigned
            value={data?.first}
            placeholder={t('profile-input-firstname')}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
            data-testid={'profile-card-firstname'}
          />
          <InputRedesigned
            value={data?.lastname}
            placeholder={t('profile-input-lastname')}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
            data-testid={'profile-card-lastname'}
          />
          <InputRedesigned
            value={data?.age}
            placeholder={t('profile-input-age')}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
            type={'number'}
            data-testid={'profile-card-age'}
          />
          <InputRedesigned
            value={data?.city}
            placeholder={t('profile-input-city')}
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
            data-testid={'profile-card-city'}
          />
          <InputRedesigned
            value={data?.username}
            placeholder={t('profile-input-username')}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
            data-testid={'profile-card-username'}
          />
          <InputRedesigned
            value={data?.avatar}
            placeholder={t('profile-input-avatar')}
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
            data-testid={'profile-card-avatar'}
          />
          <CurrencySelect
            className={cls.input}
            value={data?.currency}
            onChange={onChangeCurrency}
            label={t('profile-input-currency')}
            readonly={readonly}
            data-testid={'profile-card-currency'}
          />
          <CountrySelect
            className={cls.input}
            value={data?.country}
            onChange={onChangeCountry}
            label={t('profile-input-country')}
            readonly={readonly}
            data-testid={'profile-card-country'}
          />
        </VStackRedesigned>
      }
      on={
        <Card
          padding={'24'}
          isMax
          className={classNames('', {}, [className])}
        >
          <VStack gap={32}>
            {
              data?.avatar && (
                <HStack align={'center'} justify={'center'}>
                  <Avatar size={120} src={data?.avatar} />
                </HStack>
              )
            }

            <HStack gap={24} isMax>
              <VStack gap={16} isMax>
                <Input
                  value={data?.first}
                  label={t('profile-input-firstname')}
                  onChange={onChangeFirstname}
                  readonly={readonly}
                  data-testid={'profile-card-firstname'}
                />
                <Input
                  value={data?.lastname}
                  label={t('profile-input-lastname')}
                  onChange={onChangeLastname}
                  readonly={readonly}
                  data-testid={'profile-card-lastname'}
                />
                <Input
                  value={data?.age}
                  label={t('profile-input-age')}
                  onChange={onChangeAge}
                  readonly={readonly}
                  type={'number'}
                  data-testid={'profile-card-age'}
                />
                <Input
                  value={data?.city}
                  label={t('profile-input-city')}
                  onChange={onChangeCity}
                  readonly={readonly}
                  data-testid={'profile-card-city'}
                />
              </VStack>
              <VStack gap={16} isMax>
                <Input
                  value={data?.username}
                  label={t('profile-input-username')}
                  onChange={onChangeUsername}
                  readonly={readonly}
                  data-testid={'profile-card-username'}
                />
                <Input
                  value={data?.avatar}
                  label={t('profile-input-avatar')}
                  onChange={onChangeAvatar}
                  readonly={readonly}
                  data-testid={'profile-card-avatar'}
                />
                <CurrencySelect
                  value={data?.currency}
                  onChange={onChangeCurrency}
                  label={t('profile-input-currency')}
                  readonly={readonly}
                  data-testid={'profile-card-currency'}
                />
                <CountrySelect
                  value={data?.country}
                  onChange={onChangeCountry}
                  label={t('profile-input-country')}
                  readonly={readonly}
                  data-testid={'profile-card-country'}
                />
              </VStack>
            </HStack>
          </VStack>
        </Card>
      }
    />
  )
}
