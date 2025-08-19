import { IconArrowRight } from '@/public/assets/svgs/icon-arrow-right'
import { Button } from '@mantine/core'
import React from 'react'

interface Props {
  title: string
  onClick?: () => void
  className?: string
}

export const ArrowBtn: React.FC<Props> = ({ title, className, onClick }) => {
  return (
    <Button
      rightSection={<IconArrowRight />}
      variant='subtle'
      onClick={onClick}
      className={`arrow-btn  !px-1 !py-0 flex items-center !gap-[1px] ${className}`}
    >
      {title}
    </Button>
  )
}
