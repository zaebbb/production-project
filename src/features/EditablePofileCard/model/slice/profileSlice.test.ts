import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type ProfileSchema } from '../types/EditablePofileCardSchema'
import { profileActions, profileReducer } from './profileSlice'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { type Profile } from '@/entities/Profile'

const data: Profile = {
  first: '123',
  lastname: 'Mihailov',
  age: 2021,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Ekb',
  username: 'admin',
  avatar: 'https://avatarko.ru/img/kartinka/14/Iron_man_13295.jpg',
}

describe('Тест profileSlice.test', () => {
  test(
    'Тестирование setReadonly',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        readonly: false,
      }

      expect(profileReducer(
        state as ProfileSchema,
        profileActions.setReadonly(true)
      )).toEqual({ readonly: true })
    }
  )

  test(
    'Тестирование cancelEdit',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        readonly: false,
        data: {
          lastname: 'hello',
        },
        form: {},
        validate: [],
      }

      expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit()
      )).toEqual({
        readonly: true,
        data: {
          lastname: 'hello',
        },
        form: {
          lastname: 'hello',
        },
        validate: undefined,
      })
    }
  )

  test(
    'Тестирование updateProfile',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        form: {
          lastname: 'hello',
        },
      }

      expect(profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          first: 'world',
        })
      )).toEqual({
        form: {
          lastname: 'hello',
          first: 'world',
        },
      })
    }
  )

  test(
    'Тестирование обновления профиля через service updateProfileData.pending',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        isLoading: false,
        validate: [],
      }

      expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending
      )).toEqual({
        isLoading: true,
        validate: undefined,
      })
    }
  )

  test(
    'Тестирование обновления профиля через service updateProfileData.fulfilled',
    () => {
      const state: DeepPartial<ProfileSchema> = {
        isLoading: true,
        data: {
          first: 'hello',
        },
        form: {
          lastname: 'world',
        },
        readonly: false,
        validate: [],
      }

      expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '')
      )).toEqual({
        isLoading: false,
        data,
        form: data,
        readonly: true,
        validate: undefined,
      })
    }
  )
})
