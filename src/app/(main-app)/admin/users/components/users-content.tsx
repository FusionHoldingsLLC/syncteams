'use client'

import { Box } from '@mantine/core'
import { DashboardHeader } from 'src/components/others/dashboard-header'
import { UsersTable } from './users-table'

const UsersContent = () => {
  return (
    <Box className='page-layout-wrapper'>
      <DashboardHeader title='Users' description='View and manage all users' />
      <UsersTable />
    </Box>
  )
}

export default UsersContent
