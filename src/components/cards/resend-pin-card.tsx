'use client'

import { IconRefresh } from '@/public/assets/svgs/icon-refresh'
import { Button, Flex, Text } from '@mantine/core'
import { useEffect, useState } from 'react'

interface ResendCountdownProps {
  initialTime?: number // Time in seconds
  onResend?: () => void
  className?: string
  isResending?: boolean
}

export const ResendCountdown = ({
  initialTime = 60,
  onResend,
  isResending = false,
  className,
}: ResendCountdownProps) => {
  const [countdown, setCountdown] = useState(initialTime)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1)
      }, 1000)
    } else if (countdown === 0) {
      setIsActive(false)
      if (interval) clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, countdown])

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleResend = () => {
    if (onResend) onResend()
    setCountdown(initialTime)
    setIsActive(true)
  }

  return (
    <Button
      variant='transparent'
      className={`otp-e-resend-btn ${isActive ? '' : 'group'}`}
      disabled={isActive}
      onClick={() => handleResend()}
    >
      <Flex className='items-center gap-2 justify-center'>
        <IconRefresh />
        <Text className='otp-e-resend group-hover:!underline' data-active={!isActive}>
          Resend email {isActive ? `in ${formatTime(countdown)}` : ''}
        </Text>
      </Flex>
    </Button>
  )
}
