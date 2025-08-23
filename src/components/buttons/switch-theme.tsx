import { Button } from '@mantine/core'
import useDarkMode from 'src/hooks/logic/use-dark-mode'

export const SwitchTheme = () => {
  const { isDarkMode, changeMode } = useDarkMode()
  return <Button onClick={changeMode}>Switch to {isDarkMode ? 'light' : 'dark'} mode</Button>
}
