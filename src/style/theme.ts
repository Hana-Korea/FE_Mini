import { createTheme } from '@mui/material'
import { Theme as MaterialUITheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  export interface Theme {
    app: {
      palette: typeof palette
      typography: typeof typography
      size: typeof size
    }
  }
  export interface ThemeOptions {
    app?: {
      palette?: typeof palette
      typography?: typeof typography
      size?: typeof size
    }
  }
}

declare module '@emotion/react' {
  export interface Theme extends MaterialUITheme {}
}

const palette = {
  green1: '#069C31',
  green2: '#E3FFEA',
  green3: '#ECF2F3',
  gray1: '#AEAEAE',
  gray2: '#F0F0F0',
  yellow: '#FEF9E4',
  black: '#222222',
  white: '#FAFAFA',
  orange: '#E2532D',
}

const typography = {
  fontFamily: 'Pretendard',
}

const size = {
  header: {
    height: '80px',
  },
  nav: {
    width: '280px',
  },
  font: {
    small: '14px',
    base: '18px',
    medium: '24px',
    large: '36px',
    title: '48px',
  },
}

export const theme = createTheme({
  app: {
    palette,
    typography,
    size,
  },
})