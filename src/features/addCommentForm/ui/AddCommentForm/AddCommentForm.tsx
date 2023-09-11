import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Input } from '@/shared/ui/deprecated/Input'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm: React.FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
  const {
    className,
    onSendComment,
  } = props
  const { t } = useTranslation('comment')
  const text = useSelector(getAddCommentFormText)
  const isLoading = useSelector(getAddCommentFormIsLoading)
  const dispatch = useAppDispatch()

  const onCommentTextChange = React.useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = React.useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        data-testid={'AddCommentForm'}
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          className={cls.input}
          placeholder={t('input-placeholder')}
          value={text}
          onChange={onCommentTextChange}
          readonly={isLoading}
          data-testid={'add-comment-form-input'}
        />

        <Button
          onClick={onSendHandler}
          theme={ThemeButton.OUTLINE}
          data-testid={'add-comment-form-button'}
        >
          {
            isLoading ? t('load-comment') : t('add-comment')
          }
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm
