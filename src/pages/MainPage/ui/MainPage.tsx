import React from 'react'
import { useTranslation } from 'react-i18next'

interface MainPageProps {
  className?: string
  lang?: string
}

const MainPage: React.FC<MainPageProps> = (props) => {
  const { lang } = props
  const { t } = useTranslation(lang)

  return (
    <div>
      {t('title')}
    </div>
  )
}

export default MainPage
