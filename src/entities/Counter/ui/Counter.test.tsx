import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

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
    async () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 10,
          },
        },
      })

      await userEvent.click(screen.getByTestId('increment'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    }
  )

  test(
    'Уменьшение счетчика на 3',
    async () => {
      componentRender(<Counter />, {
        initialState: {
          counter: {
            value: 10,
          },
        },
      })

      await userEvent.click(screen.getByTestId('decrement'))
      await userEvent.click(screen.getByTestId('decrement'))
      await userEvent.click(screen.getByTestId('decrement'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('7')
    }
  )
})
