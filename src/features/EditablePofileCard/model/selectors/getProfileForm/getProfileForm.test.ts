import { getProfileForm } from './getProfileForm'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('Тест getProfileForm.test', () => {
  test(
    'Проверка на возвращаемое значение',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          form: {
            age: 10,
          },
        },
      }

      expect(getProfileForm(state as StateSchema)).toEqual({ age: 10 })
    }
  )

  test(
    'Проверка на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    }
  )
})
