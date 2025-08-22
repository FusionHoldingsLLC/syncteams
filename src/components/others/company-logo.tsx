import { IconLogo } from '@/public/assets/svgs/icon-logo'
import { IconLogoText } from '@/public/assets/svgs/icon-logo-text'
import React from 'react'
import useDarkMode from 'src/hooks/logic/use-dark-mode'

interface Props {
  hideText?: boolean
  className?: string
}
export const CompanyLogo: React.FC<Props> = ({ hideText, className }) => {
  const { isDarkMode } = useDarkMode()
  if (hideText) return <IconLogo fill={isDarkMode ? '#DDDDDF' : 'black'} />
  return <IconLogoText className={className} fill={isDarkMode ? '#DDDDDF' : 'black'} />
}
