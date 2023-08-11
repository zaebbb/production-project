import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

interface AboutPageProps {
  className?: string
  lang?: string
}

const AboutPage: React.FC<AboutPageProps> = (props) => {
  const { lang } = props
  const { t } = useTranslation(lang)

  return (
    <Page>
      {t('title')}
    </Page>
  )
}

export default AboutPage
