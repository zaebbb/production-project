import { getProfileData } from './getProfileData'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getProfileData.test', () => {
  test(
    'Проверка на возвращаемое значение',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          data: {
            age: 10,
          },
        },
      }

      expect(getProfileData(state as StateSchema)).toEqual({ age: 10 })
    }
  )

  test(
    'Проверка на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getProfileData(state as StateSchema)).toEqual(undefined)
    }
  )
})
