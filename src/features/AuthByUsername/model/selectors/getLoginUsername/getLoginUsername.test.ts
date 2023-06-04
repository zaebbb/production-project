import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

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
