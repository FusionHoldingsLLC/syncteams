'use client'

import { IconWayPoint } from '@/public/assets/svgs/icon-way-point'
import { Box } from '@mantine/core'
import { DashboardCard } from 'src/components/cards/dashboard-card'
import { DashboardHeader } from 'src/components/others/dashboard-header'
import { DashboardAnalytics } from './dashboard-analytics'
import { DashboardInsight } from './dashboard-insight'
import { DashboardTable } from './dashboard-table'
import { RecentActivities } from './recent-activities'
import { SystemHealth } from './system-health'
import { UserChart } from './user-chart'

const DashboardContent = () => {
  return (
    <Box className='page-layout-wrapper'>
      <DashboardHeader
        title='Admin Dashboard'
        description='Monitor and manage users and overall app performance'
      />
      <Box className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8'>
        <DashboardCard
          title='Total Users'
          icon={<IconWayPoint className='stroke-primary dark:stroke-white' />}
          value={'5,876'}
        />
        <DashboardCard
          icon={<IconWayPoint className='stroke-primary dark:stroke-white' />}
          title='Total Users'
          value={'5,876'}
        />
        <DashboardCard
          icon={<IconWayPoint className='stroke-primary dark:stroke-white' />}
          title='Total Users'
          value={'5,876'}
        />
        <DashboardCard
          icon={<IconWayPoint className='stroke-primary dark:stroke-white' />}
          title='Total Users'
          value={'5,876'}
        />
      </Box>

      <Box className='gap-3 flex-1 min-h-[30rem] grid-cols-1 grid lg:grid-cols-[1fr_300px] w-full'>
        <Box className='flex gap-3 flex-col'>
          <UserChart />
          <DashboardTable />
          <DashboardInsight />
        </Box>
        <Box className='flex flex-col gap-3'>
          <DashboardAnalytics />
          <SystemHealth />
          <RecentActivities />
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardContent
