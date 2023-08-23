import React from 'react'
import { Theme } from '@/shared/const'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'

const defaultTheme = localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props
  const [
    theme,
    setTheme,
  ] = React.useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
