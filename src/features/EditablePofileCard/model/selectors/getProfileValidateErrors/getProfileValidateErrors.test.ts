import { type StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/EditablePofileCardSchema'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('Тест getProfileValidateErrors.test', () => {
  test(
    'Проверка на возвращаемое значение',
    () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          validate: [
            ValidateProfileError.NO_DATA,
          ],
        },
      }

      expect(getProfileValidateErrors(state as StateSchema)).toEqual([
        ValidateProfileError.NO_DATA,
      ])
    }
  )

  test(
    'Проверка на пустое значение',
    () => {
      const state: DeepPartial<StateSchema> = {}

      expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    }
  )
})
