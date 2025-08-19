import { useMantineColorScheme } from '@mantine/core'
import { useEffect } from 'react'
import { useUiStore } from 'src/store/ui.store'

const useDarkMode = () => {
  const { setColorScheme } = useMantineColorScheme()
  const { isDarkMode, setIsDarkMode } = useUiStore()

  const setDarkClass = (enabled: boolean) => {
    if (enabled) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setIsDarkMode(enabled)
    setColorScheme(enabled ? 'dark' : 'light')
  }

  const changeMode = () => {
    const newMode = !isDarkMode
    setDarkClass(newMode)
    setIsDarkMode(newMode)
  }

  useEffect(() => {
    setDarkClass(isDarkMode)
  }, [isDarkMode])

  return { isDarkMode, changeMode }
}

export default useDarkMode
