import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui/Page/Page'

interface MainPageProps {
  className?: string
  lang?: string
}

const MainPage: React.FC<MainPageProps> = (props) => {
  const { lang } = props
  const { t } = useTranslation(lang)

  return (
    <Page>
      {t('title')}
    </Page>
  )
}

export default MainPage
