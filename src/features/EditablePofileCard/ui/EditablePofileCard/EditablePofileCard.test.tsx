import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { profileReducer } from '../../model/slice/profileSlice'
import { EditablePofileCard } from './EditablePofileCard'
import { type Profile } from '@/entities/Profile'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { $api } from '@/shared/api/api'

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 1,
  currency: Currency.RUB,
  city: 'Moscow',
  username: 'admin',
  country: Country.Russia,
  avatar: 'https://example.com',
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
}

describe('Тест EditablePofileCard.test', () => {
  test(
    'Тестирование нажатия кнопки редактировать',
    async () => {
      componentRender(<EditablePofileCard id={'1'} />, options)

      expect(screen.getByTestId('editable-profile-card')).toBeInTheDocument()
      await userEvent.click(screen.getByTestId('editable-profile-card-header-edit-button'))
      expect(screen.getByTestId('editable-profile-card-header-cancel-edit')).toBeInTheDocument()
    }
  )

  test(
    'При отмене значения должны обнулиться',
    async () => {
      componentRender(<EditablePofileCard id={'1'} />, options)

      expect(screen.getByTestId('editable-profile-card')).toBeInTheDocument()
      await userEvent.click(screen.getByTestId('editable-profile-card-header-edit-button'))

      await userEvent.clear(screen.getByTestId('profile-card-firstname'))
      await userEvent.clear(screen.getByTestId('profile-card-lastname'))

      await userEvent.type(screen.getByTestId('profile-card-firstname'), 'test')
      await userEvent.type(screen.getByTestId('profile-card-lastname'), 'test')

      expect(screen.getByTestId('profile-card-firstname')).toHaveValue('test')
      expect(screen.getByTestId('profile-card-lastname')).toHaveValue('test')

      await userEvent.click(screen.getByTestId('editable-profile-card-header-cancel-edit'))

      expect(screen.getByTestId('profile-card-firstname')).toHaveValue('admin')
      expect(screen.getByTestId('profile-card-lastname')).toHaveValue('admin')
    }
  )

  test(
    'Должна пометиться ошибка',
    async () => {
      componentRender(<EditablePofileCard id={'1'} />, options)

      expect(screen.getByTestId('editable-profile-card')).toBeInTheDocument()
      await userEvent.click(screen.getByTestId('editable-profile-card-header-edit-button'))

      await userEvent.clear(screen.getByTestId('profile-card-firstname'))

      await userEvent.click(screen.getByTestId('editable-profile-card-header-edit-save'))

      expect(screen.getByTestId('editable-profile-card-error-text')).toBeInTheDocument()
    }
  )

  test(
    'Если нет ошибок валидации, то на сервер должен уйти PUT запрос',
    async () => {
      const mockPutReq = jest.spyOn($api, 'put')

      componentRender(<EditablePofileCard id={'1'} />, options)

      expect(screen.getByTestId('editable-profile-card')).toBeInTheDocument()
      await userEvent.click(screen.getByTestId('editable-profile-card-header-edit-button'))

      await userEvent.type(screen.getByTestId('profile-card-firstname'), 'test')

      await userEvent.click(screen.getByTestId('editable-profile-card-header-edit-save'))

      expect(mockPutReq).toHaveBeenCalled()
    }
  )
})
