'use client'
import { IconCollapse } from '@/public/assets/svgs/icon-collapse'
import { ActionIcon, Box, Flex, ScrollArea, Transition } from '@mantine/core'
import { usePathname } from 'next/navigation' // Updated import for Next.js 13+
import React, { useCallback } from 'react'
import { useUiStore } from 'src/store/ui.store'
import { NavItem } from 'src/types/general'
import { CompanyLogo } from './company-logo'
import CustomNavLink from './nav-link'
import UserCardDetail from './user-card-detail'

// Define the type for mockdata

interface Props {
  navList?: NavItem[]
}

export const AppSideNav: React.FC<Props> = ({ navList }) => {
  const pathname = usePathname()
  const { setIsNavCollapse, isNavCollapse } = useUiStore()

  const links = useCallback(() => {
    return navList?.map((item) => {
      const isActive = pathname.startsWith(item.route)
      return <CustomNavLink key={item.label} link={item} isActive={isActive} />
    })
  }, [pathname])

  return (
    <>
      <nav
        onMouseEnter={() => {
          if (isNavCollapse) {
            setIsNavCollapse(false)
          }
        }}
        data-collapse={isNavCollapse}
        className='side-navbar  app-border side-nav-collapse secondary-bg '
      >
        <Box
          data-collapse={isNavCollapse}
          className='side-header  app-border border-y-0 relative !border-x-0 !border-t-0'
        >
          <Transition
            mounted={!isNavCollapse}
            transition='fade'
            duration={400}
            timingFunction='ease'
          >
            {(styles) => (
              <Box style={styles} className='collapse-btn'>
                <ActionIcon
                  size={24}
                  variant='transparent'
                  onClick={() => {
                    setIsNavCollapse(!isNavCollapse)
                  }}
                >
                  <IconCollapse className='stroke-white dark:stroke-black' />
                </ActionIcon>
              </Box>
            )}
          </Transition>
          <CompanyLogo hideText={isNavCollapse} />
        </Box>

        <ScrollArea
          scrollbars={'y'}
          scrollHideDelay={300}
          scrollbarSize={2}
          className='side-links custom-scrollbar p-2 gap-4'
        >
          <Flex className='flex-col'>{links()}</Flex>
        </ScrollArea>
        <UserCardDetail />
      </nav>
    </>
  )
}
