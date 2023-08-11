import { getLoginUsername } from './getLoginUsername'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getLoginUsername.test', () => {
  test(
    'Тест возвращаемого значения',
    () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          username: '123',
        },
      }

      expect(getLoginUsername(state as StateSchema)).toEqual('123')
    }
  )

  test(
    'Тест возвращаемого значения при пустом значении',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getLoginUsername(state as StateSchema)).toEqual('')
    }
  )
})
