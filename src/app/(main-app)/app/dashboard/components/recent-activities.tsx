import { IconAlertCircle } from '@/public/assets/svgs/icon-alert-circle'
import { IconCheck } from '@/public/assets/svgs/icon-check'
import { IconRecentTime } from '@/public/assets/svgs/icon-recent-time'
import { Box, Flex, ScrollArea, Text } from '@mantine/core'
import { useMemo } from 'react'
import { ArrowBtn } from 'src/components/buttons/arrow-btn'
import { ActivityCard } from 'src/components/cards/activity-card'

export const RecentActivities = () => {
  const sectionList = useMemo(() => {
    return [
      { label: 'High gpt-4o failure ', value: '2 hours ago', icon: <IconAlertCircle /> },
      { label: 'API limit increased', value: '1 hour ago', icon: <IconCheck /> },
      { label: 'Error alert resolved', value: '2 hours ago', icon: <IconAlertCircle /> },
    ]
  }, [])
  return (
    <Box className='app-border gap-2 flex flex-col p-4 rounded-lg'>
      <Flex className='items-center  justify-between gap-4 flex-wrap py-2 app-border !border-t-0 !border-x-0'>
        <Flex className='items-center gap-2'>
          <Box className='secondary-bg-two grid place-items-center rounded-[4px] size-[25px]'>
            <IconRecentTime />
          </Box>
          <Text className='dashboard-card-header-text'>Recent Activities</Text>
        </Flex>
        <ArrowBtn title='See all' />
      </Flex>

      <ScrollArea scrollbarSize={5} className='h-[220px] overflow-y-scroll'>
        <Flex className='flex-col gap-1.5 '>
          {sectionList.map((item, index) => {
            return <ActivityCard section={item} key={index} />
          })}
        </Flex>
      </ScrollArea>
    </Box>
  )
}
