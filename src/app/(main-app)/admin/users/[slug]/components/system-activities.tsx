import { IconAlertCircle } from '@/public/assets/svgs/icon-alert-circle'
import { IconCheck } from '@/public/assets/svgs/icon-check'
import { Box, Flex, ScrollArea, Text } from '@mantine/core'
import { useMemo } from 'react'
import { ActivityCard } from 'src/components/cards/activity-card'

export const SystemActivities = () => {
  const sectionList = useMemo(() => {
    return [
      { label: 'High gpt-4o failure ', value: '2 hours ago', icon: <IconAlertCircle /> },
      { label: 'API limit increased', value: '1 hour ago', icon: <IconCheck /> },
      { label: 'Error alert resolved', value: '2 hours ago', icon: <IconAlertCircle /> },
      { label: 'Error alert resolved', value: '2 hours ago', icon: <IconAlertCircle /> },
      { label: 'Error alert resolved', value: '2 hours ago', icon: <IconAlertCircle /> },
      { label: 'Error alert resolved', value: '2 hours ago', icon: <IconAlertCircle /> },
      { label: 'Error alert resolved', value: '2 hours ago', icon: <IconAlertCircle /> },
      { label: 'Error alert resolved', value: '2 hours ago', icon: <IconAlertCircle /> },
    ]
  }, [])
  return (
    <Box className='app-border gap-2 flex flex-col py-[24px] px-[20px] rounded-lg'>
      <Text className='text-card-header default-text'>System Activity</Text>

      <ScrollArea scrollbarSize={3} className=' h-[235px] overflow-y-scroll'>
        <Flex className='flex-col gap-1.5 '>
          {sectionList.map((item, index) => {
            return <ActivityCard section={item} key={index} />
          })}
        </Flex>
      </ScrollArea>
    </Box>
  )
}
