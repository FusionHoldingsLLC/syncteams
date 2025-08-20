'use client'

import { Box } from '@mantine/core'
import { DashboardHeader } from 'src/components/others/dashboard-header'
import { routes } from 'src/lib/routes'
import { DetailsHeader } from './details-header'

const UsersDetailsContent = () => {
  return (
    <Box className='page-layout-wrapper'>
      <DashboardHeader
        prevRoute={routes.app.admin.users}
        title='Users'
        description='View and manage all users'
      />

      <DetailsHeader />
    </Box>
  )
}

export default UsersDetailsContent
