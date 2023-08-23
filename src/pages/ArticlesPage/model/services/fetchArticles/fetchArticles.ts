import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from '../../selectors/articlePageSelectors'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article, ArticleType } from '@/entities/Article'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesProps {
  replace?: boolean
}

export const fetchArticles =
  createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (
      props,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
        getState,
      } = thunkApi

      const page = getArticlePageNum(getState())
      const limit = getArticlePageLimit(getState())
      const order = getArticlePageOrder(getState())
      const sort = getArticlePageSort(getState())
      const search = getArticlePageSearch(getState())
      const type = getArticlePageType(getState())

      try {
        addQueryParams({
          order,
          sort,
          search,
          type,
        })

        const response = await extra.api.get<Article[]>(
          '/articles', {
            params: {
              _expand: 'user',
              _page: page,
              _limit: limit,
              _sort: sort,
              _order: order,
              q: search,
              type: type === ArticleType.ALL ? undefined : type,
            },
          }
        )

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
