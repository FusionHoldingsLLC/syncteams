import { Box, Flex, Text } from '@mantine/core'
import React from 'react'
import { SectionItem } from 'src/types/general'

interface Props {
  section: SectionItem
}

export const ActivityCard: React.FC<Props> = ({ section }) => {
  return (
    <Flex className='items-center gap-1'>
      <Box>{section.icon}</Box>
      <Flex className=' flex-col gap-1 p-2' key={section.label}>
        <Text className='!text-xs !font-bold flex-1 default-gray47-text'>{section.label}</Text>
        <Text className='!text-xs !text-[#6B7280] !font-bold flex-1'>{section.value}</Text>
      </Flex>
    </Flex>
  )
}
