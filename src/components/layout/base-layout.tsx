'use client'

import { Box, Container, ScrollArea } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import { PropsWithChildren } from 'react'
import { useUiStore } from 'src/store/ui.store'
import { NavItem } from 'src/types/general'
import { AppHeader } from '../others/app-header'
import { AppSideNav } from '../others/app-side-nav'

interface Props {
  navList?: NavItem[]
}

const BaseLayout = ({ children, navList }: PropsWithChildren<Props>) => {
  const { isNavCollapse } = useUiStore()

  return (
    <>
      <NavigationProgress color='#0098DA' />
      <Box className='flex h-screen gap-8'>
        <Box className='relative py-8 pl-8 hidden md:block'>
          <AppSideNav navList={navList} />
        </Box>
        <ScrollArea scrollbars='y' scrollbarSize={6} className='flex-1 base-layout-wrapper '>
          <AppHeader navList={navList} />
          <Box data-collapse={isNavCollapse}>
            <Container p={0} size={1900}>
              {children}
            </Container>
          </Box>
        </ScrollArea>
      </Box>
    </>
  )
}

export default BaseLayout
