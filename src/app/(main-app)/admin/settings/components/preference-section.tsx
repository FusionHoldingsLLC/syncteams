import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { Box, Flex, Select, Text } from '@mantine/core'
import { useMemo } from 'react'

export const PreferenceSection = () => {
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
  return (
    <Box className='self-stretch p-8   rounded-xl   app-border flex  flex-col justify-start items-start gap-8'>
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
                <Box className='flex-1 h-44 px-6 py-4 bg-white rounded-lg shadow-[0px_0px_5px_0px_rgba(0,152,218,1.00)] outline outline-[1.50px] outline-offset-[-1.50px] outline-sky-500 inline-flex flex-col justify-start items-center gap-2'>
                  <Box className="self-stretch justify-start text-Black text-sm font-medium font-['Geist']">
                    {item.label}
                  </Box>
                  <Box className='self-stretch flex-1 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300/50 flex flex-col justify-center items-center gap-2.5'>
                    <Box className="justify-start text-black text-sm font-normal font-['Geist']">
                      {item.title}
                    </Box>
                  </Box>
                  <Box className="self-stretch justify-start text-greyed text-xs font-normal font-['Geist']">
                    {item.description}
                  </Box>
                </Box>
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
