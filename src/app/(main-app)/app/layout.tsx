'use client' // This must be the first line in the file

import { routes } from '@/lib/routes'
import { IconSettings } from '@/public/assets/svgs/nav/icon-setting'
import { Flex } from '@mantine/core'
import { PropsWithChildren } from 'react'
import BaseLayout from 'src/components/layout/base-layout'
import { NavItem } from 'src/types/general'

const navLinks: NavItem[] = [
  {
    label: 'Setting',
    icon: (isActive) => <IconSettings data-active={isActive} className=' side-nav-links-icon ' />,
    route: routes.app.settings.path,
  },
]

const DeveloperLayout = ({ children }: PropsWithChildren) => {
  return (
    <BaseLayout navList={navLinks}>
      <Flex>{children}</Flex>
    </BaseLayout>
  )
}

export default DeveloperLayout
