'use client'
import { Box, Burger, Drawer, Flex, ScrollArea, Space } from '@mantine/core'

import { usePathname } from 'next/navigation' // Updated import for Next.js 13+
import React, { useState } from 'react'
import { NavItem } from 'src/types/general'
import { CompanyLogo } from './company-logo'
import CustomNavLink from './nav-link'
import UserCardDetail from './user-card-detail'

interface Props {
  navList?: NavItem[]
}
export const AppHeader: React.FC<Props> = ({ navList }) => {
  const [opened, setOpened] = useState(false)
  const onNavClose = () => {
    setOpened(!opened)
  }
  const pathname = usePathname() // Use `usePathname` instead of `useRouter` in Next.js 13+

  return (
    <>
      <Box className='fixed-top-nav primary-background'>
        <Flex className='justify-between  items-center'>
          <CompanyLogo />
          <Burger
            size={'sm'}
            opened={opened}
            onClick={() => {
              setOpened(!opened)
            }}
          />
        </Flex>
      </Box>

      <Drawer
        opened={opened}
        onClose={onNavClose}
        size='100%'
        classNames={{
          root: 'dark:bg-black bg-white',
          header: 'dark:bg-black bg-white',
          content: 'dark:bg-black bg-white',
          overlay: 'dark:bg-black bg-white',
          body: 'dark:bg-black bg-white',
        }}
        withCloseButton={false}
        hiddenFrom='md'
        zIndex={40}
      >
        <Space h={70} />
        <ScrollArea scrollbarSize={4} className='side-links ' h='calc(100vh - 80px)'>
          <Flex className='side-linksInner'>
            {navList?.map((item) => {
              const isActive = pathname.startsWith(item.route)
              return (
                <CustomNavLink
                  onPress={() => onNavClose()}
                  key={item.label}
                  link={item}
                  isActive={isActive}
                />
              )
            })}
          </Flex>
        </ScrollArea>
        <UserCardDetail />
      </Drawer>
    </>
  )
}
