import React, { memo } from 'react'
import {
  FetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { articlesPageReducer } from '../../model/slice/articlePageSlice'
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList'
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter'
import { FilterContainer } from '../FilterContainer/FilterContainer'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'
import cls from './ArticlesPage.module.scss'
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting'
import { StickyLayout } from '@/shared/layout/StickyLayout/StickyLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()

  const onLoadNextPage = React.useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(FetchNextArticlePage())
    }
  }, [dispatch])

  const content = <ToggleFeatures
    feature={'isAppRedesigned'}
    off={
      <Page
        data-testid={'ArticlesPage'}
        onScrollEnd={onLoadNextPage}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlePageFilter />
        <ArticleInfinityList className={cls.list} />
        <ArticlePageGreeting />
      </Page>
    }
    on={
      <StickyLayout
        content={
          <Page
            data-testid={'ArticlesPage'}
            onScrollEnd={onLoadNextPage}
            className={classNames('', {}, [className])}
          >
            <ArticleInfinityList className={cls.list} />
            <ArticlePageGreeting />
          </Page>
        }
        left={<ViewSelectorContainer />}
        right={<FilterContainer />}
      />
    }
  />

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
