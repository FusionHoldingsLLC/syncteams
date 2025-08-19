'use client'
import { Box, Text, UnstyledButton } from '@mantine/core'
import { useRouter } from 'nextjs-toploader/app'
import React from 'react'
import { useUiStore } from 'src/store/ui.store'
import { NavItem } from 'src/types/general'

interface Props {
  link: NavItem
  isActive: boolean
  onPress?: () => void
}

const CustomNavLink: React.FC<Props> = ({ link, onPress, isActive }) => {
  const router = useRouter()
  const { isNavCollapse } = useUiStore()

  return (
    <UnstyledButton
      onClick={() => {
        onPress?.()
        router.push(link.route)
      }}
      className='side-nav-links-btn'
      data-active={isActive}
      data-collapse={isNavCollapse}
      key={`${link.label}-${link.route}`}
    >
      <Box>{link?.icon(isActive)}</Box>

      <Text data-collapse={isNavCollapse} className='side-nav-links-text'>
        {link.label}
      </Text>
    </UnstyledButton>
  )
}

export default CustomNavLink
