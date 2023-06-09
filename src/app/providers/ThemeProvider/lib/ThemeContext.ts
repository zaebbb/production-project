import React from 'react'

export const enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  RED = 'app_red_theme'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
