import { getProfileIsLoading } from './getProfileIsLoading'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getProfileIsLoading.test', () => {
  test(
    'Проверка на возвращаемое значение',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          isLoading: true,
        },
      }

      expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    }
  )

  test(
    'Проверка на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
    }
  )
})
