import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('Тест getCounter', () => {
  test(
    'Проверка на возвращаемое значение счетчика',
    () => {
      const state: DeepPartial<StateSchema> = {
        counter: {
          value: 10,
        },
      }
      expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    }
  )
})
