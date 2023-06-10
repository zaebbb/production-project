import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('Тест getCounterValue', () => {
  test(
    'Проверка на возвращаемое значение счетчика',
    () => {
      const state: DeepPartial<StateSchema> = {
        counter: {
          value: 5,
        },
      }
      expect(getCounterValue(state as StateSchema)).toEqual(5)
    }
  )
})
