import { IconHeart } from '@/public/assets/svgs/icon-heart'
import { Box, Flex, Slider, Text } from '@mantine/core'
import { useMemo } from 'react'
import { ArrowBtn } from 'src/components/buttons/arrow-btn'

export const SystemHealth = () => {
  const sectionList = useMemo(() => {
    return [
      { label: 'CPU Usage', value: 50, color: '#D97757' },
      { label: 'Memory Usage', value: 20, color: '#059669' },
      { label: 'Storage', value: 90, color: '#FF0000' },
    ]
  }, [])
  return (
    <Box className='app-border rounded-lg'>
      <Flex className='items-center  px-4 justify-between gap-4 flex-wrap py-2 app-border !border-t-0 !border-x-0'>
        <Flex className='items-center gap-2'>
          <Box className='secondary-bg-two grid place-items-center rounded-[4px] size-[25px]'>
            <IconHeart />
          </Box>
          <Text className='dashboard-card-header-text'>System health</Text>
        </Flex>
        <ArrowBtn title='See all' />
      </Flex>

      <Flex className='p-4 flex-col gap-1.5'>
        {sectionList.map((item) => {
          return (
            <Flex
              className='items-center flex-wrap  rounded-[6px] bg-[#F6F6F6] dark:bg-[#F6F6F6]/10 gap-1 p-2'
              key={item.label}
            >
              <Text className='system-health-text'>{item.label}</Text>
              <Slider
                className='flex-1'
                styles={{
                  thumb: {
                    heigh: '13px',
                    width: '13px',
                    borderWidth: '1px',
                    borderRadius: '13px',
                  },
                }}
                size={5}
                thumbSize={13}
                color={item.color}
                value={item.value}
              />
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}
