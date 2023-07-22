import { Currency } from 'entities/Currency'
import { type Profile, ValidateProfileError } from '../../types/profile'
import { Country } from 'entities/Country'
import { validateProfileData } from './validateProfileData'

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

describe('Тест validateProfileData.test', () => {
  test(
    'Успешная валидация',
    () => {
      const result = validateProfileData(data)

      expect(result).toEqual([])
    }
  )

  test(
    'Ошибка Lastname и Firstname',
    () => {
      const result = validateProfileData({
        ...data,
        first: '',
        lastname: '',
      })

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_FIRSTNAME,
        ValidateProfileError.INCORRECT_LASTNAME,
      ])
    }
  )

  test(
    'Ошибка Age',
    () => {
      const result = validateProfileData({
        ...data,
        age: NaN,
      })

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_AGE,
      ])
    }
  )

  test(
    'Ошибка Currency',
    () => {
      const result = validateProfileData({
        ...data,
        currency: undefined,
      })

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_CURRENCY,
      ])
    }
  )

  test(
    'Ошибки',
    () => {
      const result = validateProfileData({})

      expect(result).toEqual([
        ValidateProfileError.INCORRECT_FIRSTNAME,
        ValidateProfileError.INCORRECT_LASTNAME,
        ValidateProfileError.INCORRECT_USERNAME,
        ValidateProfileError.INCORRECT_CITY,
        ValidateProfileError.INCORRECT_AVATAR,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
        ValidateProfileError.INCORRECT_CURRENCY,
      ])
    }
  )

  test(
    'Нет данных',
    () => {
      const result = validateProfileData()

      expect(result).toEqual([
        ValidateProfileError.NO_DATA,
      ])
    }
  )
})
