'use client'

import { Box } from '@mantine/core'
import { DashboardHeader } from 'src/components/others/dashboard-header'

const UsersDetailsContent = () => {
  return (
    <Box className='page-layout-wrapper'>
      <DashboardHeader title='Users' description='View and manage all users' />
    </Box>
  )
}

export default UsersDetailsContent
