import { Box, Text } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface DashboardCardProps {
  title: string
  value: string | number
  icon?: ReactNode
  accentColor?: string // customizable top bar
}

export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  accentColor = '#91d8f7',
}) => {
  return (
    <Box className='dashboard-top-card app-border '>
      <Box className='flex flex-col w-full gap-4'>
        <Box className='flex items-center gap-3 w-full'>
          <Box className=' size-5 secondary-bg flex items-center  rounded justify-center'>
            {icon}
          </Box>

          <Text className='dashboard-top-card-title'>{title}</Text>
        </Box>

        <Text className='dashboard-top-card-value'>{value}</Text>
      </Box>
    </Box>
  )
}
