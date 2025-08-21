'use client'

import { theme } from '@/lib/theme'
import { ApolloProvider } from '@apollo/client'
import { MantineProvider } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { client } from 'src/lib/apollo-client'
import NavigationProgressComp from '../others/navigation-progress'
import TanstackQueryProvider from './tanstack-query-provider'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <TanstackQueryProvider>
      <ApolloProvider client={client}>
        <MantineProvider
          theme={{
            ...theme,
          }}
        >
          <NavigationProgressComp />
          {children}
        </MantineProvider>
      </ApolloProvider>
    </TanstackQueryProvider>
  )
}

export default Providers
