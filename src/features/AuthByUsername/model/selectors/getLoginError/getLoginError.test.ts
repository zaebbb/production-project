import { getLoginError } from './getLoginError'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getLoginError.test', () => {
  test(
    'Тест возвращаемого значения',
    () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          error: 'error',
        },
      }

      expect(getLoginError(state as StateSchema)).toEqual('error')
    }
  )

  test(
    'Тест возвращаемого значения при пустом значении',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getLoginError(state as StateSchema)).toEqual('')
    }
  )
})
