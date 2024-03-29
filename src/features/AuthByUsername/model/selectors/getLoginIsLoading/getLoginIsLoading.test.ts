import { getLoginIsLoading } from './getLoginIsLoading'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getLoginIsLoading.test', () => {
  test(
    'Тест возвращаемого значения',
    () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          isLoading: true,
        },
      }

      expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    }
  )

  test(
    'Тест возвращаемого значения при пустом значении',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    }
  )
})
