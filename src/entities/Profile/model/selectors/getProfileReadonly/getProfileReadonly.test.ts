import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('Тест getProfileReadonly.test', () => {
  test(
    'Проверка на возвращаемое значение',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          readonly: true,
        },
      }

      expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    }
  )

  test(
    'Проверка на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getProfileReadonly(state as StateSchema)).toEqual(false)
    }
  )
})
