import { Box } from '@mantine/core'
import { PropsWithChildren } from 'react'
import NavigationProgressComp from 'src/components/others/navigation-progress'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <NavigationProgressComp />
      {children}
    </Box>
  )
}

export default DashboardLayout
