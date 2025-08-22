'use client'

import { IconArrowDown } from '@/public/assets/svgs/icon-down'
import { IconWayPoint } from '@/public/assets/svgs/icon-way-point'
import { Box, Flex, Text } from '@mantine/core'
import { DashboardCard } from 'src/components/cards/dashboard-card'
import { DashboardHeader } from 'src/components/others/dashboard-header'
import { routes } from 'src/lib/routes'
import { DetailsHeader } from './details-header'

const dashboardCards = [
  {
    title: 'Total Users',
    value: '5,876',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
  {
    title: 'New Users',
    value: '5,876',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
  {
    title: 'Active Agents',
    value: '5,440',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
  {
    title: 'Workflows',
    value: '33',
    icon: <IconWayPoint className='stroke-primary dark:stroke-white' />,
  },
]

const UsersDetailsContent = () => {
  return (
    <Box className='page-layout-wrapper'>
      <DashboardHeader
        prevRoute={routes.app.admin.users}
        title='Users'
        description='View and manage all users'
      />
      <DetailsHeader />

      <Box className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8'>
        {dashboardCards.map((card, index) => (
          <DashboardCard
            patchClassName='bg-primary'
            footerComponent={<PerCard />}
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </Box>
    </Box>
  )
}

export default UsersDetailsContent

const PerCard = () => {
  return (
    <Flex className='self-stretch inline-flex justify-between items-center'>
      <Text className='dash-text-this'>This week</Text>
      <Box className='size- px-2 py-[3px] bg-red-400/10 rounded-full border-gray-200 flex justify-start items-center gap-2.5'>
        <Box className='w-12 flex justify-center items-center gap-1'>
          <IconArrowDown className='stroke-black' />
          <Box className="justify-start text-Nred text-[10px] font-semibold font-['Geist']">
            -8%
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
