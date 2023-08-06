import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { VStack } from 'shared/ui/Stack'
import { TextSize, Text } from 'shared/ui/Text/Text'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Page } from 'widgets/Page'

interface ForbiddenPageProps {
  className?: string
}

const ForbiddenPage: React.FC<ForbiddenPageProps> = memo((props: ForbiddenPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap={16}>
        <Text
          size={TextSize.L}
          title={t('access-denied')}
        />
        <AppLink to={RoutePath.main}>
          <Button
            theme={ThemeButton.OUTLINE}
          >
            {t('to-main-page')}
          </Button>
        </AppLink>
      </VStack>
    </Page>
  )
})

export default ForbiddenPage