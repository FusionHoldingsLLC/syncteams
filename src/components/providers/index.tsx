'use client'

import { theme } from '@/lib/theme'
import { MantineProvider } from '@mantine/core'
import { PropsWithChildren } from 'react'
import NavigationProgressComp from '../others/navigation-progress'
import TanstackQueryProvider from './tanstack-query-provider'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <TanstackQueryProvider>
      <MantineProvider
        theme={{
          ...theme,
        }}
      >
        <NavigationProgressComp />
        {children}
      </MantineProvider>
    </TanstackQueryProvider>
  )
}

export default Providers
