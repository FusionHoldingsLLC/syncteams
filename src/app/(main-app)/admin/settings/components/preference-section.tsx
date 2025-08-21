import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { Box, Flex, Image, Select, Text, UnstyledButton } from '@mantine/core'
import { useMemo } from 'react'
import useDarkMode from 'src/hooks/logic/use-dark-mode'
import { useUiStore } from 'src/store/ui.store'

export const PreferenceSection = () => {
  const { isDarkMode } = useUiStore()
  const { setDarkClass } = useDarkMode()
  const sectionList = useMemo(() => {
    return [
      {
        label: 'Sidebar Style',
        defaultValue: '',
        list: [
          { label: 'Default Width', value: '' },
          { label: '200px', value: '200px' },
          { label: '100px', value: '100px' },
          { label: '50px', value: '50px' },
        ],
      },
      {
        label: 'Font Size',
        defaultValue: '',
        list: [
          { label: 'Medium (14px)', value: '' },
          { label: '200px', value: '200px' },
          { label: '100px', value: '100px' },
          { label: '50px', value: '50px' },
        ],
      },
      {
        label: 'Language',
        defaultValue: 'English',
        list: [
          { label: 'English', value: 'English' },
          { label: 'French', value: 'french' },
        ],
      },
    ]
  }, [])
  const themeList = useMemo(() => {
    return [
      {
        label: 'Light Mode',
        description: 'Perfect for daytime work',
        title: '☀️ Light & Clean',
        value: 'light',
      },
      {
        label: 'Dark Mode',
        description: 'Easy on the eyes',
        title: '🌙 Dark & Elegant',
        value: 'dark',
      },
      {
        label: 'Auto Mode',
        description: 'Follows system preference',
        title: 'System Settings',
        value: 'auto',
      },
    ]
  }, [])

  const getMode = useMemo(() => {
    if (isDarkMode === null) return 'auto'
    if (isDarkMode) return 'dark'
    return 'light'
  }, [isDarkMode])

  const handleTheme = (val: string) => {
    if (val === 'light') {
      setDarkClass(false)
    }
    if (val === 'dark') {
      setDarkClass(true)
    }
  }
  return (
    <Box className='app-card-border'>
      <Flex className=' flex-col justify-start items-start gap-1'>
        <Text className='s-settings-title'>Preference</Text>
        <Text className='s-settings-des'>Customize your workspace appearance and experience</Text>
      </Flex>
      <Box className='self-stretch flex flex-col justify-start items-start gap-4'>
        <Box className='self-stretch flex flex-col justify-start items-start gap-4'>
          <Text className='p-theme-text'>Theme & Appearance</Text>
          <Box className='grid grid-cols-1   lg:grid-cols-2 xl:grid-cols-3 w-full gap-4'>
            {themeList.map((item) => {
              return (
                <UnstyledButton
                  key={item.value}
                  data-active={item.value === getMode}
                  onClick={() => {
                    handleTheme(item.value)
                  }}
                  className=' app-border theme-item-card'
                >
                  <Text className='theme-card-label'>{item.label}</Text>
                  <Box className='self-stretch overflow-hidden app-border flex-1  rounded-lg   flex flex-col justify-center items-center gap-2.5'>
                    {item.value === 'auto' ? (
                      <Image
                        className=' bg-center '
                        src={'/assets/images/theme-auto.svg'}
                        alt='Onboarding graphic'
                      />
                    ) : (
                      <Text className='theme-card-title'>{item.title}</Text>
                    )}
                  </Box>

                  <Box className='theme-card-des'>{item.description}</Box>
                </UnstyledButton>
              )
            })}
          </Box>
        </Box>
        <Box className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4'>
          {sectionList.map((item) => {
            return (
              <Select
                key={item.label}
                defaultValue={item.defaultValue}
                className='w-full'
                rightSection={<IconArrowDown className='stroke-black dark:stroke-white' />}
                label={item.label}
                data={item.list}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
