import { createTheme } from '@mantine/core'

export function isiPhone() {
  return typeof window !== 'undefined' && /iPhone|iPod/.test(navigator.userAgent)
}

export const theme = createTheme({
  focusClassName: 'focus',
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      'black',
      '#1A1B1E', // This is the default dark mode background (--mantine-color-dark-7)
      '#141517',
      '#101113',
    ],
    brand: [
      '#0098DA',
      '#0098DA',
      '#0098DA',
      '#0098DA',
      '#0098DA',
      '#0098DA',
      '#0098DA',
      '#0098DA',
      '#0098DA',
      '#0098DA',
    ],
  },

  // fontSizes: fontSize,
  primaryColor: 'brand',

  components: {
    Button: {
      classNames: {
        root: 'mantine-btn',
      },
    },
    ScrollArea: {
      classNames: {
        scrollbar: 'scrollbar',
        corner: 'corner',
      },
    },
    TextInput: {
      classNames: {
        root: 'mantine-input',
        input: 'mantine-TextInput-input',
      },
    },
  },
})
