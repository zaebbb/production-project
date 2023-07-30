import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { HStack } from 'shared/ui/Stack'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import cls from './EditableProfileCardHeader.module.scss'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader: React.FC<EditableProfileCardHeaderProps> =
  memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const readonly = useSelector(getProfileReadonly)

    const onEdit = React.useCallback(() => {
      dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = React.useCallback(() => {
      dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = React.useCallback(() => {
      dispatch(updateProfileData())
    }, [dispatch])

    return (
      <HStack
        align={'center'}
        justify={'space-between'}
        className={classNames(cls.EditableProfileCardHeader, {}, [className])}
      >
        <Text title={t('profile')} />
        {canEdit && (
          <HStack gap={16}>
            {readonly ? (
              <Button
                theme={ThemeButton.OUTLINE}
                onClick={onEdit}
              >
                {t('profile-edit')}
              </Button>
            ) : (
              <>
                <Button
                  theme={ThemeButton.OUTLINE}
                  onClick={onCancelEdit}
                >
                  {t('profile-escape')}
                </Button>
                <Button
                  theme={ThemeButton.OUTLINE}
                  onClick={onSave}
                >
                  {t('profile-save')}
                </Button>
              </>
            )}
          </HStack>
        )}
      </HStack>
    )
  })
