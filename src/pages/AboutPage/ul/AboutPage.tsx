import React from 'react'
import { useTranslation } from 'react-i18next'

interface AboutPageProps {
  className?: string
  lang?: string
}

const AboutPage: React.FC<AboutPageProps> = (props) => {
  const { lang } = props
  const { t } = useTranslation(lang)

  return (
    <div>
      {t('title')}
    </div>
  )
}

export default AboutPage
