import React, { memo } from 'react'
import { ArticleView } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import { Card as CardDeprecated } from '@/shared/ui/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: React.FC<ArticleListItemSkeletonProps> =
  memo((props: ArticleListItemSkeletonProps) => {
    const {
      className,
      view,
    } = props

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => cls.ArticleListItem,
      on: () => cls.ArticleListItemRedesigned,
    })

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => SkeletonDeprecated,
      on: () => SkeletonRedesigned,
    })

    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => CardDeprecated,
      on: () => CardRedesigned,
    })

    if (view === ArticleView.BIG) {
      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton width={30} height={30} border={'50%'} />
              <Skeleton width={150} height={16} className={cls.username} />
              <Skeleton width={150} height={16} className={cls.date} />
            </div>

            <Skeleton width={250} height={24} className={cls.title} />
            <Skeleton width={130} height={16} className={cls.types} />

            <Skeleton height={200} className={cls.img} />

            <div className={cls.footer}>
              <Skeleton width={200} height={40} />
              <Skeleton width={150} height={16} className={cls.views} />
            </div>
          </Card>
        </div>
      )
    }

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>

          <div className={cls.infoWrapper}>
            <Skeleton width={200} height={70} className={cls.types} />
          </div>

          <div className={cls.infoWrapper}>
            <Skeleton width={250} height={16} className={cls.types} />
          </div>

          <Skeleton
            width={200}
            height={16}
            className={cls.title}
          />
        </Card>
      </div>
    )
  })
