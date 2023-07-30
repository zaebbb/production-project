import { type CounterSchema } from '../types/counterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('Тест counterSlice.test', () => {
  test(
    'Тестирование функции increment',
    () => {
      const state: CounterSchema = {
        value: 5,
      }

      expect(
        counterReducer(
          state,
          counterActions.increment()
        )
      ).toEqual({
        value: 6,
      })
    }
  )

  test(
    'Тестирование функции decrement',
    () => {
      const state: CounterSchema = {
        value: 5,
      }

      expect(
        counterReducer(
          state,
          counterActions.decrement()
        )
      ).toEqual({
        value: 4,
      })
    }
  )

  test(
    'Тестирование работы без передаваемого элемента state',
    () => {
      expect(
        counterReducer(
          undefined,
          counterActions.decrement()
        )
      ).toEqual({
        value: -1,
      })
    }
  )
})
