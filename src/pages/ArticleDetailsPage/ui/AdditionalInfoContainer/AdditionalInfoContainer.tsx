import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit } from '@/shared/const'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'

interface AdditionalInfoContainerProps {
  className?: string
}

export const AdditionalInfoContainer: React.FC<AdditionalInfoContainerProps> =
  memo((props: AdditionalInfoContainerProps) => {
    const { className } = props
    const article = useSelector(getArticleDetailsData)
    const navigate = useNavigate()

    const onEdit = React.useCallback(() => {
      navigate(getRouteArticleEdit(article?.id ?? '0'))
    }, [article?.id, navigate])

    if (!article) {
      return null
    }

    return (
      <Card className={className}>
        <ArticleAdditionalInfo
          author={article.user}
          createdAt={article.createdAt}
          views={article.views}
          onEdit={onEdit}
        />
      </Card>
    )
  })
