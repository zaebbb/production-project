import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render, type RenderResult } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line dev-proger-eslint-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { Theme } from '@/shared/const'
// eslint-disable-next-line dev-proger-eslint-plugin/layer-imports
import '@/app/styles/index.scss'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderProps {
  children: ReactNode
  options?: componentRenderOptions
}

export const TestProvider = (props: TestProviderProps) => {
  const {
    children,
    options = {},
  } = props

  const {
    initialState,
    asyncReducers,
    route = '/',
    theme = Theme.RED,
  } = options

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export const componentRender = (
  component: ReactNode,
  options: componentRenderOptions = {}
): RenderResult => render(
  <TestProvider options={options}>
    {component}
  </TestProvider>
)
