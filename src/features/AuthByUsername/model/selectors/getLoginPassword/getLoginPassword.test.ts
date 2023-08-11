import { getLoginPassword } from './getLoginPassword'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getLoginPassword.test', () => {
  test(
    'Тест возвращаемого значения',
    () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          password: '123',
        },
      }

      expect(getLoginPassword(state as StateSchema)).toEqual('123')
    }
  )

  test(
    'Тест возвращаемого значения при пустом значении',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getLoginPassword(state as StateSchema)).toEqual('')
    }
  )
})
