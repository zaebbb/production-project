import { loginReducer, type LoginSchema } from 'features/AuthByUsername'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'

describe('Тест loginSlice.test', () => {
  test(
    'Тестирование добавления username',
    () => {
      const state: DeepPartial<LoginSchema> = {
        username: '123',
      }

      expect(loginReducer(
        state as LoginSchema,
        loginActions.setUsername('123123')
      )).toEqual({ username: '123123' })
    }
  )

  test(
    'Тестирование добавления password',
    () => {
      const state: DeepPartial<LoginSchema> = {
        password: '123',
      }

      expect(loginReducer(
        state as LoginSchema,
        loginActions.setPassword('123123')
      )).toEqual({ password: '123123' })
    }
  )
})
