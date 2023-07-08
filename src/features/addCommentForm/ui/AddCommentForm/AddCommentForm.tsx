import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './AddCommentForm.module.scss'
import { useSelector } from 'react-redux'
import {
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Input } from 'shared/ui/Input/Input'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

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
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('input-placeholder')}
          value={text}
          onChange={onCommentTextChange}
          readonly={isLoading}
        />

        <Button
          onClick={onSendHandler}
          theme={ThemeButton.OUTLINE}
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
