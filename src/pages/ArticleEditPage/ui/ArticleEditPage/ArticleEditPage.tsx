import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import cls from './ArticleEditPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { Page } from '@/widgets/Page'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage: React.FC<ArticleEditPageProps> =
  memo((props: ArticleEditPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
      <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
        <Text
          size={TextSize.L}
          title={isEdit ? `${t('edit-article')} ${id ?? ''}` : t('create-article')}
        />
      </Page>
    )
  })

export default ArticleEditPage
