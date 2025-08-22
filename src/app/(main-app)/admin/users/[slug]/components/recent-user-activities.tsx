import { Box, Flex, ScrollArea, Text } from '@mantine/core'
import { useMemo } from 'react'
import { SectionItem } from 'src/types/general'

export const RecentUserActivities = () => {
  const sectionList = useMemo(() => {
    return [
      { label: 'February 2, 2025 - 10:15am ', value: 'Created new content marketing campaign' },
      { label: 'February 2, 2025 - 10:15am ', value: 'Created new content marketing campaign' },
      { label: 'February 2, 2025 - 10:15am ', value: 'Created new content marketing campaign' },
      { label: 'February 2, 2025 - 10:15am ', value: 'Created new content marketing campaign' },
      { label: 'February 2, 2025 - 10:15am ', value: 'Created new content marketing campaign' },
      { label: 'February 2, 2025 - 10:15am ', value: 'Created new content marketing campaign' },
      { label: 'February 2, 2025 - 10:15am ', value: 'Created new content marketing campaign' },
    ]
  }, [])
  return (
    <Box className=' gap-2 flex flex-col  '>
      <Text className='text-card-header default-text !pl-9'>Recent Activities</Text>

      <ScrollArea scrollbarSize={4} scrollbars='y' className=' h-[235px] overflow-auto '>
        <Box className='px-3'>
          <Flex className='flex-col gap-[20px]  border-l-[0.5px] pl-7 border-app-border'>
            {sectionList.map((item, index) => {
              return <ActivityCard section={item} key={index} />
            })}
          </Flex>
        </Box>
      </ScrollArea>
    </Box>
  )
}

export const ActivityCard = ({ section }: { section: SectionItem }) => {
  return (
    <Flex className=' r-u-a-card'>
      <Box className='r-u-a-gradient-dot' />
      <Flex className=' flex-col gap-1 ' key={section.label}>
        <Text className='r-u-a-date'>{section.value}</Text>
        <Text className='r-u-a-title'>{section.label}</Text>
        <Text className='r-u-a-des'>{section.value}</Text>
      </Flex>
    </Flex>
  )
}
