import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
} from '../../selectors/articlePageSelectors'
import { articlesPageActions } from '../../slice/articlePageSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'
import { type ThunkConfig } from '@/app/providers/StoreProvider'

export const FetchNextArticlePage =
  createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/FetchNextArticlePage',
    (
      _,
      thunkApi
    ) => {
      const {
        getState,
        dispatch,
      } = thunkApi

      const hasMore = getArticlePageHasMore(getState())
      const isLoading = getArticlePageIsLoading(getState())
      const page = getArticlePageNum(getState())

      if (hasMore && !isLoading) {
        dispatch(articlesPageActions.setPage(page + 1))
        dispatch(fetchArticles({}))
      }
    }
  )
