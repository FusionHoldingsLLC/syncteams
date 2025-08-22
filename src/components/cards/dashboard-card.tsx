import { Box, Text } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface DashboardCardProps {
  title: string
  value: string | number
  icon?: ReactNode
  footerComponent?: ReactNode
  patchClassName?: string
}

export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  patchClassName,
  footerComponent,
  value,
  icon,
}) => {
  return (
    <Box className='dashboard-top-card app-border '>
      <Box className={`bg-brandblue3  h-[5px] w-full ${patchClassName}`} />
      <Box className='px-[15px] pb-[15px] w-full pt-[15px]'>
        <Box className='flex flex-col w-full gap-4'>
          <Box className='flex items-center gap-3 w-full'>
            <Box className=' size-5 secondary-bg flex items-center  rounded justify-center'>
              {icon}
            </Box>

            <Text className='dashboard-top-card-title'>{title}</Text>
          </Box>

          <Text className='dashboard-top-card-value'>{value}</Text>

          {footerComponent}
        </Box>
      </Box>
    </Box>
  )
}
