import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './AdminPanelPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import { TextSize, Text } from '@/shared/ui/Text/Text'

interface AdminPanelPageProps {
  className?: string
}

const AdminPanelPage: React.FC<AdminPanelPageProps> = memo((props: AdminPanelPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
      <Text size={TextSize.L} title={t('admin-page')} />
    </Page>
  )
})

export default AdminPanelPage
