import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('Тест getProfileError.test', () => {
  test(
    'Проверка на возвращаемое значение',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          error: 'error',
        },
      }

      expect(getProfileError(state as StateSchema)).toEqual('error')
    }
  )

  test(
    'Проверка на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getProfileError(state as StateSchema)).toEqual(undefined)
    }
  )
})
