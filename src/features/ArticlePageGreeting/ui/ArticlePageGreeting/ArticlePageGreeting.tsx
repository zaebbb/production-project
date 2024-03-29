import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from '@/shared/ui/deprecated/Text'
import { Modal } from '@/shared/ui/redesigned/Modal'

interface ArticlePageGreetingProps {
  className?: string
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
  const { className } = props
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)
  const dispatch = useAppDispatch()

  const {
    isArticlesPageHasOpened,
  } = useJsonSettings()

  React.useEffect(() => {
    if (!isArticlesPageHasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({
        isArticlesPageHasOpened: true,
      }))
    }
  }, [dispatch, isArticlesPageHasOpened])

  const onClose = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <Modal className={className} isOpen={isOpen} lazy onClose={onClose}>
      <Text
        title={t('article-modal-first-visit-title')}
        text={t('article-modal-first-visit-text')}
      />
    </Modal>
  )
})
