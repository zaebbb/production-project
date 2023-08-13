import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'
import cls from './RatingCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text/Text'
import { Input } from '@/shared/ui/Input/Input'
import { Card } from '@/widgets/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard: React.FC<RatingCardProps> = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props
  const { t } = useTranslation()

  const [isOpenFeedback, setIsOpenFeedback] = React.useState(false)
  const [starsCount, setStarsCount] = React.useState(rate)
  const [feedback, setFeedback] = React.useState('')

  const onSelectStars = React.useCallback((selectStarsCount: number) => {
    setStarsCount(selectStarsCount)

    if (hasFeedback) {
      setIsOpenFeedback(true)
    } else {
      onAccept?.(selectStarsCount)
    }
  }, [hasFeedback, onAccept])

  const acceptHandler = React.useCallback(() => {
    setIsOpenFeedback(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = React.useCallback(() => {
    setIsOpenFeedback(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const contentFeedback = (
    <>
      <Text title={feedbackTitle} />
      <Input
        placeholder={t('your-feedback')}
        onChange={setFeedback}
        value={feedback}
      />
    </>
  )

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align={'center'} gap={16}>
        <Text title={title} />
        <StarRating size={50} onSelect={onSelectStars} selectedStars={rate} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isOpenFeedback}>
          <VStack gap={16}>
            {contentFeedback}
            <HStack gap={16} justify={'end'}>
              <Button
                onClick={acceptHandler}
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.sendBtn}
              >
                {t('send-rating')}
              </Button>

              <Button
                onClick={cancelHandler}
                theme={ThemeButton.OUTLINE}
              >
                {t('close-rating-modal')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer>
          <VStack gap={16}>
            {contentFeedback}
            <Button
              onClick={acceptHandler}
              theme={ThemeButton.OUTLINE}
              fullWidth
            >
              {t('send-rating')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})
