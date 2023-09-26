import React, { memo } from 'react'
import { type ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'
import NotFoundImage from '@/shared/assets/images/not-found.png'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppImages as AppImagesDeprecated } from '@/shared/ui/deprecated/AppImages'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { AppImages } from '@/shared/ui/redesigned/AppImages'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> =
  memo((props: ArticleImageBlockComponentProps) => {
    const {
      className,
      block,
    } = props

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <AppImagesDeprecated
              src={block.src}
              alt={block.title}
              className={cls.img}
              fallback={<SkeletonDeprecated width={'100%'} height={200} />}
              errorFallback={NotFoundImage}
            />
            {block.title && (
              <TextDeprecated text={block.title} align={TextAlign.CENTER} />
            )}
          </div>
        }
        on={
          <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <AppImages
              src={block.src}
              alt={block.title}
              className={cls.img}
              fallback={<Skeleton width={'100%'} height={200} />}
              errorFallback={NotFoundImage}
            />
            {block.title && (
              <Text text={block.title} align={'center'} />
            )}
          </div>
        }
      />
    )
  })
