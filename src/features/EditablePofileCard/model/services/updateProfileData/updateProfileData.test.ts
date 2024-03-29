import { ValidateProfileError } from '../../types/EditablePofileCardSchema'
import { updateProfileData } from './updateProfileData'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsync/TestAsyncThunk'

const data = {
  id: '1',
  first: '123',
  lastname: 'Mihailov',
  age: 2021,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Ekb',
  username: 'admin',
  avatar: 'https://avatarko.ru/img/kartinka/14/Iron_man_13295.jpg',
}

describe('Тест fetchProfileData.test', () => {
  test(
    'Тестирование PUT запроса на выполнение',
    async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: data,
        },
      })

      thunk.api.put.mockReturnValue(Promise.resolve({ data }))

      const result = await thunk.callThunk()

      expect(thunk.api.put).toHaveBeenCalled()
      expect(result.meta.requestStatus).toBe('fulfilled')
      expect(result.payload).toEqual(data)
    }
  )

  test(
    'Тестирование PUT запроса на ошибку 403',
    async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: data,
        },
      })

      thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

      const result = await thunk.callThunk()

      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toEqual([
        ValidateProfileError.INTERNAL_SERVER_ERROR,
      ])
    }
  )

  test(
    'Тестирование PUT запроса на валидацию',
    async () => {
      const thunk = new TestAsyncThunk(updateProfileData, {
        profile: {
          form: {
            ...data,
            first: '',
          },
        },
      })

      thunk.api.put.mockReturnValue(Promise.resolve({ data }))

      const result = await thunk.callThunk()

      expect(result.meta.requestStatus).toBe('rejected')
      expect(result.payload).toEqual([
        ValidateProfileError.INCORRECT_FIRSTNAME,
      ])
    }
  )
})
