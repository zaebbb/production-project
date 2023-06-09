import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'
import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'

describe('Тест <Counter />', () => {
  test(
    'Рендер компонента',
    () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 10,
          },
        },
      })

      expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    }
  )

  test(
    'Увеличение счетчика',
    () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 10,
          },
        },
      })

      userEvent.click(screen.getByTestId('increment'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    }
  )

  test(
    'Уменьшение счетчика на 3',
    () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 10,
          },
        },
      })

      userEvent.click(screen.getByTestId('decrement'))
      userEvent.click(screen.getByTestId('decrement'))
      userEvent.click(screen.getByTestId('decrement'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('7')
    }
  )
})
