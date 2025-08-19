import { IconLogo } from '@/public/assets/svgs/icon-logo'
import { IconLogoText } from '@/public/assets/svgs/icon-logo-text'
import React from 'react'
import useDarkMode from 'src/hooks/logic/use-dark-mode'

interface Props {
  hideText?: boolean
}
export const CompanyLogo: React.FC<Props> = ({ hideText }) => {
  const { isDarkMode } = useDarkMode()
  if (hideText) return <IconLogo fill={isDarkMode ? '#DDDDDF' : 'black'} />
  return <IconLogoText fill={isDarkMode ? '#DDDDDF' : 'black'} />
}
