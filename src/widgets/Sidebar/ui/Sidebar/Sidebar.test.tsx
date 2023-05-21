import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
describe('Виджет компонент <Sidebar />', () => {
  test(
    'Рендер компонента',
    () => {
      componentRender(<Sidebar />)
      expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    }
  )

  test(
    'Тест на сворачивание сайдбара',
    () => {
      componentRender(<Sidebar />)
      const toggleBtn = screen.getByTestId('sidebar-toggle')
      fireEvent.click(toggleBtn)
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    }
  )
})
